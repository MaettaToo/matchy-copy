/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with two param represented as array and string
//O:  object or null dependent on which case is true
//C: needs to be case insensitve 
//E: 
// init function search with two param
function search (array, string){
    returnObj = [];
    //init var to change string to have first letter capitalized 
    var  upperCaseString =  string.charAt(0).toUpperCase()
    + string.slice(1);
    //init var to change string to have first letter capitalized 
    var lowerCaseString = string.charAt(0).toLowerCase()
    + string.slice(1);
    // init for loop to iterate over array , conditions zero index, arrray length, increment by 1
    for(var i = 0; i < array.length; i++){
    // init conditional statements  if the name property at array[i] strictly equals upperCaseString or 
    //strictly lowerCaseString  return array[i] 
        if (array[i]['name'] === upperCaseString || array[i]['name'] === lowerCaseString){
        //return object at array[i]
            return array[i];
        }
        
        //return null when conditions inside the loop cannot be met 
    } return null;  
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*I: function with three parameters an Array of animals, a String 
     representing  the name of an animal on which to perform a search, 
     and an Object that represents the replacement animal
*/
//O: object that replaces the original object under the animals name 
//C:
//E:
// init function replace 
function replace (animals, name, replacement){
    //init var to change name to have first letter capitalized 
    var  upperCaseName =  name.charAt(0).toUpperCase() + name.slice(1);
    //init var to change name to have first letter capitalized 
    var lowerCaseName = name.charAt(0).toLowerCase() + name.slice(1);

    for(var i = 0; i < animals.length; i++){
        // create conditional stmt if name strictly equals the name value at animals.length 
        if(animals[i]['name'] === upperCaseName || animals[i]['name'] === lowerCaseName){
           
            animals.splice(i, 1, replacement);
            

            }
        }
        return animals;
        
       
         
        

    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function with two params represented as an array(objects) and a string(name)
//O:an array with an animals name removed 
//c:
//E:
// init function with two params
function remove(array, name){
    //init var to change name to have first letter capitalized 
    var  upperCaseName =  name.charAt(0).toUpperCase() + name.slice(1);
    //init var to change name to have first letter capitalized 
    var lowerCaseName = name.charAt(0).toLowerCase() + name.slice(1);
    // init for loop to access array
    for(var i = 0; i < array.length; i++ ){
        // set condition to see if a name exist in the array 
        if(array[i]['name'] === upperCaseName || array[i]['name'] === lowerCaseName){
           
        // remove the object
            array.splice(i, 1);
        }
    }
    
    // return the  modified array

    return array;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Function that takes 2 parameter, an Array of animals, and an Object representing a new animal to be added
//O: the animals object added to the animals array if conditions are met 
//C:
//E:
// init function  `add` with two parameters `add(animals, animal) { //... }
function add (animals, animal){
    //- Checks that the animal Object has a `name` property with a length > 0.
    //access the object to see if it has a name property use hasOwnProperty
   //init for in loop to iterate over animal object
   var lengthTest = function (){
       for(var key in animal){
       // create conditional stmt to check if there is name key with length > zero
            if(animal.name.length > 0 && animal.species.length > 0 ){
                return true;}
            }
           return false; 
        }
    var uniqueName = function(){
        // initiate for loop to iterate over  animals array
        for (var i = 0; i < animals.length; i++){
                // check name values in array against name in object
                if(animals[i]['name'] !== animal['name']){
                return true;
            }
            
            }
        return false
    } 
    if( lengthTest === true && uniqueName === true){
        animals.push(animal);
    }
    return animals;
} 
    /* if it has name property  what is the length 
    //console log the length 
   - //Checks that the animal Object has a `species` property with a length > 0.
   - //Has a **unique** name, meaning no other animals have that name.
   - //Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   */

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}