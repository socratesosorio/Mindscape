import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Home></Home>
      {/* <Canvas style={{ position: "absolute", inset: 0  }}>
        <ModelB position-x={1} />
        <Environment preset="sunset" background />
        <OrbitControls />
      </Canvas> */}
    </div>
  );

}


function ModelB(props: React.ComponentPropsWithoutRef<"object3D">) {
  const gltf = useLoader(
    GLTFLoader,
    "./models/example.gltf"
    // (loader) => {
    //   // Register plugin to load all materials as red basic material
    //   loader.register((parser) => ({
    //     name: "customPlugin",
    //     async loadMaterial() {
    //       return new THREE.MeshBasicMaterial();
    //     },
    //   }));
    // }
  );

  return <primitive {...props} object={gltf.scene} />;
}
