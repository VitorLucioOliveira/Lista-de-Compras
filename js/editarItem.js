
export const editarItem = (elemento) => {
    
    let novoItem = prompt('Digite o novo nome do item:');

    if (novoItem !== null && novoItem.trim !== '') {
        
        const itemAtualizado = elemento.querySelector("#item-titulo");
        const dataAtualizada = elemento.querySelector(".texto-data");

        itemAtualizado.textContent = novoItem;
        dataAtualizada.textContent = `${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"})}`;  

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if(estavaComprado){
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemAtualizado.style.textDecoration = "line-through";
        }
    }
}