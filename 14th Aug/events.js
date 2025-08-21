// Method 1 
// function changeText(){
//     document.getElementById("msg").innerHTML = "YOU CLICKED ME!";
//     document.getElementById("msg").style.color = "red";
// } 

// Scalable Method
// let msg = document.getElementById("msg");
// function changeText() {
//     msg.innerHTML = "YOU CLICKED ME!";
//     msg.style.color = "red";
//     msg.style.fontSize = "30px";
//     msg.style.fontWeight = "bold";
// }

// function changeColor(){
//     let color = document.getElementById("colorinput").value;
//     let msg = document.getElementById("msg");
//     msg.style.color = color;
// }

document.getElementById("nameinput").addEventListener("keyup",function(){
    document.getElementById("output").innerHTML = this.value;
});

document.getElementById("box").addEventListener("mouseover", function() {
    this.style.background = "yellow";
    this.style.width = "200px";
    this.style.height = "200px";
});
document.getElementById("box").addEventListener("mouseout", function() {
    this.style.background = "green";
    this.style.width = "100px";
    this.style.height = "100px";
});
document.getElementById("text").addEventListener("dblclick", function() {
    this.style.color = "blue";
});
document.getElementById("emoji").addEventListener("dblclick", function() {
    this.innerHTML = "❤️";
});
document.getElementById("email").addEventListener("focus", function() {
    this.style.border = "4px solid blue";
});
document.getElementById("email").addEventListener("blur", function() {
    this.style.border = "4px solid gray";
});



