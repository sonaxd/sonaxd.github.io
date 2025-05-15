document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        menuIcon.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
}); 