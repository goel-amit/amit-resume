import { useCallback } from 'react';
import html2pdf from 'html2pdf.js';
import { getPDFConfig } from '../helpers/formatters';

export const usePDFDownload = () => {
  const downloadPDF = useCallback((elementId = 'resume-content', filename = "Amit's Resume.pdf") => {
    const element = document.getElementById(elementId);
    
    if (!element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }

    const config = getPDFConfig(filename);
    html2pdf().set(config).from(element).save();
  }, []);

  return { downloadPDF };
};