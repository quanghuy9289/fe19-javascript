var $ = function(id) {
    return document.getElementById(id);
};

var isCheck = function(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400) {
        return true;
    } else {
        return false;
    }
}

var numberDays = function(month) {
    var year = new Date().getFullYear();
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if (isCheck(year)) {
                return 29;
            } else {
                return 28;
            }
        default:
            alert("Số tháng bạn nhập không hợp lệ!");
    }
};

var printScreen = function() {
    var month = parseFloat($("month").value);

    if (isNaN(month) || month < 1 || month > 12) {
        alert("Số tháng bạn nhập không hợp lệ!")
        $("days").value = "";
    } else {
        $("days").value = numberDays(month);
    }
};
window.onload = function() {
    $("submit").onclick = printScreen;
    $("month").focus();
}