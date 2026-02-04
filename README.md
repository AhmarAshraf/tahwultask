# TAHWUL Dashboard - Next.js Implementation

A comprehensive dashboard and detail view implementation for digital transformation tracking and compliance management.

## Features

### Dashboard (Home Page)
- Project timeline visualization with status indicators
- Summary statistics cards with key metrics
- Progress status breakdown by perspectives
- 12-month performance chart
- Overall compliance score gauge
- Top performing perspective leaders
- Recent activities feed
- Audit readiness widget

### Perspectives Detail Page
- Header with category, title, and progress indicator
- Evidence summary cards (Total, Under Review, In Progress, Completed)
- Tab navigation (Overview, Evidence)
- Structured content sections (Objective, Requirements, Scope)
- Leaders/owners display
- Evidence documents table with filtering
- Comments section
- Recent activities panel

### Tracking Screen
- Summary metrics dashboard
- Advanced filtering and search
- Comprehensive tracking table with progress indicators
- Team overview panel
- Upcoming deadlines
- Risk alerts

## Tech Stack

- Framework: Next.js 16
- Styling: Tailwind CSS
- Charts: Recharts
- Icons: Lucide React
- Language: JavaScript (JSX)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Project Structure

```
├── app/
│   └── globals.css          # Global styles with custom CSS
├── components/
│   ├── Layout.jsx           # Main layout wrapper
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── Header.jsx           # Top header with search and user menu
│   ├── StatCard.jsx         # Summary statistics card
│   ├── Timeline.jsx         # Project timeline component
│   ├── ProgressCard.jsx     # Progress status card
│   ├── PerformanceChart.jsx # Bar chart for performance
│   ├── ComplianceScore.jsx  # Circular gauge for compliance
│   ├── TopPerformers.jsx    # Top performers list
│   ├── RecentActivities.jsx # Activity feed
│   └── AuditReadiness.jsx   # Audit readiness widget
├── lib/
│   └── mockData.js          # Mock data for all components
├── pages/
│   ├── _app.jsx             # Next.js app wrapper
│   ├── index.jsx            # Dashboard page
│   ├── perspectives.jsx     # Perspectives detail page
│   ├── tracking.jsx         # Tracking screen
│   ├── tasks.jsx            # Placeholder page
│   ├── documents.jsx        # Placeholder page
│   ├── reports.jsx          # Placeholder page
│   └── users.jsx            # Placeholder page
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Pages

- / - Dashboard with all widgets and overview
- /perspectives - Strategic planning detail view
- /tracking - Criteria tracking dashboard
- /tasks - Tasks (placeholder)
- /documents - Documents (placeholder)
- /reports - Reports (placeholder)
- /users - Users and Roles (placeholder)

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`.

### Fonts
Inter and Sora are imported in `app/globals.css`.

### Data
All mock data is in `lib/mockData.js`.

## License

This project is for demonstration purposes.
# tahwultask
