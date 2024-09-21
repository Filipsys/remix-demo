/* eslint-disable react/no-unknown-property */
import type { MetaFunction } from "@remix-run/node";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  AsciiRenderer,
  Billboard,
  OrbitControls,
  Outlines,
  Text,
} from "@react-three/drei";
import { Model } from "~/components/Comp1";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const { nodes, materials } = useLoader(GLTFLoader, "/small_bag.glb");

  return (
    <div className="flex h-screen items-center justify-center">
      <div id="canvas-container" className="w-full h-full bg-zinc-900">
        <Canvas frameloop="demand">
          <ambientLight intensity={0.6} />
          <hemisphereLight position={[0, 0, 1]} intensity={0.3} />

          <mesh scale={40} position={[0, 0, 0]} rotation={[-1.6, 0.2, 2.5]}>
            {/* <OrbitControls /> */}

            <Model />
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
