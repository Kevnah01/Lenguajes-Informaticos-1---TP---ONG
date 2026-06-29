const botonModoOscuro = document.getElementById("btn-modo-oscuro");

botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", nextTheme);
    
    localStorage.setItem("theme", nextTheme);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
    
    if (savedTheme === "dark") {
        document.body.classList.add("modo-oscuro");
    } else {
        document.body.classList.remove("modo-oscuro");
    }
});