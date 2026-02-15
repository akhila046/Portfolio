import { FaCertificate, FaExternalLinkAlt, FaDownload } from 'react-icons/fa'

const Certificates = () => {
    const certificates = [
        {
            title: 'Web Development Certification',
            issuer: 'UptoSkills',
            date: '2025',
            description: 'Comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks',
            image: '/certificates/Uptoskills.png',
            credentialUrl: 'https://cdn.corenexis.com/view/4143159168',
            downloadUrl: '/certificates/Uptoskills Internship Certificate.pdf'
        },
        {
            title: 'AI/ML Certification',
            issuer: 'Edunet Foundation',
            date: '2024',
            description: 'Machine learning fundamentals, algorithms, and practical implementation using Python',
            image: '/certificates/Edunet Foundation Internship Certificate.png',
            credentialUrl: 'https://cdn.corenexis.com/view/3529688168',
            downloadUrl: '/certificates/Edunet Foundation Internship Certificate.pdf'
        },
        {
            title: 'Certificate of Participation – Gen AI Exchange Hackathon 2025',
            issuer: 'Google Cloud & H2S',
            date: 'Jan 14, 2026',
            description: 'Participated in the Gen AI Exchange Hackathon 2025 by Google Cloud, powered by Hack2skill. Contributed through prototype submission under "Personalized Career and Skills Advisor" problem statement.',
            image: '/certificates/Gen AI Exchange hackthon-Certificate.png',
            credentialUrl: 'https://cdn.corenexis.com/view/2536985168',
            downloadUrl: '/certificates/Gen AL Exchange hackthon-Certificate.pdf'
        },
        {
            title: 'GenAI Powered Data Analytics Certificate',
            issuer: 'Tata',
            date: '2025',
            description: 'Advanced certification in AI-powered data analytics techniques and tools',
            image: '/certificates/GenAI Powered Data Analytics.png',
            credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_4xmNWJLhgdyQYMBzW_1754812829995_completion_certificate.pdf',
            downloadUrl: '/certificates/GenAi powered data Analytics.pdf'
        },
        {
            title: 'Data Analytics Job Simulation',
            issuer: 'Deloitte',
            date: '2025',
            description: 'Completed Deloitte virtual job simulation program in data analytics and business intelligence',
            image: '/certificates/Data Analytics Job Simulation Deloitte.png',
            credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4xmNWJLhgdyQYMBzW_1758701606487_completion_certificate.pdf',
            downloadUrl: '/certificates/Deloitte virual Certification.pdf'
        },
        {
            title: 'Software Engineering Job Simulation',
            issuer: 'Virtual Experience Program',
            date: '2025',
            description: 'Completed comprehensive software engineering job simulation covering development lifecycle and best practices',
            image: '/certificates/Software Engineering Job simulation.png',
            credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_4xmNWJLhgdyQYMBzW_1754815494274_completion_certificate.pdf',
            downloadUrl: '/certificates/Software Enginnering Job Simulation.pdf'
        },
        {
            title: 'TATA Crucible Campus Quiz 2025',
            issuer: 'TATA Group',
            date: '2025',
            description: 'Participated in the prestigious TATA Crucible Campus Quiz competition',
            image: '/certificates/TATA Crucible Campus Quiz 2025.png',
            credentialUrl: 'https://unstop.com/certificate-preview/c9aa34b1-c32a-48f4-9176-5bae08cff0f3',
            downloadUrl: '/certificates/TATA CRUCIBLE.pdf'
        },
        {
            title: 'Adobe Certificate',
            issuer: 'Adobe',
            date: '2026',
            description: 'Design Fundamental with Ai - Adobe',
            image: '/certificates/adobe Certificate.png',
            credentialUrl: '#',
            downloadUrl: '/certificates/Adobe Certificate.pdf'
        }
    ]

    return (
        <section id="certificates">
            <h2 className="section-title">
                My <span className="gradient-text">Certificates</span>
            </h2>

            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <div key={index} className="certificate-card">
                        <div className="certificate-image">
                            <img src={cert.image} alt={cert.title} />
                            <div className="certificate-overlay">
                                <a href={cert.credentialUrl} className="certificate-link" target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt />
                                </a>
                                <a href={cert.downloadUrl} className="certificate-link" download>
                                    <FaDownload />
                                </a>
                            </div>
                        </div>

                        <div className="certificate-info">
                            <div className="certificate-header">
                                <FaCertificate className="certificate-icon" />
                                <span className="certificate-date">{cert.date}</span>
                            </div>

                            <h3>{cert.title}</h3>
                            <p className="certificate-issuer">Issued by: <strong>{cert.issuer}</strong></p>
                            <p className="certificate-description">{cert.description}</p>

                            <div className="certificate-actions">
                                <a href={cert.credentialUrl} className="btn-outline" target="_blank" rel="noopener noreferrer">
                                    View Credential
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certificates