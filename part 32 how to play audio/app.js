for (var i = 0; i<3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    console.log(text);


    switch (text) {
      case "A":
      var audio = new Audio("image/1.mp3");
      audio.play();
      break;
      case "B":
        var audio = new Audio("image/2.mp3");
        audio.play();
        break;
        case "C":
          var audio = new Audio("image/3.mp3");
          audio.play();
          break;
    }

  })
}