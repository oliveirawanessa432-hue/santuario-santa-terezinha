
// MENU DE NAVEGAÇÃO
const cabecalho = document.getElementById("site-header");

if (cabecalho) {
    cabecalho.innerHTML = `
        <header>
            <div class="logo">
                <a href="index.html">Santuário Santa Terezinha</a>
            </div>

            <nav>
                <a href="index.html">Início</a>
                <a href="igreja.html">O Santuário</a>
                <a href="doacoes.html">Doações</a>
                <a href="bazar.html">Bazar</a>
                <a href="eventos.html">Eventos</a>
                <a href="contato.html">Contato</a>
            </nav>
        </header>
    `;
}

// RODAPÉ
const rodape = document.getElementById("site-footer");

if (rodape) {
    rodape.innerHTML = `
        <footer>
            <p>Santuário Santa Terezinha</p>
            <p>Fé, comunidade e solidariedade.</p>
        </footer>
    `;
}

// FRASES DA TEÓFILA
const mensagens = [
    "Você sabia que pequenos gestos podem fazer a diferença?",
    "Sua doação pode ajudar a transformar vidas!",
    "A solidariedade começa com pequenas atitudes.",
    "Conheça nossas iniciativas e descubra como participar!"
];

let mensagemAtual = 0;

const mensagem = document.getElementById("mensagem-teofila");
const botao = document.getElementById("nova-mensagem");

if (mensagem && botao) {
    botao.addEventListener("click", function() {
        mensagemAtual = (mensagemAtual + 1) % mensagens.length;
        mensagem.textContent = mensagens[mensagemAtual];
    });
}
