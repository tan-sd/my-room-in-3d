import { PresentationControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Room from "./Room";

export default function Experience() {
    return (
        <>
            <Perf position="top-left" />
            <PresentationControls
                snap={true}
                config={{ mass: 2, tension: 50, friction: 26 }}
                polar={[0, 0, 0]}
                azimuth={[-0.59, 0.59]}
            >
                <Room />
            </PresentationControls>
        </>
    );
}
