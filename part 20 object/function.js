// function writeText(str) {
//   document.getElementById('demo').innerHTML = str;
// }
// writeText('Hello World');

// var num1 = 'Salam';

// var num2 = 'Shamim';

// function humira(num1, num2) {
//   var sum = num1 + num2;
//   document.getElementById('demo').innerHTML = sum;

// }
// humira(num1, num2)
function Shamim() {
  alert("Hello World");  
}
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

document.getElementById('demo').innerHTML = addNumbers(2, 5);


function getFullname(firstName, lastName) {
  return firstName + " " + lastName;

}


var fullName = getFullname('john', 'Doe');

document.write(fullName);

function getAge(age) {
  var fullName = "Jone Doe";
  //the fullName variable can used here
  document.getElementById("demo2").innerHTML = fullName + " is " + age + "years old."
}

document.getElementById("demo1").innerHTML = fullName;

var fruit = "Apple";

var fruit1 = "My favorit fruit is ";

function myFunc() {
  document.getElementById("Salam").innerHTML = fruit1, + fruit;
}