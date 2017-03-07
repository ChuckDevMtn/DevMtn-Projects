// //                       //////////////////PROBLEM 1////////////////////
// //                       //Create a function called isTyler that accepts name as it's only parameter.
// //                       //If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
// //
// // var name = 'Tyler';
// //
//   function isTyler(name){
//     if (name === "Tyler"){
//       return true
//     }
//     else{
//       return false
//     }
//   }
// //
// //                       //////////////////PROBLEM 2////////////////////
// //
function getName(){
  name = prompt("What is your name?");
  return name;

}
// //
// //                       //Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
// //
// //                       //////////////////PROBLEM 3////////////////////
// //
// //                       //Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
// //                       //then alerts "Welcome, " plus whatever the users name is.
// //
// //
function welcome(){
  getName();
    alert("Welcome, " + name);
}
    welcome(name);
// //
// //                       //////////////////PROBLEM 4////////////////////
// //
// //                       //What is the difference between arguments and parameters?
// //
// //                       //******************// An Argument is the value of what is input into a paramenter;
// //                       //********************// A parameter is the placeholder of the value that is being passed into the parameter
// //
// //
// //                       //////////////////PROBLEM 5////////////////////
// //
// //
// //                       //What are all the falsy values in JavaScript and how do you check if something is falsy?
// //
// // // falsy values = NAN , 0 , "", null, undefined, false;
// // //
// // // How to check something is Falsy?
// //
// //
// //
// //                       //////////////////PROBLEM 6////////////////////
// //
// //
// //                       //Create a function called myName that returns your name
//
function myName(){
        return "chuck";
}
//
//                       //Now save the function definition of myName into a new variable called newMyName
//
var newMyName = myName;
//
//                       //Now alert the result of invoking newMyName
alert(myNewName());
//
//
//                       //////////////////PROBLEM 7////////////////////
//
//                       //Create a function called outerFn which returns an anonymous function which returns your name.
//
function outerFn(){
  return function(){
    return "chuck";
  }
}
                      //Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

                      //Now invoke innerFn.
var anything = innerFn();
