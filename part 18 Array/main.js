// Array - is an object; collection of variables
// var name1, name2, name3,name4,name5;
// name1 = 'Salam';
// name2 = 'Shamim';
// name3 = 'Humayra';
// name4 = 'Abusaid';
// name5 = 'Sajina';

// var names = ['Salam', 'lima', 'Shipa', 'Rinku', 'Samim' ];

// console.log(names.length);
// console.log(names);
// console.log(names[3]);
// names.push('Humayra');
// names.push('Abusaid');
// console.log(names);
// names.pop();
// console.log(names);
// names.pop();
// console.log(names);

// var country1 = ['Bangladesh', 'India'];
// var country2 = ['Pakistan', 'Nepal'];

// var country = country1.concat(country2);

// console.log(country)



/**** Loop****/
// var num = new Array();

// for(var i=0; i<5; i++){
//   num[i] = parseInt(prompt('Enter a number'));
// }


// let num = [10,20,30,40,50,60];
// var sum = 0;
// for(var i=0; i<5; i++)
// {
//     console.log(num[i]);
//      sum = sum + num[i];
// }
// console.log(sum);


/**** Array methods *****/
//you have alreaby learned about pop(),push(),convat(),
//shift(),unshift(), splice(pos,noe,ele1,ele2..), splice()
//sort(), reverse()

var names = ['MIna', 'Aris', 'Rabeya', 'Kolpona'];
console.log(names)

// shift opposite of pop

// names.shift(names);

//unshift oppstie of push

// names.unshift('Sagor');

// console.log(names)

////adding elemente using splice
// names.splice(2,1,'Korim','Rahim');
// console.log(names);

//removing elements using splice
// names.splice(1,2);
// console.log(names);


//slice
// var newArray = names.slice('1');
// console.log(newArray)


//sorta
// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames);

var numbers = [20, 5, 25, 45, 1];
 numbers.sort(function(a,b){
   return a-b;
 });
 

console.log(numbers);

