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
    <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-zinc-950 to-zinc-800">
      <div className="w-2/3 h-full  flex items-center justify-center">
        <h1 className="text-center text-[256px] font-bold bg-gradient-to-br from-gray-300 to-gray-600 text-transparent bg-clip-text drop-shadow-xl">
          Money.
        </h1>
      </div>
      <div id="canvas-container" className="w-1/3 h-full ">
        <Canvas frameloop="demand">
          <ambientLight intensity={0.6} />
          <hemisphereLight position={[0, 0, 1]} intensity={0.3} />

          <mesh scale={40} position={[-0.6, 0, 1]} rotation={[-1.6, 0.2, 2.5]}>
            {/* <OrbitControls /> */}

            <Model />
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
