const deletarTarefa = (atualiza, id) => {
  const index = id;
  const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));
  tarefasCadastradas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas));

  atualiza();
};

const BotaoDelet = (atualiza, id) => {
  const botaoDelet = document.createElement("button");
  botaoDelet.innerText = "Deletar";
  botaoDelet.addEventListener("click", () => deletarTarefa(atualiza, id));

  return botaoDelet;
};

export default BotaoDelet;
