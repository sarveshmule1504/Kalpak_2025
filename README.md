# 🎪 Kalpak 2025

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20Ready-success?style=flat-square)](https://en.wikipedia.org/wiki/Responsive_web_design)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Page Guide](#page-guide)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

**Kalpak 2025** is a modern, responsive web platform designed as the central hub for event management and attendee engagement. Built with clean, semantic HTML5 and vanilla JavaScript, this application provides event organizers and participants with a seamless experience for discovering events, registering for activities, and connecting with the organizing team.

### Purpose

Kalpak 2025 serves multiple functions:
- 📅 **Event Discovery** - Central directory of all scheduled events and activities
- 👥 **Community Connection** - Showcase leadership team and event organizers
- 📝 **Attendee Registration** - Simple, streamlined registration process
- 📧 **Direct Communication** - Contact forms for inquiries and feedback
- 📱 **Accessibility** - Mobile-first responsive design for all devices

### Target Audience

- Event organizers and administrators
- Event participants and attendees
- Community members interested in Kalpak 2025
- Mobile and desktop users

---

## Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🏠 **Landing Page** | Eye-catching homepage with event highlights and calls-to-action | ✅ Complete |
| 📅 **Event Management** | Comprehensive event schedule with filtering and search capabilities | ✅ Complete |
| 📝 **Registration Portal** | User-friendly registration form with validation and confirmation | ✅ Complete |
| 👨‍💼 **Leadership Showcase** | Detailed team profiles with photos and bio information | ✅ Complete |
| 📖 **About Section** | Event history, mission statement, and organization overview | ✅ Complete |
| 📬 **Contact Forms** | Multiple contact channels with form validation and messaging | ✅ Complete |
| 📱 **Responsive Design** | Optimized layouts for desktop (1920px), tablet (768px), and mobile (320px) | ✅ Complete |
| ⚡ **Interactive Elements** | Smooth animations, hover effects, and dynamic UI interactions | ✅ Complete |
| 🎨 **Modern Styling** | Professional design system with consistent branding | ✅ Complete |
| ✅ **Form Validation** | Client-side validation for all user inputs | ✅ Complete |

---

## Tech Stack

### Frontend Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup and structure | Latest |
| **CSS3** | Styling, animations, and responsive layouts | Latest |
| **JavaScript (Vanilla)** | Interactivity and form validation | ES6+ |

### Key Capabilities

- **Responsive Design:** Mobile-first approach with breakpoints for all device sizes
- **Vanilla JavaScript:** No external dependencies, pure JavaScript functionality
- **CSS Animations:** Smooth transitions and keyframe animations
- **Form Validation:** Real-time input validation with error messaging
- **Accessible:** WCAG 2.1 compliance for accessibility standards

### Optional Enhancements

- **Git Hosting:** GitHub Pages for free static hosting
- **Development:** Live Server extension for hot-reloading
- **Build Tools:** Future support for bundlers (Webpack, Parcel)

---

## Project Structure

```
Kalpak_2025/
├── 📄 README.md                      # Project documentation (this file)
├── 📄 index.html                     # Main landing/home page ⭐ (rename from index-2.html)
├── 📄 about.html                     # About event and organization
├── 📄 events.html                    # Event schedule and listings
├── 📄 leadership.html                # Team and leadership profiles
├── 📄 registration.html              # Attendee registration form
├── 📄 contact.html                   # Contact information and forms
│
├── 🎨 Assets/
│   ├── 📄 style-1.css               # Main stylesheet and design system
│   ├── 📄 script-1.js               # Core JavaScript functionality
│   └── 📁 kalpak/                   # Images, icons, and media assets
│       ├── images/
│       ├── icons/
│       ├── videos/
│       └── fonts/
│
├── 📁 .github/
│   ├── 📝 CONTRIBUTING.md           # Contribution guidelines
│   └── 🚨 ISSUE_TEMPLATE/           # Issue templates
│
└── 📁 docs/
    ├── 📖 SETUP.md                  # Detailed setup guide
    ├── 🎨 DESIGN_SYSTEM.md          # Design and styling guidelines
    ├── 📖 PAGE_GUIDE.md             # Detailed page descriptions
    └── 🚀 DEPLOYMENT.md             # Deployment instructions
```

### File Descriptions

| File | Purpose | Size | Maintenance |
|------|---------|------|-------------|
| `index.html` | Landing page - first user touchpoint | ~5KB | Modify for homepage updates |
| `about.html` | Organization background and mission | ~4KB | Update with new information |
| `events.html` | Complete event schedule and listings | ~6KB | Update for new events |
| `leadership.html` | Team member profiles and bios | ~5KB | Update team information |
| `registration.html` | User registration form | ~4KB | Modify registration fields |
| `contact.html` | Contact forms and information | ~4KB | Update contact details |
| `style-1.css` | All styling and animations | ~15KB | Customize colors/fonts |
| `script-1.js` | All interactivity and validation | ~10KB | Add new functionality |
| `kalpak/` | Media assets and resources | Variable | Manage images/videos |

---

## Getting Started

### Prerequisites

- **Web Browser:** Chrome, Firefox, Safari, Edge (latest versions)
- **Code Editor:** VS Code, Sublime Text, or similar
- **Git:** For version control (optional but recommended)
- **Live Server Extension:** For development (optional)

### Local Installation

#### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/sarveshmule1504/Kalpak_2025.git
cd Kalpak_2025

# OR using SSH
git clone git@github.com:sarveshmule1504/Kalpak_2025.git
cd Kalpak_2025
```

#### Step 2: Verify File Structure

```bash
# On Windows
dir /s

# On macOS/Linux
ls -la

# Should see: index.html, about.html, events.html, leadership.html, 
#             registration.html, contact.html, style-1.css, script-1.js, kalpak/
```

#### Step 3: Run the Project

**Option A: Direct Browser (Quickest)**
```bash
# Navigate to the project folder
cd Kalpak_2025

# Open index.html directly in browser
# Windows: Right-click index.html → Open with → Choose browser
# macOS: Double-click index.html
# Linux: Open index.html with your default browser
```

**Option B: Live Server in VS Code (Recommended)**
```bash
1. Install "Live Server" extension in VS Code
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. Start Live Server
   - Right-click on index.html
   - Select "Open with Live Server"
   - Browser opens automatically at http://127.0.0.1:5500

3. Auto-reload on file save
   - Edit any file and save (Ctrl+S)
   - Browser automatically refreshes
```

**Option C: Python Simple Server (macOS/Linux)**
```bash
# Navigate to project directory
cd Kalpak_2025

# Python 3
python -m http.server 8000

# Open browser to http://localhost:8000
```

**Option D: Node.js HTTP Server**
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Start server
http-server

# Open browser to http://localhost:8080
```

### Verification Checklist

- [ ] Repository cloned successfully
- [ ] All HTML files present
- [ ] CSS and JS files loading
- [ ] Browser opens without errors
- [ ] Navigation links work
- [ ] Responsive design visible at different screen sizes

---

## Deployment

### GitHub Pages (Free Hosting)

#### Prerequisites
- GitHub account
- Repository pushed to GitHub
- Admin access to repository

#### Deployment Steps

1. **Rename Main File**
   ```bash
   # IMPORTANT: Rename index-2.html to index.html
   # GitHub Pages requires index.html as the entry point
   git mv index-2.html index.html
   git commit -m "refactor: rename index-2.html to index.html for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section (left sidebar)
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" or "master"
   - Folder: Select "/ (root)"
   - Click "Save"

3. **Access Your Site**
   - Wait 1-2 minutes for deployment
   - Visit: `https://YOUR_USERNAME.github.io/Kalpak_2025`
   - Site is now live!

4. **Custom Domain (Optional)**
   - Purchase domain from registrar
   - Add domain in GitHub Pages settings
   - Create DNS records pointing to GitHub Pages
   - Verify domain in settings

### Vercel Deployment

#### Steps

1. **Connect Repository**
   - Go to [Vercel.com](https://vercel.com)
   - Click "New Project"
   - Select GitHub repository
   - Click "Import"

2. **Configure**
   - Framework Preset: "Other"
   - Root Directory: "./" (default)
   - Build Command: (leave empty - static site)
   - Output Directory: "./" (default)

3. **Deploy**
   - Click "Deploy"
   - Wait for build completion
   - Access: `https://YOUR_PROJECT.vercel.app`

### Netlify Deployment

#### Steps

1. **Connect Repository**
   - Go to [Netlify.com](https://netlify.com)
   - Click "Connect a repository"
   - Select GitHub and authorize
   - Choose Kalpak_2025 repository

2. **Configure**
   - Build command: (leave empty)
   - Publish directory: "./" (current folder)
   - Click "Deploy"

3. **Access Site**
   - Netlify generates URL automatically
   - Custom domain available in settings

### Self-Hosted Deployment

#### Using Web Server (Apache/Nginx)

```bash
# Copy all files to web server directory
# Usually /var/www/html or similar

scp -r Kalpak_2025/* user@server:/var/www/html/kalpak_2025/

# Ensure index.html is readable by web server
chmod 644 /var/www/html/kalpak_2025/*
chmod 755 /var/www/html/kalpak_2025/
```

---

## Page Guide

### 🏠 Home Page (index.html)

**Purpose:** First impression and entry point

**Key Elements:**
- Hero banner with event highlights
- Quick event overview
- Call-to-action buttons (Register, Learn More)
- Featured events section
- Social media links
- Navigation menu

**Customization Tips:**
- Update event dates and details in hero section
- Change featured events to current activities
- Update social media links with your handles

---

### 📖 About Page (about.html)

**Purpose:** Tell the story and build connection

**Key Elements:**
- Event mission statement
- Organization history and background
- Core values and objectives
- Team highlights
- Achievements and statistics
- Newsletter signup (optional)

**Content to Update:**
- Organization name and details
- Historical milestones
- Mission and vision statements
- Key accomplishments
- Contact information

---

### 📅 Events Page (events.html)

**Purpose:** Showcase all events and activities

**Key Elements:**
- Event listing grid or table
- Event cards with details:
  - Date and time
  - Location
  - Description
  - Capacity
  - Registration link
- Filter/search functionality
- Category tags

**Event Information:**
```
Event Details Format:
- Event Name
- Date (YYYY-MM-DD)
- Time (HH:MM - HH:MM)
- Location (venue name/address)
- Category (Workshop, Panel, Social, etc.)
- Capacity (number of participants)
- Description (brief summary)
- Registration URL or button
```

---

### 👥 Leadership Page (leadership.html)

**Purpose:** Showcase organizing team

**Key Elements:**
- Team member cards with:
  - Professional photo
  - Name and title/role
  - Bio (50-100 words)
  - Social media links
  - Contact email (optional)
- Organized by department/role
- Search/filter capability

**Profile Information Template:**
```
Name: [Team Member Name]
Role: [Title/Position]
Bio: [Brief professional summary]
Photo: [300x300px headshot]
Links: [LinkedIn, Twitter, Email]
Department: [Organizing Committee/Team]
```

---

### 📝 Registration Page (registration.html)

**Purpose:** Streamlined attendee registration

**Key Elements:**
- Registration form with fields:
  - Full name (required)
  - Email address (required)
  - Phone number (optional)
  - Event selection (dropdown)
  - Dietary preferences (optional)
  - T-shirt size (optional)
  - Special requests/accessibility needs
  - Terms & conditions checkbox
- Form validation and error messages
- Confirmation message or email
- Success page redirect

**Form Validation Rules:**
```javascript
- Name: 3+ characters, letters only
- Email: Valid email format (name@domain.com)
- Phone: Valid format (optional)
- Event: At least one selected
- Terms: Must be checked
```

---

### 📬 Contact Page (contact.html)

**Purpose:** Enable communication and feedback

**Key Elements:**
- Contact information:
  - Email address(es)
  - Phone number(s)
  - Physical address
  - Social media handles
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Subject (required)
  - Message (required)
  - Phone (optional)
- Map integration (optional)
- Office hours
- Response time expectations

---

## Customization

### Updating Styling

#### Color Scheme

Edit `style-1.css` to update brand colors:

```css
/* Primary Colors */
:root {
  --primary-color: #FF6B6B;      /* Main brand color */
  --secondary-color: #4ECDC4;    /* Accent color */
  --success-color: #95E1D3;      /* Success states */
  --warning-color: #FFE66D;      /* Warnings */
  --danger-color: #FF6B6B;       /* Errors */
  --text-color: #333333;         /* Text */
  --background-color: #FFFFFF;   /* Background */
}
```

#### Fonts

```css
/* Font Stack - Update font family */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* or */
  font-family: 'Arial', sans-serif;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Georgia', serif;
  font-weight: bold;
}
```

#### Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small Devices (320px - 480px) */
@media (max-width: 480px) {
  /* Mobile styles */
}

/* Small Devices (481px - 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  /* Tablet styles */
}

/* Medium Devices (769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet landscape styles */
}

/* Large Devices (1025px+) */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

### Adding New Features

#### Add a New Page

1. Create new HTML file (e.g., `sponsors.html`)
2. Copy template from existing page:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Page Title - Kalpak 2025</title>
       <link rel="stylesheet" href="style-1.css">
   </head>
   <body>
       <!-- Header/Navigation -->
       <header>
           <!-- Navigation code -->
       </header>

       <!-- Main Content -->
       <main>
           <section class="container">
               <!-- Your content here -->
           </section>
       </main>

       <!-- Footer -->
       <footer>
           <!-- Footer code -->
       </footer>

       <script src="script-1.js"></script>
   </body>
   </html>
   ```

3. Add link to navigation in all pages
4. Add styling in `style-1.css`
5. Add functionality in `script-1.js`

#### Add Form Validation

```javascript
// In script-1.js

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
}
```

### Managing Assets

#### Directory Structure

```
kalpak/
├── images/
│   ├── heroes/           # Large banner images
│   ├── events/           # Event photos
│   ├── team/             # Team member photos
│   ├── logos/            # Logos and branding
│   └── icons/            # Small icon graphics
├── videos/
│   └── promotions/       # Promo videos
└── fonts/
    └── custom/           # Custom font files
