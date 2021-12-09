// Continue
//
// Take a moment to read the MDN documentation on the continue statement.
//
// Then write a for loop that loops over the elements of the array cities and logs
// the length of each string to the console. If the element is null, skip forward
// to the next iteration without logging anything to the console.


let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i]) console.log(cities[i]);
  continue;
}
