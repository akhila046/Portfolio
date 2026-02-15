import { FaGraduationCap, FaBriefcase, FaFilePdf } from 'react-icons/fa'

const Resume = () => {
  return (
    <section id="resume">
      <h2 className="section-title">
        My <span className="gradient-text">Resume</span>
      </h2>

      <div className="resume-container">
        {/* Education */}
        <div className="resume-column">
          <h3>
            <FaGraduationCap /> Education
          </h3>

          <div className="resume-item">
            <div className="resume-year">2022 - 2026</div>
            <h4>Bachelor of Engineering - Computer Engineering</h4>
            <p className="resume-location">Alard College Of Engineering And Management</p>
            <p>
              Focused on Web Development, AI/ML, and Software Engineering principles.
            </p>
          </div>

          <div className="resume-item">
            <div className="resume-year">2020 - 2022</div>
            <h4>Higher Secondary Education</h4>
            <p className="resume-location">S.N.B.P Jr College</p>
            <p>
              Completed with focus on Science, Mathematics and Computer Science
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="resume-column">
          <h3>
            <FaBriefcase /> Experience
          </h3>

          <div className="resume-item">
            <div className="resume-year">2025</div>
            <h4>Web Developer Intern</h4>
            <p className="resume-location">UptoSkills</p>
            <p>
              Developed responsive web applications using HTML, CSS, JavaScript
              and modern frameworks.
            </p>
          </div>

          <div className="resume-item">
            <div className="resume-year">2024</div>
            <h4>AI Intern</h4>
            <p className="resume-location">Edunet Foundation</p>
            <p>
              Worked on AI/ML projects, implementing machine learning algorithms
              and data analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="resume-download">
        <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#6a5cff' }}>
          Download Resume
        </h3>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/Akhila_Ohmkumar_Resume_sdenew.pdf" className="btn" download>
            <FaFilePdf /> Software Engineer Resume
          </a>
          <a href="/Akhila_Ohmkumar_Data_Analyst_Resume.pdf" className="btn" download>
            <FaFilePdf /> Data Analysis Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
