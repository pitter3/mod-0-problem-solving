// Write a method or function that removes all instances 
// of the letter s in a string. 
// The method or function should accept a string as an argument 
// and return the same string 
// with every instance of the letter s removed.

//PE: I will need to use a function here, the function will accept
// a string as an argument, and remove all instances of "s"
// I need to log to the console the same string with the 
// letter "s" removed

// first I will create a variable and store a string with s to it
// then i will write my function


var sWord = "Casper is friendly!";

function removeS(string) {
     return string.replaceAll("s", "");
}
console.log(removeS(sWord));

// I tried to have this do upper and lowercase and did figure it out
// But I do not fully understand the code. 
// Here is a version that can do both.

var sWord = "Casper iS So Gosh Darn friendly!";

function removeS(string) {
     return string.replace(/s/gi, ""); //both replace&replaceAll work
}
console.log(removeS(sWord));