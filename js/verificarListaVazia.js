const msgListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length == 0) {
        msgListaVazia.style.display = "block";
    } else {
        msgListaVazia.style.display = "none";
    }
}