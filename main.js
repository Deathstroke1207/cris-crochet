document.querySelector(".button-list").addEventListener("click", () => {
  document.querySelector(".productos").classList.toggle("show");
});

ScrollReveal().reveal('.card', { delay: 500 });