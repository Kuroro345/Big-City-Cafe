document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.containerGrid', { delay: 400 });
ScrollReveal().reveal('.footer', { delay: 400 });
