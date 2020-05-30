

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
const line = document.querySelector('.line')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    line.classList.toggle("open");
    navLinks.classList.toggle("close");
    line.classList.toggle("close");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});