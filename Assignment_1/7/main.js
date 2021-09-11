var $ = function(id) {
    return document.getElementById(id);
};

var enterInform = function() {
    var code = $("code").value;
    var name = $("name").value;
    var age = parseInt($("age").value);
    var gender;
    var isValid = true;

    if (code == "") {
        $("code_error").firstChild.nodeValue = "Please enter code.";
        isValid = false;
    } else {
        $("code_error").firstChild.nodeValue = "";
    }
    if (name == "") {
        $("name_error").firstChild.nodeValue = "Please enter name.";
        isValid = false;
    } else {
        $("name_error").firstChild.nodeValue = "";
    }
    if (age == "") {
        $("age_error").firstChild.nodeValue = "Please enter age.";
        isValid = false;
    } else if (isNaN(age) || age <= 0) {
        $("age_error").firstChild.nodeValue = "Please enter age greater than 0.";
        isValid = false;
    } else {
        $("age_error").firstChild.nodeValue = "";
    }
    if ($("male").checked) {
        gender = "Male";
    } else {
        gender = "Female";
    }

    if (isValid) {
        var showInfor = "";
        showInfor += "Code: " + code + "<br />";
        showInfor += "Name: " + name + "<br />";
        showInfor += "Age: " + age + "<br />";
        showInfor += "Gender: " + gender + "<br /><br />";
        $("list").innerHTML += showInfor;
    }
};

var toggle = function() {
    var h4 = this;
    var div = h4.nextElementSibling;

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};

window.onload = function() {
    $("submit").onclick = enterInform;
    var infor = $("infor");
    var h4Element = infor.getElementsByTagName("h4");

    for (var i=0; i<h4Element.length; i++) {
        h4Element[i].onclick = toggle;
    }
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            var form = $("form")
            form.style.display = "none";
        }
    });
};