/* eslint-disable react/no-unknown-property */
import type { MetaFunction } from "@remix-run/node";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const gltf = useLoader(GLTFLoader, "/small_bag.glb");

  return (
    <div className="flex h-screen items-center justify-center">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />

          <mesh>
            <primitive object={gltf.scene} />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
