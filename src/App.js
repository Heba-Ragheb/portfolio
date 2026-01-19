
import { useState } from 'react';
import { Mail,  Github, Linkedin, Code, Database, Server, Shield, Menu, X,  Download,  } from 'lucide-react';
import ProjectCard from "./component/ProjectCard";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.IO', 'Redis', 'OAuth', 'JWT'],
    database: ['MongoDB', 'Mongoose', 'SQL', 'Schema Design', 'CRUD Operations'],
    security: ['JWT Authentication', 'OAuth', 'Role-Based Access', 'Session Management'],
    frontend: ['React.js', 'Redux', 'Context API', 'Tailwind CSS'],
    tools: ['Git', 'Postman', 'PDFKit', 'Cloudinary', 'Multer', 'Email Services']
  };

  const projects = [
    
      {
      title: 'MadEase',
      subtitle: 'Healthcare Platform',
      description: 'A cutting-edge telemedicine platform connecting patients and healthcare providers, featuring real-time consultations, AI-powered support, and appointment scheduling for a seamless healthcare experience.',
      tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Socket.IO', 'JWT', 'OAuth', 'Redis', 'AI Chatbot', 'Email Services'],
      features: [
        'Real-time chat system using Socket.IO for doctor-patient consultations',
        'Appointment booking with slot validation and automated notifications',
        'AI-powered chatbot for 24/7 patient support and symptom assessment',
      ],
      screenshot: '/screenShots/med-ease.png',
      placeholder: '🏥',
      color: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
      github: 'https://github.com/Heba-Ragheb/medEase',
      demo: 'https://med-ease-nine.vercel.app/'
    },
    
    {
      title: 'E-Commerce Store',
      subtitle: 'Admin Dashboard & Payment Integration',
      description: 'A full-featured online store with secure payments, inventory management, and a comprehensive admin dashboard for complete control over products, orders, and analytics.',
      tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Redis', 'Cloudinary', 'Payment Gateway'],
      features: [
        'Admin dashboard for managing users, products, orders, and analytics',
        'Role-based access control (Admin vs User) using JWT',
        'Integrated secure online payment system with automatic stock updates and order validation.',
        'CRUD operations for products, categories, orders, and users',
      ],
      screenshot: '/screenShots/image1.png',
      placeholder: '🛒',
      color: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
      github: 'https://github.com/Heba-Ragheb/mernStore',
      demo: 'https://mern-store-flame.vercel.app/'
    },
     { title: 'MERN Booking Application',
      subtitle: 'Reservation Management System',
      description: 'A full-stack booking platform that ensures seamless reservations with real-time availability, dynamic slot validation, and automated notifications for a flawless user experience.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Context API'],
      features: [
        'Real-time availability checking and automated booking',
        'JWT-based authentication with role-based access control',
        'Dynamic slot validation to prevent double bookings',
      ],
      screenshot: '/screenShots/image.png',
      placeholder: '📅',
      color: 'linear-gradient(to bottom right, #22c55e, #14b8a6)',
      github: 'https://github.com/Heba-Ragheb/mernBooking',
      demo: 'https://mern-booking-6gbi.vercel.app/'
    },
    {
  title: 'Clinic Appointment System',
  subtitle: 'Healthcare Booking Platform',
  description:
    'A full-stack clinic appointment management system that allows patients to book appointments seamlessly while enabling doctors and admins to manage schedules efficiently with secure authentication and role-based access.',
  tech: [
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js',
    'JWT',
    'Redux',
    'Socket.IO'
  ],
  features: [
    'Patient appointment booking with real-time availability',
    'Doctor and admin dashboards for managing schedules and appointments',
    'JWT-based authentication with role-based access control (Admin / Doctor / Patient)',
    'Appointment status tracking (Pending, Approved, Cancelled)',
    'Secure backend APIs with validation and error handling'
  ],
  screenshot: '/screenShots/clinic-appointment.png',
  placeholder: '🏥',
  color: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)',
  github: 'https://github.com/Heba-Ragheb/clinic-appointment',
  demo: 'https://clinic-appointment-2lca.vercel.app'
}
 
  ];

  const experiences = [
    {
      title: 'Cyber Ops Associate',
      company: 'NTI & ITIDA',
      period: '08/2024 – 09/2024',
      type: 'Internship',
      description: 'Completed 4-week cybersecurity training program covering cyber operations fundamentals, security practices, and threat awareness.',
      icon: '🔐'
    },
    {
      title: 'Engineering Intern',
      company: 'Benha Electronic Company',
      period: '07/2023 – 08/2023',
      type: 'Internship',
      description: 'Gained practical experience in printed circuits, radar, surveillance systems, solar panel production, and electronic card repair.',
      icon: '⚡'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #111827, #1f2937, #111827)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 50,
      borderBottom: '1px solid #374151'
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#d1d5db',
      cursor: 'pointer',
      fontSize: '1rem',
      textTransform: 'capitalize',
      transition: 'color 0.3s',
      padding: '0.5rem'
    },
    navButtonActive: {
      color: '#60a5fa'
    },
    cvButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s'
    },
    mobileMenuButton: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      display: 'none',
      padding: '0.5rem'
    },
    mobileMenu: {
      backgroundColor: '#1f2937',
      borderTop: '1px solid #374151'
    },
    mobileMenuItem: {
      width: '100%',
      textAlign: 'left',
      padding: '0.75rem 1.5rem',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      textTransform: 'capitalize',
      transition: 'background 0.3s'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '64px',
      padding: '1rem'
    },
    heroContent: {
      maxWidth: '896px',
      margin: '0 auto',
      textAlign: 'center'
    },
    avatar: {
      width: '128px',
      height: '128px',
      margin: '0 auto 2rem',
      background: 'linear-gradient(to right, #3b82f6, #a855f7)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      animation: 'bounce 2s infinite'
    },
    title: {
      fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f9a8d4)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    },
    subtitle: {
      fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
      color: '#d1d5db',
      marginBottom: '1.5rem'
    },
    description: {
      fontSize: '1.125rem',
      color: '#9ca3af',
      marginBottom: '2rem',
      maxWidth: '672px',
      margin: '0 auto 2rem'
    },
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    },
    primaryButton: {
      padding: '0.75rem 2rem',
      background: 'linear-gradient(to right, #3b82f6, #a855f7)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'inline-block'
    },
    secondaryButton: {
      padding: '0.75rem 2rem',
      background: 'transparent',
      border: '1px solid #4b5563',
      borderRadius: '9999px',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'inline-block'
    },
    downloadCVButton: {
        padding: '0.75rem 2rem',
      background: 'linear-gradient(to right, #10b981, #059669)',
      border: 'none',
      borderRadius: '9999px',
      color: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'inline-flex',
     
    },
    section: {
      padding: '5rem 1rem'
    },
    sectionAlt: {
      padding: '5rem 1rem',
      backgroundColor: 'rgba(31, 41, 55, 0.3)'
    },
    sectionTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem'
    },
    container6xl: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    container7xl: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    container4xl: {
      maxWidth: '896px',
      margin: '0 auto'
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    card: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid #374151'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem'
    },
  
    skillHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    skillTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginLeft: '0.75rem'
    },
   
    tag: {
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      border: '1px solid'
    },
    expCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid #374151',
      marginBottom: '1.5rem',
      transition: 'all 0.3s'
    },
    expContent: {
      display: 'flex',
      gap: '1rem'
    },
    expIcon: {
      fontSize: '2.5rem'
    },
    expDetails: {
      flex: 1
    },
    expHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '0.5rem'
    },
    expTitle: {
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    expCompany: {
      color: '#60a5fa'
    },
    expPeriod: {
      color: '#9ca3af',
      textAlign: 'right'
    },
    expType: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      border: '1px solid rgba(168, 85, 247, 0.5)',
      marginTop: '0.25rem'
    },
    expDescription: {
      color: '#d1d5db'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      maxWidth: '672px',
      margin: '0 auto 3rem'
    },
    contactCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid',
      textDecoration: 'none',
      color: 'white',
      transition: 'all 0.3s'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem'
    },
    socialButton: {
      padding: '1rem',
      backgroundColor: '#1f2937',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: 'white',
      transition: 'all 0.3s'
    },
    footer: {
      padding: '2rem 1rem',
      borderTop: '1px solid #374151',
      textAlign: 'center',
      color: '#6b7280'
    },
    skillsGrid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.25rem',
},
skillCard: {
  padding: '1.25rem',
  borderRadius: '1rem',
  border: '1px solid',
  backdropFilter: 'blur(12px)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
},
skillTags: {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '0.75rem',
},

  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-button { display: block !important; }
          .project-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
        button:hover, a:hover { opacity: 0.8; }
        .project-card:hover { border-color: rgba(59, 130, 246, 0.5) !important; box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2); }
        .exp-card:hover { border-color: rgba(168, 85, 247, 0.5) !important; }
        .primary-button:hover { box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.5); transform: scale(1.05); }
        .secondary-button:hover { border-color: #3b82f6; }
        .download-cv-button:hover { box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.5); transform: scale(1.05); }
        .cv-button-nav:hover { background: linear-gradient(to right, #059669, #047857) !important; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4); }
        .contact-card-blue { background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.5), rgba(30, 64, 175, 0.3)); border-color: rgba(59, 130, 246, 0.5); }
        .contact-card-blue:hover { border-color: #3b82f6; }
        .social-button:hover { background-color: #374151; transform: scale(1.1); }
        nav button:hover { color: #60a5fa; }
        .mobile-menu-item:hover { background-color: #374151; }
      /* ===== MOBILE RESPONSIVE FIXES ===== */

@media (max-width: 768px) {
  /* HERO */
  .hero-content {
    padding: 0 1rem;
  }

  .hero-buttons {
    flex-direction: column !important;
  }

  .hero-buttons button,
  .hero-buttons a {
   
    justify-content: center;
  }

  /* SKILLS */
  .skill-span-2 {
    grid-column: span 1 !important;
  }

  /* EXPERIENCE */
  .exp-content {
    flex-direction: column;
  }

  .exp-period {
    text-align: left !important;
    margin-top: 0.5rem;
  }

  /* CONTACT */
  .contact-card {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr !important;
  }
}
`}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Heba Ragheb</div>
          
          <div style={styles.navLinks} className="desktop-menu">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{...styles.navButton, ...(activeSection === section ? styles.navButtonActive : {})}}
              >
                {section}
              </button>
            ))}
            <a 
              href="/Heba_Ragheb_CV.pdf" 
              download="Heba_Ragheb_CV.pdf"
              style={styles.cvButton}
              className="cv-button-nav"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          <button
            style={styles.mobileMenuButton}
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={styles.mobileMenuItem}
                className="mobile-menu-item"
              >
                {section}
              </button>
            ))}
            <a 
              href="/Heba_Ragheb_CV.pdf" 
              download="Heba_Ragheb_CV.pdf"
              style={{...styles.mobileMenuItem, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: '600'}}
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero} className="hero-content">
        <div style={styles.heroContent}>
          <div style={styles.avatar}>👩‍💻</div>
          <h1 style={styles.title}>Heba Ragheb</h1>
          <h2 style={styles.subtitle}>Backend Developer (Node.js)</h2>
          <p style={styles.description}>
            Specializing in building scalable and secure server-side applications with Node.js, Express.js, MongoDB, and modern technologies
          </p>
          <div style={styles.buttonGroup} className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} style={styles.primaryButton} className="primary-button">
              Get In Touch
            </button>
            <button onClick={() => scrollToSection('projects')} style={styles.secondaryButton} className="secondary-button">
              View Projects
            </button>
            <a 
              href="/Heba_Ragheb_CV.pdf" 
              download="Heba_Ragheb_CV.pdf"
              style={styles.downloadCVButton}
              className="download-cv-button"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container6xl}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.grid2}>
            <div style={styles.card}>
              <h3 style={{...styles.cardTitle, color: '#60a5fa'}}>Profile</h3>
              <p style={{color: '#d1d5db', lineHeight: '1.6', marginBottom: '1rem'}}>
                Backend Developer specializing in Node.js and Express.js with hands-on experience in building scalable and secure server-side applications. Strong background in RESTful API design, database management, and authentication systems.
              </p>
              <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                Experienced in developing real-time applications using Socket.IO and improving performance through Redis caching. Proven ability to build backend systems for e-commerce, booking systems, and telemedicine applications.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={{...styles.cardTitle, color: '#a78bfa'}}>Education</h3>
              <div>
                <h4 style={{fontSize: '1.25rem', fontWeight: '600', color: 'white'}}>Zagazig University</h4>
                <p style={{color: '#60a5fa'}}>B.Sc. in Electrical Engineering</p>
                <p style={{color: '#9ca3af'}}>Computer & Systems Department</p>
                <p style={{color: '#6b7280'}}>2020 – 2025 • Grade: Very Good</p>
              </div>
              <div style={{paddingTop: '1rem', borderTop: '1px solid #374151', marginTop: '1rem'}}>
                <p style={{color: '#22c55e', fontWeight: '600'}}>Graduation Project (A+)</p>
                <p style={{color: '#d1d5db'}}>MesEase – A system bridging patients and healthcare providers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.sectionAlt}>
        <div style={styles.container6xl}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={styles.skillsGrid}>
            <div style={{...styles.skillCard, background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.5), rgba(30, 64, 175, 0.3))', borderColor: 'rgba(59, 130, 246, 0.5)'}}  className="skill-span-2">
              <div style={styles.skillHeader}>
                <Server style={{color: '#60a5fa'}} size={28} />
                <h3 style={styles.skillTitle}>Backend Development</h3>
              </div>
              <div style={styles.skillTags}>
                {skills.backend.map((skill) => (
                  <span key={skill} style={{...styles.tag, backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: 'rgba(59, 130, 246, 0.5)'}}  className="skill-span-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{...styles.skillCard, background: 'linear-gradient(to bottom right, rgba(88, 28, 135, 0.5), rgba(107, 33, 168, 0.3))', borderColor: 'rgba(168, 85, 247, 0.5)'}}  className="skill-span-2">
              <div style={styles.skillHeader}>
                <Database style={{color: '#a78bfa'}} size={28} />
                <h3 style={styles.skillTitle}>Database</h3>
              </div>
              <div style={styles.skillTags}>
                {skills.database.map((skill) => (
                  <span key={skill} style={{...styles.tag, backgroundColor: 'rgba(168, 85, 247, 0.2)', borderColor: 'rgba(168, 85, 247, 0.5)'}}  className="skill-span-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{...styles.skillCard, background: 'linear-gradient(to bottom right, rgba(20, 83, 45, 0.5), rgba(21, 94, 117, 0.3))', borderColor: 'rgba(34, 197, 94, 0.5)'}}  className="skill-span-2">
              <div style={styles.skillHeader}>
                <Shield style={{color: '#22c55e'}} size={28} />
                <h3 style={styles.skillTitle}>Security</h3>
              </div>
              <div style={styles.skillTags}>
                {skills.security.map((skill) => (
                  <span key={skill} style={{...styles.tag, backgroundColor: 'rgba(34, 197, 94, 0.2)', borderColor: 'rgba(34, 197, 94, 0.5)'}}  className="skill-span-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{...styles.skillCard, background: 'linear-gradient(to bottom right, rgba(8, 76, 97, 0.5), rgba(21, 94, 117, 0.3))', borderColor: 'rgba(6, 182, 212, 0.5)'}}  className="skill-span-2"> 
              <div style={styles.skillHeader}>
                <Code style={{color: '#06b6d4'}} size={28} />
                <h3 style={styles.skillTitle}>Frontend (Basic)</h3>
              </div>
              <div style={styles.skillTags}>
                {skills.frontend.map((skill) => (
                  <span key={skill} style={{...styles.tag, backgroundColor: 'rgba(6, 182, 212, 0.2)', borderColor: 'rgba(6, 182, 212, 0.5)'}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{...styles.skillCard, background: 'linear-gradient(to bottom right, rgba(131, 24, 67, 0.5), rgba(157, 23, 77, 0.3))', borderColor: 'rgba(236, 72, 153, 0.5)', gridColumn: 'span 2'}}  className="skill-span-2">
              <div style={styles.skillHeader}>
                <Code style={{color: '#ec4899'}} size={28} />
                <h3 style={styles.skillTitle}>Tools & Technologies</h3>
              </div>
              <div style={styles.skillTags}>
                {skills.tools.map((skill) => (
                  <span key={skill} style={{...styles.tag, backgroundColor: 'rgba(236, 72, 153, 0.2)', borderColor: 'rgba(236, 72, 153, 0.5)'}}  className="skill-span-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container7xl}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
          {projects.map((project, index) => (
  <ProjectCard key={index} project={project} />
))}

          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" style={styles.sectionAlt}>
        <div style={styles.container4xl}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} style={styles.expCard} className="exp-card">
              <div style={styles.expContent}>
                <div style={styles.expIcon}>{exp.icon}</div>
                <div style={styles.expDetails}>
                  <div style={styles.expHeader}>
                    <div>
                      <h3 style={styles.expTitle}>{exp.title}</h3>
                      <p style={styles.expCompany}>{exp.company}</p>
                    </div>
                    <div style={styles.expPeriod}>
                      <p>{exp.period}</p>
                      <span style={styles.expType}>{exp.type}</span>
                    </div>
                  </div>
                  <p style={styles.expDescription}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={styles.container4xl}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <p style={{...styles.description, textAlign: 'center'}}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div style={styles.contactGrid}>
            <a href="mailto:heba.ragheb02@gmail.com" style={styles.contactCard} className="contact-card-blue">
              <Mail style={{color: '#60a5fa'}} size={24} />
              <div style={{textAlign: 'left'}}>
                <p style={{fontSize: '0.875rem', color: '#9ca3af'}}>Email</p>
                <p style={{fontWeight: '600'}}>heba.ragheb02@gmail.com</p>
              </div>
            </a>
           
          </div>
          <div style={styles.socialLinks}>
            <a href="https://github.com/Heba-Ragheb" target="_blank" rel="noopener noreferrer" style={styles.socialButton} className="social-button">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/heba-ragheb-a27748254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={styles.socialButton} className="social-button">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Heba Ragheb. All rights reserved.</p>
        <p style={{marginTop: '0.5rem'}}>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}