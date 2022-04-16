/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Avocado.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Avocado.geometry} material={materials['2256_Avocado_d']} rotation={[-Math.PI, 0, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/Avocado.glb')
