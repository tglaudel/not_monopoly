import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 25 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[1.2, 1.2, 0]} />
      <Box position={[1.2, -1.2, 0]} />
      <Box position={[-1.2, 1.2, 0]} />
      <Box position={[-1.2, -1.2, 0]} />
      <OrbitControls
        autoRotateSpeed={0.6}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};

export default App;
