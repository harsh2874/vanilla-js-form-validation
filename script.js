const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateName() && validateEmail() && validatePassword()) {
    alert("Form Submitted Successfully!");
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    //in case you want to show the cross icon when the name is wrong, you can add the class for cross icon here like this: nameError.previousElementSibling.classList.add('fa-xmark'); and remove the class for right icon if it is added like this: nameError.previousElementSibling.classList.remove('fa-check');
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name (only letters and spaces allowed)";
    //in case you want to show the cross icon when the name is wrong, you can add the class for cross icon here like this: nameError.previousElementSibling.classList.add('fa-xmark'); and remove the class for right icon if it is added like this: nameError.previousElementSibling.classList.remove('fa-check');
    return false;
  }
  nameError.innerHTML = "";
  //in case you want to show the right icon when the name is correct, you can add the class for right icon here like this: nameError.previousElementSibling.classList.add('fa-check'); and remove the class for cross icon if it is added like this: nameError.previousElementSibling.classList.remove('fa-xmark');
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    //in case you want to show the cross icon when the email is wrong, you can add the class for cross icon here like this: emailError.previousElementSibling.classList.add('fa-xmark'); and remove the class for right icon if it is added like this: emailError.previousElementSibling.classList.remove('fa-check');
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Write a valid email (like: example@email.com)";
    //in case you want to show the cross icon when the email is wrong, you can add the class for cross icon here like this: emailError.previousElementSibling.classList.add('fa-xmark'); and remove the class for right icon if it is added like this: emailError.previousElementSibling.classList.remove('fa-check');
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerHTML = "";
  //in case you want to show the right icon when the email is correct, you can add the class for right icon here like this: emailError.previousElementSibling.classList.add('fa-check'); and remove the class for cross icon if it is added like this: emailError.previousElementSibling.classList.remove('fa-xmark');

  emailError.previousElementSibling.classList.add("fa-check");
  emailError.previousElementSibling.classList.remove("fa-xmark");
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Password is required";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,
    )
  ) {
    passwordError.innerHTML =
      "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  passwordError.innerHTML = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  passwordError.previousElementSibling.classList.remove("fa-xmark");
  return true;
}
