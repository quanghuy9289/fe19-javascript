"use strict";
const query = function (id) {
  return document.getElementById(id);
};

const processEntries = function () {
  let header = "";
  let html = "";
  let required = "<span>Required field</span>";
  let msg = "Please review your entries and complete all required fields";
  let email = query("email_address").value;
  let phone = query("phone").value;
  let country = query("country").value;
  let comments = query("text-area").value;
  let contact = "Text";
  if (query("email").checked) {
    contact = "Email";
  }
  if (query("none").checked) {
    contact = "None";
  }
  let terms = query("terms").checked;

  if (email === "") {
    email = required;
    header = msg;
  }
  if (phone === "") {
    phone = required;
    header = msg;
  }
  if (country === "") {
    country = required;
    header = msg;
  }

  query("registration_header").firstChild.nodeValue = header;
  if (header === msg) {
    html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
    html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
    html = html + "<tr><td>Country:</td><td>" + country + "</td></tr>";
    html = html + "<tr><td>Contact:</td><td>" + contact + "</td></tr>";

    html = html + "<tr><td>Comments:</td><td>" + comments + "</td></tr>";
    query("registration_info").innerHTML = html;
  } else {
    query("registration_info").innerHTML = "";
    query("registration_form").submit();
  }
};

const resetForm = function () {
  query("registration_form").reset();
  query("registration_header").firstChild.nodeValue = "";
  query("registration_info").innerHTML = "";
  query("email_address").focus();
};

window.onload = function () {
  query("register").onclick = processEntries;
  query("reset_form").onclick = resetForm;
  query("email_address").focus();
};
