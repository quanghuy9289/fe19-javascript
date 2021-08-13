function $(id) {
    return document.getElementById(id);
}

function isValid() {
    var investment = $("investment").value;
    var rate = $("annual_rate").value;
    var years = $("years").value;

    if (investment == "" || investment != parseInt(investment) || rate == "" || rate != parseFloat(rate) || years == "" || years != parseInt(years)) {
        $("investment_error").firstChild.nodeValue = "Investment must be numeric";
        $("rate_error").firstChild.nodeValue = "Rate must be numeric";
        $("years_error").firstChild.nodeValue = "Years must be numeric";
    } else {
        $("investment_error").firstChild.nodeValue = "";
        $("rate_error").firstChild.nodeValue = "";
        $("years_error").firstChild.nodeValue = "";
        $("future_value").value = interest_rate(investment, rate, years);
    }
}

function interest_rate(investment, rate, years) {
    futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate) / 100;
    }
    futureValue = parseInt(futureValue);
    return futureValue;
}


window.onload = function() {
    $("calculate").onclick = isValid;
    $("investment").focus();
};