const WorkExperienceSection = () => {
  const experiences = [
    {
      company: 'Mirabel Technologies',
      location: 'Hyderabad, India',
      period: '2023 - PRESENT',
      position: 'Software Engineer',
      achievements: [
        'Positively applied new features using React and .NET, boosting user engagement.',
        'Designed highly responsive interfaces in collaboration with designers, using React and CSS.',
        'Enhanced overall app performance through caching strategies and resolving bottlenecks.',
        'Effortlessly handled SQL and MongoDB databases, ensuring data integrity and efficient queries.'
      ]
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
        'Advanced unit test procedures, leading to better product stability'
      ]
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
        'Acquired proficiency in executing basic Linux commands efficiently.'
      ]
    }
  ];

  return (
    <div className="bg-resume-section rounded-lg p-6 shadow-sm border border-resume-border">
      <h2 className="text-xl font-semibold text-resume-text mb-6 uppercase tracking-wide">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {index < experiences.length - 1 && (
              <div className="absolute left-0 top-8 w-px h-full bg-resume-border"></div>
            )}
            <div className="relative">
              <div className="absolute left-0 top-2 w-3 h-3 bg-resume-accent rounded-full border-2 border-resume-section"></div>
              <div className="ml-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-resume-text">
                      {exp.company} | {exp.location}
                    </h3>
                    <p className="text-resume-text-light text-sm">{exp.position}</p>
                  </div>
                  <span className="text-resume-text-light text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-resume-text flex items-start gap-2">
                      <span className="text-resume-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceSection;