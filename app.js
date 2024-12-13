let input = document.getElementById('inp');
let cardDiv = document.getElementById('cardDiv')
let wrap = document.getElementById('wrap')

// cardDiv.style.backgroundColor='white'
let search = ()=>{

    let API_KEY = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-10&sortBy=publishedAt&apiKey=bc44bb5f743c445f9a43b6ae2fffb0f8`
    fetch(API_KEY).then((res)=> res.json()).then((data)=>{
        // console.log(data);
        wrap.style.marginTop = '0px'
        wrap.style.transition = '2s'
        data.articles.map((e,i)=>{
          console.log(e);
          cardDiv.innerHTML += `
          <div class="card" style="width: 18rem;">
          <img src=${e.urlToImage} class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">${e.description}</p>
          </div>
          </div>`
        })
        
    }).catch((err)=>{
        console.log(err);
        
    })
}