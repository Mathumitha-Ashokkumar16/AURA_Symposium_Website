# AURA '26 — National Level Technical Symposium

A modern, animated, responsive frontend website for **AURA '26**, the National Level Technical Symposium conducted by **Adithya Institute of Technology**.

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (design system, glassmorphism, gradients)
- **Framer Motion** (scroll animations, modals, hover effects)
- **React Icons** (Hi*, Fa*)

## 📁 Folder Structure

```
AURA/
├── public/                 # Static assets (none required for base run)
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI: Button, SectionTitle
│   │   ├── Navbar.jsx      # Sticky nav + mobile hamburger
│   │   ├── ScrollProgress.jsx
│   │   ├── BackToTop.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Events.jsx
│   │       ├── DepartmentModal.jsx
│   │       ├── Timeline.jsx
│   │       ├── Prizes.jsx
│   │       ├── Coordinators.jsx
│   │       ├── Contact.jsx
│   │       └── Footer.jsx
│   ├── data/
│   │   ├── departments.js   # Department & event list
│   │   └── coordinators.js # Faculty & student coordinators
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Setup & Run

1. **Prerequisites:** Node.js 18+ and npm (or yarn/pnpm).

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```
   Open the URL shown (e.g. `http://localhost:5173`).

4. **Production build:**
   ```bash
   npm run build
   ```
   Output is in `dist/`. Preview with:
   ```bash
   npm run preview
   ```

## 🗺 Contact Map

The Contact section embeds a Google Map centered on Coimbatore. To show **Adithya Institute of Technology** exactly:

1. Open [Google Maps](https://maps.google.com), search for the institute.
2. Click **Share** → **Embed a map** → copy the `src` URL.
3. In `src/components/sections/Contact.jsx`, replace the `src` of the `<iframe>` with that URL.

## ✨ Features

- **Design:** Teal/cyan futuristic theme, glassmorphism cards, gradient text, glow effects.
- **Sections:** Hero, About, Departments & Events (with modals), Timeline, Prizes, Coordinators, Contact, Footer.
- **Interactions:** Smooth scroll, sticky navbar, scroll progress bar, back-to-top, hover animations, button ripple, mobile hamburger menu.
- **Responsive:** Mobile-first; layout and typography scale for all screen sizes.

## 📄 License

For use by Adithya Institute of Technology for AURA '26.
