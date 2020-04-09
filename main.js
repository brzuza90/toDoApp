const form = document.querySelector('form');
const taskInput = document.querySelector('input')
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const searchInput = document.querySelector('form #search');
const listItems = [];
// Funkcje
const createTaskList = () => {
    ul.textContent = "";
    listItems.forEach((listItem, number) => {
        listItem.dataset.number = number;
        ul.appendChild(listItem);
    })
}
const searchTask = (e) => {
    const text = e.target.value.toLowerCase();
    createTaskList();
    let tasks = [...listItems];
    tasks = tasks.filter(liItem => liItem.textContent.toLowerCase().includes(text));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));

}
const removeTask = function (e) {
    event.target.parentNode.remove();
    const index = e.target.parentNode.dataset.number;
    listItems.splice(index, 1)
    taskNumber.textContent = listItems.length;
    createTaskList();
}
const addTask = function (e) {
    e.preventDefault();
    const task = taskInput.value;
    if (task === "") return;
    const newTask = document.createElement('li');
    newTask.innerHTML = task + '<button>Usuń</button>';
    listItems.push(newTask);
    console.log(listItems);
    createTaskList();
    taskInput.value = "";
    newTask.querySelector('button').addEventListener('click', removeTask);
    taskNumber.textContent = listItems.length;
}
form.addEventListener('submit', addTask);
searchInput.addEventListener('input', searchTask)