```

#### Image Optimization

- **Hero images:** 1920x600px, <200KB each
- **Event images:** 600x400px, <100KB each
- **Team photos:** 300x300px, <50KB each
- **Icons:** SVG format when possible

#### Adding Images

```html
<!-- Responsive Images -->
<img 
  src="images/hero.jpg" 
  alt="Event Hero Banner" 
  loading="lazy"
  srcset="
    images/hero-mobile.jpg 480w,
    images/hero-tablet.jpg 768w,
    images/hero.jpg 1920w"
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 100vw,
         100vw">
```

---

## Browser Support

### Supported Browsers

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest 2 versions | ✅ Full |
| Firefox | Latest 2 versions | ✅ Full |
| Safari | Latest 2 versions | ✅ Full |
| Edge | Latest 2 versions | ✅ Full |
| Mobile Safari | iOS 12+ | ✅ Full |
| Chrome Mobile | Latest | ✅ Full |

### Testing Checklist

- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] iPhone/iPad
- [ ] Android devices
- [ ] Tablet view

### Browser Developer Tools

Test responsiveness:
```
Chrome/Edge: F12 or Ctrl+Shift+I
Firefox: F12 or Ctrl+Shift+I
Safari: Cmd+Option+I
```

---

## Contributing

### Contribution Workflow

#### 1. Fork the Repository
```bash
# Click "Fork" button on GitHub
# This creates your own copy
```

#### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/Kalpak_2025.git
cd Kalpak_2025
```

