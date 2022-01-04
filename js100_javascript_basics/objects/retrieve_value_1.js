// Retrieve a Value (Part 1)
//
// Write the code necessary to retrieve the value of the courses property of our
// student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// Dot notation:
console.log(student.courses);

// Bracket notation
console.log(student['courses']);


// Further Exploration
//
// What is returned if you attempt to access an object property that does not
// exist? Try it out for yourself, for example calling student.locker with the
// above example object. Especially notice that no exception is raised.

console.log(student.locker); // undefined