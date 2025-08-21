const altura = 1.75;
const peso = 68;

const imc = peso / (altura * altura);

console.log(
  `Com altura de ${altura} e peso de ${peso}, o IMC é ${imc.toFixed(1)}`
);
