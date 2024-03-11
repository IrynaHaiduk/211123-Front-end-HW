/* 1 уровень сложности: 1. Напишите функцию, которая использует forEach для умножения каждого 
элемента массива на 2 и вывода результата в консоль. */

const arr = [2, 3, 6, 7, 8, 9, "jkjkj", "jkjknj", "hygyfy"];

function doubleNumber(arr) {
    arr.forEach((item) => {
        if (typeof item === 'number') {
            console.log(item * 2);
        }
    });
};

doubleNumber(arr);

/* Напишите функцию, которая использует forEach, чтобы складывать все элементы массива и 
возвращать сумму. */

function getSum(arr) {
    let sum = 0;

    arr.forEach((item) => {
        if (typeof item === 'number') {
            sum += item;
        }
    });

    return sum;
}

console.log(getSum(arr));

/* Дан массив строк. Используйте forEach, чтобы преобразовать каждую строку в верхний регистр и 
сохранить изменения в том же массиве. */

const stringsArr = ["bhbh", "hygyvt", "gtcrxxd", "bhvgcfc"];

function upperCaseStrings(arr) {
    arr.forEach((item, index, array) => {
        if (typeof item === 'string') {
            array[index] = item.toUpperCase();
        }
    });

    return arr;
}

console.log(upperCaseStrings(stringsArr));

/* На map
Дан массив чисел. Создайте новый массив, в котором будут лежать квадраты каждого числа из исходного 
массива. */

const numbersArr = [4, 6, 7, 8, 45, 67, 23];

const squaresNumArr = numbersArr.map(item => Math.pow(item, 2));
console.log(squaresNumArr);


/* Дан массив объектов с информацией о товарах. Необходимо создать новый массив, содержащий только имена 
товаров. */

const productsArr = [
    { id: "123", name: "phone", price: 1800 },
    { id: "345", name: "table", price: 220 },
    { id: "567", name: "laptop", price: 2000 },
    { id: "789", name: "chair", price: 56 }
];

const productsNameArr = productsArr.map(item => item.name);
console.log(productsNameArr);

/* Дан массив чисел. Создайте новый массив, в котором будут только отрицательные числа из исходного массива. */

const numbersArray = [4, 6, -7, 8, 45, -67, 23, 90, -34, -93, 56, -78];
const negativeNumArr = numbersArray.filter(item => item < 0);
console.log(negativeNumArr);