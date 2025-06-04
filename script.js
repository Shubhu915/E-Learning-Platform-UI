// Smooth scroll to course section
document.addEventListener("DOMContentLoaded", function () {
  const browseBtn = document.querySelector(".btn-primary");
  const courseSection = document.querySelector(".course-list");

  if (browseBtn && courseSection) {
    browseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      courseSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Highlight active nav link based on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("class");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
