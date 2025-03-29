
# FarmSage Project Setup

This guide will help you set up the FarmSage project for local development after cloning it from GitHub.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:
- Node.js (version 14.x or higher)
- npm (comes with Node.js)
- Git

## Setup Steps

1. Clone the repository to your local machine using Git:
   ```
   git clone <your-github-repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd farmsage
   ```

3. Install the project dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```
   (or the port specified in your console output)

## Project Structure

- `src/` - Contains all source code
  - `components/` - Reusable UI components
  - `pages/` - Main page components
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and helpers
- `public/` - Static assets

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Adding New Features

To add new features:
1. Create components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routes in `src/App.tsx`

## Need Help?

If you encounter any issues or have questions, please open an issue on GitHub or contact the project maintainer.
