**Live Site:** [https://tianoshield.github.io/Tianoshield_WebPage/](https://tianoshield.github.io/Tianoshield_WebPage/)

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TianoShield/Tianoshield_WebPage.git
   cd Tianoshield_WebPage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```


### Build to GitHub Pages(gh-pages)

Manual: 
```bash
npm run deploy
```

Automated:
#### `.github/workflows/`
Contains GitHub Actions workflow files for CI/CD automation.
- **`deploy.yml`**: Automatically builds and deploys the site to GitHub Pages when code is pushed to the master branch.


## Key Configuration Details

### `vite.config.js`
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Tianoshield_WebPage/',  //  Must match GitHub repo name exactly
})
```



### Directory Descriptions

#### `public/`
Static assets that are copied directly to the build output.
- **`_redirects`**: Ensures all routes redirect to `index.html` for client-side routing to work on GitHub Pages.

#### `src/components/layout/`
Reusable layout components used across all pages.
- **`Layout.jsx`**: Wraps all pages with navbar and footer, provides consistent structure.
- **`Navbar.jsx`**: Responsive navigation bar with links to all pages, mobile menu toggle.
- **`Footer.jsx`**: Site footer with quick links, resources, contact info, and copyright.

#### `src/pages/`
Individual page components, each representing a route.

| File | Route | Description |
|------|-------|-------------|
| `Home.jsx` | `/` | Landing page with project overview, statistics, and call-to-action |
| `About.jsx` | `/about` | Detailed information about TianoShield, mission, and objectives |
| `Team.jsx` | `/team` | Two tabs: Implementation team members and Consultants/Collaborators |
| `Contact.jsx` | `/contact` | Contact form that opens default email client |
| `Deliverables.jsx` | `/deliverables` | Placeholder for project deliverables (under construction) |
| `Events.jsx` | `/events` | Placeholder for conferences and events (under construction) |
| `News.jsx` | `/news` | Placeholder for news and updates (under construction) |
| `Resources.jsx` | `/resources` | Placeholder for papers, tools, datasets (under construction) |

#### Root Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Tailwind CSS customization: colors, fonts, theme extensions |
| `postcss.config.js` | PostCSS plugins configuration for Tailwind CSS processing |
| `package.json` | Project metadata, dependencies, npm scripts |
| `.gitignore` | Excludes `node_modules/`, `dist/`, `.env` from version control |
| `.eslintrc.cjs` | ESLint rules for code quality and consistency |
