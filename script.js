
// Explore Now Button Scroll
function exploreNow() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Login Button Alert
document.getElementById("loginButton").addEventListener("click", function () {

});

// Smooth Scroll for Navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact form validation (optional)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh
        alert("Thank you! Your message has been submitted successfully 💌");
        contactForm.reset();
    });
}
