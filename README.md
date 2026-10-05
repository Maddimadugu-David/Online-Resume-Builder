# 📄 Interactive Online Resume Builder

A lightweight, modern, open-source Resume Builder web application built with HTML5, Tailwind CSS, and Vanilla JavaScript. Features real-time live preview, multiple professional templates, instant PDF export, and seamless GitHub Pages deployment.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Deployment](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen.svg)

---

## ✨ Key Features

- ⚡ **Real-Time Live Preview**: Instant split-pane editing—see your changes as you type.
- 🎨 **Multiple Layout Templates**: Switch effortlessly between Modern, Classic, Minimalist, and Elegant designs.
- 🎛️ **Full Customization**:
  - Customizable accent colors with dynamic palette selectors.
  - Font styling options (Inter, Serif, Mono, Poppins, Playfair).
  - Profile photo upload support.
- 💾 **Data Persistence & Management**:
  - Auto-saves work to `localStorage` so data isn't lost on refresh.
  - Export & Import resume data as JSON for easy backups.
  - Pre-filled sample data for quick testing.
- 🖨️ **Print & PDF Ready**:
  - Optimized `@media print` CSS for clean A4/Letter sizing without UI clutter.
  - Prevents awkward page breaks in the middle of work experiences.
- 🚀 **Zero Dependencies & Serverless**: Runs completely in the browser—no backend required.

---

## 🛠️ Built With

- **HTML5** & **Vanilla JavaScript** (ES6+)
- **Tailwind CSS** (via CDN for fast layout & typography)
- **FontAwesome** (for crisp UI and section icons)

---

## 🚀 How to Host on GitHub Pages

You can host this project on GitHub Pages for free in under 2 minutes:

1. **Fork or Create a Repository**:
   - Create a new public repository on GitHub (e.g., `resume-builder`).

2. **Add Project Files**:
   - Save your `index.html` file in the **root** folder of the repository.
   - Commit and push your changes to the `main` branch.

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** tab.
   - Click **Pages** in the left sidebar under *Code and automation*.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Choose the `main` branch and `/ (root)` folder, then click **Save**.

4. **Access Your Live Site**:
   - GitHub will generate a public URL:  
     `https://<your-username>.github.io/<repository-name>/`

---

## 💻 Local Development

To run and edit this project locally on your machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/<repository-name>.git
