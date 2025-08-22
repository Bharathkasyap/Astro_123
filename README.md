# Astro 123 - React + Vite

A modern React application built with Vite for fast development and optimized builds.

## Features

- ⚡️ Vite for instant HMR and fast builds
- ⚛️ React 18 with modern hooks
- 🎨 Modern CSS with dark/light theme support
- 📁 Clean project structure with separated components
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimized build output

## Project Structure

```
astro-123/
├── public/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bharathkasyap/Astro_123.git
cd Astro_123
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will start the Vite dev server at `http://localhost:5173` with:
- Hot Module Replacement (HMR)
- Fast refresh
- Instant server start
- Optimized dependency pre-bundling

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- **React 18** - Modern React with concurrent features
- **Vite** - Next generation frontend tooling
- **ES Modules** - Modern JavaScript module system
- **CSS3** - Modern CSS with variables and media queries

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
