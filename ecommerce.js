
let shopBox1=document.querySelector(".shops-boxes");
let heroSection = document.querySelector(".herosecton");
let shop = document.querySelector(".shops");
let body = document.querySelector(".body")
shopsBox1.addEventListener("click",function(){
    //none properties//
    heroSection.style.display= "none";
    shops.style.display="none";
     //mainDiv styling
    let mainDiv = document.createElement("div");
    body.appendChild(mainDiv)
    mainDiv.style.height="500px"
    mainDiv.style.width="100%"
    mainDiv.style.backgroundColor="red"
})