/* Создайте массив объектов, каждый из которых представляет собой информацию о человеке 
(имя, возраст и т. д.). Используйте метод map, чтобы создать новый массив, содержащий 
только имена всех людей.
 */
//1
const usersArr = [
    {
        name: "Olena",
        age: 25
    },
    {
        name: "Kate",
        age: 23
    },
    {
        name: "Alina",
        age: 20
    },
    {
        name: "Nelli",
        age: 18
    },
];

const usersNames = usersArr.map(item => item.name);
console.log(usersNames);

//2 Создайте массив чисел и используйте метод map, чтобы преобразовать каждое число в строку.

const numArray = [3, 567, 78, 987, 45, 67, 78];
const strArray = numArray.map(item => String(item));
console.log(strArray);

//3 Создайте массив строк, представляющих даты, и используйте метод map, чтобы преобразовать каждую 
//строку в объект Date.

const datesArray = ["2022-12-08", "2001-10-10T14:48:00", "2000-11-10T14:48:00.000+09:00"];
const newDateArr = datesArray.map(item => new Date(item));
console.log(newDateArr);

//4 Создайте массив чисел и используйте метод map, чтобы создать новый массив, содержащий квадраты 
//каждого числа.
const numArray2 = [34, 5, 67, 2, 34, 25];
const squaresNumArr = numArray2.map(item => item ** 2);
console.log(squaresNumArr);

//5 Создайте массив слов и используйте метод map, чтобы создать новый массив, содержащий длины каждого 
//слова.
const strArr = ["JKLJKL", 'jkljljl', "dfgdg", "xgxgxg"];
const strLengthArr = strArr.map(item => item.length);
console.log(strLengthArr);

/* ForEach:

Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль каждый элемент массива, 
умноженный на 2.

 */
const numArray3 = [3, 5, 78, 90, 34, 5, 67];

numArray3.forEach(item => console.log(item * 2));

//2 Создайте массив строк и используйте метод forEach, чтобы вывести в консоль каждую строку в верхнем 
//регистре.

const strArr2 = ["hvhvhg", "dtgst", "gxggcf"];
strArr2.forEach(item => console.log(item.toUpperCase()));

//3 Создайте массив объектов и используйте метод forEach, чтобы вывести в консоль значения определенного 
//свойства каждого объекта.

const usersArr2 = [
    {
        name: "Olena",
        age: 25
    },
    {
        name: "Kate",
        age: 23
    },
    {
        name: "Alina",
        age: 20
    },
    {
        name: "Nelli",
        age: 18
    },
    {
        name: "Julia",
        age: 15
    },
];

usersArr2.forEach(item => console.log(`Age: ${item.age}`));

//4Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль только нечетные числа.
const numArray4 = [4,6, 89, 11, 13, 14, 68];

numArray4.forEach(item => item % 2 !== 0? console.log(item): "");

//5 Создайте массив слов и используйте метод forEach, чтобы вывести в консоль каждое слово, у которого 
//длина больше 5 символов.

const strArray3 = ["cxxxgg", "jhj", "bftrxdrze", "bhj", "u", "ty", "srzrzrre"];
strArray3.forEach(item => item.length > 5 ? console.log(item) : "");

/* Filter:

1 Создайте массив чисел и используйте метод filter, чтобы отфильтровать только положительные числа.
 */

const numArray5 = [45, 6, 8, 67, 89, 30, 24];
const evenNumArr = numArray5.filter(item => item % 2 === 0);
console.log(evenNumArr);

//2 Создайте массив строк и используйте метод filter, чтобы отфильтровать только строки, содержащие более 
//одного слова.

const strArr6 = ["hj jkk okojko", "ff uihu", "drr hu gy iu", "HHVGVG", "bgvgcg", "vgcf"];
const newStrArray = strArr6.filter(item => item.split(" ").length>1);
console.log(newStrArray);

//3 Создайте массив объектов, представляющих людей, и используйте метод filter, чтобы отфильтровать только 
//совершеннолетних.
const usersArr3 = [
    {
        name: "Olena",
        age: 25
    },
    {
        name: "Kate",
        age: 23
    },
    {
        name: "Alina",
        age: 20
    },
    {
        name: "Nelli",
        age: 18
    },
    {
        name: "Julia",
        age: 15
    },
    {
        name: "Anna",
        age: 10
    },
    {
        name: "Lana",
        age: 4
    },
];

const adultsUsers = usersArr3.filter(item => item.age >= 18);
console.log(adultsUsers);

//4 Создайте массив чисел и используйте метод filter, чтобы отфильтровать только числа, которые делятся на 
//3 без остатка.
const numArray6 = [3, 45, 9, 12, 24, 90, 43, 21, 78, 47];
const newArr = numArray6.filter(item => item%3 === 0);
console.log(newArr);

//5 Создайте массив слов и используйте метод filter, чтобы отфильтровать только слова, начинающиеся с 
//определенной буквы.

const strArr4 = ["gfhfvhg", "gaaxscd", "gkljiji", "ezzezsw", "exfxf", "wesrxr", "gvvggv"];
const firstLetter = "G";
const newStrArr = strArr4.filter(item => item[0].toLowerCase() === firstLetter.toLowerCase());
console.log(newStrArr);


//Основное задание: сделать фильтрацию нашего приложения по названию товара и по количеству товара 

function filterProductByName(itemName) {
    products.filter((item) => {
        item.show = item.name.toLowerCase().includes(itemName.toLowerCase());
    });
    productLocalStorage(products);
    rerender();
}

function filterProductByCount(count) {
    products.filter((item) => {
        item.show = item.count === count
    });
    productLocalStorage(products);
    rerender();
}