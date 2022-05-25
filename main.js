document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.containerGrid', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });