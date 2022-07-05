const heding3 = document.createElement("h1");
const text = document.createTextNode("Hello Bnagladhesh");

heding3.appendChild(text);

const myDiv = document.querySelector(".my-div");
myDiv.appendChild(heding3);

let heding2 = document.getElementsByTagName("h1")[1];

myDiv.removeChild(heding2);

let heding0 = document.createElement("h1");
let text0 = document.createTextNode("My name is Abdus Salam");
heding0.appendChild(text0);
let  heding1 = document.getElementsByTagName("h1")[0];

myDiv.insertBefore(heding0, heding1);



const 