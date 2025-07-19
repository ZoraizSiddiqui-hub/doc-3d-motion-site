import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Floating Medical Icon Component
function FloatingMedicalIcon({ position, color, rotationSpeed = 1 }: { 
  position: [number, number, number], 
  color: string,
  rotationSpeed?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.5, 0.2, 8, 16]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

// Rotating Medical Cross
function MedicalCross({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      groupRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 1.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <boxGeometry args={[0.8, 0.2, 0.1]} />
        <meshStandardMaterial color="#00bcd4" />
      </mesh>
      <mesh>
        <boxGeometry args={[0.2, 0.8, 0.1]} />
        <meshStandardMaterial color="#00bcd4" />
      </mesh>
    </group>
  );
}

// DNA Helix Animation
function DNAHelix({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.8;
    }
  });

  const helixPoints = [];
  for (let i = 0; i < 20; i++) {
    const y = (i - 10) * 0.1;
    const angle = i * 0.5;
    const x = Math.cos(angle) * 0.3;
    const z = Math.sin(angle) * 0.3;
    helixPoints.push([x, y, z]);
  }

  return (
    <group ref={groupRef} position={position}>
      {helixPoints.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial color={index % 2 === 0 ? "#0891b2" : "#06b6d4"} />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Scene Component
export function Medical3DScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        
        <FloatingMedicalIcon position={[-2, 1, 0]} color="#0891b2" rotationSpeed={0.8} />
        <FloatingMedicalIcon position={[2, -1, 0]} color="#06b6d4" rotationSpeed={1.2} />
        <MedicalCross position={[0, 0, 0]} />
        <DNAHelix position={[1.5, 0.5, -1]} />
        <FloatingMedicalIcon position={[-1.5, -0.5, -1]} color="#00bcd4" rotationSpeed={0.6} />
      </Canvas>
    </div>
  );
}

// Simpler 3D icon for hero section
export function HeroMedical3D() {
  return (
    <div className="w-32 h-32">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        
        <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
          <mesh>
            <torusGeometry args={[0.8, 0.3, 12, 20]} />
            <meshStandardMaterial color="#0891b2" transparent opacity={0.9} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}