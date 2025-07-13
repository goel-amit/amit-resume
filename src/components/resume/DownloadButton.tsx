import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import html2pdf from 'html2pdf.js';

const DownloadButton = () => {
  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 0.5,
      filename: "Amit's Resume.pdf",
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
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="fixed top-6 right-6 z-50 print:hidden">
      <Button 
        onClick={downloadPDF}
        className="bg-resume-text hover:bg-resume-text/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 gap-2"
        size="lg"
      >
        <Download className="w-4 h-4" />
        Download PDF
      </Button>
    </div>
  );
};

export default DownloadButton;