// // - Знайти та вивести довижину настипних стрінгових значень
// let s = 'hello world';
// let l = 'lorem ipsum';
// let j ='javascript is cool';
// console.log(s.length);
// console.log(l.length);
// console.log(j.length);

// - Перевести до великого регістру наступні стрінгові значення
// let h ='hello world';
// let l = 'lorem ipsum';
// let j ='javascript is cool';
// console.log(j.toUpperCase());
// console.log(h.toUpperCase());
// console.log(l.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// let h ='HELLO WORLD';
// let l ='LOREM IPSUM';
// let j ='JAVASCRIPT IS COOL';
// console.log(j.toLowerCase());
// console.log(l.toLowerCase());
// console.log(h.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
//  .replaceAll(' ','')
//  .replaceAll('  ','');
// console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let stringToarray = (st)=>{
//     return st.split(' ');
// }
// console.log(stringToarray(str));

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let mapTostring = numbers.map(number=> number.toString());
// console.log(mapTostring);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sortNums = (array,direction)=>{
//     if (direction==="ascending")
//         return   nums.sort((a1,a2)=>a1- a2);
//     else if(direction==="descending")
//         return nums.sort((a1,a2)=>a2 - a1);
// }
// console.log(sortNums(nums, 'ascending'));// [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let sort = coursesAndDurationArray.sort((a1,a2)=> a2.monthDuration-a1.monthDuration);
// let filtr = sort .filter(value => value.monthDuration>5); console.log(filtr);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let cards = [
//     {cardSuit: 'spade', value: '6' ,color:'black'},
//     {cardSuit: 'spade', value: '7' ,color:'black'},
//     {cardSuit: 'spade', value: '8' ,color:'black'},
//     {cardSuit: 'spade', value: '9' ,color:'black'},
//     {cardSuit: 'spade', value: '10' ,color:'black'},
//     {cardSuit: 'spade', value: 'ace' ,color:'black'},
//     {cardSuit: 'spade', value: 'jack' ,color:'black'},
//     {cardSuit: 'spade', value: 'queen' ,color:'black'},
//     {cardSuit: 'spade', value: 'king' ,color:'black'},
//     {cardSuit: 'diamond', value: '6' ,color:'red'},
//     {cardSuit: 'diamond', value: '7' ,color:'red'},
//     {cardSuit: 'diamond', value: '8' ,color:'red'},
//     {cardSuit: 'diamond', value: '9' ,color:'red'},
//     {cardSuit: 'diamond', value: '10' ,color:'red'},
//     {cardSuit: 'diamond', value: 'ace' ,color:'red'},
//     {cardSuit: 'diamond', value: 'jack' ,color:'red'},
//     {cardSuit: 'diamond', value: 'queen' ,color:'red'},
//     {cardSuit: 'diamond', value: 'king' ,color:'red'},
//     {cardSuit: 'heart', value: '6' ,color:'red'},
//     {cardSuit: 'heart', value: '7' ,color:'red'},
//     {cardSuit: 'heart', value: '8' ,color:'red'},
//     {cardSuit: 'heart', value: '9' ,color:'red'},
//     {cardSuit: 'heart', value: '10' ,color:'red'},
//     {cardSuit: 'heart', value: 'ace' ,color:'red'},
//     {cardSuit: 'heart', value: 'jack' ,color:'red'},
//     {cardSuit: 'heart', value: 'queen' ,color:'red'},
//     {cardSuit: 'heart', value: 'king' ,color:'red'},
//     {cardSuit: 'clubs', value: '6' ,color:'black'},
//     {cardSuit: 'clubs', value: '7' ,color:'black'},
//     {cardSuit: 'clubs', value: '8' ,color:'black'},
//     {cardSuit: 'clubs', value: '9' ,color:'black'},
//     {cardSuit: 'clubs', value: "10" ,color:'black'},
//     {cardSuit: 'clubs', value: 'ace' ,color:'black'},
//     {cardSuit: 'clubs', value: 'jack' ,color:'black'},
//     {cardSuit: 'clubs', value: 'queen' ,color:'black'},
//     {cardSuit: 'clubs', value: 'king' ,color:'black'},
// ];
// console.log(cards.find(value => value.color === "black" && value.value === "ace" && value.cardSuit === "spade"));
// console.log(cards.filter(value => value.value === "6"));
// console.log(cards.filter(value => value.color === "red"));
// console.log(cards.filter(value => value.cardSuit === "diamond"));
// console.log(cards.filter(value => value.cardSuit === "clubs" && value.value >= "9"));
