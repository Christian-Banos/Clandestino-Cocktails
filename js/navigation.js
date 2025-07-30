document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    })

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburguer.contains(e.target)) {
            hamburguer.classList.remove('active');
            navMenu.classList.remove('active');
        }
    })
})
