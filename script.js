// script.js – Navigation, dropdown, scroll animations
document.addEventListener('DOMContentLoaded', function () {
    /* ---- Hamburger toggle ---- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
    }

    /* ---- Profile dropdown (click + hover) ---- */
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-content');
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
        dropdown.addEventListener('mouseenter', () => menu.style.display = 'block');
        dropdown.addEventListener('mouseleave', () => menu.style.display = 'none');
        document.addEventListener('click', e => {
            if (!dropdown.contains(e.target)) menu.style.display = 'none';
        });
    }

    /* ---- Akademik dropdown ---- */
    const akDropdown = document.getElementById('akademik-dropdown');
    if (akDropdown) {
        const toggle = akDropdown.querySelector('.dropdown-toggle');
        const menu = akDropdown.querySelector('.dropdown-content');
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
        akDropdown.addEventListener('mouseenter', () => menu.style.display = 'block');
        akDropdown.addEventListener('mouseleave', () => menu.style.display = 'none');
        document.addEventListener('click', e => {
            if (!akDropdown.contains(e.target)) menu.style.display = 'none';
        });
    }

    /* ---- Scroll reveal animation ---- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.card, .news-card, .profile-card, .brosur-card, .tutor-card, .dash-card, .vm-box, .org-chart').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    /* ---- Active nav link highlight ---- */
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
});

/* Utility: add visible class */
document.addEventListener('scroll', () => {
    document.querySelectorAll('.card, .news-card, .profile-card, .brosur-card, .tutor-card, .dash-card, .vm-box, .org-chart').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});
