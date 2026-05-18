    // Mobile hamburger toggle logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // sedikit ubah tampilan hamburger animasi (opsional)
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        // close menu ketika link diklik
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                if(spans[0]) { spans[0].style.transform = 'none'; spans[1].style.opacity = '1'; spans[2].style.transform = 'none'; }
            });
        });
    }
    // reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    function checkReveal() {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) el.classList.add('visible');
        });
    }
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);