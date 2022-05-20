const editarTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
  localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

  let input = document.querySelector(".form-input");
  input.value = tarefasCadastradas[id].valor;

  input.setAttribute("id_editavel", id);
};

const BotaoEdita = (carregaTarefa, id) => {
  const botaoEdita = document.createElement("button");
  botaoEdita.innerText = "Editar";
  botaoEdita.addEventListener("click", () => {
    editarTarefa(carregaTarefa, id);
  });

  return botaoEdita;
};

export default BotaoEdita;
