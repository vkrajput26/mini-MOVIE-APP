// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//url -http://www.omdbapi.com/?apikey=9b3377fb&s
let m_div =document.getElementById("movies")



async function searchmovies() {
    try{
    let value=document.getElementById("search").value
   let x= await fetch( `https://www.omdbapi.com/?apikey=9b3377fb&s=${value}`)

   let data= await x.json();
   const movies=data.Search
//    console.log(movies)
 return movies
   appendMovies(movies)
    }
    catch(err){
        console.log("error",err)
    }
}

function   appendMovies(movies){
   
    movies.inneerHtml=null
    movies.forEach(function(el){
        // console.log(el)

        let div=document.createElement("div")

        let poster=document.createElement("img")
        poster.src=el.Poster

        let p=document.createElement("p")
        p.innerText=el.Title


        let btn =document.createElement("button")
        btn.innerText="Book"
        btn.setAttribute("class","book_now")
         btn.addEventListener("click",function(){
             myfun(el)
             console.log(el)
         })


        div.append(poster,p,btn)
        m_div.append(div)
    });
}
  async function main()
  {
      let data =await searchmovies()
      if(data==undefined)
      {
          return false
      }
      appendMovies(data)
  }

  let id
  function debounce(x,delay)
  {
    if(id){
        clearInterval(id)
    }

    id=setTimeout(function(){
        x();
    },delay)
  }

  //btn click
  let arr1=[]
function myfun(el){

    event.preventDefault()
    window.location.href="checkout.html"
    let div1=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.Poster;

    let p1=document.createElement("p")
    p1.innerText=el.Title

    div1.append(img,p1)

 arr1.push(img)
 console.log(arr1)
  localStorage.setItem("movie",JSON.stringify(img))
    // console.log(div1)
}