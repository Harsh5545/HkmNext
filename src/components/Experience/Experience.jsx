"use client";

import React, { useEffect, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Wsa from "./Wattson_Strange_Attractor";

const Experience = () => {
  const [groupPosition, setGroupPosition] = useState([0, -30, 0]);
  const [groupCamera, setGroupCamera] = useState([0, 0, 0]);
  const [modelScale, setModelScale] = useState([1, 1, 1]);
  // const [modelLoaded, setModelLoaded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Set position for mobile
        setGroupPosition([0, -6, 1]);
        setGroupCamera([10, 10, 10]);
        setModelScale([0.6, 0.7, 0.7]); // Adjust the scale for mobile
      } else {
        // Set position for PC
        setGroupPosition([1, -22, 0]);
        setGroupCamera([60, 10, 10]);
        setModelScale([1, 1, 1]); // Default scale for PC
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // useEffect(() => {
  //   import("./Wattson_Strange_Attractor").then(() => {
  //     setModelLoaded(true);
  //   });
  // }, []);
  return (
    <>
      <OrbitControls     enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={50}
        maxDistance={150} />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <PerspectiveCamera makeDefault position={groupCamera} />

      {/* {modelLoaded && ( */}
        <group position={groupPosition} scale={modelScale}>
          <Wsa />
        </group>
      {/* )} */}
    </>
  );
};

export default Experience;
