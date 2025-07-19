import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const BookModel = ({ position, color = "#4F46E5" }) => {
  const meshRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        <Box args={[0.8, 1.2, 0.1]} position={[0, 0, 0]}>
          <meshStandardMaterial color={color} />
        </Box>
        <Box args={[0.75, 1.15, 0.05]} position={[0, 0, 0.08]}>
          <meshStandardMaterial color="#ffffff" />
        </Box>
      </group>
    </Float>
  );
};

const GlobeModel = ({ position }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.3}>
      <Sphere ref={useRef()} position={position} args={[0.5, 32, 32]}>
        <meshStandardMaterial 
          color="#10B981" 
          roughness={0.3}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const ChalkboardModel = ({ position }) => {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <group position={position}>
        <Box args={[2, 1.2, 0.1]}>
          <meshStandardMaterial color="#2D3748" />
        </Box>
        <Box args={[1.8, 1, 0.05]} position={[0, 0, 0.06]}>
          <meshStandardMaterial color="#1A202C" />
        </Box>
      </group>
    </Float>
  );
};

const PencilModel = ({ position, rotation = [0, 0, 0] }) => {
  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <group position={position} rotation={rotation}>
        {/* Pencil body */}
        <Box args={[0.05, 1.5, 0.05]}>
          <meshStandardMaterial color="#FFD700" />
        </Box>
        {/* Pencil tip */}
        <Box args={[0.03, 0.15, 0.03]} position={[0, 0.825, 0]}>
          <meshStandardMaterial color="#8B4513" />
        </Box>
        {/* Eraser */}
        <Box args={[0.06, 0.1, 0.06]} position={[0, -0.8, 0]}>
          <meshStandardMaterial color="#FF69B4" />
        </Box>
      </group>
    </Float>
  );
};

export const Education3DScene = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <BookModel position={[-2, 1, 0]} color="#4F46E5" />
        <BookModel position={[-1.5, 0.8, 0.3]} color="#7C3AED" />
        <BookModel position={[-2.2, 0.6, -0.2]} color="#EC4899" />
        
        <GlobeModel position={[2, 0, 0]} />
        <ChalkboardModel position={[0, -1, -1]} />
        
        <PencilModel position={[3, 2, 1]} rotation={[0.3, 0.5, 0.2]} />
        <PencilModel position={[-3, -1, 0.5]} rotation={[-0.2, -0.3, 0.4]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export const FloatingEducationIcon = ({ icon: Icon, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="p-4 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 hover:bg-primary/30 transition-all duration-300 group hover:scale-110">
        <Icon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
      </div>
    </motion.div>
  );
};

export const HeroEducation3D = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-80">
        <Education3DScene />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {children}
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};