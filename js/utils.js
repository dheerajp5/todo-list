

function render(item, parent =listContainer) {
     
    let li = document.createElement('li');
    li.setAttribute('class', itemStyle);

    if(parent === completedTaskContainer ) li.classList.add('bg-green-400/50');

    li.setAttribute('onclick', "itemHandler(this)")
    li.setAttribute('oncontextmenu', 'removeItem(event,this)')

    li.innerText = item;
    parent.appendChild(li);

}


function removeItem(event, element) {
    event.preventDefault();
    element.remove();
    render(element.innerText, completedTaskContainer);
}

function reSetNewItem() {
    newItem.value = "";
}


function init() {
    todoList.forEach(element => {
        render(element)
    });
}


