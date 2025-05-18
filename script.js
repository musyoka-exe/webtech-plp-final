document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const themeToggle = document.getElementById('theme-toggle');
    const searchToggle = document.getElementById('search-toggle'); // Still a placeholder
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('form-feedback');

    // Toggle mobile navigation
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Theme toggle
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const applyTheme = (theme) => {
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                document.body.classList.remove('dark-mode');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        };

        if (currentTheme) {
            applyTheme(currentTheme);
        } else if (prefersDark) {
            applyTheme('dark'); // Default to system preference if no explicit choice
        } else {
            applyTheme('light');
        }


        themeToggle.addEventListener('click', () => {
            let newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Placeholder for search functionality
    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            alert('Search functionality to be implemented!');
        });
    }

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const currentFullURL = window.location.href; // Get full URL

    navLinks.forEach(link => {
        if (link.href === currentFullURL) {
            link.classList.add('active');
        }
        // Handle case where index.html might be the root "/"
        if ((currentFullURL.endsWith('/') || currentFullURL.endsWith('/index.html')) && link.href.endsWith('index.html')) {
            link.classList.add('active');
        }
    });

    // Contact Form Validation
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent actual submission for now
            let isValid = true;

            // Clear previous errors and feedback
            this.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            if (formFeedback) formFeedback.style.display = 'none';

            const nameInput = this.querySelector('#name');
            const emailInput = this.querySelector('#email');
            const messageInput = this.querySelector('#message');

            if (!nameInput.value.trim()) {
                displayError(nameInput, 'Full name is required.');
                isValid = false;
            }

            if (!emailInput.value.trim()) {
                displayError(emailInput, 'Email is required.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                displayError(messageInput, 'Message cannot be empty.');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                if (formFeedback) {
                    formFeedback.textContent = 'Thank you for your message! We will get back to you soon.';
                    formFeedback.className = 'form-feedback success';
                    formFeedback.style.display = 'block';
                }
                this.reset(); // Clear the form
                console.log('Form submitted successfully (simulated)');
            } else {
                if (formFeedback) {
                    formFeedback.textContent = 'Please correct the errors in the form.';
                    formFeedback.className = 'form-feedback error';
                    formFeedback.style.display = 'block';
                }
            }
        });

        function displayError(inputElement, message) {
            const errorElement = inputElement.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = message;
            }
        }

        function isValidEmail(email) {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
});