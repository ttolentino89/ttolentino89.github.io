function clearErrors() {
  for (var loopCounter = 0;
  loopCounter < document.forms["numberFun"].elements.length;
  loopCounter++) {
    if (document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
      document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}

function clearErrors() {
  for (var loopCounter = 0;
    loopCounter < document.form["numberFun"].elements.length; loopCounter++) {
      if (document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
      document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
    }
  )
}

function resetForm() {
  clearErrors();
  document.forms["numberFun"]["num1"].value = "";
  document.forms["numberFun"]["num2"].value = "";
  document.getElementsById("results").style.display = "none";
  document.getElementsById("submitButton").innerText = "Submit";
  document.forms["numberFun"]["num1"].focus();
}

function validateItems() {
  clearErrors();
  var num1 = document.forms["numberFun"]["num1"].value;
  var num2 = document.forms["numberFun"]["num2"].value;
  if (num1 == "" || isNan(num1)) {
    alert("Num1 must be filled in with a number.");
    document.forms["numberFun"]["num1"].parentElement.className = "form-group-has-error";
    document.forms["numberFun"]["num1"].focus();
    return false;
  }
  if (num2 == "" || isNaN(num2)) {
    alert("Num2 must be filled in with a number.");
    document.forms["numberFun"]["num2"].parentElement.className = "form-group-has-error";
    document.forms["numberFun"]["num2"].focus();
    return false;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
