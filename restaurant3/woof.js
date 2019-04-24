//displays message when inquiry received
function thanksFren() {
  document.getElementById("thanks-fren").style.display = "block";
}

//checking for valid phone number
function phonePlz() {
  var phone = document.getElementById("phone").value;
  phone = Number(phone);
  if (isNaN(phone)){
    alert("Oh no! Plz enter a valid phone info with #'s only. Thank you fren!")
  }
}

//potential function for checking if valid email address
//var email = document.getElementById("phone").value;
// if (typeOf = string) {
//   if string contains "@", continue {
//     may need to parse string into array, see if [i] value = "@"
//     else {
//       alert(Plz enter a valid email address! Thank u!)
//     }
//   }
// }
