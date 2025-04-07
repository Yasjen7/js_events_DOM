document.addEventListener("DOMContentLoaded", function () {
    let onload = document.getElementById("onload");

    onload.innerHTML = "<h1>This is the Loaded Content</h1>"
})

const directionEL = document.getElementById("direction");

document.addEventListener("keydown", function (event) {
    console.log(event);

    directionEL.innerHTML = `the key that was pressed was ${event.key}`
})

const button = document.getElementById("clickMe");

button.addEventListener("click", function() {
    button.innerText = "You clicked me!";
    button.style.backgroundColor = "green";
    button.style.color = "white";       
})

function greet(){
    console.log("Hello, World!");
    alert("Hello");
}

let button2 = document.getElementById("randomColorBtn");

function greet() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);
    alert(randomColor);
}
