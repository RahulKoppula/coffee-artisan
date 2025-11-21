import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

function CoffeeCup() {
  return (
    <group>
      {/* Cup */}
      <mesh rotation={[0, 0, 0]} position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.8, 0.7, 1.2, 32]} />
        <meshStandardMaterial color="#E8D5C4" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Coffee liquid */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.75, 0.65, 0.3, 32]} />
        <meshStandardMaterial color="#5C4A3A" roughness={0.8} />
      </mesh>
      
      {/* Handle */}
      <mesh position={[0.85, 0, 0]}>
        <torusGeometry args={[0.15, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#D4A574" roughness={0.4} />
      </mesh>
      
      {/* Steam particles */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[0, 1.2 + i * 0.3, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#F5F1EB" opacity={0.6} transparent />
        </mesh>
      ))}
    </group>
  );
}

interface Coffee3DProps {
  className?: string;
  autoRotate?: boolean;
}

export default function Coffee3D({ className = '', autoRotate = true }: Coffee3DProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#F4C2A1" />
        <CoffeeCup />
        <OrbitControls
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </motion.div>
  );
}

