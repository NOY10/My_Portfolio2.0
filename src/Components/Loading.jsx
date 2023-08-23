import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";

function Loading() {
   return (
    <Html center>
      <HashLoader
      color="#36d7b7"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
    </Html>
    // <Html center>{progress} % loaded</Html>
  )
  
    
     
  
}

export default Loading
