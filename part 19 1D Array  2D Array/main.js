var names = ['Salam', 'shamim', 'Humayra', 'Abusaid', 'Sajina'];
console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3])
// console.log(names[4])

// for loop
for(var x=0; x<5; x++){
  console.log(names[x]);
};

// One Dimensinal Array
// Create a function called highestScore that 
//Receive a id array called scores
//return the highest score

  console.clear();



function highestScore(scores){
  let max = scores[0];
  for (var x =1; x <scores.length; x++) {
    if (max < scores[x]) {
      max = scores[x];
    }
  }
  return max;
}


let scores = [21,28,1,88,15];
var maxScore = highestScore(scores);
console,log(maxScore);


/** 2D Dimensional array*/

// function highestScore(playersInfo){
//   console.log(playersInfo)
// };


// var playersInfo = [
//   ['Salam', 17],
//   ['samim', 10],
//   ['Humayra',3],
//   ['Abusaid',9]
// ];

// highestScore(playersInfo);

