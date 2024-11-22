const prompt = require("prompt-sync")();

let employee = {};
let firstName = prompt("enter your First name >> ");

if (!firstName) {
  console.error(`Invalid first name `);
  process.exit(1);
}
employee.firstName = firstName;

let lastName = prompt("enter your last name >> ");
if (!lastName) {
  console.error(`Invalid Last name `);
  process.exit(1);
}
employee.lastName = lastName;

let startDateYear = prompt(`Employee start year (1990-2023)`);
startDateYear = Number(startDateYear);
if (!Number.isInteger(startDateYear)) {
  console.error(`enter valid date `);
  process.exit(1);
}

if (startDateYear < 1990 || startDateYear > 2023) {
  console.error(`enter valid year with in the range `);
  process.exit(1);
}

let startDateMonth = prompt("enter the start month (1_12)");
startDateMonth = Number(startDateMonth);
if (!Number.isInteger(startDateMonth)) {
  console.error(`enter valid month `);
  process.exit(1);
}
if (startDateMonth < 1 || startDateMonth > 12) {
  console.error(`enter valid month with in the range `);
  process.exit(1);
}

let startDateDay = prompt("enter the start month (1_31)");
startDateDay = Number(startDateDay);
if (!Number.isInteger(startDateDay)) {
  console.error(`enter valid day `);
  process.exit(1);
}
if (startDateDay < 1 || startDateDay > 31) {
  console.error(`enter valid day with in the range `);
  process.exit(1);
}

employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt("Is employee active(yes or no)");

if (!isActive == "yes" || !isActive == "no") {
  console.error(`enter valid active status `);
  process.exit(1);
}

employee.isActive = isActive === "yes";

const json = JSON.stringify(employee, null, 2);
console.log(json);