#### 3. Create Feature Branch
```bash
git checkout -b feature/amazing-feature

# Branch naming convention:
# feature/feature-name      - New features
# fix/bug-name             - Bug fixes
# docs/documentation-name  - Documentation updates
# style/styling-changes    - CSS/design changes
```

#### 4. Make Changes
```bash
# Edit files
# Test locally
# Verify functionality
```

#### 5. Commit Changes
```bash
git add .
git commit -m "type: brief description of changes"

# Commit message format:
# feat: add new feature description
# fix: resolve bug with specific functionality
# docs: update documentation or README
# style: update CSS or styling
# refactor: restructure code without changing functionality
```

#### 6. Push to Your Fork
```bash
git push origin feature/amazing-feature
```

#### 7. Create Pull Request
```
- Go to GitHub repository
- Click "Compare & pull request"
- Add descriptive title
- Add detailed description of changes
- Explain why this change is needed
- Reference related issues (#123)
```

### Code Standards

#### HTML Standards
```html
<!-- Use semantic HTML -->
<header><!-- Page header --></header>
<main><!-- Main content --></main>
<section><!-- Thematic grouping --></section>
<article><!-- Self-contained content --></article>
<aside><!-- Sidebar content --></aside>
<footer><!-- Page footer --></footer>

<!-- Use meaningful IDs and classes -->
<div id="main-content" class="container">
<!-- Not: <div id="div1" class="content"> -->

<!-- Always include alt text -->
<img src="image.jpg" alt="Descriptive text">
```

