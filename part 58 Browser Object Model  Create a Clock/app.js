var saveButton = document.querySelector(".save");

var message = document.querySelector("message");

saveButton.addEventListener("click", startClock);

function startClock(e){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var time = hours + ":" + minutes + ":" + seconds;

  
  message.textContent = time;

  setInterval(startClock, 1000);
}