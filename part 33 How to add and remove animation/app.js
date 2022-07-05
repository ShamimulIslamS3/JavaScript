for(var i = 0; i<3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    console.log(text)
    switch(text){
      case "a":
        var audio = new Audio("audio/1.mp3");
        audio.play();
        break;
        case  "b":
          var  audio = new Audio("audio/2.mp3");
          audio.play();
          break;
          case "c":
            var audio = new Audio("audio/3.mp3");
            audio.play();
            break;
    }
    playAnimation(text)
  })
};


function playAnimation(text){
  var selectedButton = document.querySelector("." + text)
  selectedButton.classList.add("audio");

  setTimeout(function(){
    selectedButton.classList.remove("audio")
  }, 1000)
}