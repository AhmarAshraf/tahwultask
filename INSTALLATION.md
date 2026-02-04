# TAHWUL Dashboard - Installation Guide

## Option 1: Add to an Existing Next.js Project

1. Copy these folders into your project:
- `app/`
- `components/`
- `lib/`
- `pages/`

2. Copy configuration files:
- `tailwind.config.js`
- `postcss.config.js`
- `next.config.js`

3. Install dependencies:
```bash
npm install recharts lucide-react
```

4. Run the project:
```bash
npm run dev
```

## Option 2: Create a New Project

1. Create a new app:
```bash
npx create-next-app@latest tahwul-dashboard
cd tahwul-dashboard
```

2. Copy all files from this repository into the new project.

3. Install dependencies:
```bash
npm install
```

4. Run the project:
```bash
npm run dev
```

## Notes

- Global styles live in `app/globals.css`.
- All mock data is in `lib/mockData.js`.
- Pages are in `pages/` and use the shared `components/` layout.
