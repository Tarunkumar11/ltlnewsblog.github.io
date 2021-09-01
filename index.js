

async function getNews(){
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-08-01&sortBy=publishedAt&apiKey=581567631711498cb0e6ddc7da4db678"
    let response = await fetch(url)
    let data = await response.json()
    return data
}

getNews().then((data) => {
    console.log(data)
   
    // data.map((news) => {
    //     return(

    //     )
    // })
    
}).catch((error)=>{
    console.log(error)
})




// document.onload(() => {
//     console.log("loaed")
// })

function Card(data){
    const card = document.createElement('div')
    card.className="card"

    const image = document.createElement('img')
    const nimge = data.urlToImage || "download.jpg"
    image.src=`${nimge} `
    
    const cardInfo= document.createElement('div')
    cardInfo.className="card-info"
    
    const Title = document.createElement('h1')
    Title.innerHTML=data?.title?.slice(0,100)
    
    
    const dateInof= document.createElement('div')
    dateInof.className="date-info"
    
    const pTag = document.createElement('p')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    span1.innerText = `Posted on: ${data.publishedAt}`
    span2.innerText = "//Categeory: One"
    pTag.appendChild(span1)
    pTag.appendChild(span2)
    dateInof.appendChild(pTag)
    
    
    const content = document.createElement('p')
    content.className="content"
    content.innerText=data.description
    
    const btn = document.createElement('button')
    
    btn.className="btn"
    const aTag = document.createElement('a')
    aTag.href=data.url
    aTag.innerText = "Continue reading"
    btn.appendChild(aTag)


    cardInfo.appendChild(Title)
    cardInfo.appendChild(dateInof)
    cardInfo.appendChild(content)
    cardInfo.appendChild(btn)

    card.appendChild(image)
    card.appendChild(cardInfo)
    return card
}
document.addEventListener('DOMContentLoaded',
function addcard(){
    const container = document.getElementById("allBlog")
    
    getNews().then((data) => {
        console.log(data)
    
        for(news of data.articles){
            let card = Card(news)
            container.appendChild(card)
        }
    }).catch((error)=>{
        console.log(error)
    })

    // let card = Card()
    // container.appendChild(card)
    
    }

, false)