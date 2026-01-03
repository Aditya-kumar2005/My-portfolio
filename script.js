/* ================= Smooth Scroll ================= */
function goTo(id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* ================= Star Rating ================= */
function rate(star) {
    const display = document.getElementById("rating-display");
    if (!display) return;

    display.textContent = `You rated: ${star} star${star > 1 ? "s" : ""}`;
}

/* ================= Mobile Navbar ================= */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = navLinks?.querySelectorAll("a");

    if (!menuToggle || !navLinks) return;

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });

    // Close menu when clicking a link (mobile UX)
    navItems?.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("show");
            menuToggle.classList.remove("active");
        }
    });

    console.log("✅ Aditya's Portfolio loaded successfully!");
});
