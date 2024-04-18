/*  Напишите класс Circle, который принимает радиус в качестве параметра конструктора. 
 Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий
  длину окружности.*/

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle(5);
console.log(circle1.area());
console.log(circle1.circumference());

/* Создайте класс Book, который принимает название книги, автора и количество страниц 
в качестве параметров конструктора. Добавьте метод info, который выводит информацию о книге в 
формате "Книга: [название], Автор: [автор], Страниц: [количество]". */

class Book {
    constructor(name, author, pagesNumber) {
        this.name = name;
        this.author = author;
        this.pagesNumber = pagesNumber;
    }

    info() {
        return `Книга: "${this.name}", Автор: ${this.author}, Страниц: ${this.pagesNumber}.`;
    }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 673);
console.log(book1.info());

/* Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы 
deposit и withdraw для управления счетом. */

class BankAccount {
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.initialBalance = initialBalance;
    }

    deposit(moneyAmount) {
        this.initialBalance += moneyAmount;
    }

    withdraw(moneyAmount) {
        if (this.initialBalance >= moneyAmount) {
            this.initialBalance -= moneyAmount;
        } else {
            console.log(`
            There is not enough money in your account to withdraw this amount. 
            In your bank account now - ${this.initialBalance}. 
            Try withdrawing a smaller amount of money`);
        }
    }
}

const bankAccount1 = new BankAccount("John Smith", 5000);
bankAccount1.deposit(400);
bankAccount1.withdraw(6056);
console.log(bankAccount1);

/* 
Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") в качестве 
параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным. */

class Animals {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    sound() {
        switch (this.type) {
            case 'cat':
                console.log(`${this.name} says "Miay"`);
                break;
            case 'dog':
                console.log(`${this.name} says "Raff"`);
                break;
            default:
                console.log(`The sound of this animal - ${this.name} is undefined.`);
        }
    }
}

const cat1 = new Animals("Gracy", "cat");
cat1.sound();

const dog1 = new Animals("Lucky", "dog");
dog1.sound();

const humster1 = new Animals("Pussy", "humster");
humster1.sound();

/* Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора.
 Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. Например, 
 send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя  */

class Email {
    constructor(email) {
        this.email = email;
    }

    send(email) {
        console.log(`Sending from address ${this.email} to recipient ${email} was successful`);
    }
    receive(email) {
        console.log(`Receiving from address ${email} to recipient ${this.email} was successful`);
    }

    reply(email) {
        console.log(`User from  ${this.email}  replied user with email - ${email}`);
    }

}

const email1 = new Email("ivan@gmail.com");

email1.send("john@gmail.com");
email1.reply("olena@gmail.com");
email1.receive("olga@gmail.com");


