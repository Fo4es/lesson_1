// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.


let usermassive = JSON.parse(localStorage.getItem('user'));
for (const usermassiveElement of usermassive) {
    let id = usermassiveElement.id;
    let link = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(link)
    .then(response => response.json())
     .then(user => {
          let div = document.createElement('div');
          let id = document.createElement('div');
          let name = document.createElement('div');
          let username = document.createElement('div');
          let email = document.createElement('div');
          let address = document.createElement('div');
          let street = document.createElement('div');
          let suite = document.createElement('div');
          let city = document.createElement('div');
          let zipcode = document.createElement('div');
          let geo = document.createElement('div');
          let lat = document.createElement('div');
          let lng = document.createElement('div');
          let phone = document.createElement('div');
          let website = document.createElement('div');
          let company = document.createElement('div');
          let companyName = document.createElement('div');
          let catchPhrase = document.createElement('div');
          let bs = document.createElement('div');


          id.innerText = `id:${user.id}`;
          name.innerText = `name:${user.name}`;
          username.innerText = `username:${user.username}`;
          email.innerText = `email:${user.email}`;
          address.innerText = `address:`;
          street.innerText = `street:${user.address.street}`;
          suite.innerText = `suite:${user.address.suite}`;
          city.innerText = `city:${user.address.city}`;
          zipcode.innerText = `zipcode:${user.address.zipcode}`;
          geo.innerText = `geo:`;
          lat.innerText = `lat:${user.address.geo.lat}`;
          lng.innerText = `lng:${user.address.geo.lng}`;
          phone.innerText = `phone:${user.phone}`;
          website.innerText = `website:${user.website}`;
          company.innerText = `company:`;
          companyName.innerText = `name:${user.company.name}`;
          catchPhrase.innerText = `catchPhrase:${user.company.catchPhrase}`;
          bs.innerText = `bs:${user.company.bs}`;


          div.append(id, name, username, email, address, street, suite, city, zipcode, geo, lat, lng, phone, website, company, companyName, catchPhrase, bs,button);
          document.body.append(div);

     });
          let button = document.createElement('button');
          button.innerText = 'title';
          button.classList.add('button')
          button.onclick = () => {
               let link2 = `https:jsonplaceholder.typicode.com/users/${id}/posts`;
               let divblock = document.createElement('div');
               divblock.classList.add('object5');
               fetch(link2)
                   .then(response => response.json())
                   .then(title => {
                        for (const title1Element of title) {
                             let div = document.createElement('div');
                             div.classList.add('object');
                             let title1 = document.createElement('div');
                             let button2 = document.createElement('button');

                             button2.innerText = 'postinfo';
                             div.innerText = `Title`;
                             title1.innerText = ` ${title1Element.title}`;


                             button2.onclick = () => {
                                  let massive = [];
                                  let post = {postid:title1Element.id}
                                  massive.push(post)
                                  localStorage.setItem('post', JSON.stringify(massive));
                                  location.href = 'post-details.html';
                             }
                            div.append(title1,button2);
                             divblock.append(div)
                            document.body.append(divblock);
                        }


                   });
          }

    }



