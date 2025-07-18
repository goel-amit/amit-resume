const EducationSection = () => {
  return (
    <div className="bg-resume-section rounded-lg p-6 shadow-sm border border-resume-border">
      <h2 className="text-xl font-semibold text-resume-text mb-4 uppercase tracking-wide">
        Education
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-resume-text">Chitkara University</h3>
          <p className="text-resume-text-light text-sm">Patiala, Punjab</p>
          <p className="text-resume-text-light text-sm font-medium mt-1">2016 - 2020</p>
          <ul className="mt-2 space-y-1">
            <li className="text-sm text-resume-text">
              • Bachelor of Engineering Computer Science & Engineering
            </li>
            <li className="text-sm text-resume-text">
              • CGPA: 8.7
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;