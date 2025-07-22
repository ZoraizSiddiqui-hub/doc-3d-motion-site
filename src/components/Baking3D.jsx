import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const CakeModel = ({ position, color = "#FFB6C1" }) => {
  const meshRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {/* Cake base */}
        <Cylinder args={[0.8, 0.8, 0.3, 32]} position={[0, -0.15, 0]}>
          <meshStandardMaterial color={color} />
        </Cylinder>
        {/* Cake middle layer */}
        <Cylinder args={[0.6, 0.6, 0.25, 32]} position={[0, 0.125, 0]}>
          <meshStandardMaterial color="#FFC0CB" />
        </Cylinder>
        {/* Cake top layer */}
        <Cylinder args={[0.4, 0.4, 0.2, 32]} position={[0, 0.35, 0]}>
          <meshStandardMaterial color="#FFE4E1" />
        </Cylinder>
        {/* Cherry on top */}
        <Sphere args={[0.05, 16, 16]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#DC143C" />
        </Sphere>
      </group>
    </Float>
  );
};

const CupcakeModel = ({ position }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.3}>
      <group position={position}>
        {/* Cupcake base */}
        <Cylinder args={[0.25, 0.35, 0.4, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8B4513" />
        </Cylinder>
        {/* Frosting */}
        <Torus args={[0.3, 0.15, 16, 32]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#FFB6C1" />
        </Torus>
        {/* Sprinkles */}
        <Box args={[0.02, 0.08, 0.02]} position={[0.1, 0.35, 0.1]} rotation={[0.5, 0, 0.3]}>
          <meshStandardMaterial color="#FF69B4" />
        </Box>
        <Box args={[0.02, 0.08, 0.02]} position={[-0.1, 0.4, 0.05]} rotation={[0.3, 0.5, 0.1]}>
          <meshStandardMaterial color="#32CD32" />
        </Box>
        <Box args={[0.02, 0.08, 0.02]} position={[0.05, 0.38, -0.1]} rotation={[0.1, 0.2, 0.6]}>
          <meshStandardMaterial color="#FFD700" />
        </Box>
      </group>
    </Float>
  );
};

const BreadModel = ({ position }) => {
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
      <group position={position}>
        <Box args={[1.2, 0.6, 0.4]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#DEB887" />
        </Box>
        {/* Bread crust detail */}
        <Box args={[1.15, 0.55, 0.35]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#F4A460" />
        </Box>
      </group>
    </Float>
  );
};

const DonutModel = ({ position, rotation = [0, 0, 0] }) => {
  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <group position={position} rotation={rotation}>
        {/* Donut base */}
        <Torus args={[0.4, 0.15, 16, 32]}>
          <meshStandardMaterial color="#DEB887" />
        </Torus>
        {/* Glaze */}
        <Torus args={[0.38, 0.12, 16, 32]} position={[0, 0.05, 0]}>
          <meshStandardMaterial color="#FFB6C1" />
        </Torus>
      </group>
    </Float>
  );
};

const CookieModel = ({ position }) => {
  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
      <group position={position}>
        <Cylinder args={[0.3, 0.3, 0.08, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#D2691E" />
        </Cylinder>
        {/* Chocolate chips */}
        <Sphere args={[0.03, 8, 8]} position={[0.1, 0, 0.05]}>
          <meshStandardMaterial color="#654321" />
        </Sphere>
        <Sphere args={[0.03, 8, 8]} position={[-0.08, 0, 0.05]}>
          <meshStandardMaterial color="#654321" />
        </Sphere>
        <Sphere args={[0.03, 8, 8]} position={[0.02, 0, 0.05]}>
          <meshStandardMaterial color="#654321" />
        </Sphere>
      </group>
    </Float>
  );
};

export const Baking3DScene = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <pointLight position={[0, 10, 0]} intensity={0.8} color="#FFE4E1" />
        
        <CakeModel position={[-2, 1, 0]} color="#FFB6C1" />
        <CupcakeModel position={[2, 0.5, 0]} />
        <BreadModel position={[0, -1, -1]} />
        
        <DonutModel position={[3, 2, 1]} rotation={[0.3, 0.5, 0.2]} />
        <DonutModel position={[-3, -1, 0.5]} rotation={[-0.2, -0.3, 0.4]} />
        <CookieModel position={[-1, 2, 1]} />
        <CookieModel position={[1.5, -1.5, 0.5]} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
};

export const FloatingBakingIcon = ({ icon: Icon, className = "", delay = 0 }) => {
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

export const HeroBaking3D = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-80">
        <Baking3DScene />
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