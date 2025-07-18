# Resume Feature

## Purpose and Overview
The Resume feature provides a complete web-based resume application with PDF download capabilities. It displays professional information including contact details, education, skills, certifications, work experience, and a profile summary in a clean, printable format.

## Directory Structure
```
src/features/resume/
├── components/           # UI components for resume sections
│   ├── ResumeHeader.tsx     # Name and title header
│   ├── ContactSection.tsx   # Contact information display
│   ├── DownloadButton.tsx   # PDF download functionality
│   ├── ProfileSection.tsx   # Profile summary
│   ├── EducationSection.tsx # Education details
│   ├── SkillsSection.tsx    # Skills list
│   ├── WorkExperienceSection.tsx # Work history
│   ├── CertificationsSection.tsx # Certifications
│   └── index.ts            # Component exports
├── hooks/               # Custom React hooks
│   ├── usePDFDownload.ts   # PDF generation hook
│   └── index.ts            # Hook exports
├── helpers/             # Utility functions and constants
│   ├── constants.ts        # Resume data constants
│   ├── formatters.ts       # Data formatting utilities
│   └── validators.ts       # Validation functions (future)
├── context.md           # This documentation file
└── index.tsx            # Feature entry point
```

## Component Documentation

### ResumeHeader
Displays the person's name and professional title with decorative styling.

### ContactSection
Shows contact information including phone, email, location, and LinkedIn profile using Lucide icons.

### DownloadButton
Fixed-position button that generates and downloads a PDF version of the resume using html2pdf.js.

### ProfileSection
Displays the professional summary/profile text.

### EducationSection
Shows educational background including university, degree, and CGPA.

### SkillsSection
Lists technical skills in a bullet-point format.

### WorkExperienceSection
Displays work history with company details, positions, and achievements in a timeline format.

### CertificationsSection
Lists professional certifications.

## State Management
This feature currently uses constants for data storage. Future enhancements could include:
- Context for dynamic data management
- Form editing capabilities
- Multiple resume templates

## Hooks

### usePDFDownload
Custom hook that provides PDF download functionality using html2pdf.js library.

```typescript
const { downloadPDF } = usePDFDownload();
downloadPDF('resume-content', 'Custom-Resume.pdf');
```

## Dependencies
- `html2pdf.js` - PDF generation
- `lucide-react` - Icons
- Tailwind CSS design system

## API Integration
Currently uses static data. Future versions could include:
- Resume data API endpoints
- Profile image upload
- Dynamic content management

## Design System
Uses custom CSS variables for consistent theming:
- `--resume-gradient` - Background gradient
- `--resume-section` - Section backgrounds
- `--resume-text` - Primary text color
- `--resume-text-light` - Secondary text color
- `--resume-border` - Border colors
- `--resume-accent` - Accent color for highlights