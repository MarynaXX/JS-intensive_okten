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
