/* let titulo = document.querySelector('h1')
titulo.innerHTML = "Jogo do numero secreto"

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = 'Escolha um número entre 1 a 10' */
let tentativas = 1

let numeroSecreto = gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do numero secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10')

function verificarChute() {

    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let textoTentativas = `Você descobriu nosso numero secreto com ${tentativas} ${palavraTentativa}!!`

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOU MISERAVII!!')
        exibirTextoNaTela('p', textoTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'Numero é maior!')
        } else {
            exibirTextoNaTela('p', 'Numero é menor!')
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function novoJogo() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10')
    limparCampo()
    numeroSecreto = gerarNumeroAleatorio()
    tentativas = 1
}