var futureValue;
var again = "yes";

// get user entries
do {
    var investment = parseInt(prompt("Enter investment amount as xxxxx.xx", 10000));
    if (!isNaN(investment) && investment > 0) {
        do {
            var rate = parseInt(prompt("Enter interest rate as xx.x", 15));
        } while (rate > 0 && rate < 15);

        var years = parseInt(prompt("Enter number of years", 10));
        if (!isNaN(years) && years > 0) {
            document.write("Investment amount là: " + investment + ";" + "\nInterest Rate = " + rate + ";" + "\nYears = " + years + ";" + "<br>");
            futureValue = investment;
            for (i = 1; i <= years; i++) {
                var interest = futureValue * (rate / 100);
                investment += interest;
                futureValue = investment;
                document.write("Year = " + i + ";" + "\nInterest=" + interest + ";" + "\nValue=" + parseInt(futureValue) + ";" + "<br>");
            }
            document.write("<br>");
        } else {
            alert("Enter a value greater than 0 and cannot be left blank");
            years = parseInt(prompt("Enter number of years", 10));
        };

    } else {
        alert("Enter a value greater than 0 and cannot be left blank");
        investment = parseInt(prompt("Enter investment amount as xxxxx.xx", 10000));
    };
    again = prompt("Repeat entries?", "yes");
} while (again == "yes");