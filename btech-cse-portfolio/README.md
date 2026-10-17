# Devfolio — B.Tech CSE Portfolio

A polished, responsive, static React + Vite portfolio starter. It uses local configuration data, CSS-generated project artwork, Lucide icons, and no backend, database, external API, API key, or paid service. All identity and credential content is demonstration data until you replace it.

## Features

- Premium dark theme with an optional light-theme toggle
- Responsive sticky navigation and mobile menu
- Hero, highlights, about, skills, projects, coding profiles, certificates, education, experience, achievements, resume CTA, contact, and footer sections
- Search projects by title, summary, or technology; filter by category; clear filters and empty state
- Expandable project case studies with optional repository/demo links
- Centralized editable data files
- Contact form validation that opens a prefilled email draft (does not send or store messages)
- Accessible labels, skip link, visible keyboard focus, semantic sections, and reduced-motion support
- GitHub Pages workflow included

## Requirements

- Node.js 20+ (Node.js 22 recommended)
- npm
- StackBlitz can run the project in a browser; local development can use VS Code

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To check the production bundle:

```bash
npm run build
npm run preview
```

## StackBlitz

1. Open <https://stackblitz.com/fork/vite-react>.
2. Replace the starter files with the files from this project (or import the ZIP/repository if your StackBlitz UI offers that option).
3. Ensure `package.json` is present; StackBlitz installs dependencies automatically or use its terminal to run `npm install`.
4. The preview should start with `npm run dev`.

## Folder structure

```text
btech-cse-portfolio/
├── .github/workflows/deploy.yml
├── public/
│   ├── profile.svg
│   ├── icons/favicon.svg
│   ├── projects/          # add local project screenshots here
│   ├── certificates/      # add local certificate PDFs/images here
│   └── resume.pdf         # add your real PDF; omitted from starter
├── src/
│   ├── components/        # Navbar, reusable section heading, project card, projects
│   ├── data/              # all replaceable portfolio content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Personalize the portfolio

Most content is in `src/data/`. You do not need to edit React components to change ordinary portfolio details.

- **Name, title, intro, about, email, phone, college, location, profile photo, resume, social links, highlights:** `src/data/profile.js`
- **Skill groups:** `src/data/skills.js`
- **Projects:** `src/data/projects.js`
- **Coding profile URLs, usernames, and manually maintained statistics:** `src/data/codingProfiles.js`
- **Certificates:** `src/data/certificates.js`
- **Education timeline:** `src/data/education.js`
- **Internships and professional experience:** `src/data/experience.js`
- **Achievements, contests, clubs, and publications:** `src/data/achievements.js`

### Replace the profile photo

Put your own optimized image in `public/`, then set `image: './your-photo.jpg'` in `src/data/profile.js`. The supplied `public/profile.svg` is an illustrative placeholder, not a real person's portrait. If the file is missing, a monogram fallback is displayed.

### Add a resume

Copy your real resume PDF to `public/resume.pdf`, then set `resumeAvailable: true` in `src/data/profile.js`. Leave it `false` until you add the file; the site will not show a broken download link. The link path is `./resume.pdf` for root and GitHub Pages project deployments.

### Add a project

Add an object to `src/data/projects.js` using the existing schema:

```js
{
  id: 'my-project',
  title: 'My Project',
  category: 'Web Development',
  featured: true,
  summary: 'A short, accurate summary.',
  problem: 'What problem did it address?',
  solution: 'What did you build?',
  features: ['Feature one', 'Feature two'],
  technologies: ['React', 'JavaScript'],
  contribution: 'What you personally implemented.',
  image: '',
  repo: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
  demo: '',
  status: 'Completed',
  date: 'Month YYYY'
}
```

Leave `repo` or `demo` as an empty string if no real link exists. Project art currently uses local CSS illustrations, so no screenshot is required.

### Add certificates and achievements

Add only real, earned credentials to `src/data/certificates.js`. Each item may include `id`, `title`, `issuer`, `date`, `category`, `file` (for example `./certificates/certificate.pdf`), and `verificationUrl`. Put files under `public/certificates/`. The certificates section stays hidden while the array is empty. Achievements follow the schema already illustrated by `src/data/achievements.js` consumers: `title`, `date`, `description`, optional `organization`, and optional `url`.

### Update coding profiles and stats

Edit `src/data/codingProfiles.js`. Use your actual profile URLs and usernames. Add `stat` only when you have checked the value yourself; no live statistics are fetched.

### Education and experience

Edit `src/data/education.js` and `src/data/experience.js`. Experience can remain `[]` if you have none to list. Never present sample text as a real credential or employer.

## Free deployment

### GitHub Pages (workflow included)

1. Create a new GitHub repository, for example `my-portfolio`. For the included workflow, a public repository is the simplest setup.
2. From the project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Build developer portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
   git push -u origin main
   ```

3. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. The included `.github/workflows/deploy.yml` builds with `VITE_BASE=/<repository-name>/` and deploys `dist` on each push to `main`.
5. Open the URL shown under **Settings → Pages** or in the workflow deployment environment. Wait for the workflow to finish before testing.
6. If deploying to a user site named `YOUR-USERNAME.github.io`, change the workflow build environment to `VITE_BASE: /` instead of the repository-name base.

`vite.config.js` reads `VITE_BASE` and defaults to `/` for local development. Keep public asset references relative (the starter uses `./profile.svg` and `./resume.pdf`) so they work under a repository subpath.

### Cloudflare Pages alternative

1. Push the project to GitHub.
2. In Cloudflare Pages, create a project connected to that repository.
3. Set build command to `npm run build` and output directory to `dist`.
4. For a repository subpath, the simplest option is to set `VITE_BASE=/` for a root-hosted Cloudflare Pages site.
5. Deploy and test all sections, profile image, and resume link at the provided `pages.dev` URL.

## Troubleshooting

- **Blank page / import error:** check the terminal and browser console; confirm filenames and capitalization match imports, then run `npm install`.
- **Dependency issue:** remove `node_modules` and `package-lock.json` if present, then run `npm install` again.
- **Broken profile photo:** confirm the image is inside `public/` and the path in `profile.js` starts with `./`.
- **Resume link absent:** expected until you add `public/resume.pdf` and set `resumeAvailable: true`.
- **GitHub Pages assets are broken:** confirm the workflow is enabled and `VITE_BASE` uses `/<exact-repository-name>/`; trigger a new push after changing it.
- **Contact form does not send automatically:** this is intentional. It validates the fields and opens the visitor's email application; actual sending is handled by that application.
- **No certificate/achievement section:** these sections are hidden until real entries are added.

## Quality and honesty notes

The sample name, biography, highlights, skill labels, projects, education, usernames, and social URLs are illustrative and must be replaced before publishing. Project links are intentionally blank unless they point to a general platform homepage. No certificates, work history, rankings, statistics, or awards are fabricated as verified facts. This is a static site and makes no API calls.
