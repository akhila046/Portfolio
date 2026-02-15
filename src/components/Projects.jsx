import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Attendance Management System',
      description: 'Face recognition-based attendance system using computer vision and machine learning for automated student attendance tracking',
      tags: ['Python', 'OpenCV', 'Face Recognition', 'Machine Learning'],
      image: '/logos/Attendance management system.png',
      liveLink: '#',
      githubLink: 'https://github.com/akhila046/Attendance-management-system-using-face-recognition-project.git'
    },
    {
      title: 'Memory Card Game',
      description: 'Memory Game is a fun and interactive card matching game built using React.js, Vite, and Tailwind CSS',
      tags: ['Reactjs', 'Css',],
      image: '/logos/Memory card game.png',
      liveLink: 'https://memory-card-game-ba9567.netlify.app/-',
      githubLink: 'https://github.com/akhila046/memory-card-game.git'
    },
    {
      title: 'Quiz Game',
      description: 'Interactive quiz application with multiple categories and scoring system',
      tags: ['JavaScript', 'HTML', 'CSS'],
      image: '/logos/Quiz website.png',
      liveLink: '#',
      githubLink: 'https://github.com/akhila046/Quiz-Game.git'
    },
    {
      title: 'Hotel Booking EDA',
      description: 'Exploratory Data Analysis of hotel booking data to identify patterns and insights for business decisions',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
      image: '/logos/Hotel booking.png',
      liveLink: 'https://colab.research.google.com/drive/1J7-I3YmxDC8erMa0xmiiHonjSg6NBvBk',
      githubLink: 'https://github.com/akhila046/Hotel-Booking-EDA.git'
    },
    {
      title: 'Netflix PowerBI Dashboard',
      description: 'Interactive PowerBI dashboard analyzing Netflix content data with visualizations and insights',
      tags: ['PowerBI', 'Data Visualization', 'Analytics'],
      image: '/logos/Netflix.png',
      liveLink: '#',
      githubLink: 'https://github.com/akhila046/Netflix-PowerBI-Dashboard.git'
    },
    {
      title: 'Web Camera App',
      description: 'Responsive web app using getUserMedia() and Canvas API to enable live preview, snapshots, filters, and downloads.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/logos/web camera.png',
      liveLink: 'https://akhila046.github.io/WebCamera/',
      githubLink: 'https://github.com/akhila046/WebCamera'
    }
  ]

  return (
    <section id="projects">
      <h2 className="section-title">
        My <span className="gradient-text">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
