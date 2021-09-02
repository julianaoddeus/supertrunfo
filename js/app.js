const naruto = {
    nome: "Naruto",
    imagem: "img/naruto.png",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 2
    }
}

const batman = {
    nome: "Batman",
    imagem: "img/batman.jpg",
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 0
    }
}

const cartas = [naruto, batman];

function SortearCarta(){
    const numeroDeCartas = 2;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaComputador = parseInt(Math.random()*numeroDeCartas);
    
    // Laço para não repetir as cartas entres os competidores
    while (numeroCartaJogador == numeroCartaComputador){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    const cartaJogador = cartas[numeroCartaJogador];
    const cartaComputador = cartas[numeroCartaComputador];
    console.log(cartaJogador , cartaComputador);
}

const btnSortear = document.querySelector("#btnSortear").onclick = () => {
    SortearCarta();
};


