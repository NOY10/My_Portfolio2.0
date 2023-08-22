import React, { Suspense } from 'react';
import Greeting from '../Threejs/Greeting';
import Loading from '../Loading';
import { Canvas} from "@react-three/fiber";
import './me.css'

function me() {
  return (
    <div  className="greeting">
        <Canvas  camera={{position:[15, 5, 5],fov:7}}>
        <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0,10,0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <pointLight position={[1, 1, 2]} intensity={10.5}/>

          <Suspense fallback={<Loading/>}>
            <Greeting />
          </Suspense>
          
        </Canvas>
    </div>
  )
}

export default me