// Calculo de fatorial:
function fator (n) {
  let r = 1;
  for (var i = n; i > 1; i--) {
    r *= i;
  }
  return r;
}

// Cálculo de porcentagem:
function porcent (a, b) {
  let n = 0;
  n = (a * 100)/b;
  return n;
}

// Cálculo de média:
function mediaNumeros (a, b) {
  let n = 0;
  n = (a + b)/2;
  return n;
}

// Cálculo de raíz quadrada:
function raizQuad (n) {
  var quadrado = parseFloat((Math.sqrt(n)).toFixed(2));
  return quadrado;
}
// Cálculo de exponenciação:
function potenciaNumeros (a, b) {
  var potencia = Math.pow(a, b);
  return potencia;
}