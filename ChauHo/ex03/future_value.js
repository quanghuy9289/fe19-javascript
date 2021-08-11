let futureValue;

// get user entries

let investment = parseFloat(
  prompt("Enter investment amount as xxxxx.xx", 10000)
);
let rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));

let years = parseInt(prompt("Enter number of years", 5));

// calulate future value

futureValue = investment;
for (let year = 1; year <= years; year++) {
  futureValue = futureValue + (futureValue * rate) / 100;
}
futureValue = parseInt(futureValue);

document.write(`Investment amount = ${investment}, `);
document.write(` Interest rate = ${rate}%, `);
document.write(` Years = ${years} <br>`);

// document.write(`Future Value is ${futureValue} <br><br>`);

let i = 0,
  i2 = 0,
  interest = 0;

do {
  i++;

  interest = (investment * rate) / 100;

  investment = investment + interest;

  document.write(
    `Year = ${i}, Interest = ${interest}, Value = ${parseInt(
      investment
    )} <br><br> `
  );
} while (i < years);

investment = parseFloat(prompt("Enter investment 2 amount as xxxxx.xx", 20000));

rate = parseFloat(prompt("Enter interest rate 2 as xx.x", 8.5));

if (0 < rate && rate < 15) {
  years = parseInt(prompt("Enter number of years", 10));

  futureValue = investment;
  for (let year = 1; year <= years; year++) {
    futureValue = futureValue + (futureValue * rate) / 100;
  }
  futureValue = parseInt(futureValue);

  document.write(`Investment amount 2 = ${investment}, `);
  document.write(` Interest rate 2 = ${rate}%, `);
  document.write(` Years = ${years} <br>`);

  do {
    i2++;

    interest = (investment * rate) / 100;

    investment = investment + interest;

    document.write(
      `Year = ${i2}, Interest = ${interest}, Value = ${parseInt(
        investment
      )} <br><br> `
    );
  } while (i2 < years);
} else
  alert(
    "You must enter the valid rate between 0 and 15! And reload the page for the second entrie!"
  );
