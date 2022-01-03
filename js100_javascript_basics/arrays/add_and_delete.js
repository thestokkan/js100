// Add + Delete
//
// We are given the following array of energy sources.
//
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy = energy.filter(el =>  el !== 'fossil');
energy.push('geothermal')
console.log(energy);