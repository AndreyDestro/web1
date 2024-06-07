let cartas =[
'ciclope-480.',
'deadpool-480',
'fera-480',
'gambit-480',
'jean-grey-480',
'logan-480',
'mistica-480',
'professor-x-480',
'storm', 
'vampira',
]

let atual = [];
let adivinhando = false;
let correspondencias = 0;
let contagemMovimentos = 0;
let pontuacao = 100;
let vitorias = 0;
let derrotas = 0;

function embaralharArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

function configurarCartas() {
    let tabuleiro = document.getElementById('tabuleiro'); // alteração feita aqui
    embaralharArray(cartas);
    for(let i = 0; i < cartas.length; i++){
        let carta = document.createElement('div');
        carta.dataset.item = cartas[i];
        carta.dataset.index = i;
        carta.innerHTML = "<img class='card-img' src='" + cartas[i] + "' alt='imagem'><div class='cover'></div>";
        carta.onclick = aoClicarCarta;
        tabuleiro.appendChild(carta);
    }
}

function aoClicarCarta(e) {
    if(adivinhando) return;
    let alvo = e.currentTarget;
    if(atual.length < 2) {
        alvo.classList.add('flipped');
        atual.push(alvo);
    }

    contagemMovimentos++;
    document.getElementById('moves').textContent = 'Movimentos: ' + contagemMovimentos;

    if(atual.length == 2) {
        adivinhando = true;
        if(atual[0].dataset.item == atual[1].dataset.item) {
            correspondencias++;
            adivinhando = false;
            atual = [];
            if(correspondencias == cartas.length/2) {
                alert('Você venceu!');
                vitorias++;
                document.getElementById('wins').textContent = 'Vitórias: ' + vitorias;
            }
        } else {
            setTimeout(function() {
                atual[0].classList.remove('flipped');
                atual[1].classList.remove('flipped');
                atual = [];
                adivinhando = false;
            }, 1000);
        }
    }

    pontuacao--;
    document.getElementById('score').textContent = 'Pontuação: ' + pontuacao;
    if(pontuacao <= 0) {
        alert('Você perdeu!');
        derrotas++;
        document.getElementById('losses').textContent = 'Derrotas: ' + derrotas;
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    atual = [];
    adivinhando = false;
    correspondencias = 0;
    contagemMovimentos = 0;
    pontuacao = 100;

    document.getElementById('tabuleiro').innerHTML = ''; // alteração feita aqui
    document.getElementById('moves').textContent = 'Movimentos: ' + contagemMovimentos;
    document.getElementById('score').textContent = 'Pontuação: ' + pontuacao;

    configurarCartas();
}

configurarCartas();