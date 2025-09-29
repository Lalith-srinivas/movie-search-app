let movieInput=document.querySelector(".searchInput");
let searchBtn=document.querySelector(".searchButton");
let movieInfo=document.querySelector(".movie");
movieInfo.style.display="none";
let moviePoster=movieInfo.querySelector("img");
let movieTitle=movieInfo.querySelector(".movieTitle span");
let movieYear=movieInfo.querySelector(".movieYear span");
let movieDirector=movieInfo.querySelector(".movieDirector span");
let type=movieInfo.querySelector(".type span");
let released=movieInfo.querySelector(".released span");
let loader=document.querySelector(".banter-loader");
loader.style.display="none";
searchBtn.addEventListener("click",()=>{
    if(movieInput.value==""){
        alert("Enter Movie name to Search");
    }
    else{
        loader.style.display="block";
    let movieName=movieInput.value;
    let finalUrl=`https://www.omdbapi.com/?t=${movieName}&apikey=7035c60c`;
    fetch(finalUrl)
    .then(response=>response.json())
    .then(data=>{
        setTimeout(()=>{
            console.log(data)
        moviePoster.src=data.Poster;
        movieTitle.innerText=data.Title;
        movieYear.innerText=data.Year;
        movieDirector.innerText=data.Director;
        type.innerText=data.Type;
        released.innerText=data.Released;
        movieInfo.style.display="flex";
        loader.style.display="none";
        movieInput.value="";
        },2000);
    })
}
});
movieInput.addEventListener("click",()=>{
    setTimeout(()=>{
        movieInfo.style.display="none";
    },1000);
});