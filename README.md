# وکیلیم (Vakilim) - Legal Tech Landing Page

A modern, responsive landing page for a legal tech startup with a beautiful dark theme and gold accents.

## Features

- Built with React and Vite
- RTL layout for Persian language
- Fully responsive design
- Dark theme with luxury gold accents
- Smooth animations with Framer Motion
- Tailwind CSS for styling

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Vazir Persian font

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/vakilim.git
cd vakilim
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory and can be deployed to any static hosting service.

## Project Structure

```
vakilim/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images and other assets
│   ├── components/   # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # Application entry point
│   └── index.css     # Global styles and Tailwind directives
├── index.html        # HTML template
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies and scripts
```

## Customization

- Colors and theme: Edit `tailwind.config.js` to change the color scheme
- Fonts: The Vazir font is already included, but you can change it in `index.css`
- Content: Update the text and images in the component files

## License

This project is licensed under the MIT License
