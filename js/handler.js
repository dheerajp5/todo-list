
function setItem(e) {
    if (!newItem.value) return;
    // item += newItem.value;
    console.log(newItem.value);
   add(newItem.value);
}



function add(value) {

    if (value === "") return;

    // adding item to 'todoList' array
    todoList.push(value);

    // rendering item
    render(value);

    // reseting newItem
    reSetNewItem();
}

function itemHandler(e) {
   e.classList.toggle("line-through");
   e.classList.toggle("decoration-green-400");
}




