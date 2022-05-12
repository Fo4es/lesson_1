// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// const getText1 = document.getElementById("content");
// const txt1 = getText1.innerText;
// console.log(txt);
// console.log(getText1);

// -- отримує текст з блоку з id "rules"
// const getText2 = document.getElementById("rules");
// const txt2 = getText2.innerText;
// console.log(txt);
// console.log(getText2);

// -- замініть текст параграфа з id 'content' на будь-який інший
//  getText1.innerText = `hello world `;

// -- замініть текст параграфа з id 'rules' на будь-який інший
//  getText2.innerText = 'HELLO WORLD'

//-- змініть кожному елементу колір фону на червоний
//   getText1.style.backgroundColor = 'red';
//   getText2.style.backgroundColor = 'red';
//   const backgroundt = document.getElementsByTagName('ul')
// for (let i = 0; i < backgroundt.length; i++) {
//     const backgroundtElement = backgroundt[i];
//     backgroundtElement.style.backgroundColor = 'red';
// }

//-- змініть кожному елементу колір тексту на синій
//getText1.style.color = 'lightblue';
//getText2.style.color = 'lightblue';
// const textul = document.getElementsByTagName('ul');
// for (let i = 0; i < textul.length; i++) {
//     const textulElement = textul[i];
//     textulElement.style.color = 'lightblue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//console.log(getText2.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const fcrules2 = document.getElementsByClassName('fc_rules rule2');
// console.log(fcrules2);
// for (let i = 0; i < fcrules2.length; i++) {
//     const fcrules2Element = fcrules2[i];
//     fcrules2Element.style.color = 'red';
// }

//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// const getbyid = document.getElementById("main_header");
// getbyid.classList.add("Width");
// console.log(getbyid);

// b) робить шириниу елементу ul 400px
// const ul = document.querySelector("ul");
//     ul.style.width = '400px';
// console.log(ul);

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const Linklist = document.querySelectorAll(".linkList");
// for (let i = 0; i < Linklist.length; i++) {
//     const linklistElement = Linklist[i];
//     linklistElement.style.width = '50%';
// }
// console.log(Linklist);

// d) отримує текст який зберігається в елементі з класом listElement2
// const textlistElement2 = document.querySelector(".listElement2");
// const txt = textlistElement2.innerText;
//  console.log(txt);

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// const ul = document.querySelectorAll('li');
// for (let i = 0; i < ul.length; i++) {
//     const ulElement = ul[i];
//     ulElement.style.backgroundColor = 'gray';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const aele = document.querySelectorAll('a');
// for (let i = 0; i < aele.length; i++) {
//     const aeleElement = aele[i];
//     aeleElement.classList.add('anchor');
// }
// console.log(aele);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const aele = document.querySelectorAll('a');
// for (let i = 0; i < aele.length; i++) {
//     const aeleElement = aele[i];
//     if(aeleElement.innerText==="link3") aeleElement.style.fontSize = '40px';
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const aele = document.querySelectorAll('a');
// for (let i = 0; i < aele.length; i++) {
//     const aeleElement = aele[i];
//     aeleElement.classList.add(`element_${aeleElement.innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subheader = document.querySelectorAll(".sub-header");
// for (let i = 0; i < subheader.length; i++) {
//     const subheaderElement = subheader[i];
//     subheaderElement.style.backgroundColor = prompt('enter a color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//  const subheader = document.querySelectorAll(".sub-header")
// for (let i = 0; i < subheader.length; i++) {
//     const subheaderElement = subheader[i];
//     if(subheaderElement.innerText==='content 2 segment') subheaderElement.style.color = prompt('enter color');
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const content_1 = document.querySelector(".content_1")
// content_1.innerText = prompt('enter text');

// l) отримати елементи p та змінити їм padding на 20px
//  const pele = document.querySelectorAll('p');
// for (let i = 0; i < pele.length; i++) {
//     const peleElement = pele[i];
//     peleElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const text2 = document.querySelectorAll('.text2');
// for (let i = 0; i < text2.length; i++) {
//     const text2Element = text2[i];
//     text2Element.innerText = 'march 2022';
// }
