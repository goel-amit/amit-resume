// PDF Download functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            downloadPDF();
        });
    }
});

function downloadPDF() {
    const element = document.getElementById('resume-content');
    
    if (!element) {
        console.error('Resume content element not found');
        return;
    }

    const config = {
        margin: 0.5,
        filename: "Amit_Goel_Resume.pdf",
        image: { 
            type: 'jpeg', 
            quality: 0.98 
        },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            logging: false
        },
        jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait' 
        }
    };

    // Show loading state
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = 'Generating PDF...';
    downloadBtn.disabled = true;

    html2pdf()
        .set(config)
        .from(element)
        .save()
        .then(() => {
            // Reset button state
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        })
        .catch((error) => {
            console.error('PDF generation error:', error);
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
            alert('Error generating PDF. Please try again.');
        });
}

// Smooth scrolling for any internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Print functionality (alternative to PDF)
function printResume() {
    window.print();
}

// Add keyboard shortcut for PDF download (Ctrl+P or Cmd+P)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        downloadPDF();
    }
});