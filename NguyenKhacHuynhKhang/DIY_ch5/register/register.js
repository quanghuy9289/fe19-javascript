var $ = document.getElementById.bind(document);
var processEntries = function () {
  var email = $("email_address").value;
  var phone = $("phone").value;
  var country = $("country").value;
  var contact = "Text";
  if ($("email").checked) contact = "Email";
  if ($("none").checked) contact = "Don't contact me";
  var required = "<span>Required Field</span>";
  var msg = "Please review your entries and complete all required fields";
  var header;
  var terms = $("terms").checked;
  if (email === "") {
    header = msg;
    email = required;
  }
  if (phone === "") {
    header = msg;
    phone = required;
  }
  if (country === "") {
    header = msg;
    country = required;
  }
  if (!terms) {
    header = msg;
    terms = required;
  }
  if (header === msg) {
    var html = "<tr><td>Email: </td><td>" + email + "</td></tr>";
    var html = html + "<tr><td>phone: </td><td>" + phone + "</td></tr>";
    var html = html + "<tr><td>Country: </td><td>" + country + "</td></tr>";
    var html = html + "<tr><td>Contact: </td><td>" + contact + "</td></tr>";
    var html = html + "<tr><td>Terms: </td><td>" + terms + "</td></tr>";
    $("registration_info").innerHTML = html;
    $("registration_header").innerText = header;
  } else {
    $("registration_info").innerHTML = "";
    $("registration_form").submit();
  }
};
var reset = function () {
  $("registration_form").reset();
  $("registration_info").innerHTML = "";
  $("registration_header").innerText = "";
  $("email_address").focus();
};
window.onload = function () {
  $("register").onclick = processEntries;
  $("reset_form").onclick = reset;
  $("email_address").focus();
};
