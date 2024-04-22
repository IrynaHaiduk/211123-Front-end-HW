const productsUrl = 'https://fakestoreapi.com/products';
let productsData;

// new code

/* 1 уровень сложности: Создание класса Employee: Создайте класс Employee с конструктором, который 
принимает три параметра: name, age, position. Конструктор должен инициализировать соответствующие 
свойства объекта.
Добавление метода getInfo(): Добавьте в класс Employee метод getInfo(), который возвращает 
строку с информацией о сотруднике в формате "Имя: Возраст, Должность".
Фильтрация сотрудников по должности:
Напишите функцию filterEmployeesByPosition, которая принимает два параметра: список 
сотрудников (employees) и должность (position).
Отфильтруйте список сотрудников по заданной должности.
Используйте метод map, чтобы преобразовать отфильтрованный список в список имен сотрудников.
Функция должна возвращать массив имен сотрудников с заданной должностью.
Создайте несколько объектов сотрудников, используя класс Employee.
Используйте функцию filterEmployeesByPosition для фильтрации сотрудников по их должности.
Результат фильтрации в вывести на страницу во втором модальном окне на вашем сайте pallas cat studio. 
результат выложить на гитхаб в прошлый проект, но разделите новый код комментариями!!  */

class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    getInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}, Должность: ${this.position}`;
    }
}

function filterEmployeesByPosition(employees, position) {
    return employees.filter(employee => employee.position === position).map(employee => employee.name);
}

const employee1 = new Employee("John", 45, "manager");
const employee2 = new Employee("Olena", 25, "manager");
const employee3 = new Employee("Ivan", 37, "manager");
const employee4 = new Employee("Iren", 25, "developer");
const employee5 = new Employee("Oksana", 23, "developer");
const employee6 = new Employee("Viktoria", 35, "developer");
const employee7 = new Employee("Oleg", 25, "director");

const employeesArray = [employee1, employee2, employee3, employee4, employee5, employee6, employee7];

const managersArray = filterEmployeesByPosition(employeesArray, "manager");

// new code

document.addEventListener("click", (e) => {

    const bodyHasModalActiveClass = document.body.classList.contains("modal-active");

    if (bodyHasModalActiveClass && e.target.closest(".modal__close")) {
        document.body.classList.remove("modal-active");
        const modal_1 = document.querySelector(".modal");
        const modal_2 = document.querySelector(".modal_2");

        if (modal_1) {
            modal_1.remove();
        }

        if (modal_2) {
            modal_2.remove();
        }
    }

    if (!bodyHasModalActiveClass && e.target.closest(".btn-fetch")) {
        document.body.classList.add("modal-active");
        renderProductsData(productsUrl);
    }

    if (!bodyHasModalActiveClass && e.target.closest(".btn-show-info")) {
        document.body.classList.add("modal-active");
        createModalWindow2(managersArray);
    }

    if (bodyHasModalActiveClass && !e.target.closest(".modal__wrap") && e.target.closest(".modal")) {
        document.body.classList.remove("modal-active");
        const modal = document.querySelector(".modal");
        modal.remove();
    }

    if (bodyHasModalActiveClass && !e.target.closest(".modal__wrap") && e.target.closest(".modal_2")) {
        document.body.classList.remove("modal-active");
        const modal_2 = document.querySelector(".modal_2");
        modal_2.remove();
    }
});


async function renderProductsData(url) {
    productsData = await getProductData(url);
    productsData = productsData.slice(0, 2);
    createModalWindow(productsData);
}

async function getProductData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function createModalWindow(productsData) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.classList.add("active");

    const modalWrap = document.createElement("div");
    modalWrap.classList.add("modal__wrap");
    modal.append(modalWrap);

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal__title");
    modalTitle.innerText = "Fetch posts";
    modalWrap.append(modalTitle);

    const modalList = document.createElement("ul");
    modalList.classList.add("modal__list");
    modalWrap.append(modalList);

    let modalListContent = "";

    productsData.forEach(product => {
        modalListContent += `
        <li class="modal__item">
        <div class="modal__container">
            <span class="modal__caption">
                Title:
            </span>
            <div class="modal__info">
                ${product.title}
            </div>
        </div>
        <div class="modal__container">
            <span class="modal__caption">
                Body:
            </span>
            <div class="modal__info">
                ${product.description}
            </div>
        </div>
    </li>
        `;
    });

    modalList.innerHTML = modalListContent;

    const modalClose = document.createElement("div");
    modalClose.classList.add("modal__close");

    const modalCloseImg = document.createElement("img");
    modalCloseImg.setAttribute("src", "images/icon-close.svg");
    modalCloseImg.setAttribute("alt", "close modal window");
    modalClose.append(modalCloseImg);
    modalWrap.append(modalClose);
    document.body.append(modal);
}

function createModalWindow2(dataArray) {
    const modal = document.createElement("div");
    modal.classList.add("modal_2");
    modal.classList.add("active");

    const modalWrap = document.createElement("div");
    modalWrap.classList.add("modal__wrap");
    modal.append(modalWrap);

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal__title");
    modalTitle.innerText = "Managers list:";
    modalWrap.append(modalTitle);

    const modalList = document.createElement("ul");
    modalList.classList.add("modal__list");
    modalWrap.append(modalList);

    let modalListContent = "";

    dataArray.forEach(item => {
        modalListContent += `
        <li class="modal__item">
            ${item}
        </li>
        `;
    });

    modalList.innerHTML = modalListContent;

    const modalClose = document.createElement("div");
    modalClose.classList.add("modal__close");

    const modalCloseImg = document.createElement("img");
    modalCloseImg.setAttribute("src", "images/icon-close.svg");
    modalCloseImg.setAttribute("alt", "close modal window");
    modalClose.append(modalCloseImg);
    modalWrap.append(modalClose);
    document.body.append(modal);
}








