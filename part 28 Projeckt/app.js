

var photos = ["image/1.png", "image/2.jpg", "image/3.jpg"];

var  imgTag = document.querySelector("img");




var coust = 0;
   
function next() {
  coust = coust + 1;
  if(coust >= photos.length){
    coust = 0;
    imgTag.src = photos[coust];
  }else{
    imgTag.src = photos[coust];
  }



}

function prev(){
  coust = coust - 1;
  if(coust < 0 ){
    coust = photos.length - 1;
    imgTag.src = photos[coust];
  }else{
    imgTag.src = photos[coust];
  }

}
