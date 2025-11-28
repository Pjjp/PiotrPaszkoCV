# Professional CV Website

A stunning, modern, and fully animated CV/Portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Beautiful Design**
- Modern gradient backgrounds with animated orbs
- Smooth scrolling and page transitions
- Responsive design for all devices
- Professional color scheme with purple/blue gradients

🎬 **Rich Animations**
- Typing effect for hero subtitle
- Scroll-triggered animations
- Animated skill progress bars
- Counter animations for statistics
- Parallax effects on background elements
- Smooth hover effects on all interactive elements

📱 **Fully Responsive**
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized layouts for tablets and phones
- Touch-friendly interface

🎯 **Sections Included**
- Hero section with animated introduction
- About section with statistics
- Work experience timeline
- Skills showcase with progress bars
- Education & certifications
- Contact form with social links

## Quick Start

1. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

2. **Customize your content**
   - Edit `index.html` to update your personal information
   - Modify colors and styles in `styles.css`
   - Adjust animations in `script.js`

## Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Hero Section** (Lines 34-60)
   - Change "Your Name" to your actual name
   - Update the job titles in the typing animation
   - Modify the description text

2. **About Section** (Lines 88-117)
   - Update the about paragraphs
   - Change statistics (years, projects, clients)

3. **Experience Section** (Lines 122-176)
   - Add/remove timeline items
   - Update job titles, companies, dates
   - Modify descriptions and tags

4. **Skills Section** (Lines 181-259)
   - Update skill names and percentages
   - Add/remove skill categories
   - Adjust progress bar values

5. **Education Section** (Lines 264-295)
   - Update degrees and certifications
   - Change institutions and dates
   - Modify descriptions

6. **Contact Section** (Lines 300-372)
   - Update email, phone, location
   - Add your social media links
   - Customize contact form

### Customize Colors

**In `styles.css` (Lines 9-16):**

```css
:root {
    --primary: #667eea;      /* Main purple */
    --secondary: #764ba2;    /* Dark purple */
    --accent: #f093fb;       /* Pink accent */
    --dark: #1a1a2e;        /* Dark text */
    --light: #ffffff;       /* White */
    --gray: #6b7280;        /* Gray text */
}
```

### Customize Typing Animation

**In `script.js` (Lines 41-45):**

```javascript
const phrases = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Creative Thinker'
];
```

### Add Your Profile Picture

Replace the SVG placeholder in the hero section with an actual image:

```html
<!-- Replace this in index.html -->
<div class="profile-img">
    <img src="your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## File Structure

```
cv/
├── index.html          # Main HTML structure
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Features

- Debounced scroll events for better performance
- Intersection Observer API for efficient animations
- CSS transforms for GPU-accelerated animations
- Optimized asset loading

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for screen readers
- Focus management
- High contrast ratios

## Tips for Best Results

1. **Images**: Add high-quality images for better visual appeal
2. **Content**: Keep descriptions concise and impactful
3. **Links**: Update all social media and contact links
4. **Testing**: Test on multiple devices and browsers
5. **Hosting**: Deploy to GitHub Pages, Netlify, or Vercel for free hosting

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select main branch as source
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly

### Vercel
1. Import your GitHub repository
2. Deploy with one click

## Customization Ideas

- Add a blog section
- Include a portfolio/projects gallery
- Add testimonials section
- Integrate with a backend for the contact form
- Add dark mode toggle
- Include downloadable PDF resume
- Add language switcher for multilingual support

## License

Free to use for personal and commercial projects.

## Credits

Built with ❤️ using vanilla HTML, CSS, and JavaScript.
Fonts: Google Fonts (Poppins)

---

**Need help?** Feel free to customize this template to match your personal brand and style!



