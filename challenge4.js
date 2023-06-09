//Start with an array of hobbies. 
//Print out only the words that end in "ing".

//PE: First I will declare a var stored to an array.
// This array will have several hobbies, some need to end with "ing".
// I want to only print the hobbies ending with "ing"

// I will need a function and for loop.
// The function will cycle throgh the array.
// We will use a for loop for this.
// The function will decipher which arrays have the string "ing".
// The function will contain an if statement to only print those hobbies.

var myHobbies = ["Coding", "Poker", "Typing", "Theme Parks"];

function ingOnly(array) {
   for (var i = 0; i < array.length; i++) {
    if (array[i].endsWith("ing")) {
        console.log(array[i]);
    }
   }
}

ingOnly(myHobbies);

// I certainly needed alot of help with structuring this.
// Originally I wanted to do a return value, but I went with
// console.log() in the end.
// Could we try to use a return value here instead?
// Does it matter what we call it?