//create an array called family which has your family members in order of their age

var family = ["Lor", "Skyler", "Landon", "Lacey", "Blaze"];


//Remove the oldest member of your family

family.shift();


//Add a new family member as the youngest member

family.push("Baby");

//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

for (var i = 0; i < family.length; i++) {
    if (family[i] === "Tyler") {
        alert("I have a Tyler");
    }
    else {
        alert("I have no Tyler's");
    }
}

// Remove the second oldest member of your family

family.shift();


//Write a function called 'reverse' that takes in a string and returns that string in reverse order

var rev = function() {
    family.reverse();
}

rev();