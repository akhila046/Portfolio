import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
