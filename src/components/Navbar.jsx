import fotoCV from '../assets/fotoCV.jpg'

export default  function Nav(){
return(
<div className="navbar bg-base-100 shadow-md hover:shadow-xl transition  mx-auto  flex w-full h-16 items-center justify-center bg-[#e8e8e8] text-3xl slide-in-top "
style={{ fontFamily: '"Raleway", system-ui' }}>                                                                                
  <div className="flex-1">
    <a className="btn btn-ghost ml-7 text-[#171430]">Alfredo Ivanovich</a>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end flex">
      <ul
        tabIndex="-1"
        className=" z-1 mt-1 not-even:gap-7 mr-20  transition flex btn btn-ghost text-[#171430]  ">

        <li className="transition-transform duration-300 hover:scale-130"><a href='#Sobre mi'>Sobre mi</a></li>
        <li className="transition-transform duration-300 hover:scale-130"><a>Proyectos</a></li>
        <li className="transition-transform duration-300 hover:scale-130"><a>Contacto</a></li>

      </ul>

    </div>

  {/*
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-7 border-2">
           <img
             src={fotoCV}
             alt="Foto CV"
             className="w-full h-full object-cover"/>
        </div>
    </div>
  */}

  </div>
</div>
)
}