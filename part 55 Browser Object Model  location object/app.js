// // BOM (Browser Object Model)
// // window Object
// // Location Object
// console.clear();

// // href
// console.log(location.href);
// // Protocol
// console.log(location.protocol);


// // HostName

// console.log(location.hostname);

// //Port

// console.log(location.port);

// // PathName


// console.log(location.pathname);\


var locationDiv = document.querySelector(".location-div");


var p1 = locationDiv.children[0];
p1.textContent = location.href;


var p2 = locationDiv.children[1];
p2.textContent = location.hostname;


var p3 = locationDiv.children[2];
p3.ttextContent = location.protocol;

var p4 = locationDiv.children[3];
p4.textContent = location.port;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;


var visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click", function(){
  location.assign("https://www.fiverr.com")
})