let square= document.getElementById("square");
let data = document.getElementById("datos");
let circle = document.getElementById("circle");

console.log("script")

square.addEventListener("mouseover", (event) => {
    console.log("event")
    data.innerHTML= String(event.clientX) + ";" +String(event.clientY);
    circle.style.top = String(event.clientY -75)+"px";
    circle.style.left = String(event.clientX -75)+"px";
    circle.style.bottom = posicion * 0.2 + "px";
    

})