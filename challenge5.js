//Start with an array of travel destinations. 
//Print every travel destination in alphabetical order 
//embedded in a sentence using string interpolation. 
//For example, if the destination is "New York City", \
//print something like "The next place I want to visit is New York City!" 

//PE: I know I will need a return value if I am using
// interloption. I'll start with declaring an array with some places.
// then I will sort them in alphabetical order with a method
// I know I will need a for loop again to cycle thru the array.
// the return value needs to have a secntence also, this is ez.

var myPlaces = [" Zimbabwe", " Universal Studios", " Disney World", " Las Vegas"];

function inOrder(place) {
    for (var i = 0; i < myPlaces.length; i++) {
        myPlaces.sort();
        return `I want to go to ${place} someday!`
        
    }
}

console.log(inOrder(myPlaces));

// All done!!!