
//1 Solicitar dois números
//2 Solicitar a operação
//3 Realizar o cálculo
//4 Mostrar o resultado
let resp;
let num1 = parseFloat(prompt('Digite o primeiro número:'));
let num2 = parseFloat(prompt('Digite o segundo número:'));
let operacao = prompt('Digite a operação que deseja realizar: [+] - [-] - [x] - [/]');

if (isNaN(num1) == true || isNaN(num2) == true) {
    alert('Operação inválida');
}
else {


    if (operacao == '+') {
        resp = num1 + num2;
    }

    else if (operacao == '-') {
        resp = num1 - num2;
    }

    else if (operacao == 'x') {
        resp = num1 * num2;
    }

    else if (operacao == '/') {
        resp = num1 / num2;
    }
}

document.write('<p class = "resultado"> O resultado da operação é: </p>', resp);