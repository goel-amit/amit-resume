// Resume personal information constants
export const PERSONAL_INFO = {
  name: 'AMIT GOEL',
  title: 'Software Engineer',
  contact: {
    phone: '+91-9041777452',
    email: 'goelamit756@gmail.com',
    location: 'Hyderabad, India',
    linkedin: 'linkedin.com/in/ag0909',
  },
} as const;

// Education constants
export const EDUCATION = {
  university: 'Chitkara University',
  location: 'Patiala, Punjab',
  period: '2016 - 2020',
  degree: 'Bachelor of Engineering Computer Science & Engineering',
  cgpa: '8.7',
} as const;

// Skills list
export const SKILLS = [
  'React',
  'Azure DevOps',
  'ASP.NET',
  'Java, JavaScript',
  'Jira',
  'Angular',
  'SQL',
  '.NET',
  'C#',
  'NodeJS',
  'Git',
  'GitHub',
  '.NET Core',
  '.NET Framework',
  'PL/SQL',
  'MongoDB',
  'Express JS',
  'Linux',
] as const;

// Certifications
export const CERTIFICATIONS = [
  'AWS',
  'Multiplatform Mobile App Development with React Native',
] as const;

// Work experience data
export const WORK_EXPERIENCE = [
  {
    company: 'Mirabel Technologies',
    location: 'Hyderabad, India',
    period: '2023 - PRESENT',
    position: 'Software Engineer',
    achievements: [
      'Positively applied new features using React and .NET, boosting user engagement.',
      'Designed highly responsive interfaces in collaboration with designers, using React and CSS.',
      'Enhanced overall app performance through caching strategies and resolving bottlenecks.',
      'Effortlessly handled SQL and MongoDB databases, ensuring data integrity and efficient queries.',
    ],
  },
  {
    company: 'Indus Valley Partners',
    location: 'Noida, India',
    period: '2022 - 2023',
    position: 'Engineer',
    achievements: [
      'Seamlessly implemented application integrations for clients.',
      'Successfully Developed numerous product interfaces with .NET and JavaScript.',
      'Created essential console applications leveraging the .NET Framework.',
      'Designed and equipped full-scale application functionalities in .NET.',
      'Advanced unit test procedures, leading to better product stability',
    ],
  },
  {
    company: 'Infosys',
    location: 'Bengaluru, India',
    period: '2020 - 2022',
    position: 'System Engineer and Trainee',
    achievements: [
      'Directed maintenance and upgrades for optimized performance.',
      'Enforced web solutions using both MEAN Stack and .NET Framework.',
      'Designed and executed microservices architecture using REST APIs and WCF services.',
      'Adapted .NET module within Angular platform supporting open source deployment.',
      'Enforced microservices solutions leveraging Java and Spring Boot.',
      'Acquired proficiency in executing basic Linux commands efficiently.',
    ],
  },
] as const;

// Profile summary
export const PROFILE_SUMMARY = `As a professional software developer that specialises in React and.NET, I 
have a track record of increasing user engagement through innovative 
performance optimisation. With a strong background in SQL, PostgreDB, 
microservices, and application integrations, I specialise in providing 
high-quality, scalable solutions. Experienced with unit testing and 
guaranteeing maintainable code. Dedicated to achieving success and 
bringing strong leadership abilities with an emphasis on time 
management, and a collaborative mindset to each project.` as const;