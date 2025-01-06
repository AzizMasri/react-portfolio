import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import Button from './Button'

const About = () => {
  
  const [hasCopied, sethasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('azizmasrie97@gmail.com');
    sethasCopied(true);

    setTimeout(() => {
      sethasCopied(false);
    }, 2000);

  }

  const markers = [
    {
      id: 1,
      name: "I am here",
      coordinates: [3.1390, 101.6869], // Kuala Lumpur
      value: 10, // size of the marker (optional)
    },
  ];

  const cities = [
    { name: "I here in Kuala Lumpur", coordinates: [3.1390, 101.6869], size: 10 },
  ];

  const globeRef = useRef();
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 3.1390, lng: 101.6869, altitude: 2.5 }, // Adjust altitude for zoom level
        1000 // Animation duration in milliseconds
      );
    }
  }), [];


  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                      <p className='grid-headtext'>Hello i an Aziz</p>
                      <p className='grid-subtext'>With more than 5 Years of experience in the field of software development, I have honed my skills in a wide range of technologies and frameworks.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                      <p className='grid-headtext'>Tech Stack</p>
                      <p className='grid-subtext'>I have expertise in a wide range of technologies and frameworks, including HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, and MongoDB.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                  <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe width={380} height={380} backgroundColor="rgba(0, 0, 0, 0)" backgroudImageOpacity={0.5} showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                     ref={globeRef}
                     labelsData={cities} // Pass the city data for labels
                     labelLat={(d) => d.coordinates[0]} // Latitude for labels
                     labelLng={(d) => d.coordinates[1]} // Longitude for labels
                     labelText={(d) => d.name} // City name as label text
                     labelSize={(d) => d.size / 5} // Adjust label size dynamically
                     labelColor={() => "orange"} // Label color
                     labelDotRadius={(d) => d.size / 5} // Adjust marker size
                     labelResolution={2} // Increase label resolution
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" />
                  </div>
                  <div>
                    <p className='grid-headtext'>My Location</p>
                    <p className='grid-subtext'>Wangsa Maju, Kuala Lumpur, Malaysia</p>
                    <Button text={"Contact Me"} isBeam={true} containerClass={"mt-10 w-full"}/>
                  </div>
                  
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
              <div className='grid-container'>
                <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                <div>
                  <p className='grid-headtext'>My Pasion for Coding</p>
                  <p className='grid-subtext'>I am passionate about coding and learning new technologies.</p>
                </div>
              </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
              <div className='grid-container'>
                <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                <div className='space-y-2'>
                  
                  <p className='grid-subtext text-center'>Contact Me</p>
                  <div className='copy-container' onClick={handleCopy}>
                    <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                    <span className='md:text-xl font-medium text-gray_gradient text-white'>azizmasrie97@gmail.com</span>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}

export default About