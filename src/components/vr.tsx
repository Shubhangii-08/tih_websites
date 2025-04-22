
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/VR.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oculus_Headset.geometry}
        material={materials.Headset}
      />
    </group>
  )
}

useGLTF.preload('/VR.glb')     