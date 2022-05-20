var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  console.log(event.target);

  //   var alvoEvento = event.target;
  //   var paiDoAlvo = alvoEvento.parentNode;
  //   paiDoAlvo.remove();

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});

// pacientes.forEach(function (paciente) {
//   paciente.addEventListener("dblclick", function () {
//     console.log("fui clicado 2x");
//     this.remove();
//   });
// });
