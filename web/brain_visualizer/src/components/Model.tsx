import React, { useState, useEffect } from 'react';
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import Visualization from './ModelPLY';

export default function Model(props: any) {
    const [path, setPath] = useState('./models/heatmap_tab20c_point_cloud.glb');
    
    // Array of pre-set GLB paths
    const presetPaths = [
        "./models/example.gltf",
        "./models/brain.glb",
        "./models/brain_model.glb",
        "./models/brain_model2.glb",
        "./models/brain_2.glb",
        "./models/pointcloud2.glb",
        "./models/brain3.glb",
        "./models/pointcloud3.glb",
        "./models/brain_heatmap.glb",
        "./models/heatmap_point_cloud.ply",
        "./models/heatmap_tab20c_point_cloud.glb",
      ];
    useEffect(() => {
        setPath(props.path || './models/heatmap_tab20c_point_cloud.glb'); // Set initial path, default to first item in presetPaths
    }, [props.path]);

    function ModelGLB(props: React.ComponentPropsWithoutRef<"object3D">) {
        const gltf = useLoader(GLTFLoader, path);
        
        gltf.scene.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Points).isPoints) {
                const points = child as THREE.Points;
                (points.material as THREE.PointsMaterial).size = 2;
                (points.material as THREE.PointsMaterial).sizeAttenuation = true;
            }
        });

        return <primitive {...props} object={gltf.scene} />;
    }

    // function ModelTumorGLB(props: React.ComponentPropsWithoutRef<"object3D">) {
    //     const gltf = useLoader(GLTFLoader, "./models/point_tumor.glb",);
        
    //     gltf.scene.traverse((child: THREE.Object3D) => {
    //         if ((child as THREE.Points).isPoints) {
    //             const points = child as THREE.Points;
    //             (points.material as THREE.PointsMaterial).size = 2;
    //             (points.material as THREE.PointsMaterial).sizeAttenuation = true;
    //         }
    //     });

    //     return <primitive {...props} object={gltf.scene} />;
    // }

    return (
        <div>
            <Canvas style={{ position: "absolute", inset: 0, background: "black" }} camera={{ position: [0, 2, 5], fov: 50 }}>
                <ModelGLB position-x={1} />
                {/* <ModelTumorGLB position-x={1} /> */}
                <OrbitControls />
            </Canvas>

            {/* Back button */}
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

            {/* Dropdown for selecting GLB path */}
            <select
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "100px",
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                value={path}
                onChange={(e) => setPath(e.target.value)}
            >
                {presetPaths.map((presetPath, index) => (
                    <option key={index} value={presetPath}>
                        {presetPath}
                    </option>
                ))}
            </select>
        </div>
    );
}
