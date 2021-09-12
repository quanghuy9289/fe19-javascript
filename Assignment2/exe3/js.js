"use strict";

var $ = function(id) {
    return document.getElementById(id);
}

var userNameArr = []

var processEntries = function () {
    var userName = $('user_name').value;
    userNameArr.push(userName );
    
    userNameArr.sort();
    displayUserNameArr();
    $('user_name').value = "";
    $('user_name').focus();
}

var displayUserNameArr = function () {
    $('name_list').value = userNameArr;
}


var displayUserNameArr = function () {
    $('name_list').value = userNameArr;
}

window.onload = function () {
    $('calculate').onclick = processEntries;
    $('user_name').focus();
}