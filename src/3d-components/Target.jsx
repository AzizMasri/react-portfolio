import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap"


const Target = (props) => {
    const TargetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    useGSAP(() => {
        return gsap.to(TargetRef.current.position, {
            y: TargetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    }, [])

  return (
    <mesh {...props} ref={TargetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target