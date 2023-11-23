
//1 Solicitar dois números
//2 Solicitar a operação
//3 Realizar o cálculo
//4 Mostrar o resultado
let resp;
let num1 = parseFloat(prompt('Digite o primeiro número:'));
let operacao = prompt('Digite a operação que deseja realizar: [+] - [-] - [x] - [/]');
let num2 = parseFloat(prompt('Digite o segundo número:'));

if (isNaN(num1) == true || isNaN(num2) == true) {
    alert('Operação inválida');
}
else if (operacao == '+') {
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

else {
    resp = 'Operação Inválida!';
}

if (isNaN(resp)) {
    document.write('A operação é inválida, tente novamente!');
}

else {
    document.write('O resultado da operação é: ', resp);
}