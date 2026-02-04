# TAHWUL Dashboard - Quick Start Guide

## Prerequisites
- Node.js 18 or higher
- npm or yarn

## Installation Steps

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## File Structure Overview

```
app/            # Global styles
components/     # UI components
lib/            # Mock data
pages/          # Routes
```

## Navigation

- Dashboard - /
- Perspectives - /perspectives
- Tracking - /tracking
- Tasks - /tasks
- Documents - /documents
- Reports - /reports
- Users - /users

## Troubleshooting

- Styles not loading: ensure `app/globals.css` is imported in `pages/_app.jsx`
- Charts not rendering: ensure `recharts` is installed
- Icons not showing: ensure `lucide-react` is installed
