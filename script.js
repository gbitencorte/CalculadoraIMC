const imcForm = document.getElementById("imcForm");
const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

imcForm.addEventListener('submit', function(event) {
    event.preventDefault(); // para não recarregar a página
    calcularIMC(peso, altura);
})

function calcularIMC(p, a) {
    const conta = p / (a*a);
    if (conta > 40) {
        const p = document.createElement("p")
    }
}