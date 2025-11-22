// Top-down coffee cup with intricate latte art
// Emulating modern coffee landing page aesthetic - clean, flat design

import { motion } from 'framer-motion';

interface CoffeeCupTopDownArtProps {
  className?: string;
}

export default function CoffeeCupTopDownArt({ className = '' }: CoffeeCupTopDownArtProps) {
  return (
    <motion.div
      className={`${className} flex items-center justify-center`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Coffee beans scattered around - subtle background texture */}
        <g opacity="0.4">
          <motion.ellipse
            cx="80"
            cy="120"
            rx="8"
            ry="5"
            fill="#5C4A3A"
            transform="rotate(-25 80 120)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.ellipse
            cx="320"
            cy="280"
            rx="8"
            ry="5"
            fill="#5C4A3A"
            transform="rotate(35 320 280)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.ellipse
            cx="100"
            cy="320"
            rx="7"
            ry="4"
            fill="#5C4A3A"
            transform="rotate(-15 100 320)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.ellipse
            cx="300"
            cy="100"
            rx="7"
            ry="4"
            fill="#5C4A3A"
            transform="rotate(45 300 100)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.ellipse
            cx="60"
            cy="250"
            rx="6"
            ry="4"
            fill="#5C4A3A"
            transform="rotate(-40 60 250)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.ellipse
            cx="340"
            cy="200"
            rx="6"
            ry="4"
            fill="#5C4A3A"
            transform="rotate(50 340 200)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </g>

        {/* Coffee cup - top down view */}
        <g transform="translate(200, 200)">
          {/* Cup outer rim - white */}
          <motion.circle
            cx="0"
            cy="0"
            r="85"
            fill="#FFFFFF"
            stroke="#E8D5C4"
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          />
          
          {/* Cup inner rim */}
          <motion.circle
            cx="0"
            cy="0"
            r="75"
            fill="#F5F1EB"
            stroke="#E8D5C4"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
          
          {/* Coffee surface - beige/cream color */}
          <motion.circle
            cx="0"
            cy="0"
            r="68"
            fill="#E8D5C4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          />
          
          {/* Intricate latte art - leaf/fern pattern */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Main stem/vein */}
            <motion.path
              d="M 0 -50 Q 0 -30 0 -10 Q 0 10 0 30 Q 0 50 0 60"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            
            {/* Left side leaves/branches */}
            <motion.path
              d="M 0 -40 Q -15 -35 -20 -25 Q -18 -15 -12 -10 Q -8 -5 -5 -3"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.path
              d="M 0 -30 Q -18 -25 -25 -15 Q -22 -5 -15 0 Q -10 3 -6 5"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            />
            <motion.path
              d="M 0 -20 Q -20 -15 -28 -5 Q -25 5 -18 10 Q -12 13 -8 15"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
            <motion.path
              d="M 0 -10 Q -22 -5 -30 5 Q -27 15 -20 20 Q -14 23 -10 25"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
            />
            <motion.path
              d="M 0 0 Q -20 5 -28 15 Q -25 25 -18 30 Q -12 33 -8 35"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
            <motion.path
              d="M 0 10 Q -18 15 -25 25 Q -22 35 -15 40 Q -10 43 -6 45"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
            />
            <motion.path
              d="M 0 20 Q -15 25 -20 35 Q -18 45 -12 50 Q -8 53 -5 55"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            />
            
            {/* Right side leaves/branches */}
            <motion.path
              d="M 0 -40 Q 15 -35 20 -25 Q 18 -15 12 -10 Q 8 -5 5 -3"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.path
              d="M 0 -30 Q 18 -25 25 -15 Q 22 -5 15 0 Q 10 3 6 5"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
            />
            <motion.path
              d="M 0 -20 Q 20 -15 28 -5 Q 25 5 18 10 Q 12 13 8 15"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
            <motion.path
              d="M 0 -10 Q 22 -5 30 5 Q 27 15 20 20 Q 14 23 10 25"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
            />
            <motion.path
              d="M 0 0 Q 20 5 28 15 Q 25 25 18 30 Q 12 33 8 35"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
            <motion.path
              d="M 0 10 Q 18 15 25 25 Q 22 35 15 40 Q 10 43 6 45"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
            />
            <motion.path
              d="M 0 20 Q 15 25 20 35 Q 18 45 12 50 Q 8 53 5 55"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            />
            
            {/* Additional smaller details for richness */}
            <motion.path
              d="M -5 -35 Q -8 -30 -10 -25"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.15 }}
            />
            <motion.path
              d="M 5 -35 Q 8 -30 10 -25"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.15 }}
            />
            <motion.path
              d="M -5 35 Q -8 30 -10 25"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            <motion.path
              d="M 5 35 Q 8 30 10 25"
              fill="none"
              stroke="#F5F1EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
          </motion.g>
          
          {/* Cup handle - top down view (elliptical) */}
          <motion.ellipse
            cx="90"
            cy="0"
            rx="18"
            ry="35"
            fill="none"
            stroke="#E8D5C4"
            strokeWidth="4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}

