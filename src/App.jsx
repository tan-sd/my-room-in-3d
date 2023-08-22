import { Canvas } from "@react-three/fiber";
import { Room } from "./assets/model/Room";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";

export function App() {
    return (
        <>
            <div className="canvas-container">
                <Canvas>
                    <Suspense fallback={null}>
                        <PresentationControls
                            snap={true}
                            azimuth={[-0.59, 0.59]}
                            polar={[0, 0.9, 0]}
                        >
                            <PerspectiveCamera
                                position={[0.3, -0.9, 0]}
                                rotation={[0, 0.77, 0]}
                            >
                                <Room />
                            </PerspectiveCamera>
                        </PresentationControls>
                    </Suspense>
                </Canvas>
            </div>
        </>
    );
}

export default App;
