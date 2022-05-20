var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var pesoValido = validaPeso(peso);
  var alturaValido = validaAltura(altura);

  var tdImc = paciente.querySelector(".info-imc");

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValido) {
    alturaValido = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("altura invalida!");
    alturaValido = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValido && pesoValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
  }

  function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
      return true;
    } else {
      return false;
    }
  }

  function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
      return true;
    } else {
      return false;
    }
  }

  function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}