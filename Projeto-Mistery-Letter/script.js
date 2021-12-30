window.onload = function () {
  //? Requisito 3 - 4 - 5 - 16

  function geraNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let estilo = ['newspaper', 'magazine1', 'magazine2'];
  let tamanho = ['medium', 'big', 'reallybig'];
  let rotacao = ['rotateleft', 'rotateright'];
  let inclinacao = ['skewleft', 'skewright'];

  let botaoCriaCarta = document.querySelector('#criar-carta');

  botaoCriaCarta.addEventListener('click', function () {
    let textoDigitado = document.querySelector('#carta-texto');
    let textoDigitadoSeparado = textoDigitado.value.split(' ');
    document.querySelector('#carta-contador').innerHTML =
      textoDigitadoSeparado.length;
    let paragrafo = document.querySelector('#carta-gerada');

    if (textoDigitadoSeparado[0] == '') {
      paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      paragrafo.innerHTML = '';
      for (let palavra of textoDigitadoSeparado) {
        let cria = document.createElement('span');
        cria.innerHTML = palavra;
        cria.classList.add(
          estilo[geraNumero(0, 3)],
          tamanho[geraNumero(0, 3)],
          rotacao[geraNumero(0, 2)],
          inclinacao[geraNumero(0, 2)]
        );
        paragrafo.appendChild(cria);
      }
    }
  });

  //! Cria as tags spans do paragrafo e o estilo das palavras

  //? Requisito 17

  let mudarEstilo = document.querySelector('#carta-gerada');

  mudarEstilo.addEventListener('click', function (evento) {
    evento.target.removeAttribute('class');
    evento.target.classList.add(
      estilo[geraNumero(0, 3)],
      tamanho[geraNumero(0, 3)],
      rotacao[geraNumero(0, 2)],
      inclinacao[geraNumero(0, 2)]
    );
  });

  //! Ao clicar em uma palavra altera o estilo da palavra
};
