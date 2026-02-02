import { use, useState } from 'react'
import './App.css'
import { Canvas,useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = ({position,size,colour}) =>{
  const ref = useRef()
  useFrame((state,delta) => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
    ref.current.rotation.z += 0.05
    ref.current.position.z = Math.sin(state.clock.elapsedTime)
  })
  return(
    <mesh position={position} ref={ref}>
      <boxGeometry args={size}/> 
      <meshStandardMaterial color={colour}/>
    </mesh>
  )

}

function App() {
  return (
    <Canvas>
      <ambientLight position={[0, 10, 5]} intensity={1}/> 
      <Cube position = {[-1,1,1]} size = {[1,1,1]} colour={"purple"}/>
      <Cube position = {[2,2,1]} size = {[1,1,1]} colour={"orange"}/>
    </Canvas>
  )
}

export default App
