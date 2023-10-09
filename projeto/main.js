const tarefas = document.querySelectorAll('.tarefas');
const colunas = document.querySelectorAll('.coluna');

//var pra armazen tarefa sendo arrastada
let tarefaArrastada = null;

tarefas.forEach(tarefa => {
    tarefa.addEventListener('dragstart');

    tarefa.addEventListener('dragend', finalizarArrasto);
});

colunas.forEach(coluna => {
    coluna.addEventListener('dragover', permitirSoltar);

    coluna.addEventListener('drop', soltarTarefa);
});

function iniciarArrasto(event){
    // Funcao pra iniciar arrasto da tarefa
    tarefaArrastada = this;

    // Define o efeito visual do arrastar
    this.classList.add('tarefa-arrastando');
};

function finalizarArrasto(event){
    this.classList.remove('tarefa-arrastando');
};

function permitirSoltar(event){
    // permitir soltar tarefa na coluna
    event.preventDefault();
};

function soltarTarefa(event){
    // permitir soltar tarefa na coluna
    event.preventDefault();
};

if(tarefaArrastada){
    this.querySelector('.tarefas').appendChild(tarefaArrastada);
    tarefaArrastada = null;
};




const formAdicionarTarefa = document.getElementById('adicionar-tarefa');

formAdicionarTarefa.addEventListener('submit', adicionarTarefa)
