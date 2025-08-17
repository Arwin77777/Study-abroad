import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import WorldMapTexture from '../assets/WorldMap.jpeg';

const GlobeModel = () => {
  const globeRef = useRef();
  const worldMapTexture = useTexture(WorldMapTexture);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Main Globe Sphere with World Map Texture */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial 
          map={worldMapTexture}
          color="#ffffff"
          transparent
          opacity={0.95}
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

const GlobeBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 5, 5]} intensity={2.0} />
          <pointLight position={[-5, -5, -5]} intensity={1.2} color="#60a5fa" />
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          <GlobeModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeBackground;
