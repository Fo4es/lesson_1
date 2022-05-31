// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// let div = document.createElement('div');
// div.classList.add('div1');
// document.body.append(div);
// fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(value => {
//             for (const valueElement of value) {
//                 let post = document.createElement('div');
//                 let id = document.createElement('div');
//                 let title = document.createElement('div');
//                 let body = document.createElement('div');
//                 let userid = document.createElement('div');
//                 userid.innerHTML = `<li> userId:${valueElement.userId} </li>`;
//                 id.innerHTML = `<li> id:${valueElement.id} </li>`;
//                 title.innerHTML = `<li> title:${valueElement.title}</li> `;
//                 body.innerHTML = `<li> body:${valueElement.body}</li>`;
//                 post.append(userid,id,title,body);
//                 div.append(post);
//                 post.classList.add('post');
//             }
//         });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
//  Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(value => {
//             for (const valueElement of value) {
//                 let comments = document.createElement('div');
//                 let id = document.createElement('div');
//                 let name = document.createElement('div');
//                 let email = document.createElement('div');
//                 let body = document.createElement('div');
//                 let postId = document.createElement('div');
//
//                 postId.innerHTML = ` userId:${valueElement.postId} `;
//                 id.innerHTML = ` id:${valueElement.id} `;
//                 name.innerHTML = ` title:${valueElement.name} `;
//                 email.innerHTML = `email:${valueElement.email}`;
//                 body.innerHTML = ` body:${valueElement.body}<p></p>`;
//
//                 comments.append(postId,id,name,email,body);
//                 document.body.append(comments);
//             }
//         });