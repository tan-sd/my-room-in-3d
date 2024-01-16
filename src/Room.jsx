import {
    Center,
    useGLTF,
    useTexture,
    useVideoTexture,
} from "@react-three/drei";
import * as THREE from "three";

export default function Room() {
    const { nodes } = useGLTF("./assets/model/room.glb");
    const texture = useTexture("./assets/image/roomBaked.jpg");
    const macbookScreen = useVideoTexture("./assets/video/macbookScreen.mp4");
    const monitorScreen = useVideoTexture("./assets/video/monitorScreen.mp4");
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    return (
        <>
            <Center>
                <group scale={1.1} rotation={[0, 1.95, 0]}>
                    <mesh
                        geometry={nodes.mergedTest.geometry}
                        position={nodes.mergedTest.position}
                    >
                        <meshBasicMaterial map={texture} />
                    </mesh>
                    <mesh
                        geometry={nodes.emission1.geometry}
                        position={nodes.emission1.position}
                        scale={1}
                    >
                        <meshStandardMaterial
                            emissive="white"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.emission3.geometry}
                        position={nodes.emission3.position}
                        scale={1}
                    >
                        <meshStandardMaterial
                            emissive="white"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.emission4.geometry}
                        position={nodes.emission4.position}
                        scale={1}
                    >
                        <meshStandardMaterial
                            emissive="white"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.emission2.geometry}
                        position={nodes.emission2.position}
                        scale={1}
                    >
                        <meshStandardMaterial
                            emissive="white"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.macbookScreen.geometry}
                        position={nodes.macbookScreen.position}
                        scale={[-1, 1, 1]}
                    >
                        <meshBasicMaterial map={macbookScreen} />
                    </mesh>
                    <mesh
                        geometry={nodes.monitorScreen.geometry}
                        position={nodes.monitorScreen.position}
                        scale={[-1, 1, 1]}
                    >
                        <meshBasicMaterial map={monitorScreen} />
                    </mesh>
                </group>
            </Center>
        </>
    );
}

useGLTF.preload("./assets/model/room.glb");
