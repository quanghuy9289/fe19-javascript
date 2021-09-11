var $ = document.getElementById.bind(document);
var processEntries = function () {
  var futureValue;
  var investAmount = parseFloat($("investment").value);
  var rates = parseFloat($("rate").value);
  var years = parseFloat($("years").value);
  if (
    isNaN(investAmount) ||
    investAmount < 0 ||
    isNaN(rates) ||
    rates < 0 ||
    isNaN(years) ||
    years < 0
  ) {
    alert("Please enter valid entries");
    $("result").value = "";
  } else {
    futureValue = calculate(investAmount, years, rates).toFixed(1);
    $("result").value = futureValue;
  }
};
function calculate(investAmount, years, rate) {
  for (var i = 0; i < years; i++) {
    investAmount = investAmount + investAmount * rate;
  }
  return parseFloat(investAmount);
}
window.onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
