const item = document.getElementById('input-item');
const salvarItem = document.getElementById('button-item');
const listaCompras = document.getElementById('lista_compras');


salvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();
   
    const itemLista = document.createElement('li'); //li
    const containerItemLista = document.createElement('div');// div principal
    containerItemLista.classList.add('item-lista-container');// div class item-lista-container

    //-------Criando o container do nome----------//
    const containerNome = document.createElement('div');//div secundaria
    containerNome.classList.add('container-nome');// div class container-nome
    const nomeItem = document.createElement('p');//p
    nomeItem.innerText = item.value;// p recebe o valor do input
    containerNome.appendChild(nomeItem);// p pertence ao div secundaria

    //-------Criando o botão de remover----------//
    const containerBotoes = document.createElement('div');//div terciaria
    const botaoRemover = document.createElement('button');//button
    botaoRemover.classList.add('container-botoes');// button class container-botoes
    const imgRemover = document.createElement('img');//img
    imgRemover.src = 'img/Excluir.png';// img recebe a imagem
    imgRemover.alt = 'Remover item';// img recebe o alt
    botaoRemover.appendChild(imgRemover);// img pertence ao button
    containerBotoes.appendChild(botaoRemover);// button pertence ao div terciaria

    //-------Criando o botão de editar----------//
    const botaoEditar = document.createElement('button');//button
    botaoEditar.classList.add('container-botoes');// button class container-botoes
    const imgEditar = document.createElement('img');//img
    imgEditar.src = 'img/Edicao.png';// img recebe a imagem
    imgEditar.alt = 'Editar item';// img recebe o alt
    botaoEditar.appendChild(imgEditar);// img pertence ao button
    containerBotoes.appendChild(botaoEditar);// button pertence ao div terciaria



   

    containerItemLista.appendChild(containerNome);// div secundaria pertence ao div principal
    containerItemLista.appendChild(containerBotoes);// div terciaria pertence ao div principal
    itemLista.appendChild(containerItemLista);// div principal pertence ao li
    listaCompras.appendChild(itemLista);// li pertence a lista de compras


    


}