window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header');
    if (window.scrollY >= 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



const menuBtns = document.querySelectorAll('.mob--menu-btn');
const nav = document.querySelector('.mob--links');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.classList.toggle('nav-open');
        btn.classList.toggle('menu-open'); // optional: icon switch
    });
});
