import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// A single bubble component
function Bubble({ factor, speed, xFactor, yFactor, zFactor, size }) {
  const ref = useRef();
  const position = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = factor + state.clock.getElapsedTime() * speed;
    position.set(
      Math.cos(t) * 4 + xFactor,
      Math.sin(t) * 4 + yFactor,
      Math.sin(t * 1.5) * 4 + zFactor
    );
    ref.current.position.lerp(position, 0.1);
  });

  return (
    <Sphere ref={ref} args={[size, 32, 32]}>
      <meshPhysicalMaterial 
        color="#336b87" 
        transparent 
        opacity={0.2}
        roughness={0} 
        metalness={0.1}
        transmission={1}
        thickness={2}
        ior={1.7}
      />
    </Sphere>
  );
}

// The bubbles component that generates multiple bubbles
function Bubbles() {
    const count = 40;
    const bubbles = useMemo(() => Array.from({ length: count }, () => ({
        factor: Math.random() * Math.PI * 2,
        speed: 0.1 + Math.random() * 0.4,
        xFactor: -15 + Math.random() * 30,
        yFactor: -15 + Math.random() * 30,
        zFactor: -15 + Math.random() * 30,
        size: 0.5 + Math.random() * 1.5,
    })), []);

    return bubbles.map((bubble, i) => <Bubble key={i} {...bubble} />);
}

// The main background component
const FloatingBubblesBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={1} color="#336b87" />
        <Bubbles />
      </Canvas>
    </div>
  );
};

export default FloatingBubblesBackground; 