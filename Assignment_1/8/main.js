var $ = function(id) {
    return document.getElementById(id);
};

var checkDays = function(month) {
    var thisYear = new Date().getFullYear;

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
            if (thisYear % 400 == 0 || (thisYear % 4 == 0 && thisYear % 100 != 0)) {
                return 29;
            } else {
                return 28;
            }

    }
};

var processEntry = function() {
    var month = parseInt($("month").value);

    if (isNaN(month) || month < 1 || month > 12 || !Number.isInteger(month)) {
        $("error").firstChild.nodeValue = "Enter a valid month";
        $("days").value = "";
    } else {
        $("error").firstChild.nodeValue = "";
        $("days").value = checkDays(month);
    }
};

window.onload = function() {
    $("check").onclick = processEntry;
    $("month").focus();
}