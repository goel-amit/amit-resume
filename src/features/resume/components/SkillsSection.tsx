const SkillsSection = () => {
  const skills = [
    'React', 'Azure DevOps', 'ASP.NET', 'Java, JavaScript', 'Jira', 'Angular',
    'SQL', '.NET', 'C#', 'NodeJS', 'Git', 'GitHub', '.NET Core', '.NET Framework',
    'PL/SQL', 'MongoDB', 'Express JS', 'Linux'
  ];

  return (
    <div className="bg-resume-section rounded-lg p-6 shadow-sm border border-resume-border">
      <h2 className="text-xl font-semibold text-resume-text mb-4 uppercase tracking-wide">
        Skills
      </h2>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-resume-accent rounded-full flex-shrink-0"></div>
            <span className="text-sm text-resume-text">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;