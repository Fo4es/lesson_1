// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function Srectangle(a,b){
//     return a*b;
// }
// (Srectangle(5,10);

// function Scirckle(r){
//     return  3.14*r;
//
// }
// Scirckle(6);

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
// ];
// let massive = [10,"sdkfsdf",false,20];
// function iterator(array){
//     for (const item of array) {
//         console.log(item);
//     }
// }
// iterator(users);
//

// function Text(a){
//     document.write(`<p>${a}</p> `)
// }
// Text("Lorem ipsum dolor sit amet.");
// Text("Lorem ipsum dolor sit amet, consectetur.");
//
// function Scylinder(h,r){
//     return 3.14*r*r*h;
// }
// Scylinder(7,10);
//
// function ul(text){
//     document.write(`<ul>`)
//     for(let i = 0;i<3;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// ul("Lorem ipsum dolor.");

// function ul(text,size){
//     document.write(`<ul>`)
//     for(let i = 0;i<size;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul("Lorem ipsum dolor.",6);
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(array) {
//     document.write(`<ol>`);
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ol>`);
// }
// list(massive);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function object(array){
//     for (const item of array) {
//         document.write(`<div>Name-${item.name}  Age-${item.age}   Status-${item.status}</div>`);
//     }
// }
// object(users);

// - створити функцію яка повертає найменьше число з масиву
// function number(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(number([50,100,200,25]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function multiply(array){
//     let resault = 0;
//     for (const item of array) {
//          resault = resault + item;
//
//     }
//     return resault;
// }
//
// console.log(multiply([100,50,40,70]));