# Muni - Municipal AI Agent Platform

This is a [Next.js](https://nextjs.org/) project for Muni, an AI-powered web and mobile application providing non-emergency municipal services to residents.

## Project Structure

```
muni_out-main/
├── app/                          # Next.js App Router pages
│   ├── admin-dashboard/          # Admin dashboard page
│   ├── resident-mobile-app/      # Resident mobile app page
│   ├── resident-web-app/         # Resident web app page
│   ├── faq/                      # FAQ page
│   ├── paradise/                 # Town of Paradise case study
│   ├── privacy/                  # Privacy policy page
│   ├── terms/                    # Terms of service page
│   ├── globals.css               # Global styles
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── src/                          # Source code
│   ├── components/               # React components
│   ├── constants/                # Constants and data
│   ├── hooks/                    # Custom React hooks
│   └── utils/                    # Utility functions
├── public/                       # Static assets
│   ├── icons/                    # SVG icons and small images
│   ├── images/                   # Large images and photos
│   └── fonts/                    # Custom fonts
└── ...config files
```

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- **Home** (`/`) - Main landing page with full feature showcase
- **Admin Dashboard** (`/admin-dashboard`) - Administrative interface for municipal management
- **Resident Mobile App** (`/resident-mobile-app`) - Mobile application features and capabilities
- **Resident Web App** (`/resident-web-app`) - Web application platform details
- **FAQ** (`/faq`) - Frequently asked questions
- **Privacy Policy** (`/privacy`) - Privacy policy and data handling
- **Terms of Service** (`/terms`) - Terms and conditions

## Key Features

- **AI-Powered Municipal Services** - Intelligent agent for resident assistance
- **Multi-Platform Support** - Web, mobile, and admin interfaces
- **Real-time Service Requests** - Submit and track municipal service requests
- **Payment Processing** - Handle taxes, utilities, and municipal fees
- **Document Management** - Upload and manage municipal documents
- **Analytics Dashboard** - Comprehensive reporting and analytics

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: JavaScript/JSX
- **Deployment**: Vercel-ready

## Development

The project uses a clean, organized structure:

- Components are modular and reusable
- Constants are centralized for easy maintenance
- Utilities provide common functionality
- Public assets are organized by type

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.