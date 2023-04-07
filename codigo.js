// Pede para o usuário informar o peso e a altura
const peso = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros:"));

// Calcula o IMC
const imc = peso / (altura ** 2);

// Exibe uma mensagem de acordo com o IMC calculado
if (imc < 18.5) {
  console.log(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`);
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log(`Seu IMC é ${imc.toFixed(2)} e você está no peso ideal.`);
} else {
  console.log(`Seu IMC é ${imc.toFixed(2)} e você está acima do peso.`);
}
