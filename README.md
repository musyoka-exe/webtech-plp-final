
## Setup and Running

This project is a static website and does not require any special build steps or server-side processing for basic viewing.

1.  **Clone or Download the Repository:**
    ```bash
    git clone https://your-repository-url.git
    ```
    Or download the ZIP file and extract it.

2.  **Navigate to the Project Directory:**
    ```bash
    cd ainews-website
    ```

3.  **Open in Browser:**
    Open the `index.html` file in your preferred web browser.

## Usage and Customization

### 1. Navigating the Site
Use the header navigation links (Home, Blog, About, Contact) to explore the different pages. Blog post cards on the Home and Blog pages are clickable (both image and title) and will take you to the respective article detail page.

### 2. Adding New Blog Posts
To add a new blog post:
1.  Make a copy of `article-template.html` in the root directory.
2.  Rename the copied file to something descriptive (e.g., `my-new-ai-article.html`).
3.  Open the new HTML file and:
    *   Update the `<title>` tag.
    *   Fill in the placeholder sections marked with `<!-- USER: ... -->` with your article's title, metadata (category, date, author), featured image, and main content.
4.  Link to this new article page from `index.html` (if it's a featured or latest post) and `blog.html` by updating the `href` attribute in the `<a>` tags for the card image and title.

### 3. Replacing Image Placeholders
1.  Place your images into the `images/` folder.
2.  **For News Card Thumbnails (in `index.html`, `blog.html`):**
    Find the `<div class="card-image-placeholder">...</div>` element. Replace its text content with an `<img>` tag:
    ```html
    <a href="your-article.html" class="card-image-link">
        <div class="card-image-placeholder">
            <img src="images/your-thumbnail-image.jpg" alt="Descriptive alt text">
        </div>
    </a>
    ```
3.  **For Full Article Featured Images (in individual article pages like `article1.html`):**
    Find the `<div class="article-image-placeholder-full">...</div>` element. Replace its text content with an `<img>` tag:
    ```html
    <div class="article-image-placeholder-full">
        <img src="images/your-featured-image.jpg" alt="Descriptive alt text for featured image">
    </div>
    ```
4.  Ensure the CSS in `style.css` (rules for `img` inside `.card-image-placeholder` and `.article-image-placeholder-full`) correctly styles your images to fit the layout (`object-fit: cover;`).

### 4. Modifying Theme Colors
The primary theme colors (cyan, baby blue, white, etc.) are defined as CSS custom properties (variables) at the beginning of `style.css` within the `:root` and `body.dark-mode` selectors. You can modify these values to change the overall look and feel.

## Future Enhancements / To-Do

*   Implement actual search functionality.
*   Backend integration for the contact form submission.
*   Add pagination for the blog listing page.
*   Implement an image slider/carousel for featured posts.
*   Dynamic content loading (e.g., using a static site generator or a simple CMS).
*   More advanced JavaScript interactions or animations.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page if you want to contribute.
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details (or you can simply state "Distributed under the MIT License.").

## Contact

Your Name - samuelmusyoka086@gmail.com

Project Link: [https://github.com/yourusername/ainews-website](https://github.com/yourusername/ainews-website)
