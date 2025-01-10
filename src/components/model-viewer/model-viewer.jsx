import React from "react";


const ModelViewer = () => {
    return (
        <model-viewer 
            src="/assets/3D-Models/uno.glb" 
            alt="A 3D model" 
            auto-rotate 
            camera-controls
            style={{ width: '90%', height: '500px' }}
        >
        </model-viewer>
    );
};

export default ModelViewer;
