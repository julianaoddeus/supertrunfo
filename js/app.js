// Criado os objetos CARTA com seus atributos.
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
let cartaJogador, cartaMaquina;


// Criado função de Sortear as cartas
function SortearCarta(){
    const numeroDeCartas = 2;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    
    // Laço para não repetir as cartas entres os competidores
    while (numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];
    
    
}

// Exibir a carta do Jogador e carta Maquina
function ExibirCartaJogador(){
    console.log(cartaJogador);
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;

    //pegar e listar atributos para
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
    
    
}

function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio="";
    for(let atributo in atributosDaCarta){
        botaoRadio = ` <input type="radio" name="atributo" value="${atributo}">`;
        listaDeAtributos += `<li> ${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }
    return listaDeAtributos;
}



// Inserindo evento no botão SORTEAR_CARTA.
const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () => {
    SortearCarta();
    ExibirCartaJogador();
    document.querySelector("#btnJogar").disabled = false;
};





