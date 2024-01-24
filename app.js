let numeroSecreto = parseInt(Math.random() * 100 + 1)

let tentativas = 0

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert('O numero é maior')
        } else {
            alert('O numero é menor ')
        }
        chute = prompt('Numero incorreto tente novamente')
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

console.log(`Você acertou o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)