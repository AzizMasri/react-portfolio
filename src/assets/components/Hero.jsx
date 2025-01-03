import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../../3d-components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "./CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../../constants"
import Target from "../../3d-components/Target"
import ReactLogo from "../../3d-components/ReactLogo"
import Cube from "../../3d-components/Cube"
import Rings from "../../3d-components/Rings"
import HeroCamera from "../../3d-components/HeroCamera"
import Button from "./Button"


const Hero = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    // const x = useControls('HackerRoom', {
    //     positionX:{
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY:{
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ:{
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },

    //     rotationX:{
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY:{
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ:{
    //         value: 0.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale:{
    //         value: 0.05,
    //         min: 0.05,
    //         max: 10,
    //     },

    // })
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
        Hi, I am AzizMr <span className="waving-hand">👋</span>
      </p>
      <p className="hero_tag text-gray_gradient">Full Stack Web Developer</p>
    </div>

        <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                        // scale={0.07} 
                        position={sizes.deskPosition} 
                        rotation={[0, -Math.PI, 0]}
                        scale={sizes.deskScale}
                        />
                    </HeroCamera>
                   

                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>
                    
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} />
                </Suspense>
               
            </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#contact" className="w-fit">
                <Button text="Lets work together 🚀" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/> 
            </a>
             
        </div>
    </section>
  )
}

export default Hero