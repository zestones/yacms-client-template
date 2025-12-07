# YACMS Client - Template

Template repository for creating a static website with YACMS.

## Client Repository Structure

```text
├── yablocks/               # Site content and configuration
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
│   ├── robots.txt          # SEO configuration
│   └── [images, favicon, etc.]
│
└── README.md
```

## Quick Start

1. Click **"Use this template"** → **"Create a new repository"**
2. Add your `PAT_TOKEN` as a secret in your repository settings for GitHub Actions
3. Update the workflow file in `.github/workflows/request-build.yml` to set your repository name
4. Edit files in `yablocks/` to customize your content
5. Add your assets to `public/`
6. Push to `main` branch to trigger deployment

## Workflow Configuration

There is two things to configure in the GitHub Actions workflow file located at `.github/workflows/request-build.yml`:

1. **Repository Name**: Update the `repository` field in the workflow file to point to your repository.
2. **Client Payload**: Update the `client-payload` field to match your repository name.

> [!IMPORTANT]
> Make sure to set the `PAT_TOKEN` secret in your repository settings. This token is required for the workflow to trigger builds in the YACMS central repository.

## Folders Structure

| Folder      | Description                                        |
| ----------- | -------------------------------------------------- |
| `yablocks/` | Page configurations and block content (JSON files) |
| `public/`   | Static assets (images, favicon, CNAME, .nojekyll)  |

Both folders are required for the YACMS to work as they will be scaffolded into the final website during the build process.

> [!IMPORTANT]
> The `.nojekyll` file must be present in `public/` for GitHub Pages deployment to work correctly.

CNAME file is optional and should contain your custom domain if you are using one. It is placed in the `public/` folder to be included in the final build.

> [!NOTE]
> The CNAME **must** be place at the root of the `public/` folder to be recognized by GitHub Pages.
> Because the build process scaffolds the `public/` folder into the root of the final website.

## SEO Configuration

The `robots.txt` file in the `public/` folder is used to manage how search engines crawl and index your site. Customize it as needed to improve your site's SEO.

> [!TIP]
> YACMS automatically generates a sitemap for your site, which is essential for SEO.

## Documentation

For detailed documentation on available components and configuration, see the [YACMS documentation](https://github.com/zestones/yacms).
