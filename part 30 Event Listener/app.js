 var my = document.querySelector("button");
 my.addEventListener("click",myFunction);

function myFunction() {
  alert("Hello")
}

var myVar = document.querySelector("#heding");

myVar.addEventListener("mouseover", myFunction);

function myFunction(){
  myVar.classList.add("salam")
};

myVar.addEventListener("mouseout", function(){
  myVar.classList.remove("salam")
});