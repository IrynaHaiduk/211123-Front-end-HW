

/* Напишите программу, которая использует метод forEach, чтобы вывести каждый элемент массива на новой 
строке.
*/
const arr = [2, 5, 67, 89, "njbjbj", "njnjbj"]
function showArrElements(arr) {
    arr.forEach((item => console.log(item)));
}

showArrElements(arr);

/* Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод forEach, 
чтобы увеличить каждый элемент массива на 1.
*/

const numArr = [8, 4, 56, 78, 354, 23, 457];
function increaseArrElements(arr) {
    return arr.map(item => item + 1);
}
const increaseNumArr = increaseArrElements(numArr);
console.log(increaseNumArr);


/* Напишите программу, которая использует метод forEach, чтобы найти сумму всех элементов в массиве.*/
const array = [8, 4, 6, 2, 5, "nuhubu", "nknk", "njhh"];
function getElemSum(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += (typeof item === 'number') ? item : 0;
    });

    return sum;
}

const arrElemSum = getElemSum(array);
console.log(arrElemSum);


/*Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод forEach, 
чтобы преобразовать каждую строку в верхний регистр.
*/

const stringsArr = ["hiuhuy", "nhbuvu", "vgbgyvyf", "hvycycfy"];

function upperCaseElements(arr) {
    return arr.map(item => item.toUpperCase());
}

const upperCaseStringsArr = upperCaseElements(stringsArr);
console.log(upperCaseStringsArr);

/* Напишите программу, которая использует метод forEach, чтобы проверить, содержит ли массив заданное 
значение.
map: */

const arr2 = [3, 5, 7, 8, "hello", "ok", "done"];

function findElem(arr, elem) {
    let found = false;

    arr.forEach(item => {
        if (item === elem) {
            console.log(`This array - ${arr} includes ${elem}`);
            found = true;
            return;
        }
    });

    if (!found) {
        console.log(`This array - ${arr} doesn't include ${elem}`);
    }
}

findElem(arr2, "hello");
findElem(arr2, 5);
findElem(arr2, "vhvghvh");




/* Напишите программу, которая использует метод map, чтобы умножить каждый элемент массива на 2.
*/

const arr3 = [45, 56, "bhbvhv", "bgugvg", 8, 9, 12];

function doubleArrElem(arr) {
    return arr.map(item => typeof item === "number" ? item * 2 : item);
};

const doubleArr = doubleArrElem(arr3);
console.log(doubleArr);

/*Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод map, 
чтобы добавить к каждой строке восклицательный знак.
*/

const stringArr2 = ["hhgutfrtyt", "yvgvgh", "jhbjbh", "vhgvh"];

function addExclamation(arr) {
    return arr.map(item => `${item}!`);
}

const stringArrWithExclamation = addExclamation(stringArr2);

console.log(stringArrWithExclamation);

/*Напишите программу, которая использует метод map, чтобы извлечь имена из массива объектов и 
создать новый массив только из имен.
*/

const usersArr = [{ name: "Alex", age: 21 }, { name: "Ivan", age: 27 }, { name: "Iren", age: 25 },];

function getNames(arr) {
    return arr.map(item => item.name);
}

const namesArr = getNames(usersArr);
console.log(namesArr);

/*Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод map, 
чтобы вернуть новый массив, содержащий квадраты этих чисел.
*/

const numbersArr = [5, 56, 7, 89, 45, 3, 24];

function getNumSquares(arr) {
    return arr.map(item => item ** 2);
}

const squaresNumArr = getNumSquares(numbersArr);
console.log(squaresNumArr);

/*Напишите программу, которая использует метод map, чтобы преобразовать массив строк в массив 
чисел (например, массив строк '1', '2', '3' должен быть преобразован в массив чисел 1, 2, 3).
filter: */

const arr4 = ["7", "26", "89", "67"];

function convertToNum(arr) {
    return arr.map(item => +item);
}

const convertedNumArr = convertToNum(arr4);
console.log(convertedNumArr);


/* Напишите программу, которая использует метод filter, чтобы отфильтровать все четные числа из массива.
*/

