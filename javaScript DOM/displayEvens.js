// function submitButton() {
//   //if user input {
//   //document.write(events)
//   }
// }

///* //myNum = Number(myNum);
//Number(myNum); this changes a string to a number, IMPORTANT!
//console.log(Number(myNum) + 10) */

var num1 = document.getElementById("num1").value;
num1 = Number(num1);

var num2 = document.getElementById("num2").value;
num2 = Number(num2);

var stepValue = document.getElementById("step").value;
stepValue = Number(stepValue);

//i = i + stepValue

function errorMessages() {
//Error message should be displayed if ending number is less than or equal to the starting number
if (num1 >= num2) {
  alert("Ending number cannot be greater than or equal to starting number.")
}
////Error message should be displayed if the step is not a positive number
if (stepValue <= 0) {
  alert("Step value cannot be less than or equal to zero.")
  }
}

function displayEvens() {
  document.getElementById("answer").style.display = "block";
}

// function doEveything() {
//   // errorMessages();
//   displayEvens();
// }
//big hint from professor polk- you must use Number() to cast or convert input into numbers or else code will not work
//<form onsubmit = "return doForm()"> doForm must return false

//load errorMessages() function onclick

//
// if (num1 <= 0 || num2 <= 0) {
//   alert("Numbers cannot be negative")
// }
