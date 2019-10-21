
const btn = document.querySelector('.cl');
const addForm = document.querySelector('.add-todo-form');
const listTodo = document.querySelector('#listTodo');
const sidebar = document.querySelector('.sidebar');
const buttonSearchStop = document.querySelector('#inputSearch');
const formSearch = document.querySelector('.search-form');
const search = document.querySelector('#search-input');


sidebar.addEventListener('click', (e) => changeTodo(e.target))

//Find out the color of the bu
function changeTodo(item) {
    switch (item.className) {
        case 'green':
            changeTodoColor('#5da04f9d');
            break;

        case 'gray':
            changeTodoColor('#9b9b9b9d');
            break;
        case 'red':
            changeTodoColor('#ff00009d');
            break;
    }
}

//Change Todo Block Col
function changeTodoColor(color) {
    const listCheckbox = listTodo.querySelectorAll('.lef-bl')
    listCheckbox.forEach((item, i) => {
        if (listCheckbox[i].checked == true)
            listCheckbox[i].parentNode.style.background = color;
        listCheckbox[i].checked = false;
    });
}

search.addEventListener('keyup', () => searchElements());

// Live Search
function searchElements() {
    const searchElem = formSearch.todoSearch.value.toUpperCase();
    let listItem = listTodo.querySelectorAll('.item');

    listItem.forEach(function (item, i) {
        if (listItem[i].children[1].textContent.toUpperCase().indexOf(searchElem) > -1) {
            listItem[i].style.display = "flex";
        } else {
            listItem[i].style.display = "none";
        }
    });

}

// Clear field Search form
buttonSearchStop.addEventListener('click', () => clickDelete());

//Delete by button
function clickDelete()
{
    formSearch.todoSearch.value = "";
    searchElements();
}

listTodo.addEventListener('click', (e) => deleteTodo(e.target));

// Delete Todo by button
function deleteTodo(item) {
    if (item.className === "delete")
        item.parentNode.remove();
}


// Disable reboot
addForm.addEventListener('submit', (e) => e.preventDefault());

btn.addEventListener('click', () => getItem());

//Retrieving an item and removing spaces
function getItem() {
    let inputValue = addForm.todoInput.value.trim();

    if (inputValue.length) {
        addTodo(inputValue, choiseColor());
    }

    addForm.todoInput.value = "";
}

//Adding Todo with a given color
function choiseColor() {
    let color = "#5da04f9d";

    const listColor = addForm.querySelectorAll('#buttonColor');
    console.log(listColor);

    listColor.forEach((item, i) => {
        if (listColor[i].checked == true){
        switch (item.className) {
            case 'gray':
                color = '#9b9b9b9d';
                break;

            case 'red':
                color = '#ff00009d';
                break;
        }
    } 
    });
return color;
}

//Creating a template and adding to HTML
function addTodo(value, color) {
    const template = `
    <div class="item" style="background: ${color}">
        <input class="lef-bl" type="checkbox">
        <p class="p-text">${value}</p>
        <button class="delete"></button>
    </div>`;

    const point = document.getElementById('listTodo');
    point.innerHTML += template;
}