const arr5 = [5, 6, 8, 9, 4, "ghjgjj", "jknjk"]
function findEvenNum(arr) {
    return arr.filter(item => typeof item === 'number' && item % 2 === 0);
}
const evenNumArr = findEvenNum(arr5);
console.log(evenNumArr);

/* 
Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод filter,
 чтобы вернуть массив строк, содержащих только букву 'a'.
 */

const stringArr3 = ["a", "ajhbjbjb", "yiuib", "a", "bjhbj", "a"];

function findStringsWithA(arr) {
    return arr.filter(item => item === "a");
}

const newArr = findStringsWithA(stringArr3);
console.log(newArr);

/* 
Напишите программу, которая использует метод filter, чтобы отфильтровать только положительные числа 
из массива.
*/
const arr6 = [5, -6, 8, -9, 4, "ghjgjj", "jknjk"]
function findPositiveNum(arr) {
    return arr.filter(item => typeof item === 'number' && item > 0);
}
const positiveNumArr = findPositiveNum(arr6);
console.log(positiveNumArr);

/* 
Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод filter, 
чтобы вернуть массив объектов, у которых значение определенного свойства больше заданного порога.
*/
const usersArr2 = [{ name: "Alex", age: 18 }, { name: "Ivan", age: 15 }, { name: "Iren", age: 25 }, { name: "Julia", age: 28 }];
const neededAge = 20;

function getNewArr(arr) {
    return arr.filter(item => item.age > neededAge);
}

const newArr2 = getNewArr(usersArr2);
console.log(newArr2);

/* 
Напишите программу, которая использует метод filter, чтобы отфильтровать строки, содержащие не менее 
5 символов.
reduce: */

function getNewArr(arr) {
    return arr.filter(item => item.length >= 5)
}


/* Напишите программу, которая использует метод reduce, чтобы найти сумму всех элементов массива.

*/

function getSumOfElements(arr) {
    return arr.reduce((accum, item) => { return accum + item }, 0);
}

/* 
Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод reduce, 
чтобы найти наименьшее число в массиве.
*/

const numArr2 = [-56, 45, -78, 46, -90, 89];

function findMinNumber(arr) {
    return arr.reduce((minNum, item) => {
        if (item < minNum) {
            return item;
        } else {
            return minNum;
        }

    }, arr[0])
}

const minNum = findMinNumber(numArr2);
console.log(minNum);

/* 
Напишите программу, которая использует метод reduce, чтобы объединить все элементы массива строк в 
одну строку.
*/

const strArr4 = ["hjhjj", "mjikhi", "hihbu"];
function getBigString(arr) {
    return arr.reduce((accum, item) => { return accum + item }, "");
}

const bigString = getBigString(strArr4);
console.log(bigString);

/* 
Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод reduce, 
чтобы вычислить средний возраст всех объектов в массиве.
*/

const usersArr3 = [{ name: "Alex", age: 18 }, { name: "Ivan", age: 15 }, { name: "Iren", age: 25 }, { name: "Julia", age: 28 }];


function getAverageAge(arr) {
    const agesSum = arr.reduce((accum, item) => { return item.age + accum }, 0);
    return agesSum / arr.length;
}

const averageAge = getAverageAge(usersArr3);
console.log(averageAge);

/* 
Напишите программу, которая использует метод reduce, чтобы найти наиболее часто встречающийся элемент
 в массиве строк. */

const stringArr4 = ["apple", "banana", "apple", "banana", "banana", "orange", "apple", "apple"];

const arrForElems = [];

stringArr4.forEach((item) => {

    const searchedItem = arrForElems.find(elem => elem.hasOwnProperty(item));

    if (searchedItem) {
        searchedItem[item]++;
    } else {
        const obj = {};
        obj[item] = 1;
        arrForElems.push(obj);
    }
});

console.log(arrForElems);

const quantityArr = [];
const keysArr = [];

arrForElems.forEach(item => {
    quantityArr.push(...Object.values(item)); 
    keysArr.push(...Object.keys(item)); 
});

console.log(quantityArr);
const maxCount = Math.max(...quantityArr);
console.log(maxCount);

const indexOfsearchedItem = quantityArr.indexOf(maxCount);
console.log(indexOfsearchedItem);
const mostFrequent = keysArr[indexOfsearchedItem];



console.log("Наиболее часто встречающийся элемент:", mostFrequent);


