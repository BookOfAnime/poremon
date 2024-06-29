import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Center, Environment, OrbitControls } from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas style={{width: "100vw", height: "100vh"}} camera={{ position: [0, 0, 4], fov: 45 }}>
      <OrbitControls 
       />
      {/* THREE POINTS LIGHTING */}
      <Environment files="/sky.hdr" background  />

      <ambientLight intensity={0.3} />  
      <pointLight position={[-1, .5, -1]} intensity={4} color={'#47b6de'}/>
      <spotLight position={[-1, 1, 1]} intensity={5} color={'#8758c4'}/>
      {/* THREE POINTS LIGHTING */}
        <Experience />
      {/* <Center>
        <Experience />
      </Center> */}
    </Canvas>
  );
}

export default App;
