import profileImg from '../assets/Akhila Profile.jpeg'

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="about-container">
        <div className="about-img">
          <img src={profileImg} alt="About Akhila" />
        </div>

        <div className="about-text">
          <h3>Hello! I'm Akhila Ohmkumar</h3>
          <p>
            I'm a passionate Computer Engineering student specializing in <strong>Web Development</strong>, 
            <strong> Data Analysis</strong>, and <strong>AI/Machine Learning</strong>. I love turning complex 
            problems into elegant, user-friendly solutions.
          </p>
          <p>
            With hands-on experience as a <strong>Web Developer Intern at UptoSkills</strong> and 
            <strong>AI Intern at Edunet Foundation</strong>, I've built projects ranging from face recognition 
            systems to interactive web applications and data visualization dashboards.
          </p>
          <p>
            I'm particularly passionate about <strong>data-driven solutions</strong> and creating applications 
            that bridge the gap between complex technology and real-world impact. Currently pursuing my 
            Bachelor's in Computer Engineering.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <h4>2+</h4>
              <p>Internships</p>
            </div>
            <div className="stat-item">
              <h4>6+</h4>
              <p>Live Projects</p>
            </div>
            <div className="stat-item">
              <h4>8+</h4>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
