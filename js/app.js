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
    const numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    const numeroCartaComputador = parseInt(Math.random()*numeroDeCartas);
    console.log(numeroCartaJogador , numeroCartaComputador)
}
SortearCarta();