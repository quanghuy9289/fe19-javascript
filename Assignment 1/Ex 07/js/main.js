"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var studentsList = [];

var inputInfo = function () {
  var code = $("code").value;
  var name = $("name").value;
  var age = parseFloat($("age").value);
  var gender;
  var isValid = true;

  // Check validation
  if (code == "") {
    $("code_error").innerHTML = "This field is required";
    isValid = false;
  } else {
    $("code_error").innerHTML = "";
  }
  if (name == "") {
    $("name_error").innerHTML = "This field is required";
    isValid = false;
  } else {
    $("name_error").innerHTML = "";
  }
  if ($("age").value == "") {
    $("age_error").innerHTML = "This field is required";
    isValid = false;
  } else if (!Number.isInteger(age)) {
    $("age_error").innerHTML = "The age has to be a integer";
    isValid = false;
  } else {
    $("age_error").innerHTML = "";
  }
  if ($("male").checked || $("female").checked) {
    $("gender_error").innerHTML = "";
    gender = $("male").checked ? "male" : "female";
  } else {
    $("gender_error").innerHTML = "This field is required";
    isValid = false;
  }

  //Add data
  if (isValid) {
    studentsList[studentsList.length] = { code: code, name: name, age: age, gender: gender };
    showScreen();
  }
};

var showScreen = function () {
  var bodyTable = $("studentList");
  bodyTable.innerHTML = "";
  var row;

  for (var i = 0; i < studentsList.length; i++) {
    row = bodyTable.insertRow(i);
    row.insertCell(0).innerHTML = studentsList[i].code;
    row.insertCell(1).innerHTML = studentsList[i].name;
    row.insertCell(2).innerHTML = studentsList[i].age;
    row.insertCell(3).innerHTML = studentsList[i].gender;
  }
};

var showHide = function (id) {
  var showHide = $(id);
  if (showHide.className == "showHide") {
    showHide.className = "";
  } else if (showHide.className == "") {
    showHide.className = "showHide";
  }
};

var escEvent = function () {};
onload = function () {
  $("submit").onclick = inputInfo;

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      $("form").className = "showHide";
      $("list").className = "";
    }
  });
};
