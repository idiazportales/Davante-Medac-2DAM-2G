import { sumar } from './sumar.js';
import { restar } from './restar.js';
import { multiplicar } from './multiplicar.js';
import { dividir } from './division.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

document.getElementById('sumar').addEventListener('click', () => {
  resultado.textContent = sumar(parseFloat(num1.value), parseFloat(num2.value));
});

document.getElementById('restar').addEventListener('click', () => {
  resultado.textContent = restar(parseFloat(num1.value), parseFloat(num2.value));
});

document.getElementById('multiplicar').addEventListener('click', () => {
  resultado.textContent = multiplicar(parseFloat(num1.value), parseFloat(num2.value));
});

document.getElementById('dividir').addEventListener('click', () => {
  resultado.textContent = dividir(parseFloat(num1.value), parseFloat(num2.value));
});

document.getElementById('limpiar').addEventListener('click', () => {
  num1.value = '';
  num2.value = '';
  resultado.textContent = '';
});
