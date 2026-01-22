import { useEffect, useRef } from 'react';
 import Particles from './backgrounds/Particles';

export default function AboutMe() {


    return(

    <div className="relative bg-[#000000] h-150 flex items-center justify-center overflow-hidden">

         <div className="absolute inset-0 z-0 pointer-events-none">
            <Particles
             particleColors={["#ffffff"]}
             particleCount={200}
             particleSpread={10}
             speed={0.1}
             particleBaseSize={100}
             moveParticlesOnHover
             alphaParticles={false}
             disableRotation={false}
             pixelRatio={1}
           />
        </div>


        <div className=' h-150 flex items-center' id="Sobre mi">
            

            <div className='h-90 ml-40 w-200 flex bg-[#e8e8e8]  border text-center items-center text-2xl rounded-3xl   shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] px-8'
            style={{ fontFamily: '"Raleway", system-ui' }}> 
                <span>
                    ¡Hola!
                    Soy Alfredo Ivanovich, estudiante de la Licenciatura en Sistemas en la Universidad Nacional de Lanus(UNla), y actualmente me encuentro en la búsqueda de mi primera experiencia laboral en el mundo IT.
                    Me percibo como una persona comprometida, proactiva y curiosa, con un gran interés por aprender y adaptarme a las nuevas tecnologías que surgen constantemente.
                    En este portfolio podrás encontrar una muestra de los proyectos y conocimientos que he adquirido a lo largo de mi carrera.
                </span>

            </div>

            <div className='ml-40 mb-60 text-white flex flex-col gap-2'>    
                <h2 className="text-3xl font-semibold">Contacto:</h2>
                <span className="text-2xl font-semibold">Whatsapp/Movil: 1162644335</span>
                <span className="text-2xl font-semibold">Mail: alfredban22@gmail.com</span>
                temporal
            </div>
            
        </div>
        
    </div>


    )

}