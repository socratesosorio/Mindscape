import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene = ({ source }) => {
  const meshRef = useRef();
  const loader = new THREE.BufferGeometryLoader(); // Assuming your loader is BufferGeometryLoader

  const dataURL = `data:application/octet-stream;base64,${source}`;

  // Setting up scene, lights, camera manually in useEffect
  useEffect(() => {
    if (source) {
      loader.load(dataURL, (geometry) => {
        geometry.center();
        geometry.computeVertexNormals();

        // Update the mesh reference with the loaded geometry
        meshRef.current.geometry = geometry;
        meshRef.current.material = new THREE.PointsMaterial({
          size: 0.01,
          vertexColors: true,
        });
      });
    }
  }, [source, loader, dataURL]);

  return (
    <>
      {/* Ambient Light */}
      <ambientLight color={0x443333} position={[0, 0, 10]} intensity={1} />

      {/* Camera Setup (Perspective) */}
      <perspectiveCamera  fov={45} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} position={[0, 0, 0.5]} />

      {/* Mesh for the loaded model */}
      <points ref={meshRef}>
        {/* Placeholder empty geometry that will be updated */}
        <bufferGeometry />
        <pointsMaterial size={0.01} vertexColors />
      </points>

      {/* OrbitControls for camera */}
      <OrbitControls />
    </>
  );
};

const App = ({ source }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '50vw', height: '50vh' }} // Adjust canvas size
    >
      <Scene source={source} />
    </Canvas>
  );
};

export default App;
