import BotaoConclui from "./concluiTarefa.js";
import BotaoDelet from "./deletaTarefa.js";
import BotaoEdita from "./editaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

export const handleNovoItem = (evento) => {
  evento.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format("HH:mm");
  const dataFormatada = data.format("DD/MM/YYYY");
  const concluida = false;
  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida,
  };

  let id_editavel = input.getAttribute("id_editavel") || "null";

  console.log(id_editavel);

  if (id_editavel != "null") {
    console.log("editou");
    tarefas[id_editavel].valor = valor;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    input.setAttribute("id_editavel", null);
  } else {
    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    input.value = "";
  }
  carregaTarefa();
};

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content" >${horario} * ${valor}</p>`;

  if (concluida) {
    tarefa.classList.add("done");
  }
  tarefa.classList.add("task");

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(BotaoDelet(carregaTarefa, id));
  tarefa.appendChild(BotaoEdita(carregaTarefa, id));
  return tarefa;
};
