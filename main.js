//#region LESSON ---- 01
// TASK1 ***** присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

// let greet = "hello";
// let school = "owu";
// let web = "com";
// let country = "ua";
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// const pi = 3.14;
// let num5 = 2.7;
// let num6 = 16;
// let registered = true;
// let adult = false;

// console.log(
//   greet,
//   school,
//   web,
//   country,
//   num1,
//   num2,
//   num3,
//   num4,
//   num5,
//   num6,
//   pi,
//   registered,
//   adult
// );

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

// document.write(
//   `${greet} ${school} ${web} ${country} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${pi} ${registered} ${adult}`
// );

// // TASK2 ***** переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

// greet = "bonjour";
// web = "org";
// school = "projector";
// country = "sl";
// num1 = 0;
// num2 = 1;
// num3 = 2;
// num4 = 3;
// num5 = 4;
// num6 = 5;
// registered = false;
// adult = true;

// console.log(
//   greet,
//   school,
//   web,
//   country,
//   num1,
//   num2,
//   num3,
//   num4,
//   num5,
//   num6,
//   pi,
//   registered,
//   adult
// );

// // alert(greet);
// // alert(school);
// // alert(web);
// // alert(country);
// // alert(num1);
// // alert(num2);
// // alert(num3);
// // alert(num4);
// // alert(num5);
// // alert(num6);
// // alert(pi);
// // alert(registered);
// // alert(adult);

// document.write(
//   "<br>",
//   `${greet} ${school} ${web} ${country} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${pi} ${registered} ${adult}`
// );

// // TASK3 ***** Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const registeredTime = 19.34;
// const goldenRatio = 1.618;
// const dob = 1984;
// const firstName = "Maryna";
// const birthCity = "Kyiv";
// const mother = "Nina";

// console.log(registeredTime, goldenRatio, dob, firstName, birthCity, mother);
// alert(registeredTime);
// alert(goldenRatio);
// alert(dob);
// alert(firstName);
// alert(birthCity);
// alert(mother);
// document.write(
//   "<br>",
//   `${registeredTime} ${goldenRatio} ${dob} ${firstName} ${birthCity} ${mother}`
// );

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

// let person = {
//   mySurname: "Khomenko",
//   myName: "Maryna",
//   myFatherName: "Anatoliivna",
// };
// console.log(`${person.mySurname} ${person.myName} ${person.myFatherName}`);

// // TASK 6 *****	Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// let family = [
//   {
//     familyMember: "doughter",
//     mySurname: "Khomenko",
//     myName: "Maryna",
//     myFatherName: "Anatoliivna",
//   },
//   {
//     familyMember: "son",
//     mySurname: "Khomenko",
//     myName: "Maksym",
//     myFatherName: "Anatoliyovych",
//   },
//   {
//     familyMember: "mother",
//     mySurname: "Khomenko",
//     myName: "Nina",
//     myFatherName: "Pavlivna",
//   },
//   {
//     familyMember: "father",
//     mySurname: "Khomenko",
//     myName: "Anatiliy",
//     myFatherName: "Semenovych",
//   },
// ];

// console.log(
//   `
//   ${family[0].familyMember}: ${family[0].mySurname} ${family[0].myName} ${family[0].myFatherName} \n
//   ${family[1].familyMember}: ${family[1].mySurname} ${family[1].myName} ${family[1].myFatherName} \n
//   ${family[2].familyMember}: ${family[2].mySurname} ${family[2].myName} ${family[2].myFatherName} \n
//   ${family[3].familyMember}: ${family[3].mySurname} ${family[3].myName} ${family[3].myFatherName}
//   `
// );

// TASK 7 *****	при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let number1 = +prompt("enter any number");
// let number2 = +prompt("enter any number");
// let number3 = +prompt("enter any number");
// console.log(number1);
// console.log(number2);
// console.log(number3);

