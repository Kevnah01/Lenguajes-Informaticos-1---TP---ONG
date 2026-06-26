const botonModoOscuro = document.getElementById("btn-modo-oscuro");
botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    const modoActivo = document.body.classList.contains("modo-oscuro");
    botonModoOscuro.textContent = modoActivo ? "Modo claro" : "Modo oscuro";
});
