
/* Создайте форму с полем для ввода имени пользователя.
При отправке формы сохраните введенное имя в localStorage.
При загрузке страницы проверьте наличие сохраненного имени в localStorage и, если оно есть, 
отобразите его на странице.
*/

const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');
const formBtn = form.querySelector('.form__btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameValue = formInput.value;
    localStorage.setItem("name", nameValue);
    formInput.value = "";
});

/*Счетчик посещений:


Создайте переменную в localStorage для хранения количества посещений.
При загрузке страницы увеличивайте значение этой переменной на 1 и сохраняйте обновленное значение 
в localStorage.
Отобразите количество посещений на странице.
Список задач:
*/

/*
Создайте простой список задач с полем для ввода новой задачи и кнопкой для добавления.
При добавлении новой задачи сохраняйте все задачи в localStorage.
При загрузке страницы отобразите сохраненный список задач. */

const todosBlock = document.querySelector(".todos");
const todosForm = todosBlock.querySelector(".todos__form");
const todosFormInput = todosBlock.querySelector(".todos-form__input");
const todosList = todosBlock.querySelector(".todos-list");
const todosArr = [];

todosForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputValue = todosFormInput.value;

    if (inputValue) {
        todosArr.push(inputValue);
        localStorage.setItem("todosArray", JSON.stringify(todosArr));
    }

    const newTodo = document.createElement("li");
    newTodo.innerText = inputValue;
    todosList.prepend(newTodo);
    todosFormInput.value = "";
    console.log(todosArr);
})

window.addEventListener('load', () => {
    let counter = localStorage.getItem("counter");

    if (counter) {
        counter++;
    } else {
        counter = 1;
    }

    localStorage.setItem("counter", counter);
    console.log(`Number of visits per page - ${counter}`);

    const userName = localStorage.getItem("name");

    if (userName) {
        console.log(`UserName is ${userName}`);
    }

    const todosListArr = JSON.parse(localStorage.getItem("todosArray"));
    console.log(`Todos tasks - ${todosListArr}`);
});





