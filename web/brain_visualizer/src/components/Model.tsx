import React, { useState, useEffect } from 'react';
import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model(props: any) {
    const [path, setPath] = useState('');
    useEffect(() => {
        setPath(props.path);
    }, [props.path]);

    function ModelB(props: React.ComponentPropsWithoutRef<'object3D'>) {
        const gltf = useLoader(
            GLTFLoader,
            path
        );
        return <primitive {...props} object={gltf.scene} />;
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
