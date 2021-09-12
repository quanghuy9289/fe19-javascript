"use strict";

// 1.
// let a = 1;
// let b = 2;
// let c;
// console.log(a, b);
// c = a;
// a = b;
// b = c;
// console.log(a, b);

// 2.
// const calcAverage = (math, physics, chemistry) => {
//   const averageGrade = (math + physics + chemistry) / 3;

//   if (averageGrade < 5) console.log(`Rank D`);
//   if (5 <= averageGrade && averageGrade < 6.5)
//     console.log(`Rank C, (${averageGrade})`);
//   if (6.5 <= averageGrade && averageGrade < 8)
//     console.log(`Rank B, (${averageGrade})`);
//   if (8 <= averageGrade && averageGrade <= 10)
//     console.log(`Rank A, (${averageGrade})`);
// };
// calcAverage(8.5, 9, 8.5);

// 3.
// const a = Number(prompt("Enter the value of a"));
// const b = Number(prompt("Enter the value of b"));
// let x;
// const calcX = function (a, b) {
//   if (a === 0) {
//     if (b === 0) console.log("Vo so nghiem");
//     else console.log("Vo nghiem");
//   } else {
//     x = -(b / a);
//     console.log(x);
//   }
// };
// calcX(a, b);

// 4.

// const a = Number(prompt("Enter the value of a"));
// const b = Number(prompt("Enter the value of b"));
// const c = Number(prompt("Enter the value of c"));
// let x;

// const calcX = function (a, b, c) {
//   console.log(a, b, c);
//   const delta = b * b - 4 * a * c;
//   if (a === 0) {
//     if (b === 0)
//       if (c === 0) console.log("PTSVN");
//       else console.log("PTVN");
//     else {
//       x = -(b / c);
//       console.log(x);
//     }
//   } else {
//     if (delta > 0) {
//       const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//       const x2 = (-b - Math.sqrt(delta)) / (2 * a);
//       console.log(`PT co 2 nghiem: ${x1.toFixed(2)}, ${x2.toFixed(2)}`);
//     } else if (delta === 0) {
//       console.log(`PT co nghiem kep: x1 = x2 = ${-b / (2 * a)}`);
//     } else console.log("PTVN");
//   }
// };
// calcX(a, b, c);

// 5.
// const calcSum = (n) => (n * (n + 1)) / 2;
// console.log(calcSum(50));

// 6.
// const numFibo = [];
// const fibonacci = function (num) {
//   let a = 1;
//   let b = 0;
//   let c;
//   while (num >= 0) {
//     c = a;
//     a = a + b;
//     b = c;
//     num--;
//     numFibo.push(b);
//   }
//   return b;
// };
// console.log(fibonacci(50));
// console.log(numFibo);

// 7.
// const students = [];
// const student = {};
// const valStudent = function (code, name, age, sex) {
//   student.code = code;
//   student.name = name;
//   student.age = age;
//   student.sex = sex;
//   return student;
// };
// const enterVal = function () {
//   const studentCode = prompt("Enter student code");
//   const studentName = prompt("Enter student name");
//   const studentAge = prompt("Enter student age");
//   const studentSex = prompt("Enter student sex");
//   students.push(valStudent(studentCode, studentName, studentAge, studentSex));
//   return students;
// };
// document.addEventListener("keydown", function (e) {
//   if (e.key !== "Escape") {
//     enterVal();
//   } else {
//     alert("This is group of students");
//     console.log(students);
//   }
// });

// 8
// const month = Number(prompt("Enter the month", 1));

// if (isNaN(month) || month < 1 || month > 13) alert("Enter the valid month!");
// else if (month === 2) alert("28 days");
// else if (month === 4 || month === 6 || month === 9 || month === 11)
//   alert("30 days");
// else alert("31 days");

// 9.
// const greatestCommonDivisor = function (a, b) {
//   if (b === 0) return a;
//   if (a === 0) return b;
//   return greatestCommonDivisor(b, a % b);
// };
// console.log(greatestCommonDivisor(6, 101));
// 10.
// const num = parseInt(prompt("Input the number", 5));
// const showAscending = function (line) {
//   for (let i = 1; i <= line; i++) {
//     const x = "*".repeat(i);
//     console.log(x);
//   }
// };
// isNaN(num) ? alert("Just number, please") : showAscending(num);

// // // 11.

// // const num = parseInt(prompt("Input the number", 5));
// const showDescending = function (line) {
//   for (let i = 1; i <= line; i++) {
//     const x = "*".repeat(i).padStart(line, " ");
//     console.log(x);
//   }
// };

// isNaN(num) ? alert("Just number, please") : showDescending(num);
