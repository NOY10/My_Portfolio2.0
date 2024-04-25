import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loading from "../Loading";
import Chorten from "../Threejs/Chorten";
import "./ChortenT.css";
function ChortenT() {
  return (
    <div className="chortenT">
      <Canvas
        className="canvas"
        camera={{ position: [6.5, 1.5, -1], fov: 50 }}
        // style={{ background: "#202023" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <pointLight
          position={[2, -2.01, 0.5]}
          intensity={1.5}
          // color={"yellow"}
        />
        <pointLight
          position={[2, 1.01, 0.5]}
          intensity={1.5}
          // color={"yellow"}
        />
        <Suspense fallback={<Loading />}>
          <Chorten />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ChortenT;
