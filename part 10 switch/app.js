// Digit spilling
// 0 - Zero, 1 - One... 9 - Nine, 10 - Not a valid digit
// switch, case, break, default

// var digit = prompt("Enter any digit : ");

// switch(digit){
//     case "0":
//     document.write("Zero");
//     break;
//     case "1":
//       document.write("One");
//     break;
//       case "2":
//         document.write("Two");
//         break;
//         case "3":
//           document.write("Three");
//           break;
//           case "4":
//             document.write("Four");
//             break;
//             case "5":
//               document.write("Five");
//               break;
//               case "6":
//                 document.write("Six");
//                 break;
//                 case "7":
//                   document.write("Seven");
//                   break;
//                   case  "8":
//                     document.write("Eight");
//                     break;
//                     case "9":
//                       document.write("Nine");
//                       break;
//       default:
//         document.write("Not a digit")
// }




// if(digit==0)
//  console.log("zero");

//  else if (digit ==1)
//  document.write("One");
//  else if(digit ==2)
//  console.log("Two");
//  else if (digit ==3)
//  consoloe.log("Three");
//  else if (digit ==4)
//  console.log("Four");
//  else if (digit ==5)
//  console.log("Five");
//  else if (digit ==6)
// console.log("Six");
// else if (digit ==7)
// console.log("Seven");
// else if (digit ==8)
// console.log("Eight");
// else if (digit ==9)
// console.log("Nive");
//  else
// console.log("Not a digit");

//task 5 - input a letter and check  it is vowel or consonant using switch
var letter = prompt("Enter Any letter : ");
letter = letter.toLowerCase();

switch(letter){
  case "a":
  case "b":
  case "c":
  case "d":
  case "e":    
    document.write("Vowel");
    break;
  default:
    document.write("Consonanrt");  

}