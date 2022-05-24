// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.getElementById('text');
// let button = document.getElementById('button1');
//
//   button.onclick = function (e){
//     text.hidden = true;
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let age = document.getElementById('age');
// let button = document.getElementById('button');
// button.onclick = function (e){
//     if(+age.value < 18) alert('your age is less than 18');
//     else alert('your age is ok');
// }

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let button = document.getElementById('button');
// button.onclick = function (e){
//     let login = document.form1.login.value;
//     let paswwrod = document.form1.password.value;
//     let login2 = document.form2.login2.value;
//     let pasword2 = document.form2.password2.value;
//     console.log(login);
//     console.log(paswwrod);
//     console.log(login2);
//     console.log(pasword2);
//     console.log("");
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let numberofliness = document.getElementById('numberoflines');
// let numberofcells = document.getElementById('numberofcells');
// let text1 = document.getElementById('text');
// let button = document.getElementById('button');
//
// button.onclick = function (e){
//     for (let i = 0; i < +numberofliness.value; i++) {
//         let div = document.createElement('div');
//         div.style.display = 'flex';
//         for (let j = 0; j < +numberofcells.value; j++) {
//             let div1 = document.createElement('div');
//             div1.style.width = "200px";
//             div1.style.height = "200px";
//             div1.style.border = "1px solid black";
//             div1.style.textAlign = 'center';
//             div1.style.margin = '2px';
//             div1.innerText = `${text1.value}`;
//             div.append(div1);
//         }
//         document.body.appendChild(div);
//     }
//
// }
