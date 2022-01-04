// Cloning a Person
//
// Write a function clone that takes an object as argument and returns a shallow
// copy of that argument. A shallow copy returns a new object that is a copy of
// the original object. However, only the object itself and any properties with
// primitive values are duplicated. Properties that are themselves objects are
// copied "by reference" -- that is, only a pointer to the object is copied.

// For instance, consider the following object:
//
// let obj = {
//   number: 1,
//   string: 'abc',
//   array: [1, 2, 3],
// };
// If we make a shallow copy of obj, we'll create a new object that has the same
// 3 properties as obj:
//
// let objCopy = clone(obj);
// console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }
// Note that all 3 properties have the same value. However, what happens if we
// modify these values in one of the two objects and then inspect both objects?
//
// objCopy.number = 2;
// objCopy.string = 'xyz';
// objCopy.array.push(4);
// console.log(obj);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
// console.log(objCopy); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }
// As you might expect, the values for the number and string keys changed in
// objCopy, but not in obj. However, when we mutated the value of objCopy.array,
// it also mutated that value of obj.array. That's because a shallow copy only
// copies pointers for nested objects; since arrays are objects, the shallow copy
// just copied the pointer to the original array to objCopy. If you're wondering
// why this happens, you might want to review Variables as Pointers section in the
// Introduction to JavaScript book.
//

function clone(obj) {
  let clonedObj = {};
  for (prop in obj) {
    clonedObj[prop] = obj[prop];
  }

  return clonedObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false
