function toggleButton() {
  document.getElementById("joinBtn").disabled = !document.getElementById("agree").checked;
}
function isDigit(ch) {
  return ch >= "0" && ch <= "9";
}

function isCapital(ch) {
  return ch >= "A" && ch <= "Z";
}

function isLetter(ch) {
  return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
}

function setError(id, message) {
  document.getElementById(id).innerHTML = message;
}
function validateForm() {
  var valid = true;

  var ids = ["nameError", "ageError", "mobileError", "emailError", "passwordError",
             "confirmError", "planError", "dateError", "timeError", "mainError",
             "backupError", "addonsError", "finalMessage"];
  for (var i = 0; i < ids.length; i++) {
    setError(ids[i], "");
  }
   var name = document.getElementById("fullName").value.trim();
  var age = document.getElementById("age").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirmPassword").value;
  var plan = document.getElementById("plan").value;
  var date = document.getElementById("startDate").value;
  var main = document.getElementById("mainTrainer");
  var backup = document.getElementById("backupTrainer");
  var addons = document.getElementById("addons").value;

  if (name === "") {
    setError("nameError", "Your full name is missing.");
    valid = false;
  } else if (name.length < 3) {
    setError("nameError", "Full name is too short (minimum 3 letters).");
    valid = false;
  } else {
    for (var n = 0; n < name.length; n++) {
      var c = name.charAt(n);
      if (!isLetter(c) && c !== " ") {
        setError("nameError", "Digits and symbols are not allowed in the full name.");
        valid = false;
        break;
      }
    }
  }

 
  if (age === "" || isNaN(age) || Number(age) < 16 || Number(age) > 65) {
    setError("ageError", "Age must be a number from 16 to 65.");
    valid = false;
  }

  
  var mobileOk = true;
  if (mobile.length !== 11) {
    mobileOk = false;
  } else {
    for (var m = 0; m < mobile.length; m++) {
      if (!isDigit(mobile.charAt(m))) {
        mobileOk = false;
      }
    }
    if (mobile.charAt(0) !== "0" || mobile.charAt(1) !== "1" || mobile.charAt(2) < "3") {
      mobileOk = false;
    }
  }
  if (!mobileOk) {
    setError("mobileError", "Enter a valid mobile number (11 digits, starting with 013 to 019).");
    valid = false;
  }

  if (email === "") {
    setError("emailError", "Email cannot be left empty.");
    valid = false;
  } else {
    var at = email.indexOf("@");
    if (email.indexOf(" ") !== -1 || at === -1 || at === 0 || email.indexOf(".", at) === -1) {
      setError("emailError", "This email does not look right.");
      valid = false;
    }
  }
 
  if (password.length < 8) {
    setError("passwordError", "Use a password of 8 or more characters.");
    valid = false;
  } else {
    var hasCapital = false;
    var hasDigit = false;
    for (var p = 0; p < password.length; p++) {
      if (isCapital(password.charAt(p))) {
        hasCapital = true;
      }
      if (isDigit(password.charAt(p))) {
        hasDigit = true;
      }
    }
    if (!hasCapital || !hasDigit) {
      setError("passwordError", "Password needs at least one capital letter and one digit.");
      valid = false;
    }
  }

  if (confirm !== password) {
    setError("confirmError", "The two passwords are not the same.");
    valid = false;
  }

  if (plan === "") {
    setError("planError", "Please choose a plan.");
    valid = false;
  }

  if (date === "") {
    setError("dateError", "Please pick a start date.");
    valid = false;
  }

  var radios = document.getElementsByName("workoutTime");
  var picked = false;
  for (var r = 0; r < radios.length; r++) {
    if (radios[r].checked) {
      picked = true;
    }
  }
  if (!picked) {
    setError("timeError", "Please choose a workout time.");
    valid = false;
  }

  if (main.selectedIndex === 0) {
    setError("mainError", "Please choose a main trainer.");
    valid = false;
  }
  if (backup.selectedIndex === 0) {
    setError("backupError", "Please choose a backup trainer.");
    valid = false;
  } else if (main.selectedIndex !== 0 && main.value === backup.value) {
    setError("backupError", "Backup trainer must be different from the main trainer.");
    valid = false;
  }

  if (addons === "" || isNaN(addons) || addons.indexOf(".") !== -1 ||
      Number(addons) < 0 || Number(addons) > 3) {
    setError("addonsError", "Add-ons must be a whole number from 0 to 3.");
    valid = false;
  }

  if (!valid) {
    return false;
  }

  var fee = 0;
  if (plan === "Monthly") {
    fee = 1500;
  } else if (plan === "Quarterly") {
    fee = 4000;
  } else if (plan === "Yearly") {
    fee = 14000;
  }
  var total = fee + 500 * Number(addons);

  var message = "Welcome, " + name + "! Your " + plan + " membership starts on " +
                date + ". Total payable: " + total + " Taka.";

  document.getElementById("gymForm").reset();
  document.getElementById("joinBtn").disabled = true;
  setError("finalMessage", message);

  return false;
}
