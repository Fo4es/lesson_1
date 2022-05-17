
// }Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//  let htmlDivElement = document.createElement('div');
//   htmlDivElement.classList.add('wrap');
//   htmlDivElement.classList.add('collapse');
//   htmlDivElement.classList.add('alpha');
//   htmlDivElement.classList.add('beta');
//
//  htmlDivElement.style.color = 'lightblue';
//  htmlDivElement.style.backgroundColor = 'red';
//  htmlDivElement.style.fontSize = '20px';
//  htmlDivElement.innerText = Google;
//  document.body.appendChild(htmlDivElement);
//  let cloneNode = htmlDivElement.cloneNode(true);
//  document.body.appendChild(cloneNode);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//  const mass = ['Main','Products','About us','Contacts'];
//  let ul = document.getElementsByClassName('menu')[0];
//  for (const element of mass) {
//      let htmlLi = document.createElement('li');
//      htmlLi.innerText = `${element}`;
//     ul.appendChild(htmlLi);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const Element of coursesAndDurationArray) {
//     let block = document.createElement('div');
//      block.innerText = `${Element.title} ${Element.monthDuration}`;
//     document.body.append(block)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${element.title}`;
//     div.append(h1);
//     let p = document.createElement('p');
//     p.classList.add('description')
//     p.innerText = `${element.monthDuration}`;
//     div.append(p);
//     document.body.appendChild(div);
// }
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.