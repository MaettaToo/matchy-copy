/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 *

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*I: empty object 
//O: three object proprties added to empty object printed to the console
//C:
//E:
// initialize variable assigned to empty object
*/
var animal = {};

//use dot notation add property species and value 
animal.species = 'cat';
//use bracket notation to add property name and value
animal['name'] = 'Olivia';
//use bracket notation to add property noises as an empty array
animal['noises'] = [],
// print to console object
console.log(animal)






//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// goal is to create an array with for items, using bracket notation,push,shift and bracket notation to add to the array
// 2nd goal is to console log length of noises, console log last value, console log the entire array
// initialize var noises as an empty array
var noises = [];
// use bracket noatation to add the first element of array
noises[0] = 'purr';
//use push to add second element of array
noises.push('meow');
//use shift to add third element of array
noises.shift('chirp');
//use bracket notation for fourth element
noises[3] = 'growl';
//console log length of array
console.log(noises.length);
//console log last element of array without hard coding
console.log(noises.length-1);
// console log entire array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}