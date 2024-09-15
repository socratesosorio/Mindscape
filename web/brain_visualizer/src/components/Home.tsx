import React, { useState } from 'react';
import "./Home.css"
import Model from './Model';

export default function Home() {
    const [isValidFile, setIsValidFile] = useState(false);
    const [nerfOutputPath, setNerfOutputPath] = useState('');
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        // validate file input
        const files = event.target.files;
        let file;
        if (files) {
            file = files[0];
        }
        let isNII;
        if (file) {
            isNII = file.name.split('.').pop() === 'nii';
        }
        if (file && !isNII) {
            alert('Please upload a .nii file.');
            event.target.value = '';
            return;
        }
        // run model on input and send to next page to create 3d visualization
        // maybe be able to download file
        setIsValidFile(true);
        setNerfOutputPath('./models/example.gltf');
      }

      return (
        <div className="image">
            {/* <Back></Back> */}
            <div className="container">
                <h1 className="title">MindScape VR</h1>
                <label htmlFor="file-upload" className="uploadButton">
                    Upload file
                </label>
                <input id="file-upload" className="fileUpload"type="file" onChange={handleFileChange}></input>
            </div>
            {isValidFile && nerfOutputPath != '' && <Model path={nerfOutputPath}></Model>}
        </div>
      );
}
