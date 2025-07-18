const ResumeHeader = () => {
  return (
    <div className="text-center py-8 resume-gradient border-b border-resume-border">
      <div className="relative">
        {/* Decorative lines */}
        <div className="absolute left-8 top-1/2 w-16 h-px bg-resume-text-light transform -translate-y-1/2"></div>
        <div className="absolute right-8 top-1/2 w-16 h-px bg-resume-text-light transform -translate-y-1/2"></div>
        <div className="absolute left-6 top-1/2 w-2 h-2 bg-resume-text-light rounded-full transform -translate-y-1/2"></div>
        <div className="absolute right-6 top-1/2 w-2 h-2 bg-resume-text-light rounded-full transform -translate-y-1/2"></div>
        
        <h1 className="text-4xl font-bold text-resume-text tracking-[0.3em] uppercase mb-2">
          AMIT GOEL
        </h1>
        <p className="text-resume-text-light text-lg tracking-wide">
          Software Engineer
        </p>
      </div>
    </div>
  );
};

export default ResumeHeader;