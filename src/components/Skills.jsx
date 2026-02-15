import { FaCode, FaLaptopCode, FaBrain, FaChartBar, FaDatabase, FaTools } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Languages',
      description: 'C++, Python, JavaScript'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'HTML, CSS, Reactjss, Node.js'
    },
    {
      icon: <FaBrain />,
      title: 'AI & ML',
      description: 'TensorFlow, Scikit-learn, Pandas, Numpy'
    },
    {
      icon: <FaChartBar />,
      title: 'Data Analysis',
      description: 'Pandas, NumPy, Matplotlib, PowerBI, Excel'
    },
    {
      icon: <FaDatabase />,
      title: 'Database',
      description: 'MySQL, MongoDB'
    },
    {
      icon: <FaTools />,
      title: 'Tools',
      description: 'Git, VS Code'
    }
  ]

  return (
    <section id="skills">
      <h2 className="section-title">
        My <span className="gradient-text">Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
