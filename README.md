# आरती संग्रह (Aarti Sangrah) - Jekyll Website

A complete collection of Marathi devotional Aartis built with Jekyll, optimized for SEO and performance.

## Features

- 🙏 **Complete Aarti Collection**: Categorized Marathi devotional songs
- 🔍 **Advanced Search**: Real-time search with transliteration support
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ⚡ **Performance Optimized**: Critical CSS, service workers, and caching
- 🚀 **SEO Optimized**: Structured data, meta tags, and multilingual support
- 🌐 **Multi-language**: Marathi primary with English SEO support

## Categories

- गणपती आरती (Ganpati Aarti)
- देवी आरती (Devi Aarti)
- विठोबा आरती (Vitthal Aarti)
- शिव आरती (Shiva Aarti)
- कृष्ण आरती (Krishna Aarti)
- हनुमान आरती (Hanuman Aarti)
- राम आरती (Ram Aarti)
- लक्ष्मी आरती (Lakshmi Aarti)
- सरस्वती आरती (Saraswati Aarti)
- सूर्य आरती (Surya Aarti)
- इतर आरत्या (Other Aartis)

## Quick Start

### Prerequisites

- Ruby 2.7+
- Bundler gem
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aartya
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Build and serve locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **Visit your site**
   ```
   http://localhost:4000
   ```

## Adding New Aartis

1. Create a new file in `_aartis/` directory
2. Use the following frontmatter template:

```yaml
---
layout: aarti
title_marathi: "आरतीचे नाव"
title_translit: "Aarti Name Transliteration"
title_en: "English Title"
category: ganpati  # See categories in _data/categories.yml
tags: ["tag1", "tag2"]
author: "Author Name"
date: 2025-01-01
audio: "/assets/audio/aarti-name.mp3"  # Optional
video: "https://www.youtube.com/embed/video-id"  # Optional
featured: false  # Set true for homepage display
meta_description: "SEO description"
keywords: "SEO keywords"
---

आरतीचे शब्द येथे लिहा...
```

## SEO Features

- **Structured Data**: JSON-LD schema for CreativeWork
- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Multilingual**: hreflang tags for mr, en, hi
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Prevents duplicate content issues

## Performance Features

- **Critical CSS**: Inlined above-the-fold styles
- **Service Worker**: Offline caching capability
- **Image Optimization**: WebP/AVIF support
- **Font Optimization**: Preloaded and subsetted fonts
- **JavaScript**: Minified and deferred loading
- **Compression**: Gzip/Brotli compression via .htaccess

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" and choose `main`

### Netlify

1. Connect your GitHub repository
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`

### Manual Deployment

```bash
bundle exec jekyll build
# Upload _site/ directory to your web server
```

## Customization

### Colors and Styling

Edit `_data/categories.yml` to modify category colors and icons.

### Search Configuration

Modify `assets/js/search.js` to customize search behavior.

### Performance Tuning

- Update `sw.js` for service worker caching rules
- Modify `_includes/performance.html` for optimization settings
- Adjust `.htaccess` for server-level optimizations

## Content Structure

```
├── _aartis/          # Individual aarti files
├── _data/           # Site data (categories, etc.)
├── _includes/       # Reusable components
├── _layouts/        # Page layouts
├── _plugins/        # Custom Jekyll plugins
├── assets/         # Static assets (CSS, JS, images, audio)
├── category/       # Auto-generated category pages
├── _config.yml     # Jekyll configuration
└── index.md        # Homepage
```

## Analytics & Monitoring

The site is prepared for:
- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring
- Error tracking with Sentry

Add your tracking IDs in `_config.yml`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add new aartis or improvements
4. Submit a pull request

## License

This project is licensed under the MIT License. The devotional content is in the public domain.

## Support

For technical issues, please open an issue on GitHub.
<!-- For content suggestions, contact: aarti collection -->

---

**Made with ❤️ for preserving Marathi devotional heritage**