function somatorioDivisiveisPor3ou5(numero) {
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    return somatorio;
}

// Exemplo de uso:
const resultado = somatorioDivisiveisPor3ou5(11);
console.log(resultado);