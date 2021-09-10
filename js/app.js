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

const darthVader = {
    nome: "Darth Vader",
    imagem: "img/darthvader.jpg",
    atributos: {
        ataque: 8,
        defesa: 5,
        magia: 3
    }
}

const harry = {
    nome: "Harry Potter",
    imagem: "img/harry.jpg",
    atributos: {
        ataque: 6,
        defesa: 4,
        magia: 3
    }
}

const cartas = [naruto, batman, darthVader, harry];
let cartaJogador, cartaMaquina;


// Criado função de Sortear as cartas
function SortearCarta(){
    const numeroDeCartas = 4;
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
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;

    //pegar e listar atributos Jogador
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}

function ExibirCartaMaquina(){
    let divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    document.querySelector(".nome-personagem-maquina").innerText = cartaMaquina.nome;

    //pegar e listar atributos Máquina
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaMaquina.atributos);
}


function PegarAtributosMaquina(){

}
function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio="";
    for(let atributo in atributosDaCarta){
        botaoRadio = ` <input type="radio" name="atributo" value="${atributo}">`;
        listaDeAtributos += `<li> ${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }
    return listaDeAtributos;
}

function Jogar(){
    
}

const btnJogar = document.querySelector("#btnJogar");
btnJogar.onclick = () => {   
   
  
    // O código desejado é apenas isto:
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";

}, 4000;
// Inserindo evento no botão SORTEAR_CARTA.
const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () => {
    SortearCarta();
    ExibirCartaJogador();
    ExibirCartaMaquina();
    document.querySelector("#btnJogar").disabled = false;
};





