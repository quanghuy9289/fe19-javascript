"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var studentList = [];

var displayStudentList = function() {
    var bodyTable = $("studentList");
    var row;
    bodyTable.innerHTML = "";
    for (var i = 0; i < studentList.length; i++) {
        row = bodyTable.insertRow(i);
        row.insertCell(0).innerHTML = studentList[i].code;
        row.insertCell(1).innerHTML = studentList[i].name;
        row.insertCell(2).innerHTML = studentList[i].age;
        row.insertCell(3).innerHTML = studentList[i].gender;
    }
}

var inputInfo = function() {
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
        gender = $("male").checked ? "Male" : "Female";
    } else {
        $("gender_error").innerHTML = "This field is required";
        isValid = false;
    }
    if (isValid) {
        studentList.push({ code: code, name: name, age: age, gender: gender });
        displayStudentList();
    }
};

var escEvent = function() {
    alert("You have stopped entering student information.");
    $("code").disabled = true;
    $("name").disabled = true;
    $("age").disabled = true;
    $("submit").disabled = true;
};

window.onload = function() {
    $("submit").onclick = inputInfo;
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            escEvent();
        }
    })
};