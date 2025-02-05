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
noises.unshift('chirp');
//use bracket notation for fourth element
noises[noises.length] = 'growl';
//console log length of array
console.log(noises.length);
//console log last element of array without hard coding
console.log(noises[noises.length-1]);
// console log entire array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


// use bracket notation to assign noises array to the noises property of animal object
animal['noises'] = noises;
// use  push to  add another noise to the `noises` property on `animal`.
animal['noises'].push('yowl');
//console.log animal
console.log(animal);
 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different  ways you can access properties on objects?
 * // You can  access the properties of objects by using bracket notation or dot notation.
 * // If you have the property name then do notation would be best.In the object.propertyName syntax, 
 * the propertyName must be a valid JavaScript identifier which can also be a reserved word
 * //If you do not have the property name bracket notation would be best.
 * In the object[expression] syntax, the expression should evaluate to a string or Symbol
 *  that represents the property's name. So, it can be any string literal, for example, 
 * including '1foo', '!bar!', or even ' ' (a space).
 *
 * 2. What are the different ways of accessing elements on arrays?
 * //
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
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
 //push animal object to the  `animals` array.
 animals.push(animal); 
 //console.log` `animals`.
 console.log(animals);
 //create a variable called `duck` and assign it to the data:
//{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack' , 'honk' , 'sneeze' , 'woosh']
};
 //push var duck to animals object
 animals.push(duck);
 //console.log` `animals
 console.log(animals);
 //Create two more animal objects each with a species, a name, and at least two sounds sounds add each one of them to `animals.
 var dog ={
species: 'dog',
name: 'Bambi',
noises: ['bark', 'howl', 'snuffle']
 };

 var bird = {
 species: 'budgy',
  name: 'Charlotte',
 noises: ['chirp','human voice', 'song']
 };
 animals.push(dog);
 animals.push(bird);

 //console.log animals`, and
console.log(animals);
 //console.log the length of animals
 console.log(animals.length);
 



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