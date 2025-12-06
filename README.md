# R Installation Guide Website

A user-friendly, static website guides non-programmers through installing R, Rtools/Xcode, and RStudio on Windows and Mac.

## 🚀 Deployment (GitHub Pages)

1.  Go to your repository settings on GitHub.
2.  Navigate to **Pages** in the sidebar.
3.  Under **Build and deployment**, select **Source** as `Deploy from a branch`.
4.  Select `main` (or `master`) branch and `/root` folder.
5.  Click **Save**.
6.  Your site will be live at `https://mitti1210.github.io/JSNPT_36THSC_installR/` shortly.

## 🖼️ Adding Screenshots

The website currently uses placeholders for screenshots. To add actual images:

1.  Take screenshots for each step (System check, Installer windows, etc.).
2.  Create a folder named `images` in this directory.
3.  Save your images there (e.g., `images/rtools-download.png`).
4.  Edit `windows.html` and `mac.html`:
    *   Find the lines with `<div class="screenshot-placeholder">...</div>`.
    *   Replace the entire `<div>` with an `<img>` tag:
        ```html
        <!-- Before -->
        <div class="screenshot-placeholder">[Screenshot...]</div>

        <!-- After -->
        <img src="images/your-image.png" alt="Description of image" style="width: 100%; border-radius: 0.5rem; border: 1px solid #E2E8F0; margin: 1rem 0;">
        ```

## 🛠️ Project Structure

*   `index.html`: Main landing page with OS selection.
*   `windows.html`: Windows 11 specific instructions (AMD vs ARM checks).
*   `mac.html`: macOS specific instructions (Intel vs Apple Silicon checks).
*   `css/style.css`: All styling (Premium design system).
*   `js/main.js`: Interactivity (Copy to clipboard).
