import React, { useState, useEffect } from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model(props: any) {
    const [path, setPath] = useState('');
    useEffect(() => {
        setPath(props.path);
    }, [props.path]);

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

    return (
        <div>
            <Canvas style={{ position: "absolute", inset: 0}}>
                <ModelB position-x={1} />
                <Environment preset="sunset" background />
                <OrbitControls />
            </Canvas>
            <button
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    padding: "10px",
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                onClick={() => {
                    window.location.href = '/'
                }}
            >
                Back
            </button>
        </div>
    );
}
