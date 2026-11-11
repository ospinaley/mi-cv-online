/* ========== Texto que se escribe solo en la portada ========== */
let typed = new Typed(".typing", {
    strings: ["Docente de HTML y desarrollo web", "Profesional de negocio digital", "Gestor E-commerce y automatización"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
})

// Selecciona el botón y el menú
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

// Cuando se hace clic en el botón...
navTogglerBtn.addEventListener("click", () => {
    // ...se añade o quita la clase 'open' a ambos elementos.
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
});
