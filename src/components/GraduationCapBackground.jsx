import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const GraduationCapModel = () => {
  const capRef = useRef();

  useFrame(() => {
    if (capRef.current) {
      capRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={capRef}>
      {/* Mortarboard (top) */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Headband (cylinder) */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 1, 32]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Tassel string */}
      <mesh position={[1.5, 0.95, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial color="#f4c542" />
      </mesh>

      {/* Tassel ball */}
      <mesh position={[1.5, 0.2, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#f4c542" />
      </mesh>
    </group>
  );
};

const GraduationCapBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={5}
            saturation={0}
            fade
            speed={1}
          />
          <GraduationCapModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GraduationCapBackground;
