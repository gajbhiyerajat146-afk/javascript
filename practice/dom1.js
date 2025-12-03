/*document.title = "My lovely Website ";
document.body.style.backgroundColor = "pink";
console.dir(document);*/

var username = ` bitch`;
//var b = document.getElementById("a");
var b = document.querySelector("#a");

b.textContent += username === "" ? "guest" : username;
