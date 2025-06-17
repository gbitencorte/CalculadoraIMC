const container = document.getElementById("container");
const imcForm = document.getElementById("imcForm");
const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

imcForm.addEventListener('submit', function(event) {
    event.preventDefault(); // para não recarregar a página
    calcularIMC(peso.value, altura.value);
})

function calcularIMC(peso, altura) {
    const conta = peso / (altura*altura);
    let classificacao = ""

    if (conta >= 40) {
        classificacao = "Obesidade Mórbida Grau III";
    } else {
        if (conta >= 35 && conta <= 39.9) {
            classificacao = "Obesidade Severa Grau II";
        } else {
            if (conta >= 30 && conta <= 34.9) {
                classificacao = "Obesidade Grau II";
            } else {
                if (conta >= 25 && conta <= 29.9) {
                    classificacao = "Sobrepeso";
                } else {
                    if (conta >= 18.5 && conta <= 24.9) {
                        classificacao = "Saudável";
                    } else {
                        if (conta <= 18.4) {
                            classificacao  = "Abaixo do Peso";
                        }
                    }
                }
            }
        }
    }

    // return `Olá, ${nome}! Seu peso é ${peso}, sua altura é ${altura} e seu IMC é ${conta}, seu nível é ${classificacao}`

    // resultado.textContent = `Olá, ${nome.value}! Seu peso é ${peso}, sua altura é ${altura} e seu IMC é ${conta}, seu nível é ${classificacao}`

    resultado.textContent = `Oi, ${nome.value}! Seu peso é ${peso} e sua altura ${altura}. Por isso, o seu IMC é ${conta} e o seu nível é ${classificacao}.`
}