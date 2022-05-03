// Всі функції повинні бути описані стрілочним типом!!!!

// //     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//  let minnumber = (a,b,c)=>{
//      if(a<b && a<c) return a;
//       else if (b<a && b<c) return b;
//      else if (c<a && c<b) return c;
//  }
// console.log(minnumber(2, 5, 8));

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//  let maxnumber = (a,b,c)=>{
//      if(a>b && a>c) return a;
//       else if (b>a && b>c) return b;
//      else if (c>a && c>b) return c;
//  }
// console.log(maxnumber(2, 5, 8));

// - створити функцію яка повертає найбільше число з масиву
// let maxnumber = (array)=>{
//     let max = array[0];
//     for (const item of array) {
//         if (max<item) max=item
//     }
//     return max;
// }
// console.log(maxnumber([4, 2, 5, 6]));

// - створити функцію яка повертає найменьше число з масиву
// let minnumber = (array)=>{
//     let min = array[0];
//     for (const item of array) {
//         if (item<min) min=item
//     }
//     return min;
// }
// console.log(minnumber([4, 2, 5, 6]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let summa = (array)=>{
//     let resault = array[0];
//     for (const item of array) {
//         resault= resault + item;
//     }
//     return resault;
// }
// console.log(summa([2, 7, 5, 8]));

// - Дано натуральное число n. Выведите все числа от 1 до n.
// let nature = (a)=>{
//     for (let i = 0; i < a; i++) {
//        console.log(i);
//
//     }
// }
// nature(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let numbers = (a,b)=>{
//     if (a>b){
//         for (let i = b; i <= a; i++) {
//             console.log(i);
//         }
//     }
//     if (a<b){
//         for (let i = b; i >= a; i--) {
//            console.log(i);
//         }
//     }
// }
// numbers(7,3)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let massve = (array,i)=>{
//     let a = array[i];
//     array[i]=array[i+1];
//     array[i+1]=a;
//     return array;
// }
// console.log(massve([9, 8, 0, 4], 0));

//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let masive = (array)=>{
//     let container = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]!==0){
//             container.push(array[i]);
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===0){
//             container.push(array[i]);
//         }
//
//     }
//     return container;
// }
// console.log(masive([1, 3, 5, 0, 2]));