// TASK 8 *****	при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let nr1 = parseInt(prompt("enter any number"));
// console.log(nr1);
// let nr2 = parseInt(prompt("enter any number"));
// console.log(nr2);
// let nr3 = parseInt(prompt("enter any number"));
// console.log(nr3);
// let nr4 = parseInt(prompt("enter any number"));
// console.log(nr4);
// let result = nr1 + nr2 + nr3 + nr4;
// console.log(result);

// TASK9 *****	при помощи prompt() получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let nr1 = parseFloat(prompt("enter any number"));
// console.log(nr1);
// let nr2 = parseFloat(prompt("enter any number"));
// console.log(nr2);
// let nr3 = parseFloat(prompt("enter any number"));
// console.log(nr3);
// let result = nr1 + nr2 + nr3;
// console.log(result);

// TASK 10 ***	при помощи prompt() получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную и вывести в консоль браузера
// let nr1 = Math.round(parseFloat(prompt("enter any number")));
// console.log(nr1);
// let nr2 = Math.round(parseFloat(prompt("enter any number")));
// console.log(nr2);
// let nr3 = Math.round(parseFloat(prompt("enter any number")));
// console.log(nr3);
// let result = nr1 + nr2 + nr3;
// console.log(result);

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
// console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0'); true
// console.log(!!'null'); true
// console.log(!!'undefined'); true
// console.log(!!(3 / "owu")); false
// console.log((111 > 11 || 45 < 111) || !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false

//#endregion

//#region LESSON ---- 02
// TASK1 ***** створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let nrs = [2, 4, 5, 7, 2.33];
// console.log(nrs);
// let cities = ["kyiv", "lviv", "dnipro", "odesa", "kharkiv"];
// console.log(cities);
// let mix = [2, "kyiv", true, 1.444, "train"];
// console.log(mix);

//TASK2 *****  Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let empty = [];
// empty[0] = "kyiv";
// empty[1] = "praha";
// empty[2] = "vienna";
// empty[3] = "berlin";
// empty[4] = "london";
// console.log(empty);

//TASK3 ***** За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write("<div> ABOUT </div>");
// }

//TASK4 *****  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//   document.write(`<div> test ${i} </div>`);
// }

//TASK5 ***** За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// i = 0;
// while (i < 20) {
//   i++;
//   document.write(`<h1>Hi there</h1>`);
// }

//TASK6 ***** За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// i = 0;
// while (i < 20) {
//   i++;
//   document.write(`<h1>Hi there ${i}</h1>`);
// }

//TASK7 ***** Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let nmArray = [23, 65, 23.44, 445, 54.66, 344, 23, 54, 43, 34.44];
// for (let i = 0; i < nmArray.length; i++) {
//   console.log(nmArray[i]);
// }

//TASK8 ***** Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strArray = [
//   "Maria",
//   "Nina",
//   "Stepan",
//   "Vitalii",
//   "Nazar",
//   "Mykola",
//   "Anna",
//   "Olha",
//   "Svyrydon",
//   "Danylo",
// ];
// for (let i = 0; i < strArray.length; i++) {
//   console.log(strArray[i]);
// }

//TASK9 ***** Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixArray = ["fox", "dog", 64.66, 87, true, "bird", "mouse", "cat", 87, 5];
// for (let i = 0; i < mixArray.length; i++) {
//   console.log(mixArray[i]);
// }

//TASK10 ***** Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві
//TASK11 ***** Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//TASK12 ***** Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mixArray2 = ["fox", "dog", 64.66, 83, true, "bird", "mouse", "cat", 87, 5];
// for (let i = 0; i < mixArray2.length; i++) {
//   if (typeof mixArray2[i] === "boolean") {
//     console.log(mixArray2[i]);
//   } else {
//   }
// }

// for (let i = 0; i < mixArray2.length; i++) {
//   if (typeof mixArray2[i] === "number") {
//     console.log(mixArray2[i]);
//   } else {
//   }
// }

// for (let i = 0; i < mixArray2.length; i++) {
//   if (typeof mixArray2[i] === "string") {
//     console.log(mixArray2[i]);
//   } else {
//   }
// }

