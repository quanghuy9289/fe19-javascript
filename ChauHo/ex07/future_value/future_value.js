const query = function (id) {
  return document.getElementById(id);
};
const getRandomNumber = function (max) {
  const randomNumber = Math.trunc(Math.random() * max) + 1;
  return randomNumber;
};
const calculateFV = function (investment, rate, years) {
  let futureValue = investment;
  for (let i = 1; i <= years; i++) {
    futureValue += (futureValue * rate) / 100;
    if (futureValue === Infinity) {
      alert(`Future value = Infinity, i = ${i}`);
      return (query("future_value").value = "Try again!");
    }
  }
  futureValue = futureValue.toFixed(2);
  return futureValue;
};

const processEntries = function () {
  //   const investment = parseFloat(query("investment").value);
  //   const rate = parseFloat(query("annual_rate").value);
  //   const years = parseInt(query("years").value);
  const investment = getRandomNumber(50000);
  const rate = getRandomNumber(15);
  const years = getRandomNumber(50);
  query("investment").value = investment;
  query("annual_rate").value = rate;
  query("years").value = years;

  query("future_value").value = calculateFV(investment, rate, years);

  //   if (isNaN(investment) || investment <= 0) {
  //     alert("Investment must be > 0");
  //   } else if (isNaN(rate) || rate <= 0) {
  //     alert("Rate must be between 0 and 15");
  //   } else if (isNaN(years) || years <= 0) {
  //     alert("Years must be > 0");
  //     allValid = false;
  //   } else {
  //     query("future_value").value = calculateFV(investment, rate, years);
  //   }

  const getDate = function () {
    const today = new Date();
    query("date").innerHTML = `Today is ${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()} at ${today.getHours()}:${today.getMinutes()}`;
  };
  getDate();
};

window.onload = function () {
  query("calculate").onclick = processEntries;
  query("investment").focus();
};
console.log(getRandomNumber(20));