#### CSS Standards
```css
/* Use meaningful class names */
.event-card { /* Good */
}

.ec { /* Avoid */
}

/* Organize by component */
/* Button Styles */
.btn { }
.btn-primary { }
.btn-secondary { }

/* Proper indentation and formatting */
.class {
  property: value;
  another-property: value;
}
```

#### JavaScript Standards
```javascript
// Use meaningful variable names
const eventDate = new Date();  // Good
const ed = new Date();         // Avoid

// Use const by default, let if needed
const userEmail = 'user@example.com';
let counter = 0;

// Add comments for complex logic
// Calculate total price including tax
const totalPrice = basePrice * (1 + taxRate);

// Use proper indentation
function validateForm() {
  if (condition) {
    // Code
  }
}
```

### Creating Issues

Use GitHub Issues for:
- 🐛 **Bug Reports** - Describe what went wrong
- ✨ **Feature Requests** - Suggest improvements
- 📚 **Documentation** - Suggest clearer docs
- 🤔 **Questions** - Ask for help

#### Issue Template

```markdown
## Description
Brief description of the issue

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Browser/Device Info
- Browser: Chrome 96.0
- OS: Windows 10
- Device: Desktop/Mobile

## Screenshots/Logs
[Attach if applicable]
```

---

## License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

