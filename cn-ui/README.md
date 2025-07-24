✅ Required Packages
React & React DOM

Usually installed by default if you used create-react-app or Vite.


npm install react react-dom
Tailwind CSS

For styling and responsive utility classes.


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
🔧 Then configure tailwind.config.js:


content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
And in your src/index.css:


@tailwind base;
@tailwind components;
@tailwind utilities;
Lucide Icons

For nice and modern icon set like Sun, Moon, ArrowRight.


npm install lucide-react
Google Fonts (Inter)

No npm install needed. It’s imported via CSS:


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;80