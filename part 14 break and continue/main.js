for(var i=1; i<=100; i++){

  // if (i == 10) {
  //   break;
  // }
  document.write(" " + i)
  if (i == 10) {
    break;
  }
}

document.write("<h1>END</h1>");

for  (var i =1; i <= 100;  i++) {
  if (i %2==0) {
    continue;
  }
  document.write( " " +i);
}
document.write( " <h1>END</h1>");
for  (var i = 1; i<= 100;  i++) {
  if (i % 2 == 0) {
    continue;
  }
  document.write(" " + i);
}