### License Summary

✅ **You can:**
- Use commercially
- Modify the code
- Distribute the project
- Use privately

❌ **You cannot:**
- Hold the developer liable
- Claim warranty

📝 **You must:**
- Include license notice
- Include copyright notice

---

## Support

### Getting Help

| Channel | Use For |
|---------|---------|
| [GitHub Issues](https://github.com/sarveshmule1504/Kalpak_2025/issues) | Bug reports, feature requests |
| [GitHub Discussions](https://github.com/sarveshmule1504/Kalpak_2025/discussions) | Questions, general help |
| [GitHub Wiki](https://github.com/sarveshmule1504/Kalpak_2025/wiki) | Detailed guides and tutorials |

### Frequently Asked Questions

**Q: How do I change the event dates?**
A: Edit the date information in `events.html` and update any references in `index.html`

**Q: Can I use this for a different event?**
A: Yes! The design is generic and can be customized for any event

**Q: How do I add a new page?**
A: See the "Adding New Features" section in Customization

**Q: How do I deploy to my own domain?**
A: See the Deployment section for GitHub Pages, Vercel, and Netlify options

**Q: Can I add a backend or database?**
A: Currently static only, but you can integrate with services like Firebase or Formspree

**Q: Is there a mobile app version?**
A: This is web-based and works on all mobile devices; app version could be built as future enhancement

### Performance Tips

1. **Optimize Images**
   - Compress using TinyPNG or ImageOptim
   - Use appropriate sizes
   - Consider WebP format

2. **Minimize CSS/JS**
   - Use minifiers for production
   - Remove unused code
   - Combine files if possible

3. **Lazy Load Content**
   - Load images on demand
   - Defer non-critical JavaScript
   - Use `loading="lazy"` attribute

4. **Enable Caching**
   - Set cache headers on server
   - Use service workers for offline support
   - CDN for assets (optional)

---

## Roadmap

### Version 1.0 (Current)
- ✅ Static website framework
- ✅ Event management pages
- ✅ Registration system
- ✅ Contact forms
- ✅ Responsive design

### Version 1.1 (Planned)
- 🔄 Live event updates
- 🔄 Advanced search/filtering
- 🔄 Social media integration
- 🔄 Email notifications

### Version 2.0 (Future)
- 🚀 User accounts and profiles
- 🚀 Event ticketing system
- 🚀 Payment integration
- 🚀 Admin dashboard
- 🚀 Backend database

---

## Quick References

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [CSS-Tricks](https://css-tricks.com/) - CSS tutorials and tips
- [JavaScript.info](https://javascript.info/) - JavaScript learning
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Web.dev](https://web.dev/) - Modern web development

### Tools & Services

- **Code Editor:** [VS Code](https://code.visualstudio.com/)
- **Hosting:** [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/), [Netlify](https://netlify.com/)
- **Image Optimization:** [TinyPNG](https://tinypng.com/), [ImageOptim](https://imageoptim.com/)
- **Icons:** [Font Awesome](https://fontawesome.com/), [Feather Icons](https://feathericons.com/)

---

<div align="center">

### Made with 💜 for Kalpak 2025

**[GitHub](https://github.com/sarveshmule1504/Kalpak_2025)** • **[Issues](https://github.com/sarveshmule1504/Kalpak_2025/issues)** • **[Discussions](https://github.com/sarveshmule1504/Kalpak_2025/discussions)**

*Connect. Celebrate. Celebrate Together.*

**Last Updated:** June 2026 | **Version:** 1.0.0 | **Status:** Active

</div>
