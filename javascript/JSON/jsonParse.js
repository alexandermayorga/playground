const jsonString = `{
    "status":"old", 
    "brand":"Chevy",
    "model":"El Camino", 
    "result":true, 
    "count":42
    }`;

const obj = JSON.parse(jsonString); //Returns an object

/*
    
The "JSON.parse(jsonString)" method turns a String into an object
The String "jsonString" needs to be in JSON format so you can get an "key => value" object

*/


// Using the retriever argument
// You can pass a function to perform an operation to each key/value 

const objRetriever = JSON.parse(jsonString, (key, value) =>
    typeof value === 'number'
        ? value * 2 // return value * 2 for numbers
        : value     // return everything else unchanged
);
