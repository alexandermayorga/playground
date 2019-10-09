/*
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
*/

const jsonString = `{
    "status":"old", 
    "brand":"Chevy",
    "model":"El Camino", 
    "result":true, 
    "count":42
    }`;
    
const obj = JSON.parse(jsonString);

JSON.stringify(obj); //Returns a String



// Using the replacer argument - Function
// You can pass a function to perform an operation to each key/value 
function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'number') {
        return undefined;
    }
    return value;
}

JSON.stringify(obj, replacer); //Does not return "count" in the string


// Using the replacer argument - Array
//You can also pass an array with the keys you want returned
JSON.stringify(obj, ["status","brand"]);


// Using the Space argument
//The space argument may be used to control spacing in the final string. Makes it more readable
JSON.stringify(obj, ["status", "brand"], "    ");

//Will Return
// {
//     "status": "old",
//     "brand": "Chevy"
// }

//VS
// {"status": "old","brand": "Chevy"}
