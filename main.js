import readlineSync from "readline-sync";

const name = readlineSync.question("What is your name? ");
const age = parseInt(readlineSync.question("In which year were you born? "));
const birthPlace = readlineSync.question("In which city were you born? ");
const actualCity = readlineSync.question("Were do you live now? ");
const currentYear= parseInt(readlineSync.question("What is the current year? "));
const currentAge = currentYear - age;

console.log('Hello! My name is ' + name + '. I was born ' + currentAge + ' years ago in ' + birthPlace + '. Now I live in ' + actualCity + '.');
