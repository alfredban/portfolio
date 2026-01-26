import { useEffect, useRef } from 'react';
import {proyectos} from '../data/ProjectsList'


export default function Projects() {

return(

  


  <div className='projects h-500 text-center' id='Proyectos'>

        <h1 className='text-white text-6xl mb-30 ml-10' style={{ fontFamily: '"Raleway", system-ui' }}>Proyectos</h1>


    <div className="projects-grid grid grid-cols-3 gap-10 justify-items-center ">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className=" sobre-mi-card ml-10 mr-10 transition-transform duration-300 hover:scale-110 h-130 w-140"> 
        <div className="flex items-center justify-center">
            <img className="h-50 w-80 object-cover rounded-2xl border-2 border-gray-500 " src={proyecto.imagen} alt={proyecto.nombre} />
        </div>
          <h2>{proyecto.nombre}</h2>
          <span>{proyecto.descripcion}</span>
          <div className="tags ">
            <span>Tecnologias: </span>
            
            <span> {proyecto.tecnologias.join(", ")}</span>

          </div>
          <a className="text-blue-500" href={proyecto.link}>Ver código</a>
        </div>
      ))}
    </div>

  </div>


  );  
}
