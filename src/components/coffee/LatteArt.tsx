import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Simple animated latte surface using texture and displacement
const LatteSurface = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const rippleRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);

  // Create a procedural texture for latte art
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Background - coffee color
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, '#6B4E3D');
    gradient.addColorStop(1, '#4A3428');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Draw latte art patterns (rosetta style)
    ctx.strokeStyle = '#E8D5C4';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.8;
    
    // Draw flowing lines
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      const offset = (i / 8) * Math.PI * 2;
      for (let t = 0; t < 1; t += 0.01) {
        const angle = t * Math.PI * 3 + offset;
        const radius = 100 + Math.sin(t * Math.PI * 4) * 40;
        const x = 256 + Math.cos(angle) * radius * t;
        const y = 256 + Math.sin(angle) * radius * t;
        if (t === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
    
    // Add milk foam spots
    ctx.fillStyle = '#F5F1EB';
    ctx.globalAlpha = 0.6;
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 80 + Math.random() * 100;
      const x = 256 + Math.cos(angle) * radius;
      const y = 256 + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.arc(x, y, 5 + Math.random() * 10, 0, Math.PI * 2);
      ctx.fill();
    }
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state, delta) => {
    clockRef.current = state.clock;
    
    if (meshRef.current && materialRef.current) {
      // Gentle rotation of the texture to simulate liquid movement
      texture.rotation += delta * 0.05;
      texture.center.set(0.5, 0.5);
      
      // Subtle scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      texture.repeat.set(scale, scale);
      
      // Animate ripples
      if (rippleRef.current && meshRef.current) {
        const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
        const positions = geometry.attributes.position;
        const originalPositions = (geometry as any).originalPositions || 
          new Float32Array(positions.array);
        
        // Store original positions if not already stored
        if (!(geometry as any).originalPositions) {
          (geometry as any).originalPositions = new Float32Array(positions.array);
        }
        
        const elapsed = state.clock.elapsedTime - rippleRef.current.time;
        const rippleStrength = Math.max(0, 1 - elapsed * 2); // Fade out over 0.5 seconds
        
        for (let i = 0; i < positions.count; i++) {
          const x = originalPositions[i * 3];
          const y = originalPositions[i * 3 + 1];
          const z = originalPositions[i * 3 + 2];
          
          // Convert to UV space (normalized -1 to 1)
          const u = (x + 1.4) / 2.8;
          const v = (y + 1.4) / 2.8;
          
          const dx = u - rippleRef.current.x;
          const dy = v - rippleRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 0.3 && rippleStrength > 0) {
            const wave = Math.sin(elapsed * 15 - dist * 20) * 0.15 * rippleStrength;
            const falloff = 1 - (dist / 0.3);
            positions.setZ(i, z + wave * falloff);
          } else {
            // Smoothly return to original position
            const currentZ = positions.getZ(i);
            positions.setZ(i, currentZ * 0.9 + z * 0.1);
          }
        }
        positions.needsUpdate = true;
        
        // Remove ripple when it fades out
        if (rippleStrength <= 0) {
          rippleRef.current = null;
        }
      } else if (meshRef.current) {
        // Reset positions when no ripple
        const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
        const positions = geometry.attributes.position;
        if ((geometry as any).originalPositions) {
          for (let i = 0; i < positions.count; i++) {
            const z = (geometry as any).originalPositions[i * 3 + 2];
            const currentZ = positions.getZ(i);
            if (Math.abs(currentZ - z) > 0.001) {
              positions.setZ(i, currentZ * 0.95 + z * 0.05);
            } else {
              positions.setZ(i, z);
            }
          }
          positions.needsUpdate = true;
        }
      }
    }
  });

  const handlePointerMove = (e: any) => {
    if (e.uv && clockRef.current) {
      rippleRef.current = {
        x: e.uv.x,
        y: e.uv.y,
        time: clockRef.current.elapsedTime
      };
    }
  };

  const handlePointerLeave = () => {
    rippleRef.current = null;
  };

  return (
    <mesh 
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.01, 0]}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerMove}
    >
      <planeGeometry args={[2.8, 2.8, 64, 64]} />
      <meshStandardMaterial
        ref={materialRef}
        map={texture}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
};

// Floating steam particles
const SteamParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 50;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = Math.random() * 1.2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.random() * 2;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    return geometry;
  }, []);

  useFrame((_state, delta) => {
    if (particlesRef.current) {
      const positions = particles.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        let y = positions.getY(i);
        y += delta * 0.5;
        
        // Reset particle when it goes too high
        if (y > 3) {
          y = 0;
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * 1.2;
          positions.setX(i, Math.cos(angle) * radius);
          positions.setZ(i, Math.sin(angle) * radius);
        }
        
        positions.setY(i, y);
      }
      
      positions.needsUpdate = true;
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" {...particles} />
      <pointsMaterial
        size={0.15}
        color="#F5F1EB"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const Cup = () => {
  return (
    <group>
      {/* Cup body */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.3, 1.4, 64]} />
        <meshStandardMaterial 
          color="#F5F1EB" 
          roughness={0.3} 
          metalness={0.05}
        />
      </mesh>
      
      {/* Rim highlight */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.45, 1.55, 64]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>
      
      {/* Handle */}
      <mesh position={[1.7, -0.3, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.35, 0.09, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#F5F1EB" roughness={0.3} />
      </mesh>
    </group>
  );
};

interface LatteArtProps {
  className?: string;
}

export default function LatteArt({ className = '' }: LatteArtProps) {
  return (
    <motion.div
      className={`${className} relative`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas 
        camera={{ position: [0, 4, 0.5], fov: 40 }} 
        dpr={[1, 2]}
        shadows
        gl={{ antialias: true }}
        style={{ touchAction: 'none' }}
      >
        <color attach="background" args={['#F5F1EB']} />
        
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 8, 3]} 
          intensity={0.8} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 3, -2]} intensity={0.3} color="#D4A574" />
        
        <group position={[0, 0, 0]}>
          <LatteSurface />
          <Cup />
          <SteamParticles />
        </group>
      </Canvas>
      
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <p className="text-coffee-text/50 text-xs uppercase tracking-widest font-light">
          Hover to create ripples
        </p>
      </div>
    </motion.div>
  );
}
