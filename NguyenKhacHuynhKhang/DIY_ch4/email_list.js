var $ = document.getElementById.bind(document);
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
function joinListHandler() {
  isValid = true;
  var email = $("email");
  if (email.value === "") {
    $("email_error").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    isValid = validateEmail(email.value);
    if (!isValid) {
      $("email_error").innerText = "This field must be email";
    } else {
      $("email_error").innerText = "";
    }
  }
  console.log($("email_error").firstChild.nodeValue)
  var email2 = $("email2");
  if (email2.value === "") {
    $("email2_error").innerText = "This field is required";
    isValid = false;
  } else if (email2.value !== email.value) {
    $("email2_error").innerText = "This field must be equal first entry";
    isValid = true;
  } else {
    $("email2_error").innerText = "";
  }
  var firstName = $("first_name");
  if (firstName.value === "") {
    $("first_name_error").innerText = "This field is required";
    isValid = false;
  } else {
    $("first_name_error").innerText = "";
  }
  if (isValid) {
    $("email_form").submit();
  }
}
window.onload = function () {
  $("join_list").onclick = joinListHandler;
  $("email").focus();
};
