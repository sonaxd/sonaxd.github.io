document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    let scrollPosition = 0;
    
    function openMenu() {
        scrollPosition = window.pageYOffset;
        mobileMenu.classList.add('active');
        menuIcon.textContent = '✕';
        body.classList.add('menu-open');
        body.style.top = `-${scrollPosition}px`;
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuIcon.textContent = '☰';
        body.classList.remove('menu-open');
        body.style.top = '';
        window.scrollTo(0, scrollPosition);
    }

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            closeMenu();
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && 
            !menuIcon.contains(event.target) && 
            mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Предотвращаем всплытие кликов внутри меню
    mobileMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}); 