let jogosAlugados = 0;

function alterarStatus(id) {
    //Selecionar qual dos games foi clickado.
    let gameClickado = document.getElementById(`game-${id}`);
    let imagem = gameClickado.querySelector('.dashboard__item__img');
    let botao = gameClickado.querySelector('.dashboard__item__button');

    //Teste para saber se realmente o jogo está sendo selecionado.
    //alert(nomeJogo.textContent);
    let nomeJogo = gameClickado.querySelector('.dashboard__item__name');

    //Mudando o status de jogos para alugar e para devolver.
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alert('O jogo foi devolvido com sucesso!');
            
            if (jogosAlugados > 0) {
                jogosAlugados--;
            }

        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert('O jogo foi alugado com sucesso!');

        jogosAlugados++;

    }

    numeroJogosAlugados();
}

function numeroJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}