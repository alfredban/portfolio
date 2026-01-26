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
            
            <div className='sobre-mi-card' 
            style={{ fontFamily: '"Raleway", system-ui' }}> 
                <span>
                    ¡Hola!
                    Soy Alfredo Ivanovich, estudiante de la Licenciatura en Sistemas y actualmente me encuentro en la búsqueda de mi primera experiencia laboral en el mundo IT.
                    Me percibo como una persona comprometida, proactiva y curiosa, con un gran interés por aprender y adaptarme a las nuevas tecnologías que surgen constantemente.
                    En este portfolio podrás encontrar una muestra de los proyectos y conocimientos que he adquirido a lo largo de mi carrera.
                </span>

            </div>

            <div className='ml-40 mb-60 text-white flex flex-col gap-2 text-2xl' style={{ fontFamily: '"Raleway", system-ui' }}>     
                <h2 className="text-3xl ">Contacto:</h2>
                
                <div className="flex gap-1">
                    <svg class="w-8 h-8 text-[#2098f1] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                    </svg>
                    <span>Whatsapp/Movil: 1162644335</span>
                </div>

                <div className="flex gap-1">
                    <svg class="w-8 h-8 text-[#2098f1] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                    </svg>
                     <span>Mail: alfredban22@gmail.com</span>
                </div>
                <div className="flex transition-transform duration-300 hover:scale-110 gap-1">
                <svg class="w-8 h-8 text-[#2098f1] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
                <a className="text-[#2098f1] " href='www.linkedin.com/in/alfredo-ivanovich-3b4596249'>Linkedin</a>
                </div>

            </div>
            
        </div>
        
    </div>


    )

}