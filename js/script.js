// Navbar toggle
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#nav-toggle").onclick = () => {
    navbarNav.classList.toggle("active");
};
const navToggle = document.querySelector("#nav-toggle");
document.addEventListener("click", function (e) {
    if (!navToggle.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
