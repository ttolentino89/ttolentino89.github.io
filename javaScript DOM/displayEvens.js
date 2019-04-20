// function submitButton() {
//   //if user input {
//   //document.write(events)
//   }
// }

//helpful link- http://www.tutorialsmade.com/javascript-find-odd-even-number/

///* //myNum = Number(myNum);
//Number(myNum); this changes a string to a number, IMPORTANT!
//console.log(Number(myNum) + 10) */

function alert1() {
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  if (num1 >= num2) {
    alert("Ending number cannot be less than or equal to starting number.")
  }
}

function alert2() {
  var stepValue = document.getElementById("step").value;
  stepValue = Number(stepValue);
  if (stepValue <= 0) {
    alert("Step value cannot be less than or equal to zero.")
  }
}


//i = i + stepValue

function checkNums(){
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var stepValue = document.getElementById("step").value;
  stepValue = Number(stepValue);
  if (typeof num1 === "string") || (typeof num2 === "string") || (typeof stepValue === "string"){
       alert("Input must be a number.")
  }

checkNums()

function displayEvens() {
  document.getElementById("answer").style.display = "block";
  var num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  var num2 = document.getElementById("num2").value;
  num2 = Number(num2);
  var stepValue = document.getElementById("step").value;
  stepValue = Number(stepValue);
  // var evenNums = [];
  // for (let i = num1; i < num2; i = i + stepValue) {
  // if(i % 2 === 0) {
  //   document.write(evenNums.push)
  //    document.getElementByClass("evenNums").innerHTML = "";
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
