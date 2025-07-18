import {
  ResumeHeader,
  ContactSection,
  EducationSection,
  SkillsSection,
  CertificationsSection,
  ProfileSection,
  WorkExperienceSection,
  DownloadButton,
} from '@/features/resume';

const Index = () => {
  return (
    <div className="min-h-screen resume-gradient print-friendly">
      <DownloadButton />
      
      <div id="resume-content" className="max-w-7xl mx-auto">
        <ResumeHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ContactSection />
            <EducationSection />
            <SkillsSection />
            <CertificationsSection />
          </div>
          
          {/* Right Content */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileSection />
            <WorkExperienceSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
