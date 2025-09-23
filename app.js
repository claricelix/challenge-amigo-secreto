//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Mudou de 'nomeAmigo' para 'amigo'
    const nome = input.value.trim();
    
    // Validação: verificar se o campo não está vazio
    if (nome === '') {
        alert('⚠️ Por favor, digite um nome válido!');
        input.focus();
        return;
    }
    
    // Validação: verificar se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert('⚠️ Este nome já está na lista!');
        input.value = '';
        input.focus();
        return;
    }
    
    // Adicionar nome ao array
    amigos.push(nome);
    
    // Limpar campo de entrada
    input.value = '';
    input.focus();
    
    // Atualizar a visualização da lista
    atualizarLista();
    
    // Habilitar botão de sortear se houver pelo menos 2 amigos
    atualizarBotaoSortear();
}

// Função para atualizar a visualização da lista
function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    
    if (amigos.length === 0) {
        listaElement.innerHTML = '';
    } else {
        // Criar elementos li para cada amigo (adaptado para sua estrutura)
        const itensHTML = amigos.map(nome => 
            `<li>${nome}</li>`
        ).join('');
        
        listaElement.innerHTML = itensHTML;
    }
}

// Função para habilitar/desabilitar o botão de sortear
function atualizarBotaoSortear() {
    const btnSortear = document.querySelector('.button-draw');
    const resultado = document.getElementById('resultado');
    
    if (amigos.length >= 2) {
        btnSortear.disabled = false;
        btnSortear.style.opacity = '1';
        btnSortear.style.cursor = 'pointer';
    } else {
        btnSortear.disabled = true;
        btnSortear.style.opacity = '0.6';
        btnSortear.style.cursor = 'not-allowed';
    }
    
    // Limpar resultado anterior
    resultado.innerHTML = '';
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('⚠️ Adicione pelo menos 2 amigos para fazer o sorteio!');
        return;
    }
    
    // Gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}

// Permitir adicionar amigo pressionando Enter
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
    
    // Focar no input quando a página carregar
    input.focus();
    
    // Inicializar botão como desabilitado
    atualizarBotaoSortear();
});