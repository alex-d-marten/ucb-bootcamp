document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "500px";
    document.getElementById("box").style.width = "500px";
})

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
})

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.25";
})

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1.0";
    document.getElementById("box").style.backgroundColor = "orange";
})