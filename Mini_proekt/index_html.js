// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
        .then(users => {
                for (const user of users) {
                let massive = [];
                let user1 = {id: user.id,name: user.name};
                let div = document.createElement('div');
                let id = document.createElement('div');
                let name = document.createElement('div');
                let button = document.createElement('button');
                button.innerText = 'ok';
                div.classList.add('div');

                id.innerHTML = ` Id: ${user.id} `;
                name.innerHTML = ` name: ${user.name} `;
                div.append(id,name,button);
                document.body.append(div);
                id.classList.add("div");
                name.classList.add("div");

                 button.onclick = ()=>{
                    massive.push(user1);
                    localStorage.setItem('user', JSON.stringify(massive));
                    location.href = 'user-details.html';
                  }
                 }
        });



