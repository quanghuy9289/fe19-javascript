"use strict";

var $ = function(id) { return document.getElementById(id); };

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var processEntries = function() {   
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields";
    var email = $("email_address").value;
    var phone = $("phone").value;
    var country = $("country").value;
    var commentLength = $("comment").value.length;
    var contact = "Text";
    var wrong = "<span>Wrong format</span>";
    
    if ($("email").checked) {
        contact = "Email";
    } else if ($("mobile").checked) {
        contact = "Mobile phone";
    } else if ($("none").checked) {
        contact = "None";
    }

    var terms = $("terms").checked;

    if (email == "") {
        email = required;          
        header = msg;
    } else if (validateEmail(email) == false) {
        email = wrong;
        header = msg;
    }

	if (phone == "") {
        phone = required;         
        header = msg;
    } else if (isNaN(phone)) {
        phone = wrong;
        header = msg;
    }

	if (country == "") {
        country = required;         
        header = msg;
    }

    if (terms == false) {
        terms = required;
        header = msg;
    } else {
        terms = "Accept";
    }
    
    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
        html = html + "<tr><td>Country:</td><td>" + country + "</td></tr>";
        html = html + "<tr><td>Contact:</td><td>" + contact + "</td></tr>";
        html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
        html = html + "<tr><td>Entry length:</td><td>" + commentLength + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
        $("registration_form").submit();
    }
};

var resetForm = function() {
    $("registration_form").reset();
    $("registration_header").firstChild.nodeValue = "";
    $("registration_info").innerHTML = "";
    $("email_address").focus();
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};