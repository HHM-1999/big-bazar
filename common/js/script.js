///sticky///
const stickyNav = document.getElementById("sticky-navbar");

function toggleStickyNavbar() {
    if (window.scrollY > stickyNav.offsetTop) {
        stickyNav.classList.add('sticky');

    } else {
        stickyNav.classList.remove("sticky");
    }
}
window.addEventListener('scroll', toggleStickyNavbar);


