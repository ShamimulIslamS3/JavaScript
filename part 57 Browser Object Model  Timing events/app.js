// JS BOM
// JS Timing events  methods
// setTimeOut(). setInterval()

// setTimeout(() => {
//   console.log("Hello")
// }, 2000);


// setTimeout(display, 2000);

// function display() {
//   console.log("Hello Bangladesh");
// }


// var saveButton = document.querySelector(".save-btn");
// var message = document.querySelector(".message");
// saveButton.addEventListener("click", saveUser);

// function saveUser() {
//   message.textContent = "User registration successfull";

//   setTimeout(() => {
//     message.textContent = "";
//   }, 2000);
// };


var save = document.querySelector(".save");
var messageBtn = document.querySelector(".message-btn");


save.addEventListener('click', display());

function display() {
  var count = 0;
  messageBtn.textContent = count;

  setInterval(() => {
    count++;
    messageBtn.textContent = count;
  },1000);
}