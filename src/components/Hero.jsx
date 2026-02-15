import { FaDownload, FaBriefcase, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1>
                    Hi, I'm <span className="gradient-text">Akhila Ohmkumar</span>
                </h1>
                <p className="hero-subtitle">Computer Engineering</p>
                <p className="hero-description">
                    Specializing in Software Engineering, AI & Data Analysis
                </p>

                <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                    <a href="#resume" className="btn">
                        <FaDownload /> Download CV
                    </a>
                    <a href="#projects" className="btn-outline">
                        <FaBriefcase /> My Projects
                    </a>
                </div>

                <div className="social-links" style={{ justifyContent: 'center' }}>
                    <a href="https://github.com/akhila046" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/akhila-ohmkumar-704576258" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/ByteWithAkhila" className="social-icon" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="mailto:akhilaohmkumar@gmail.com" className="social-icon">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
