// GSAP animation for the initial reveal
gsap.from(".headline", { opacity: 0, y: -100, duration: 1, delay: 0.5 });
gsap.from(".subtext", { opacity: 0, y: 100, duration: 1, delay: 1 });
gsap.from(".cta-button", { opacity: 0, y: 100, duration: 1, delay: 1.5 });

// Hover interaction for the images
const images = document.querySelectorAll(".hero-image");
images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    images.forEach((img) => {
      img.classList.add("vector"); // Make other images vector-like
    });
    image.classList.remove("vector");
    image.classList.add("active"); // Highlight the active image
  });

  image.addEventListener("mouseout", () => {
    images.forEach((img) => {
      img.classList.remove("vector"); // Reset all images
    });
    image.classList.remove("active");
  });
});

// Mouse movement effect for the hovered image
document.querySelectorAll(".hero-image").forEach(image => {
  image.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = image.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const moveX = (mouseX / width - 0.5) * 30;
    const moveY = (mouseY / height - 0.5) * 30;

    gsap.to(image, { x: moveX, y: moveY, duration: 0.2 });
  });
});
