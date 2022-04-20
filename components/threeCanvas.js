import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Loader, Stage, OrbitControls} from '@react-three/drei'

{/* import Model from './Model' */}
import Case from './Case'

function Rig({ children, scrollTop}) {
  const rotater = useRef()
  useFrame(({ clock }) => {
	rotater.current.rotation.y = (140 - scrollTop) / 60 * Math.PI
  })
  return (
	<group position={[0, 0, 0]} ref={rotater}>
	  {children}
	</group>
  )
}

export default function ThreeCanvas({scrollTop}) {
  const caseRef = useRef()
	
  return(
	<div className="backgroundCanvas">
	  <Canvas
	  	concurrent
		gl={{ alpha: false }}
		camera={{ position: [0, 0, 30], fov: 70 }}
		onCreated={({gl, camera }) => {
		  camera.lookAt(0, 0, 0)
		}}>
		<color attach="background" args={["#FFFBF8"]} />
		<ambientLight />
		<pointLight position={[10, 10, 10]} />
		<Rig scrollTop={scrollTop} ref={caseRef}>
			<Suspense
				fallback={
			  	<Html center>
					<Loader />
			  	</Html>
				}>
			  	<Case scale={75} />
			</Suspense>
		</Rig>
		
	  </Canvas>
	</div>
  )
}