// O método utilizado aqui é recuperar o id do elemento pai do botão e da imagem (tag li) e dentro desse id, recuperar as classes para conseguir acessar o botão e a imagem
function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagemJogo = jogo.querySelector('.dashboard__item__img')
    let botaoAlugarDevolver = jogo.querySelector('.dashboard__item__button');
    if (botaoAlugarDevolver.classList.contains('dashboard__item__button--return')) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
        botaoAlugarDevolver.classList.remove('dashboard__item__button--return');
        botaoAlugarDevolver.innerHTML = 'Alugar';   
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoAlugarDevolver.classList.add('dashboard__item__button--return');
        botaoAlugarDevolver.innerHTML = 'Devolver';
    }
}