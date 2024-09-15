import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// # import { VRButton } from 'three/addons/webxr/VRButton.js';

export default function App() {
  return (
    <Canvas style={{ position: "absolute", inset: 0  }} /* camera={{ position: [0, 0, 200], near: 0.1, far: 1000 }} */>
      <ModelB position-x={1} />
      <Environment preset="sunset" background />
      <OrbitControls />
    </Canvas>
  );

}


function ModelB(props: React.ComponentPropsWithoutRef<"object3D">) {
  const gltf = useLoader(
    GLTFLoader,
    "./models/brain_model2.glb"
    // (loader) => {
    //   // Register plugin to load all materials as red basic material
    //   loader.register((parser) => ({
    //     name: "customPlugin",
    //     async loadMaterial() {
    //       return new THREE.MeshBasicMaterial({ color: "red" });
    //     },
    //   }));
    // }
  );

  return <primitive {...props} object={gltf.scene} rotation={[Math.PI / 2, 0, Math.PI / 2]}/* scale={100}  position={[10, -70, 50]} rotation={[0, Math.PI / 2, 0]} *//>;
}
