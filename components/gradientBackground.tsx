'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the component is mounted in the client-side
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isClient) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (isClient) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isClient]);

  if (!isClient) {
    // Return null or a basic fallback until client-side rendering happens
    return null;
  }

	const xPosPercentage = (mousePosition.x / window.innerWidth) * 100;
  const yPosPercentage = (mousePosition.y / window.innerHeight) * 100;

  const gradient = `radial-gradient(circle at ${xPosPercentage}% ${yPosPercentage}%, #9c27b014, #050d21 30%)`;

  return (
    <motion.div
			initial={{ background: 'radial-gradient(circle, #9c27b014, #050d21 30%' }}
			animate={{ background: gradient }}
			transition={{ duration: 0 }}
			className="gradient-background opacity-80"
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				zIndex: -1
			}}
		/>
  );
};
