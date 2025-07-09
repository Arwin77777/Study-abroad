import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GlobeModel = () => {
  const globeRef = useRef();

  // Load Earth texture
  const texture = useLoader(
    THREE.TextureLoader,
    'https://i.imgur.com/kFoWvzw.jpg'  
  );

  // Rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={globeRef}>
      {/* Sphere with realistic Earth-like detail */}
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const GlobeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Lighting for the globe */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />

          {/* Starfield background */}
          <Stars
            radius={200}
            depth={50}
            count={10000}
            factor={7}
            saturation={0}
            fade
            speed={1}
          />

          {/* 3D Globe */}
          <GlobeModel />

          {/* Optional: Let user drag/zoom the globe */}
          {/* <OrbitControls enableZoom={false} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeBackground;
