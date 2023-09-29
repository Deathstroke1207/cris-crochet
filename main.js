document.querySelector(".button-list").addEventListener("click", () => {
  document.querySelector(".productos").classList.toggle("show");
});

document.querySelector(".inicio-btn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("mostrar");
  });

ScrollReveal().reveal('.card', { delay: 500 });