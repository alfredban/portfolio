import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <nav className="sticky top-0 z-50">
  <Navbar/>
  </nav>
    <main>
    <Hero/>
    </main>
   
    <section>
      <AboutMe/>
    </section>

    <section>
      proyectos
    </section>

      <section>
        herramientas usadas
      </section>

    </>
  )
}

export default App
