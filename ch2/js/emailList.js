var $ = function (id) {
  return document.getElementById(id);
};

var handleJoinList = function () {
  // get value
  var email = $("email").value;
  var email2 = $("email2").value;
  var firstName = $("firstName").value;
  var isValid = true;

  // data validation
  if (email == "") {
    $("emailError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    $("emailError").firstChild.nodeValue = "";
  }

  if (email2 == "") {
    $("email2Error").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    if (email2 != email) {
      $("email2Error").firstChild.nodeValue = "Re-enter email must to match with email";
      isValid = false;
    } else {
      $("email2Error").firstChild.nodeValue = "";
    }
  }

  if (firstName == "") {
    $("firstNameError").firstChild.nodeValue = "This field is required";
    isValid = false;
  } else {
    $("firstNameError").firstChild.nodeValue = "";
  }

  if (isValid == true) {
    $("emailList").submit();
  }
};

window.onload = function () {
  $("joinList").onclick = handleJoinList;
};


var toan = parseInt(prompt("Nhập số điểm toán", ""));
var ly = parseInt(prompt("Nhập số điểm lý", ""));
var hoa = parseInt(prompt("Nhập số điểm hóa", ""));

var diemtb = parseInt((toan+ly+hoa)/3);
 
document.write("<h1>Điểm trung bình là</h1>");
document.write(diemtb);