# Amit's Resume

A clean, lightweight web-based resume application built with React and TypeScript.

## Features

- 📄 Clean, professional resume layout
- 📱 Responsive design for all devices  
- 🖨️ Print-friendly styling
- 📥 PDF download functionality
- ⚡ Lightweight and fast loading

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **html2pdf.js** - PDF generation

## Project Structure

```
src/
├── features/resume/          # Resume feature module
│   ├── components/          # UI components
│   ├── helpers/            # Constants and utilities  
│   └── hooks/              # Custom hooks
├── pages/                  # Page components
├── lib/                    # Utilities
└── components/ui/          # Minimal UI components
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amit-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

This project is configured for GitHub Pages deployment:

1. Push to the main branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io/amit-resume/`

## License

MIT License
