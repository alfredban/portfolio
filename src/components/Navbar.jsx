import { useEffect, useRef } from 'react';


export default  function Nav(){
return(
<div className="navbar bg-base-100 shadow-md hover:shadow-xl transition  mx-auto  flex w-full h-16 items-center justify-center text-2xl bg-[#e8e8e8]  slide-in-top "
style={{ fontFamily: '"Raleway", system-ui' }}>                                                                                
  <div className="flex-1 ">
    <a className="  text-4xl btn btn-ghost ml-7 text-[#171430]">Alfredo Ivanovich</a>
  </div>
  <div className="flex gap-2">
    <div className="dropdown dropdown-end flex">
      <ul
        tabIndex="-1"
        className=" z-1 mt-1 not-even:gap-7 mr-20  transition flex btn btn-ghost text-[#171430]  ">

        <li className="transition-transform duration-300 hover:scale-130"><a href='#Sobre mi'>Sobre mi</a></li>
        <li className="transition-transform duration-300 hover:scale-130"><a href='#Proyectos'>Proyectos</a></li>

      </ul>

    </div>

  </div>
</div>
)
}