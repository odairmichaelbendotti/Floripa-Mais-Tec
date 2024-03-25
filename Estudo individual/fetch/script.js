const url = "https://jsonplaceholder.typicode.com/posts"
const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container');

//get id from url
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = URLSearchParams.get('id')

//Pegar todos os posts
async function getAllPosts(){
    const response = await fetch(url) //recebe dados da const url
    const data = await response.json() //pega os dados da variável e transforma em um Json.
    loadingElement.classList.add('hide')
    
    console.log(data)
    data.map(post => { //realiza um map em todos os elementos recebidos na variável data.
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const body = document.createElement('p');
    const link = document.createElement('a');
    
    title.innerText = post.title;
    body.innerText = post.body;
    link.innerHTML = "Ler";
    link.setAttribute('href',`/posts.html?id=${post.id}`);

    div.append(title, body, link)
    postsContainer.appendChild(div)
    })
}

getAllPosts()