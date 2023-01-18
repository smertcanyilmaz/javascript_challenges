/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


const markMass= 78;
const markHeight= 169;
const markBmi = markMass/markHeight**2;
console.log(markBmi);

const johnMass= 95;
const johnHeight= 188;
const johnBmi = johnMass/johnHeight**2;
console.log(johnBmi);

const markHigherBMI = markBmi > johnBmi;
console.log( markHigherBMI);
