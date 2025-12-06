# YACMS Client - Template

Template repository for creating a static website with YACMS.

## Project Structure

```text
├── .cms/                   # Site content and configuration
│   ├── _shared/            # Shared blocks across pages
│   │   ├── navigation.json
│   │   └── footer.json
│   ├── home/               # Home page
│   │   ├── page.json
│   │   └── [blocks].json
│   └── [other-pages]/
│
├── public/                 # Static assets
│   ├── CNAME               # Custom domain (GitHub Pages)
│   ├── .nojekyll           # Required for GitHub Pages
│   └── [images, favicon, etc.]
│
└── README.md
```

## Quick Start

1. Click **"Use this template"** → **"Create a new repository"**
2. Add your `PAT_TOKEN` as a secret in your repository settings for GitHub Actions
3. Edit files in `.cms/` to customize your content
4. Add your assets to `public/`
5. Push to `main` branch to trigger deployment

## Folders

| Folder    | Description                                        |
| --------- | -------------------------------------------------- |
| `.cms/`   | Page configurations and block content (JSON files) |
| `public/` | Static assets (images, favicon, CNAME, .nojekyll)  |

Both folders are required for the YACMS to work as they will be scaffolded into the final website during the build process.

> [!IMPORTANT]:
> The `.nojekyll` file must be present in `public/` for GitHub Pages deployment to work correctly.

## Documentation

For detailed documentation on available components and configuration, see the [YACMS documentation](https://github.com/zestones/yacms).
