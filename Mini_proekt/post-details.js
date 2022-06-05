// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let postmassive = JSON.parse(localStorage.getItem('post'));
for (const postmassiveElement of postmassive) {
    let postid = postmassiveElement.postid;
    console.log(postid);
    let link3 = `https:jsonplaceholder.typicode.com/posts/${postid}`;
    fetch(link3)
        .then(response => response.json())
        .then(postinfo => {
            let div = document.createElement('div');
            let userId = document.createElement('div');
            let  id = document.createElement('div');
            let title =document.createElement('div');
            let body =document.createElement('div');


            userId.innerText = `userid:${postinfo.userId}`;
            id.innerText = `id:${postinfo.id}`;
            title.innerText = `title:${postinfo.title}`;
            body.innerText = `body:${postinfo.body}`;

            div.append(userId,id,title,body);
            document.body.append(div);
        });

    let link4 = `https:jsonplaceholder.typicode.com/posts/${postid}/comments`;
    fetch(link4)
        .then(response => response.json())
        .then(comments => {
            let div = document.createElement('div');
            div.classList.add('comments')
            for (const comment of comments) {

                let div1 = document.createElement('div');
                div1.classList.add('comment');
                // let postId = document.createElement('div');
                // let id = document.createElement('div');
                // let name = document.createElement('div');
                // let email = document.createElement('div');
                let body = document.createElement('div');

                // postId.innerText = `postId:${comment.postId}`;
                // id.innerText = `id:${comment.id}`;
                // name.innerText = `name:${comment.name}`;
                // email.innerText = `email:${comment.email}`;
                body.innerText = `${comment.body}`;

                // div.append(postId, id, name, email, body);
                div1.append(body);
                div.append(div1);
                document.body.append(div);
            }
        });
    }
