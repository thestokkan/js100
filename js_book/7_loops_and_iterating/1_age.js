let read = require('readline-sync');

let future = [10, 20, 30, 40];
let age = read.question("What is your age?\n");

console.log(`You are ${age} years old now.`);

for (let decade = 0; decade < future.length; decade += 1) {
  console.log(`In ${future[decade]} years, you will be ${Number(age) + future[decade]} years old.`);
}


console.log("\nWith forEach:");
future.forEach(decade => {
  console.log(`In ${decade} years, you will be ${Number(age) + decade} years old.`);
})
