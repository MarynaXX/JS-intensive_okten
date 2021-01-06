// TASK1 ***** присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

let greet = "hello";
let school = "owu";
let web = "com";
let country = "ua";
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const pi = 3.14;
let num5 = 2.7;
let num6 = 16;
let registered = true;
let adult = false;

console.log(
  greet,
  school,
  web,
  country,
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  pi,
  registered,
  adult
);

// alert(greet);
// alert(school);
// alert(web);
// alert(country);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(pi);
// alert(registered);
// alert(adult);

document.write(
  `${greet} ${school} ${web} ${country} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${pi} ${registered} ${adult}`
);

// TASK2 ***** переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

greet = "bonjour";
web = "org";
school = "projector";
country = "sl";
num1 = 0;
num2 = 1;
num3 = 2;
num4 = 3;
num5 = 4;
num6 = 5;
registered = false;
adult = true;

console.log(
  greet,
  school,
  web,
  country,
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  pi,
  registered,
  adult
);

// alert(greet);
// alert(school);
// alert(web);
// alert(country);
// alert(num1);
// alert(num2);
// alert(num3);
// alert(num4);
// alert(num5);
// alert(num6);
// alert(pi);
// alert(registered);
// alert(adult);

document.write(
  "<br>",
  `${greet} ${school} ${web} ${country} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${pi} ${registered} ${adult}`
);

// TASK3 ***** Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const registeredTime = 19.34;
const goldenRatio = 1.618;
const dob = 1984;
const firstName = "Maryna";
const birthCity = "Kyiv";
const mother = "Nina";

console.log(registeredTime, goldenRatio, dob, firstName, birthCity, mother);
// alert(registeredTime);
// alert(goldenRatio);
// alert(dob);
// alert(firstName);
// alert(birthCity);
// alert(mother);
document.write(
  "<br>",
  `${registeredTime} ${goldenRatio} ${dob} ${firstName} ${birthCity} ${mother}`
);

// TASK4 ***** при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.Для фамилии имени и отчества создать разные переменные.Вывести каждую при помощи console.log, alert, document.write

// let mySurname = prompt("write your surname");
// let myName = prompt("write your name");
// let myFatherName = prompt(`write your father's name`);
// console.log(`${mySurname} ${myName} ${myFatherName}`);
// alert(mySurname);
// alert(myName);
// alert(myFatherName);
// document.write("<br>", `${mySurname} ${myName} ${myFatherName}`);

// TASK5 *****	Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = {
  mySurname: "Khomenko",
  myName: "Maryna",
  myFatherName: "Anatoliivna",
};
console.log(person);

// TASK 6 *****	Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
let family = [
  {
    familyMember: "doughter",
    mySurname: "Khomenko",
    myName: "Maryna",
    myFatherName: "Anatoliivna",
  },
  {
    familyMember: "son",
    mySurname: "Khomenko",
    myName: "Maksym",
    myFatherName: "Anatoliyovych",
  },
  {
    familyMember: "mother",
    mySurname: "Khomenko",
    myName: "Nina",
    myFatherName: "Pavlivna",
  },
  {
    familyMember: "father",
    mySurname: "Khomenko",
    myName: "Anatiliy",
    myFatherName: "Semenovych",
  },
];
console.log(family);

// TASK 7 *****	при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let number1 = +prompt("enter any number");
// let number2 = +prompt("enter any number");
// let number3 = +prompt("enter any number");
// console.log(number1);
// console.log(number2);
// console.log(number3);

// TASK 8 *****	при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let nr1 = parseInt(prompt("enter any number"));
// let nr2 = parseInt(prompt("enter any number"));
// let nr3 = parseInt(prompt("enter any number"));
// let nr4 = parseInt(prompt("enter any number"));
// let result = nr1 + nr2 + nr3 + nr4;
// console.log(result);
// console.log(nr1);
// console.log(nr2);
// console.log(nr3);
// console.log(nr4);

// TASK9 *****	при помощи prompt() получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let nr1 = parseFloat(prompt("enter any number"));
// let nr2 = parseFloat(prompt("enter any number"));
// let nr3 = parseFloat(prompt("enter any number"));
// let result = nr1 + nr2 + nr3;
// console.log(result);
// console.log(nr1);
// console.log(nr2);
// console.log(nr3);

// TASK 10 ***	при помощи prompt() получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную и вывести в консоль браузера
// let nr1 = Math.round(parseFloat(prompt("enter any number")));
// let nr2 = Math.round(parseFloat(prompt("enter any number")));
// let nr3 = Math.round(parseFloat(prompt("enter any number")));
// let result = nr1 + nr2 + nr3;
// console.log(result);
// console.log(nr1);
// console.log(nr2);
// console.log(nr3);

// TASK 11 *****	при помощи prompt() получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// let nr1 = parseInt(prompt("enter any number"));
// let nr2 = parseInt(prompt("enter any number"));
// let result = Math.pow(nr1, nr2);
// console.log(result);
// console.log(nr1);
// console.log(nr2);

// TASK 12 *****	При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100;
// let b = "100";
// let c = true;
// let d = undefined;
// console.log(typeof a, typeof b, typeof c, typeof d);

// TASK 13.	Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
// 5 < 6 -> true
// 5 === 6 -> false
// 5 > 6 -> false
// 5 == 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// TASK 14.	Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) || !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
