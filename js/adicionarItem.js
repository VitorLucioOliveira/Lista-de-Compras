import { criarItemDaLista } from "./criarItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault()

    if (item.value.trim() === '') {
        alert('Digite um item para adicionar à lista.');
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);    

    item.value = '';
   
}