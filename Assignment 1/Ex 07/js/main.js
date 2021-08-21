"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var studentsList = [];

var inputInfo = function () {
    var code =  $("code").value;
    var name = $("name").value;
    var age = parseFloat($("age").value);
    var gender;
    var isValid = true;

    if (code == "") {
        $("code_error").innerHTML = "This field is required";
        isValid = false;
    }else{
        $("code_error").innerHTML = "";
    }

    if (name == "") {
        $("name_error").innerHTML = "This field is required";
        isValid = false;
    }else{
        $("name_error").innerHTML = "";
    }
    
    if ($("age").value == "") {
        $("age_error").innerHTML = "This field is required";
        isValid = false;
    } else if (!Number.isInteger(age)) {
        $("age_error").innerHTML = "The age has to be a integer";
        isValid = false;
    } else{
        $("age_error").innerHTML = "";
    }

    if ($("male").checked || $("female").checked) {
        $("gender_error") = "";
        gender = $("male").checked ? "male" : "female";
    }else{
        $("gender_error").innerHTML = "This field is required";
        isValid = false;
    }
    if (isValid) {
        studentsList[studentsList.length] = {code: code, name: name, age: age, gender: gender};
    }
}

var showScreen = function () {
    var bodyTable = $("studentList");
    var row;

    for(var i=0; i<studentsList; i++){
        row = bodyTable.inserRow(i+1);
        row.insertCell(0) = studentsList[0];
        row.insertCell(1) = studentsList[1];
        row.insertCell(2) = studentsList[2];
        row.insertCell(3) = studentsList[3];    
    }
}

var showHide = function (id) {
    
}
onload = function () {
    $("submit").onclick = inputInfo;
    showScreen();
}