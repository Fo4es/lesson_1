//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let  srectangle = (a,b) => a*b;
// console.log((srectangle(5, 10)));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
//  let scirckle =(r) => 3.14*r;
// console.log(scirckle(6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let scylinder= (h,r) => 3.14*r*r*h;
// console.log(scylinder(7, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let massive = [10,"sdkfsdf",false,20];
// let iterator=(array)=>{
//     for (const item of array) {
//         console.log(item);
//     }
// }
// iterator(massive);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let Text=(a)=> document.write(`<p>${a}</p> `);
// Text("Lorem ipsum dolor sit amet.");
// Text("Lorem ipsum dolor sit amet, consectetur.");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul= (text) => {
//     document.write(`<ul>`)
//     for(let i = 0;i<3;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// ul("Lorem ipsum dolor.");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul=(text,size)=>{
//     document.write(`<ul>`)
//     for(let i = 0;i<size;i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul("Lorem ipsum dolor.",6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list=(array)=> {
//     document.write(`<ol>`);
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ol>`);
// }
//  let massive = [10,"sdkfsdf",false,20];
// console.log(list(massive));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let object=(array)=>{
//     for (const item of array) {
//         document.write(`<div>Name-${item.name}  Age-${item.age}   Status-${item.status}</div>`);
//     }
// }
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
// console.log(object(users));
//- створити функцію яка повертає найменьше число з масиву

// let number=(array)=> {
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

// let multiply=(array)=>{
//     let resault = 0;
//     for (const item of array) {
//          resault = resault + item;
//
//     }
//     return resault;
// }
//
//
// console.log(multiply([100,50,40,70]));
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
// ];
// let revers =(array)=>{
//     let a=array[0]
//     array[0]=array[array.length-1];
//     array[array.length-1]=a;
//    return array;
// }
// console.log(revers(users));
//

//Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let midlenumber = (array) => {
//     let result=0;
//     for (const aElement of array) {
//          result=result+aElement;
//     }
//     return result/array.length;
// };
// console.log(midlenumber([100,50,40,70]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let fn = (numbers) => {
//     let min = numbers[0];
//     let max = numbers[0];
//     for (const number of numbers) {
//            if (number>max)max = number;
//            if (number<min)min= number;
//     }
//     console.log(max);
//     return min;
// }
// console.log(fn([9,3,4,5,6,7]));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = ()=>{
//     let container = [];
//     for (let i = 0; i < Math.round(Math.random()*100); i++) {
//         container.push(Math.round(Math.random()*100));
//     }
//     return container;
// }
// console.log(random());
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random = (limit)=>{
//     let container = [];
//     for (let i = 0; i < limit; i++) {
//         container.push(Math.round(Math.random()*100));
//     }
//     return container;
// }
// console.log(random(41));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//     let retur = (array) => {
//         let container = [];
//         for (let i = 0; i < array.length; i++) {
//             array[i] = container.push(array[array.length - 1 - i]);
//         }
//         return container;
//     }
//    console.log(retur([1,2,3,4]));

