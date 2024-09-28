# Team Waterloo 2024 Wiki

Welcome! This repository houses the coding assets needed to build our team's wiki (HTML, CSS, Sass, JavaScript, TypeScript, etc.), all powered by the [Astro](https://astro.build/) static site generator.

Images, icons, and fonts are stored on `static.igem.wiki` using [tools.igem.org](https://tools.igem.org), while videos have been embedded from [iGEM Video Universe](https://video.igem.org).

For up-to-date requirements, resources, help, and guidance: [competition.igem.org/deliverables/team-wiki](https://competition.igem.org/deliverables/team-wiki).

## 🛠️ Deployment

This project is configured for deployment on [GitLab Pages](https://gitlab.igem.org/2024/waterloo), and automated through GitLab CI/CD. Most of the commit history and project details can be found in our [GitHub repository](https://github.com/igem-waterloo/wiki2024), while only the most recent updates are reflected on GitLab.

For instructions on deploying Astro projects to GitLab Pages: [https://docs.astro.build/en/guides/deploy/gitlab/](https://docs.astro.build/en/guides/deploy/gitlab/). 

## 💻 Getting Started

To work on this project locally, refer to the following:

1. **Clone** this repository to your local machine
```bash
git clone https://gitlab.igem.org/2024/waterloo.git
cd waterloo
```

2. **Install** dependencies
```bash
npm install
```

3. **Run** development server
```bash
npm run dev  # starts at localhost:4321
```

4. **Build** project for deployment
```bash
npm run build
npm run preview  # preview build locally, before deploying
```

Get help running the Astro CLI with `npm run astro -- --help`, and refer to the docs for information on other available commands: [https://docs.astro.build/en/reference/cli-reference/](https://docs.astro.build/en/reference/cli-reference/).

## 🚀 Project Structure

```text
|__ assets/             -> Static assets (Images, fonts, etc.)
|__ node_modules/       -> Node.js dependencies
|__ src/                -> Source files 
│   ├── components/
│   ├── layouts/
│   └── pages/
|__ public/             -> Generated files after building 
|__ .gitignore          -> Ignored files and directories
|__ .gitlab-ci.yml      -> CI/CD configuration for automated build and deployment
|__ astro.config.mjs    -> Astro configuration file
|__ LICENSE             -> License CC-by-4.0 (*all wikis are required to have this license)
|__ package-lock.json   -> File for locking specific versions of dependencies
|__ package.json        -> Project dependencies and scripts
|__ README.md           -> This README file
|__ tsconfig.json       -> TypeScript configuration file
|__ env.d.ts            -> Type definitions for environment variables
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
