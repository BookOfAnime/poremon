import React from "react";
import { Dora } from "./Dorat";
import { Environment, Text3D } from "@react-three/drei";
import { Poly } from "./Poly";
const Experience = () => {
  return (
    <group>
      <Text3D
        position={[-2, 0.7, 0]}
        style={{ color: "red" }}
        scale={0.5}
        fontSize={0.5}
        font="./Atop_Regular.json"
      >
        Poregon 
      
        <meshNormalMaterial />
      </Text3D><Text3D
        position={[-2, -1.7, 0]}
        style={{ color: "red" }}
        scale={0.5}
        fontSize={0.5}
        font="./Atop_Regular.json"
      >
      On
        <meshNormalMaterial />
      </Text3D>
      <Dora />
      <Poly />
    </group>
  );
};

export default Experience;
