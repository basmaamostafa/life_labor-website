function validateForm() {
  var fullName = document.forms["myForm"]["fname"].value;
  var e = document.getElementById("nameError");

  if (fullName == "") {
    // alert("Name must be filled out");
    e.innerHTML = "Name must be filled out";
    return false;
  } else {
    var nameTest = fullName.search(/^[A-Za-z]+$/);
    if (nameTest == -1) {
      e.innerHTML = "enter letters only";
      return false;
    }
  }

  var email = document.forms["myForm"]["mail"].value;
  if (email == "") {
    // alert("Name must be filled out");
    var e = document.getElementById("nameError");
    e.innerHTML = "Name must be filled out";
    return false;
  } else {
    var emailTest = email.search(/[a-zA-Z]/g);
    if (emailTest == -1) {
      alert("Please enter valid email in this field.");
    }
  }

  var email = document.forms["myForm"]["fnapassme"].value;
  if (email == "") {
    // alert("Name must be filled out");
    var e = document.getElementById("nameError");
    e.innerHTML = "Name must be filled out";
    return false;
  } else {
    var emailTest = email.search(/[a-zA-Z]/g);
    if (emailTest == -1) {
      alert("Please enter valid email in this field.");
    }
  }
}
