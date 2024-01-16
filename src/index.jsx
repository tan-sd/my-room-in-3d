import React from "react";
import ReactDOM from "react-dom/client";
import Experience from "./Experience";
import "./style.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Canvas
            camera={{
                fov: 35,
                aspect: window.innerWidth / window.innerHeight,
                position: [29, 14, 12],
            }}
        >
            <Experience />
        </Canvas>
    </React.StrictMode>
);
