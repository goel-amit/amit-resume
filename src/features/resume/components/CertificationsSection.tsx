const CertificationsSection = () => {
  const certifications = [
    'AWS',
    'Multiplatform Mobile App Development with React Native'
  ];

  return (
    <div className="bg-resume-section rounded-lg p-6 shadow-sm border border-resume-border">
      <h2 className="text-xl font-semibold text-resume-text mb-4 uppercase tracking-wide">
        Certifications
      </h2>
      <div className="space-y-2">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-resume-accent rounded-full flex-shrink-0"></div>
            <span className="text-sm text-resume-text">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;