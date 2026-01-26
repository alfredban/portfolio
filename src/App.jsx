import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects'
import Footer from './components/Footer'


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
      <Projects/>
    </section>

    <footer>
      <Footer/>
    </footer>

    </>
  )
}

export default App
