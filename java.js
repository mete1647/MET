
document.addEventListener("DOMContentLoaded", function() {
  // select all buttons that should toggle slides
  const viewButtons = document.querySelectorAll(".viewPptBtn");

  viewButtons.forEach(button => {
    button.addEventListener("click", function() {
      // find the nearest .project parent
      const project = button.closest(".project");
      if (!project) return;

      // find that project's slides
      const slides = project.querySelector(".pptSlides");
      if (!slides) return;

      // toggle show/hide
      if (slides.style.display === "none" || slides.style.display === "") {
        slides.style.display = "block";
        button.textContent = "Hide picture Slides";
      } else {
        slides.style.display = "none";
        button.textContent = "View picture Slides";
      }
    });
  });

  console.log("✅ script2.js loaded successfully");
});