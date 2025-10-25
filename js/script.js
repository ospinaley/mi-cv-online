/* ========== Alternar modo oscuro / diurno ========== */
let typed = new Typed(".typing", {
    strings:["","Desarrollador web", "Asistente de operaciones", "Auxiliar de compras",], 
    typeSpeed:100,
    BackSpeed:60, 
    loop:true
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