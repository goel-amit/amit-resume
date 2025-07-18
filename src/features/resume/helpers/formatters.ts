// PDF configuration for html2pdf.js
export const getPDFConfig = (filename = "Resume.pdf") => ({
  margin: 0.5,
  filename,
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { 
    scale: 2,
    useCORS: true,
    letterRendering: true
  },
  jsPDF: { 
    unit: 'in', 
    format: 'a4', 
    orientation: 'portrait' 
  }
});

// Format contact information for display
export const formatContactInfo = (contact: any) => [
  { icon: 'Phone', text: contact.phone },
  { icon: 'Mail', text: contact.email },
  { icon: 'MapPin', text: contact.location },
  { icon: 'Globe', text: contact.linkedin },
];

// Format work experience period
export const formatPeriod = (startYear: string, endYear: string | null) => {
  return endYear ? `${startYear} - ${endYear}` : `${startYear} - PRESENT`;
};