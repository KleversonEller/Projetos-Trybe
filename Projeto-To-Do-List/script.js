window.onload = function () {
  //? Requisito 5 - 6

  let botaoCriaTarefas = document.querySelector('#criar-tarefa');

  botaoCriaTarefas.addEventListener('click', function () {
    let textoTarefa = document.querySelector('#texto-tarefa');
    let lista = document.querySelector('#lista-tarefas');
    let tarefa = document.createElement('li');
    tarefa.innerText = textoTarefa.value;
    lista.appendChild(tarefa);
    textoTarefa.value = '';
  });

  //! Implementa um o texto digitado no input na lista de tarefas em ordem de criação e apaga o texto do input

  //? Requisito 7 - 8

  let lista = document.querySelector('#lista-tarefas');

  lista.addEventListener('click', function (evento) {
    let tarefas = document.querySelectorAll('#lista-tarefas li');
    for (let posicao of tarefas) {
      posicao.removeAttribute('id');
      evento.target.id = 'select';
    }
  });

  //! Ao clicar em uma tarefa da lista pinta o fundo apenas do elemento clicado

  //? Requisito 9

  lista.addEventListener('dblclick', function (evento) {
    let tarefa = evento.target;
    if (tarefa.classList == 'completed') {
      tarefa.removeAttribute('class');
    } else {
      tarefa.classList.add('completed');
    }
  });

  //! Ao clicar duas vezes em uma tarefa da lista adiciona a classe completed

  //? Requisito 10

  let botaoApagarLista = document.querySelector('#apaga-tudo');

  botaoApagarLista.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('#lista-tarefas li');
    for (let posicao of tarefas) {
      lista.removeChild(posicao);
    }
  });

  //! Implementa botao apaga lista

  //? Requisito 11

  let botaoApagarCompletas = document.querySelector('#remover-finalizados');

  botaoApagarCompletas.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('#lista-tarefas li');
    for (let posicao of tarefas) {
      if (posicao.classList == 'completed') {
        lista.removeChild(posicao);
      }
    }
  });

  //! Implementa botao apaga tarefas completas

  //? Requisito 12

  let botaoSalvarLista = document.querySelector('#salvar-tarefas');

  botaoSalvarLista.addEventListener('click', function () {
    let tarefas = document.querySelectorAll('#lista-tarefas li');
    let tarefasParaSalvar = [];
    for (let posicao of tarefas) {
      tarefasParaSalvar.push({
        texto: posicao.innerText,
        classe: posicao.classList.value,
      });
    }
    localStorage.setItem('lista-salva', JSON.stringify(tarefasParaSalvar));
  });

  function itensSalvos() {
    let tarefasSalvas = JSON.parse(localStorage.getItem('lista-salva'));
    if (tarefasSalvas !== null) {
      for (let posicao of tarefasSalvas) {
        let texto = posicao.texto;
        let classe = posicao.classe;
        let cria = document.createElement('li');
        if (posicao.classe == '') {
          cria.innerText = texto;
          lista.appendChild(cria);
        } else {
          cria.classList.add(classe);
          cria.innerText = texto;
          lista.appendChild(cria);
        }
      }
    }
  }

  itensSalvos();

  //! Salva a lista e retorna a lista salva quando a pagina for recarregada

  //? Requisito 13

  let botaoMoveCima = document.querySelector('#mover-cima');

  botaoMoveCima.addEventListener('click', function () {
    let tarefaSelecionada = document.querySelector('#select');
    let tarefaAnterior = null;
    if (tarefaSelecionada !== null) {
      tarefaAnterior = tarefaSelecionada.previousSibling;
    }
    let primeiroFilho = lista.firstChild;

    if (
      tarefaSelecionada !== primeiroFilho &&
      tarefaSelecionada !== null &&
      tarefaAnterior !== null
    ) {
      lista.insertBefore(tarefaSelecionada, tarefaAnterior);
    }
  });

  //! Implementa botao para mover tarefas para cima

  let botaoMoveBaixo = document.querySelector('#mover-baixo');

  botaoMoveBaixo.addEventListener('click', function () {
    let tarefaSelecionada = document.querySelector('#select');
    let tarefaAnterior = null;
    if (tarefaSelecionada !== null) {
      tarefaAnterior = tarefaSelecionada.nextSibling;
    }
    let ultimoFilho = lista.lastChild;

    if (
      tarefaSelecionada !== ultimoFilho &&
      tarefaSelecionada !== null &&
      tarefaAnterior !== null
    ) {
      lista.insertBefore(tarefaAnterior, tarefaSelecionada);
    }
  });

  //! Implementa botao para mover tarefas para baixo

  //? Requisito 14

  let botaoRemoveSelecionado = document.querySelector('#remover-selecionado');

  botaoRemoveSelecionado.addEventListener('click', function () {
    let selecionado = document.querySelector('#select');

    lista.removeChild(selecionado);
  });

  //! Implementa botao que apaga tarefas selecionadas
};
