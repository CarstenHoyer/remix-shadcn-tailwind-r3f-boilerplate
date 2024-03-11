import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MeshPhysicalMaterial } from "three";
import CustomShaderMaterial from 'three-custom-shader-material'
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

export default function RagingSea() {
    const orbitControlsRef = useRef<any>(null)
    const materialRef = useRef<any>()

    useEffect(() => {
        if (!orbitControlsRef.current) return
        orbitControlsRef.current.object.position.set(0, 0, -2)
    }, [])

    useFrame(({ clock }) => {
        if (!materialRef.current) return
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    })

    return (
        <>
            <OrbitControls ref={orbitControlsRef} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <icosahedronGeometry args={[1, 16]} />
                <CustomShaderMaterial
                    ref={materialRef}
                    baseMaterial={MeshPhysicalMaterial}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    silent
                    uniforms={{
                        uTime: {
                            value: 0,
                        },
                    }}
                    flatShading
                />
            </mesh>
        </>
    )
}