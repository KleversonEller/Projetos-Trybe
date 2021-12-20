window.onload = function () {
  //? Requisito 2 - 3 - 6 - 12

  function paletaDeCores() {
    //* Referencia para a function 'geraNumero' (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

    function geraNumero(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let primeiroCor =
      'rgb(' +
      geraNumero(1, 255) +
      ',' +
      geraNumero(1, 255) +
      ',' +
      geraNumero(1, 255) +
      ')';
    let segundaCor =
      'rgb(' +
      geraNumero(1, 255) +
      ',' +
      geraNumero(1, 255) +
      ',' +
      geraNumero(1, 255) +
      ')';
    let terceiraCor =
      'rgb(' +
      geraNumero(1, 255) +
      ',' +
      geraNumero(1, 255) +
      ',' +
      geraNumero(1, 255) +
      ')';
    let paleta = document.querySelector('#color-palette');
    let cores = ['black', primeiroCor, segundaCor, terceiraCor];

    for (let posicao in cores) {
      let criaCor = document.createElement('li');
      criaCor.classList.add('color');
      criaCor.style.backgroundColor = cores[posicao];
      if (cores[posicao] === 'black') {
        criaCor.classList.add('selected');
      }

      paleta.appendChild(criaCor);
    }
  }

  paletaDeCores();

  //! Function que implementa a paleta de cores e suas cores

  //? Requisito 4 - 5

  let valorEntrada = 5;

  function painel(quantidade) {
    let painel = document.querySelector('#pixel-board');
    for (let index = 1; index <= quantidade; index += 1) {
      let criaColuna = document.createElement('ol');
      criaColuna.classList.add('tamanho-caixa');
      for (let indi = 1; indi <= quantidade; indi += 1) {
        let criaLinha = document.createElement('li');
        criaLinha.classList.add('pixel');
        criaLinha.style.backgroundColor = 'white';

        criaColuna.appendChild(criaLinha);
      }

      painel.appendChild(criaColuna);
    }
  }

  painel(valorEntrada);

  //!  Function que implementa o painel para desenhar

  //? Requisito 7

  let corSelecionada = document.querySelector('#color-palette');

  corSelecionada.addEventListener('click', function (elemento) {
    let classe = document.querySelector('.selected');
    let clas = elemento.target.classList;
    if (clas.length < 2 && clas == 'color') {
      classe.classList.remove('selected');
      clas.add('selected');
    }
  });

  //! Function que adiciona a classe selected na cor clicada e remove da cor anterior

  //? Requisito 8

  let possicaoSelecionada = document.querySelector('#pixel-board');

  possicaoSelecionada.addEventListener('click', function (elemento) {
    let classe = document.querySelector('.selected').style.backgroundColor;
    let possicao = elemento.target;
    if (possicao.classList == 'pixel') {
      possicao.style.backgroundColor = classe;
    }
  });

  //! Function que pinta o painel com a cor selecionada

  //? Requisito 9

  let botaoLimpar = document.querySelector('#clear-board');

  botaoLimpar.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');

    for (let posicao of pixels) posicao.style.backgroundColor = 'white';
  });

  //! Function que ao clicar no botao 'limpar' pinta todo o quadro de branco

  //? Requisito 10

  let botaoVqv = document.querySelector('#generate-board');

  botaoVqv.addEventListener('click', function () {
    let pixelExistente = document.querySelectorAll('#pixel-board ol');
    let quantidadePixel = document.querySelector('#board-size').value;
    for (let posicao of pixelExistente) {
      let pixelPaine = document.querySelector('#pixel-board');
      pixelPaine.removeChild(posicao);
    }
    if (quantidadePixel < 5) {
      alert('Board inválido!');
      let painel = document.querySelector('#pixel-board');
      for (let index = 1; index <= 5; index += 1) {
        let criaColuna = document.createElement('ol');
        criaColuna.classList.add('tamanho-caixa');
        for (let indi = 1; indi <= 5; indi += 1) {
          let criaLinha = document.createElement('li');
          criaLinha.classList.add('pixel');
          criaLinha.style.backgroundColor = 'white';

          criaColuna.appendChild(criaLinha);
        }

        painel.appendChild(criaColuna);
      }
    } else if (quantidadePixel > 50) {
      alert('Board inválido!');
      let painel = document.querySelector('#pixel-board');
      for (let index = 1; index <= 50; index += 1) {
        let criaColuna = document.createElement('ol');
        criaColuna.classList.add('tamanho-caixa');
        for (let indi = 1; indi <= 50; indi += 1) {
          let criaLinha = document.createElement('li');
          criaLinha.classList.add('pixel');
          criaLinha.style.backgroundColor = 'white';

          criaColuna.appendChild(criaLinha);
        }

        painel.appendChild(criaColuna);
      }
    } else {
      let painel = document.querySelector('#pixel-board');
      for (let index = 1; index <= quantidadePixel; index += 1) {
        let criaColuna = document.createElement('ol');
        criaColuna.classList.add('tamanho-caixa');
        for (let indi = 1; indi <= quantidadePixel; indi += 1) {
          let criaLinha = document.createElement('li');
          criaLinha.classList.add('pixel');
          criaLinha.style.backgroundColor = 'white';

          criaColuna.appendChild(criaLinha);
        }

        painel.appendChild(criaColuna);
      }
    }
  });

  //! Function que cria dinamicamente um painel de pixel a partir de um valor 'X' passado pelo usuário
};
