import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    { icon: Phone, text: '+91-9041777452' },
    { icon: Mail, text: 'goelamit756@gmail.com' },
    { icon: MapPin, text: 'Hyderabad, India' },
    { icon: Globe, text: 'linkedin.com/in/ag0909' },
  ];

  return (
    <div className="bg-resume-section rounded-lg p-6 shadow-sm border border-resume-border">
      <h2 className="text-xl font-semibold text-resume-text mb-4 uppercase tracking-wide">
        Contact
      </h2>
      <div className="space-y-3">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <item.icon className="w-4 h-4 text-resume-text-light flex-shrink-0" />
            <span className="text-resume-text text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;