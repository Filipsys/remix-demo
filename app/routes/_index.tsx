/* eslint-disable react/no-unknown-property */
import type { MetaFunction } from "@remix-run/node";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { SmallBagModel } from "~/components/SmallBag";
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
      <div id="canvas-container" className="w-full h-full">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 1]} intensity={0.6} />
          <directionalLight position={[0, 0, -5]} intensity={0.6} />

          <mesh scale={40} position={[0, 0, 0]} rotation={[-1.6, 0.2, 2.5]}>
            <OrbitControls />
            
            <Model />
          </mesh>

          {/* <mesh>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh> */}
        </Canvas>
      </div>
    </div>
  );
}
