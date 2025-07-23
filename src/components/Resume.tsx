import { useState } from 'react'

const Resume = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const downloadPDF = async () => {
    setIsGeneratingPDF(true)
    try {
      // Dynamic import for html2pdf
      const html2pdf = (await import('html2pdf.js')).default
      
      const element = document.getElementById('resume-content')
      if (!element) {
        console.error('Resume content element not found')
        return
      }

      const config = {
        margin: 0.5,
        filename: "Amit_Goel_Resume.pdf",
        image: { 
          type: 'jpeg', 
          quality: 0.98 
        },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      }

      await html2pdf().set(config).from(element).save()
    } catch (error) {
      console.error('PDF generation error:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <div className="container">
      <button 
        onClick={downloadPDF}
        disabled={isGeneratingPDF}
        className="download-button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
      </button>
      
      <div id="resume-content" className="resume">
        {/* Header */}
        <header className="header">
          <h1 className="name">Amit Goel</h1>
          <h2 className="title">Software Engineer</h2>
          <div className="contact-info">
            Hyderabad, India | +91-9041777452 | goelamit756@gmail.com | www.linkedin.com/in/ag0909
          </div>
        </header>

        {/* Summary */}
        <section className="section">
          <h3 className="section-title">Summary</h3>
          <p className="summary-text">
            Software Developer specializing in .NET, React, and microservices architecture, with a track record of delivering 
            high-quality, scalable backend solutions. Experienced in SQL, MongoDB, and integrating complex applications 
            with third-party services. Strong focus on system performance, code maintainability, and automated testing. 
            Known for leadership in cross-functional teams, problem-solving, and driving timely project delivery in fast-paced 
            environments.
          </p>
        </section>

        {/* Skills */}
        <section className="section">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <strong>Languages/Frameworks:</strong> .NET Core, ASP.NET MVC, React, JavaScript, Angular, Java
            </div>
            <div className="skill-category">
              <strong>Databases:</strong> SQL Server, MongoDB
            </div>
            <div className="skill-category">
              <strong>Cloud & DevOps:</strong> AWS (S3, EC2, Lambda), Kafka, Service Fabric
            </div>
            <div className="skill-category">
              <strong>Tools:</strong> Git, JIRA, NUnit, Moq
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="section">
          <h3 className="section-title">Work Experience</h3>
          
          <div className="job">
            <div className="job-header">
              <div className="job-title-company">
                <h4 className="job-title">Software Engineer, Mirabel Technologies | Hyderabad</h4>
              </div>
              <div className="job-period">Oct 2023 - Present</div>
            </div>
            <ul className="job-responsibilities">
              <li>Built a scalable subscription platform using <strong>ASP.NET Core, React,</strong> and <strong>SQL Server,</strong> supporting complex billing (Fixed, Usage-Based, Hybrid); improved processing by <strong>30%,</strong> reduced deadlocks by <strong>70%.</strong></li>
              <li>Designed a complete <strong>user roles</strong> and <strong>approval system;</strong> led secure implementation of order workflow, streamlining controlled proposal generation.</li>
              <li>Integrated third-party APIs with <strong>OAuth;</strong> automated content generation using <strong>OpenAI</strong> and implemented <strong>CDC</strong> for real-time workflow tracking.</li>
              <li>Deployed AWS services <strong>(S3, EC2, Lambda)</strong> for paywall and content delivery; used Kafka to reduce processing latency by <strong>50%.</strong></li>
              <li>Resolved security vulnerabilities, optimized .NET/React modules, and mentored team; practiced <strong>Agile XP</strong> and tracked delivery with <strong>JIRA.</strong></li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <div className="job-title-company">
                <h4 className="job-title">Engineer, Indus Valley Partners | Noida, India</h4>
              </div>
              <div className="job-period">Jun 2022 - Oct 2023</div>
            </div>
            <ul className="job-responsibilities">
              <li>Integrated enterprise systems for 5+ clients, enabling seamless data exchange and smooth onboarding.</li>
              <li>Built responsive interfaces in <strong>.NET (MVC/Core)</strong> and <strong>JavaScript,</strong> improving client satisfaction by <strong>20%.</strong></li>
              <li>Automated reporting via <strong>.NET console apps,</strong> saving approx. <strong>8 hours/week</strong> for ops team.</li>
              <li>Developed core modules using <strong>SOLID</strong> principles and <strong>Entity Framework.</strong></li>
              <li>Improved unit testing with <strong>NUnit & Moq,</strong> reduced post-release bugs by <strong>30%.</strong></li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <div className="job-title-company">
                <h4 className="job-title">System Engineer & Trainee, Infosys | Bengaluru, India</h4>
              </div>
              <div className="job-period">Feb 2020 - Jun 2022</div>
            </div>
            <ul className="job-responsibilities">
              <li>Led a team of 2 to manage a centralized component system used by 90+ teams, ensuring data integrity and collaboration.</li>
              <li>Developed a microservices-based batch mailing system on <strong>Service Fabric</strong> to automate email approvals.</li>
              <li>Migrated a complaint portal from <strong>.NET/JavaScript</strong> to <strong>Angular</strong> with Java-based APIs for better performance.</li>
              <li>Built stored procedures and batch jobs, reducing memory usage by <strong>40%</strong> and increasing processing speed by <strong>30%.</strong></li>
              <li>Delivered applications using <strong>MEAN Stack, Java, Spring Boot, REST APIs,</strong> and <strong>WCF</strong> for scalable solutions.</li>
              <li>Deployed and managed services on <strong>Linux,</strong> ensuring stable and secure operations.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="section">
          <h3 className="section-title">Education</h3>
          <div className="education">
            <div className="education-header">
              <div className="education-title">
                <h4>Chitkara University | Punjab, India</h4>
                <p>Bachelor Of Engineering, Computer Science and Technology.</p>
              </div>
              <div className="education-period">
                <div>2016 - 2020</div>
                <div><strong>CGPA: 8.79</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <h3 className="section-title">Certifications</h3>
          <ul className="certifications">
            <li>AWS Certified Cloud Practitioner - Coursera</li>
            <li>Development with React - Coursera</li>
            <li>Development with React Native - Coursera</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Resume