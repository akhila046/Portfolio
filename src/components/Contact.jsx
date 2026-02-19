import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact">
      <h2 className="section-title">
        Get In <span className="gradient-text">Touch</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together!</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>akhilaohmkumar@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Pune, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/akhila046" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/akhila-ohmkumar-704576258" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/ByteWithAkhila" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
