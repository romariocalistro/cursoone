//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];

function inserirNomes() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    nomesAmigos.forEach(nome => {
        let listaInserida = document.createElement("li");
        listaInserida.textContent = nome;
        listaAmigos.appendChild(listaInserida);
    });
}

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    nomesAmigos.push(nomeAmigo);
    inserirNomes();
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (nomesAmigos.length === 0) {
        return;
    }
    let indiceAleatorioEscolhido = Math.floor(Math.random() * nomesAmigos.length);
    let amigoEscolhido = nomesAmigos[indiceAleatorioEscolhido];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let listaResultado = document.createElement("li");
    listaResultado.textContent = `O amigo secreto sorteado é: ${amigoEscolhido}`;
    resultado.appendChild(listaResultado);
}