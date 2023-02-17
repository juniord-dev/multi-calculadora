// pegar elementos HTML via DOM
const soma = document.getElementById('soma');
const multiplicacao = document.getElementById('multiplicacao');
const potenciaAEmB = document.getElementById('potenciaAEmB');

soma.innerHTML = 0;
multiplicacao.innerHTML = 0;
potenciaAEmB.innerHTML = 0;

// Função para calcular
function calculate() {
  const inputA = document.getElementById('number1').value;
  const inputB = document.getElementById('number2').value;
  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = sum(a, b);
  multiplicacao.innerHTML = timesNum(a, b);
  potenciaAEmB.innerHTML = powerNum(b, a);
}

// Funções dos cálculos
// Cálculo de soma:
function sum(a, b) {
  return a + b;
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
  let n = 0;
  n = (a * 100) / b;
  return n;
}

// Cálculo de média:
function mediaNum(a, b) {
  let n = 0;
  n = (a + b) / 2;
  return n;
}

// Cálculo de raíz quadrada:
function squareRoot(n) {
  return (quadrado = parseFloat(Math.sqrt(n).toFixed(2)));
}

// Cálculo de exponenciação:
function powerNum(a, b) {
  return (potencia = Math.pow(a, b));
}