//TASK13 ***** Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empty2 = [];
// empty2[0] = true;
// empty2[1] = "hi";
// empty2[2] = false;
// empty2[3] = 333;
// empty2[4] = "bonjour";
// empty2[5] = 222;
// empty2[6] = "czesc";
// empty2[7] = 111;
// empty2[8] = false;
// empty2[9] = true;
// for (item of empty2) {
//   console.log(item);
// }

//TASK14-18 ***** Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//   console.log("step: ", i);
//   document.write(`step: ${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//   console.log("step: ", i);
//   document.write(`step: ${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//   console.log("step: ", i);
//   document.write(`step: ${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log("step: ", i);
//     document.write(`step: ${i} <br>`);
//   }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if (i % 2 !== 0) {
//     console.log("step: ", i);
//     document.write(`step: ${i} <br>`);
//   }
// }

//TASK19-20 ***** Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 60; j++) {
//     console.log(i, j);
//     document.write(`${i}:${j} <br>`);
//   }
// }
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 60; j++) {
//     for (let e = 0; e < 60; e++) {
//       console.log(i, j, e);
//       document.write(`${i}:${j}:${e} <br>`);
//     }
//   }
// }
// Додатково
//TASK21-24 *****  Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let word = "";
// let arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   word = word + arr[i];
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let word = "";
// let arr = ["a", "b", "c"];
// let i = 0;
// while (i < arr.length) {
//   word = word + arr[i];
//   i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let word = "";
// let arr = ["a", "b", "c"];
// for (let letter of arr) {
//   word = word + letter;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let word = "";
// let arr = ["a", "b", "c"];
// for (let letter in arr) {
//   word = word + arr[letter];
// }
// console.log(word);

//#endregion

//#region LESSON ---- 03

//TASK1 *****  -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
//   breed: "yorkshire terrier",
//   size: "small",
//   color: "beige",
//   age: 0.5,
//   city: "kyiv",
// };

// let person = {
//   name: "Anna",
//   gender: "f",
//   age: 22,
//   citizenship: "ua",
//   language: ["ua", "en", "fr"],
// };

// let car = {
//   engine: 1.2,
//   brand: "opel",
//   model: "corsa",
//   doors: 3,
//   color: "beige",
// };

// let appartment = {
//   square: 50,
//   rooms: 1,
//   floor: 3,
//   city: "kyiv",
//   district: "obolon",
// };

// let book = {
//   title: "prostymy slovamy",
//   author: "mark livin",
//   year: 2020,
//   pages: 250,
//   publishingHouse: "nash format",
// };

//TASK2 *****  -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs = [
//   {
//     breed: "yorkshire terrier",
//     size: "small",
//     color: "beige",
//     age: 0.5,
//     city: "kyiv",
//   },
//   {
//     breed: "mongrel",
//     size: "small",
//     color: "white",
//     age: 3,
//     city: "kyiv",
//   },
//   {
//     breed: "eskimo",
//     size: "big",
//     color: "white",
//     age: 0.5,
//     city: "kyiv",
//   },
//   {
//     breed: "spaniel",
//     size: "middle",
//     color: "brown",
//     age: 0.5,
//     city: "kyiv",
//   },
//   {
//     breed: "husky",
//     size: "big",
//     color: "white",
//     age: 0.5,
//     city: "kyiv",
//   },
// ];
// for (let dog of dogs) {
//   console.log(dog);
// }

// let persons = [
//   {
//     name: "Anna",
//     gender: "f",
//     age: 22,
//     citizenship: "ua",
//     language: ["ua", "en", "fr"],
//   },
//   {
//     name: "Anton",
//     gender: "m",
//     age: 23,
//     citizenship: "ua",
//     language: ["ua", "ru", "en"],
//   },
//   {
//     name: "Angela",
//     gender: "f",
//     age: 25,
//     citizenship: "ua",
//     language: ["ua", "fr"],
//   },
//   {
//     name: "Alina",
//     gender: "f",
//     age: 26,
//     citizenship: "ua",
//     language: ["ua", "en", "ge"],
//   },
//   {
//     name: "Antonio",
//     gender: "m",
//     age: 12,
//     citizenship: "ua",
//     language: ["ua", "en", "it"],
//   },
// ];
// for (let person of persons) {
//   console.log(person);
// }

// let cars = [
//   {
//     engine: 1.2,
//     brand: "opel",
//     model: "corsa",
//     doors: 3,
//     color: "beige",
//   },
//   {
//     engine: 1.2,
//     brand: "ford",
//     model: "fiesta",
//     doors: 5,
//     color: "black",
//   },
//   {
//     engine: 1.4,
//     brand: "bmw",
//     model: "mini cooper",
//     doors: 5,
//     color: "white",
//   },
//   {
//     engine: 1.4,
//     brand: "fiat",
//     model: "500",
//     doors: 3,
//     color: "blue",
//   },
//   {
//     engine: "electric",
//     brand: "citroen",
//     model: "ami",
//     doors: 2,
//     color: "red",
//   },
// ];
// for (let car of cars) {
//   console.log(car);
// }

//TASK3 *****  -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let building = {
//   floors: 20,
//   city: "kyiv",
//   street: ["zhytomyrska", "honchara", "amosova"],
//   appartment: {
//     rooms: 3,
//     square: 80,
//   },
//   lyft: true,
// };
// console.log(building);

// let driver = {
//   name: "Oleksii",
//   company: ["uber", "bolt", "uklon"],
//   age: 43,
//   rating: 4.5,
//   recentTrip: {
//     clientID: 3434,
//     date: "12.12.2020",
//     fromStr: "Zhytomyrska",
//     fromBld: 23,
//     toSrt: "Konovalsia",
//     toBld: "12",
//   },
// };
// console.log(driver);

// let toy = {
//   model: "kris dall",
//   price: 235,
//   stores: ["hiyou", "babyJoo", "Miracle"],
//   available: true,
//   substitute: {
//     model: "lizy dall",
//     price: 255,
//     stores: ["hiyou", "babyJoo", "Miracle"],
//     available: true,
//   },
// };
// console.log(toy);

// let table = {
//   model: "nordic",
//   price: 2350,
//   stores: ["jysk", "babyJoo", "miracle"],
//   available: true,
//   substitute: {
//     model: "german",
//     price: 2550,
//     stores: ["jysk", "babyJoo", "miracle"],
//     available: true,
//   },
// };
// console.log(table);

// let bag = {
//   model: "tropik",
//   price: 650,
//   stores: ["jysk", "babyJoo", "miracle"],
//   available: true,
//   substitute: {
//     model: "sunny",
//     price: 720,
//     stores: ["jysk", "babyJoo", "miracle"],
//     available: true,
//   },
// };
// console.log(bag);

//TASK4 *****  Дан массив:
// let users = [
//   { name: "vasya", age: 31, status: false },
//   { name: "petya", age: 30, status: true },
//   { name: "kolya", age: 29, status: true },
//   { name: "olya", age: 28, status: false },
//   { name: "max", age: 30, status: true },
//   { name: "anya", age: 31, status: false },
//   { name: "oleg", age: 28, status: false },
//   { name: "andrey", age: 29, status: true },
//   { name: "masha", age: 30, status: true },
//   { name: "olya", age: 31, status: false },
//   { name: "max", age: 31, status: true },
// ];

// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log(users[8].status);
// // - статус Максима
// console.log(users[10].status);
// // - ім'я передостаннього об'єкту
// console.log(users[9].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега
// for (let user of users) {
//   if (user.name === "oleg") {
//     console.log(user.age);
//   }
// }
// // - вік Олі
// for (let user of users) {
//   user.name === "olya" ? console.log(user.age) : "";
// }
// // - вік + ім'я 5го об'єкта
// for (let user of users) {
//   if (users.indexOf(user) === 5) {
//     console.log(user.age + " " + user.name);
//   }
// }
// // - вік + сатус Анни
// for (let user of users) {
//   user.name === "anya" ? console.log(user.age + " " + user.status) : "";
// }
// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
// for (let user of users) {
//   users.indexOf(user) === 0 ? console.log(user.name) : "";
// }

//TASK5 *****  -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let content = document.getElementById("content");
// console.log(content);

// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById("rules");
// console.log(rules);

// // - замініть текст параграфа з id 'content' на будь-який інший
// let content = document.getElementById("content");
// content.innerText = "Це інший текст";

// // - замініть текст параграфа з id 'rules' на будь-який інший
// let rules = document.getElementById("rules");
// rules.innerText = "Це ще одна заміна тексту";

// - змініть кожному елементу колір фону на червоний
// let p = document.getElementsByTagName("p")[0];
// p.style.backgroundColor = "tomato";
// console.log(p);

// let div = document.getElementsByTagName("div")[0];
// div.style.backgroundColor = "tomato";
// console.log(div);

// let li = document.getElementsByClassName("fc_rules");
// for (const liItem of li) {
//   liItem.style.backgroundColor = "tomato";
//   console.log(liItem);
// }

// - змініть кожному елементу колір тексту на синій
// let allTags = [];
// let p = document.getElementsByTagName("p")[0];
// allTags.push(p);
// let div = document.getElementsByTagName("div")[0];
// allTags.push(div);
// let li = document.getElementsByTagName("ul")[0];
// allTags.push(li);
// for (const tag of allTags) {
//   tag.style.backgroundColor = "lightblue";
// }
// console.log(allTags);

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let id = document.getElementById("rules");
// idClass = id.classList;
// console.log(idClass);

// - отримати всі елементи з класом fc_rules
// let rules = document.getElementsByClassName("fc_rules");
// for (const rule of rules) {
//   console.log(rule);
// }

// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// let rulesFC = document.getElementsByClassName("fc_rules");
// for (const ruleItem of rulesFC) {
//   ruleItem.style.backgroundColor = "tomato";
//   console.log(ruleItem);
// }

// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let idItem = document.getElementById("main_header");
// idItem.style.color = "green";
// console.log(idItem);

// -- робить шириниу елементу ul 400 пікселів
// let ulItem = document.getElementsByTagName("ul")[0];
// ulItem.style.width = "400px";
// console.log(ulItem);

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let liItems = document.getElementsByClassName("linkList");
// for (const liItem of liItems) {
//   liItem.style.width = "50%";
//   console.log(liItem);
// }

// -- отримує текст який зберігається в елементі з класом listElement2
// let liItems = document.getElementsByClassName("linkList");
// for (const liItem of liItems) {
//   let classItems = liItem.classList;
//   for (const classItem of classItems) {
//     if (classItem === "listElement2") {
//       console.log(liItem.innerText);
//     }
//   }
// }

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let liList = document.getElementsByTagName("li");
// for (const liItem of liList) {
//   liItem.style.backgroundColor = "lightgrey";
//   console.log(liItem);
// }

// -- отримує всі елементи 'a' та додає їм клас anchor
// let linkList = document.getElementsByTagName("a");
// for (const linkItem of linkList) {
//   linkItem.classList.add("anchor");
//   console.log(linkItem);
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселі
// let linkList = document.getElementsByTagName("a");
// for (const linkItem of linkList) {
//   let textItem = linkItem.innerText;
//   if (textItem === "link3") {
//     linkItem.style.fontSize = "40px";
//     console.log(linkItem);
//   }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let linkList = document.getElementsByTagName("a");
// for (const linkItem of linkList) {
//   let linkText = linkItem.innerText;
//   linkItem.classList.add(`element_${linkText}`);
//   console.log(linkItem);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subList = document.getElementsByClassName("sub-header");
// for (const subItem of subList) {
//   let bgColor = prompt("write some color");
//   subItem.style.backgroundColor = `${bgColor}`;
//   console.log(subItem);
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subList = document.getElementsByClassName("sub-header");
// for (const subItem of subList) {
//   let itemText = subItem.innerText;
//   if (itemText === "content 2 segment") {
//     let textColor = prompt("write some color");
//     subItem.style.color = `${textColor}`;
//     console.log(subItem);
//   }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let div = document.getElementsByClassName("content_1")[0];
// let divText = div.children[0];
// let newText = prompt("write your thoughts here");
// divText.innerText = `${newText}`;
// console.log(divText);

// -- отримати елементи p та змінити їм paddin на довільне значення
// let p = document.getElementsByTagName("p");
// for (const pItem of p) {
//   pItem.style.padding = "50px";
//   console.log(pItem);
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let classList = document.getElementsByClassName("text2");
// for (const classItem of classList) {
//   classItem.innerText = "hey you are!";
//   console.log(classItem);
// }

//#endregion

//#region LESSON ---- 04
// TASK1 *****  - створити функцію яка виводить масив
// let array1 = [1, 5, 6, 7, true];
// function arrayLog(arr) {
//   console.log(arr);
//   for (const arrItem of arr) {
//     console.log(arrItem);
//   }
// }
// arrayLog(array1);

// TASK2 *****  - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function fillArray(length, min, max) {
//   let randomArray = [];
//   for (let i = 0; i < length; i++) {
//     randomArray.push(Math.floor(Math.random() * (max - min) + min));
//   }
//   return randomArray;
// }
// let array2 = fillArray(5, 10, 30);
// arrayLog(array2);

// TASK3 *****  - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNumber(nb1, nb2, nb3) {
//   let array = [nb1, nb2, nb3];
//   let sortArr = array.sort()[0];
//   return sortArr;
// }
// let min = minNumber(89, 4, 0);
// console.log(min);

// // TASK4 *****  - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber(nb1, nb2, nb3) {
//   let array = [nb1, nb2, nb3];
//   let sortArr = array.sort()[array.length - 1];
//   return sortArr;
// }
// let max = maxNumber(89, 4, 0);
// console.log(max);

// TASK5 *****  - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function unlimArguments() {
//   let argArray = Array.from(arguments);
//   let min = argArray.sort()[0];
//   let max = argArray.sort()[argArray.length - 1];
//   console.log("max", max);
//   return min;
// }
// let minNr = unlimArguments(1, 5, 7, 33, 77, 32, 87, 45);
// console.log("min", minNr);

// TASK6 *****  - створити функцію яка повертає найменьше число з масиву
// const returnMinFromArray = (arr) => {
//   let min = arr[0];
//   for (const item of arr) {
//     if (min > item) min = item;
//   }
//   return min;
// };
// const returnMinFromArray1 = returnMinFromArray([34, 65, 7, 754, 34, 2]);
// console.log(returnMinFromArray1);

// TASK7 *****  - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// const arraySum = (arr) => {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// };
// let sumResult = arraySum([2, 1, 5, 7]);
// console.log(sumResult);

// TASK8 *****  - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let averageArray = (arr) => {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum / arr.length;
// };
// let averageArray1 = averageArray([4, 6]);
// console.log(averageArray1);

// TASK9 *****  - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
//   44,
//   ["my array", "your array"],
//   true,
// ];

// let objArray = (arr) => {
//   let count = 0;
//   for (const item of arr) {
//     if (typeof item === "object" && !Array.isArray(item)) {
//       count++;
//     }
//   }
//   return count;
// };
// let objNr = objArray(users);
// console.log(objNr);

// TASK10 *****  - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let fieldObj = (arr) => {
//   let count = 0;
//   for (const item of arr) {
//     if (typeof item === "object" && !Array.isArray(item)) {
//       for (const key in item) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// let fieldObj1 = fieldObj(users);
// console.log(fieldObj1);

// TASK11 *****  - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let sameIndxSum = (arr1, arr2) => {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// };
// let sameIndxSum1 = sameIndxSum([1, 2, 3, 4], [2, 3, 4, 5]);
// console.log(sameIndxSum1);

// TASK12 *****  приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let indexPlus = (arr, indx) => {
//   let arrNew = [...arr];
//   if (indx < arrNew.length-1) {
//     let temp = arrNew[indx];
//     arrNew[indx] = arrNew[indx + 1];
//     arrNew[indx + 1] = temp;
//   }
//   return arrNew;
// };
// let arrCurrent = [1, 5, 6, 7, 3];
// console.log(arrCurrent);
// let indexPlus1 = indexPlus(arrCurrent, 2);
// console.log(indexPlus1);

// TASK13 *****  створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function zeroEndArray(arr) {
//   let zeroArr = [];
//   let otherArr = [];
//   for (const item of arr) {
//     if (item === 0) {
//       zeroArr.push(item);
//     } else {
//       otherArr.push(item);
//     }
//   }
//   // return otherArr.concat(zeroArr);
//   return [...otherArr, ...zeroArr];
// }
// let array = [0, 0, 1, 0];
// let zeroEnd = zeroEndArray(array);
// console.log(zeroEnd);

// TASK14 *****  Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addGreetings(text) {
//   let div = document.createElement("div");
//   div.innerText = `${text}`;
//   document.body.appendChild(div);
// }
// addGreetings("Hello owu");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addTextTag(text, tagType) {
//   let tag = document.createElement(tagType);
//   tag.innerHTML = text||"Hello World";
//   document.body.appendChild(tag);
// }
// addTextTag("Hey you", "h1");

// TASK15 *****  приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = [
//   {
//     engine: 1.2,
//     brand: "opel",
//     model: "corsa",
//     doors: 3,
//     color: "beige",
//   },
//   {
//     engine: 1.2,
//     brand: "ford",
//     model: "fiesta",
//     doors: 5,
//     color: "black",
//   },
//   {
//     engine: 1.4,
//     brand: "bmw",
//     model: "mini cooper",
//     doors: 5,
//     color: "white",
//   },
//   {
//     engine: 1.4,
//     brand: "fiat",
//     model: "500",
//     doors: 3,
//     color: "blue",
//   },
//   {
//     engine: "electric",
//     brand: "citroen",
//     model: "ami",
//     doors: 2,
//     color: "red",
//   },
// ];
// function arrList(arrCar, idTag) {
//   let div = document.getElementById(idTag);
//   let list = document.createElement("ul");
//   for (const item of arrCar) {
//     let li = document.createElement("li");
//     li.innerHTML = `${item[key]}  ${item.brand}`;
//     list.appendChild(li);
//   }
//   // for (let i = 0; i < arrCar.length; i++) {
//   //   const item = arrCar[i];
//   //   let li = document.createElement("li");
//   //   li.innerHTML = `${i + 1}: ${item.brand}`;
//   //   list.appendChild(li);
//   // }
//   div.appendChild(list);
// }
// arrList(cars, "list");

// TASK16 *****   Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//

// let userArr = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];

// function userDetails(arrName, idName) {
//   const container = document.getElementById(idName);
//   for (let i = 0; i < arrName.length; i++) {
//     const user = arrName[i];
//     const itemBlock = document.createElement("div");
//     const name = document.createElement("h2");
//     name.innerHTML = `${user.name}`;
//     const email = document.createElement("h4");
//     email.innerHTML = `${user.email}`;
//     const address = document.createElement("div");

//     for (const key in user.address) {
//       if (typeof user.address[key] === "string") {
//         const adressDetails = document.createElement("h4");
//         adressDetails.innerText = user.address[key];
//         address.appendChild(adressDetails);
//       }
//     }
//     container.appendChild(itemBlock);
//     itemBlock.appendChild(name);
//     itemBlock.appendChild(email);
//     itemBlock.appendChild(address);
//   }
// }
// userDetails(userArr, "list");

// TASK17 *****  (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [
//   { id: 1, name: "vasya", age: 31, status: false },
//   { id: 2, name: "petya", age: 30, status: true },
//   { id: 3, name: "kolya", age: 29, status: true },
//   { id: 4, name: "olya", age: 28, status: false },
// ];
// let citiesWithId = [
//   { user_id: 3, country: "USA", city: "Portland" },
//   { user_id: 1, country: "Ukraine", city: "Ternopil" },
//   { user_id: 2, country: "Poland", city: "Krakow" },
//   { user_id: 4, country: "USA", city: "Miami" },
// ];

// function userProfile(userArr, cityArr) {
//   let users = JSON.parse(JSON.stringify(userArr));
//   let cities = JSON.parse(JSON.stringify(cityArr));
//   for (const user of users) {
//     for (const city of cities) {
//       if (user.id === city.user_id) {
//         user.cityFromCityArr = city.city;
//       }
//     }
//   }
//   return users;
// }
// console.log(citiesWithId);
// console.log(usersWithId);
// console.log("----");
// let userProfile1 = userProfile(usersWithId, citiesWithId);
// console.log(userProfile1);

//TASK18 ***** - беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//   {
//     title: "Первое правило Бойцовского клуба.",
//     body: "Никому не рассказывать о Бойцовском клубе.",
//   },
//   {
//     title: "Второе правило Бойцовского клуба.",
//     body: "Никогда никому не рассказывать о Бойцовском клубе.",
//   },
//   {
//     title: "Третье правило Бойцовского клуба.",
//     body: "В схватке участвуют только двое.",
//   },
//   {
//     title: "Четвертое правило Бойцовского клуба.",
//     body: "Не более одного поединка за один раз.",
//   },
//   {
//     title: "Пятое правило Бойцовского клуба.",
//     body: "Бойцы сражаются без обуви и голые по пояс.",
//   },
//   {
//     title: "Шестое правило Бойцовского клуба.",
//     body: "Поединок продолжается столько, сколько потребуется.",
//   },
//   {
//     title: "Седьмое правило Бойцовского клуба.",
//     body:
//       "Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.",
//   },
//   {
//     title: "Восьмое и последнее правило Бойцовского клуба.",
//     body: "Новичок обязан принять бой.",
//   },
// ];

// function rulesList(arrayRules, idName) {
//   const container = document.getElementById(idName);
//   const div = document.createElement("div");
//   container.appendChild(div);
//   for (const rule of arrayRules) {
//     const ruleItem = document.createElement("div");
//     div.appendChild(ruleItem);
//     const divRuleNr = document.createElement("div");
//     ruleItem.appendChild(divRuleNr);
//     const divRuleNrH2 = document.createElement("h2");
//     divRuleNr.appendChild(divRuleNrH2);
//     divRuleNrH2.innerHTML = `<strong>${rule.title}</strong>`;
//     const divRuleText = document.createElement("div");
//     ruleItem.appendChild(divRuleText);
//     const divRuleTextP = document.createElement("p");
//     divRuleText.appendChild(divRuleTextP);
//     divRuleTextP.innerHTML = `${rule.body}`;
//   }
// }

// rulesList1 = rulesList(rules, "list");
// console.log(rulesList1);

// // ===========додаткове від віктора========
// TASK19 ***** -   Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
/// -----------------не знаю як це робити :(--------------

// TASK20 *****   Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// let multiLevelArr = [1, 3, ["Hello", "Wordd", [9, 6, 1]], ["oops"], 9];

// let monoLevel = multiLevelArr.reduce((acc, val) => acc.concat(val), []);
// console.log(monoLevel);

// function flattenDeep(arr1) {
//   return arr1.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
//     []
//   );
// }

// let monoLevel = flattenDeep(multiLevelArr);
// console.log(monoLevel);

// TASK21 *****   Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// let monoLevel = multiLevelArr.flat(4);
// console.log(monoLevel);

// ===========додаткове========

//#endregion
