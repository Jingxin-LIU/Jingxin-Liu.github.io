# Academic Profile Website

A Jekyll-based academic personal website template for researchers in AI, Computer Science, and related fields.

## Overview

This is a clean, professional, and academic-focused personal website built with Jekyll and hosted on GitHub Pages. The site is designed to showcase:

- Professional profile and biography
- Research interests and directions
- Active research projects
- Publications and citations
- Teaching and mentoring information
- Contact information and social links

## Features

- **Clean, Academic Design**: Professional layout with emphasis on research content
- **Responsive Layout**: Works well on desktop, tablet, and mobile devices
- **Dark Theme**: Professional color scheme suitable for academic settings
- **Publication Management**: Organized publication listing by year and topic
- **Project Showcase**: Display and describe active research projects
- **SEO Optimized**: Built-in SEO tags and sitemap generation
- **Mobile Friendly**: Responsive design for all devices

## Project Structure

```
.
├── _config.yml                 # Main Jekyll configuration
├── _data/
│   └── social_links.yml       # Social media and contact links
├── _includes/                 # Reusable page components
├── _layouts/
│   └── default.html           # Main page layout
├── _publications/             # Publication entries (Markdown)
├── _projects/                 # Project entries (Markdown)
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── images/               # Site images and profile picture
├── index.md                   # Homepage
├── about.md                   # About page
├── research.md               # Research interests page
├── publications.md           # Publications listing page
├── projects.md              # Projects page
├── cv.md                    # Curriculum Vitae
├── contact.md               # Contact information
├── Gemfile                  # Ruby dependencies
└── README.md               # This file
```

## Setup Instructions

### Prerequisites

- Ruby (2.7 or higher)
- Bundler (`gem install bundler`)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jingxin-Liu/Jingxin-Liu.github.io.git
   cd Jingxin-Liu.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

### Deployment to GitHub Pages

The site automatically deploys to GitHub Pages when you push to the main branch. Ensure your repository name follows the pattern `username.github.io`.

## Customization

### Step 1: Update Basic Information

Edit `_config.yml`:
- Update `url`, `title`, `description`, `author`, `email`
- Replace `YOUR_SCHOLAR_ID` and `YOUR_ORCID_ID` with your actual IDs
- Update header navigation links if needed

### Step 2: Personalize Pages

**Homepage** (`index.md`):
- Update welcome message and research highlights
- Featured projects and recent publications will auto-populate from collections

**About** (`about.md`):
- Add your academic background and experience
- Include awards, teaching, and service information

**Research** (`research.md`):
- Describe your main research areas
- Detail methodologies and future directions

**CV** (`cv.md`):
- Fill in education history
- Add professional appointments and teaching experience
- List publications, grants, and service

**Contact** (`contact.md`):
- Update contact details and mailing address
- Add lab information and specific inquiry instructions

### Step 3: Add Publications

Create new files in `_publications/` folder:

```yaml
---
layout: post
title: "Paper Title"
authors: "Author Names"
venue: "Journal/Conference Name"
year: 2024
date: 2024-01-15
category: "AI"  # or "Pathology", "MIA"
doi: "10.XXXX/XXXXX"
excerpt: "Brief summary of the paper"
published: true
links:
  - label: "DOI"
    url: "https://doi.org/..."
  - label: "PDF"
    url: "https://..."
---

Optional: Full paper details or abstract
```

### Step 4: Add Projects

Create new files in `_projects/` folder:

```yaml
---
layout: post
title: "Project Title"
date: 2024-01-15
excerpt: "Brief project description"
description: "Longer description of the project"
featured: true
focus_area: "Research Area"
status: "Active"
tags:
  - "Tag1"
  - "Tag2"
funding: "Funding Source"
collaborators: "Partner Names"
---

Detailed project information
```

### Step 5: Add Profile Picture

1. Place your profile picture in `assets/images/`
2. Update GitHub avatar URL in `_config.yml` or directly reference the image

### Step 6: Update Social Links

Edit `_data/social_links.yml` to add or modify social media and contact links.

## Customization Options

### Change Color Scheme

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --primary-color: #1a3a52;
  --secondary-color: #2c5aa0;
  --text-color: #333;
  --accent-color: #d4534f;
}
```

### Add a Blog Section

Create a `_posts/` directory and add blog posts in the format `YYYY-MM-DD-title.md`. Update `_config.yml` to include the posts in navigation.

### Modify Theme

The site uses the Jekyll Minimal theme as a base but is heavily customized. To change the theme, update the `theme` line in `_config.yml`.

## Content Guidelines

### Academic Best Practices

- Keep descriptions professional and accurate
- Use consistent formatting for publication lists
- Include DOIs and links to published work
- Update publication counts and citations regularly
- Highlight collaborative and interdisciplinary work

### SEO Optimization

- Include descriptive page titles and meta descriptions
- Use clear, descriptive link text
- Organize content with proper heading hierarchy
- Add alt text to images

## Troubleshooting

### Site not building

- Ensure all YAML front matter is valid
- Check for syntax errors in `_config.yml`
- Clear the build cache: `rm -rf _site/`
- Run `bundle update` to update dependencies

### Images not showing

- Ensure image paths are relative to the site root
- Use `{{ '/path/to/image' | relative_url }}` in templates
- Check that image files exist in `assets/images/`

### Jekyll not installing

- Update Ruby: `brew install ruby` (macOS)
- Ensure Bundler is installed: `gem install bundler`
- Clear bundle cache: `bundle clean`

## Maintenance

### Regular Updates

- Update publication and project lists throughout the year
- Review and update CV annually
- Check all external links for validity
- Update contact information as needed

### Performance

- Use optimized images (< 500KB for JPG/PNG)
- Minimize CSS/JavaScript
- Test on multiple browsers
- Monitor page load times

## License

This template is provided as-is for academic use. Feel free to modify and adapt it for your needs.

## Credits

- Theme based on Jekyll Minimal theme
- Icons and styling inspired by academic websites
- Built with Jekyll and hosted on GitHub Pages

## Support

For issues, questions, or suggestions:
1. Check GitHub Issues in the repository
2. Refer to Jekyll documentation: https://jekyllrb.com/docs/
3. See GitHub Pages docs: https://docs.github.com/en/pages

---

**Last Updated:** March 2024
