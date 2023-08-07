const input = document.getElementById("input");
const contador = document.querySelector(".contador");
const botao = document.getElementById("alternar");

let modo = "caracteres";

botao.addEventListener("click", () => {
    if (modo === "caracteres") {
        modo = "palavras";
        botao.textContent = "Contar caracteres";
    } else {
        modo = "caracteres";
        botao.textContent = "Contar palavras";
    }
    input.dispatchEvent(new Event("input"));
});

input.addEventListener("input", () => {
    let contar = 0;
    if (modo === "caracteres") {
        contar = input.value.replace(/\s/g, "").length;
        contador.textContent = `${contar} caractere(s)`;
    } else {
        const palavras = input.value.trim().split(/\s+/);
        contar = input.value.trim() === "" ? 0 : palavras.length;
        contador.textContent = `${contar} palavra(s)`;
    }
});
