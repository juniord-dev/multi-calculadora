// pegar elementos HTML via DOM
const soma = document.getElementById('soma');
const subtracaoAeB = document.getElementById('subtracaoAeB');
const subtracaoBeA = document.getElementById('subtracaoBeA');
const multiplicacao = document.getElementById('multiplicacao');
const divisaoAeB = document.getElementById('divisaoAeB');
const divisaoBeA = document.getElementById('divisaoBeA');
const potenciaAEmB = document.getElementById('potenciaAEmB');
const potenciaBEmA = document.getElementById('potenciaBEmA');
const raizQuadA = document.getElementById('raizQuadA');
const raizQuadB = document.getElementById('raizQuadB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');
const porcentAdeB = document.getElementById('porcentAdeB');
const porcentBdeA = document.getElementById('porcentBdeA');
const mediaAeB = document.getElementById('mediaAeB');

soma.innerHTML = 0;
subtracaoAeB.innerHTML = 0;
subtracaoBeA.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoAeB.innerHTML = 0;
divisaoBeA.innerHTML = 0;
potenciaAEmB.innerHTML = 0;
potenciaBEmA.innerHTML = 0;
raizQuadA.innerHTML = 0;
raizQuadB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentAdeB.innerHTML = 0;
porcentBdeA.innerHTML = 0;
mediaAeB.innerHTML = 0;

// Função para calcular
function calculate() {
  const inputA = document.getElementById('number1').value;
  const inputB = document.getElementById('number2').value;
  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = sum(a, b);
  subtracaoAeB.innerHTML = minus(a, b);
  subtracaoBeA.innerHTML = minus(b, a);
  multiplicacao.innerHTML = timesNum(a, b);
  divisaoAeB.innerHTML = division(a, b);
  divisaoBeA.innerHTML = division(b, a);
  potenciaAEmB.innerHTML = powerNum(b, a);
  potenciaBEmA.innerHTML = powerNum(a, b);
  raizQuadA.innerHTML = squareRoot(a);
  raizQuadB.innerHTML = squareRoot(b);
  fatorialA.innerHTML = fator(a)
  fatorialB.innerHTML = fator(b)
  porcentAdeB.innerHTML = porcent(a, b);
  porcentBdeA.innerHTML = porcent(b, a);
  mediaAeB.innerHTML = mediaNum(a, b);
}

// Funções dos cálculos
// Cálculo de soma:
function sum(a, b) {
  return a + b;
}

// Cálculo de subtração (A-B):
function minus(a, b) {
  return a - b;
}

// Cálculo de divisão (A/B):
function division(a, b) {
  return (a / b).toFixed(1);
}

// Cálculo de multiplicação:
function timesNum(a, b) {
  return a * b;
}

// Calculo de fatorial:
function fator(n) {
  let r = 1;
  for (var i = n; i > 1; i--) {
    r *= i;
  }
  return r;
}

// Cálculo de porcentagem:
function porcent(a, b) {
  return ((a * 100) / b).toFixed(2) + "%";
}

// Cálculo de média:
function mediaNum(a, b) {
return (a + b) / 2;
}

// Cálculo de raíz quadrada:
function squareRoot(n) {
  return parseFloat(Math.sqrt(n).toFixed(2));
}

// Cálculo de exponenciação:
function powerNum(a, b) {
  return (Math.pow(a, b)).toFixed(1);
}
