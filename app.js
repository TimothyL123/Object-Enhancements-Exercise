// Same keys and values ES2015:

  function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
  }


  // Computed Property Names ES2015:

var favoriteNumber = 42;

function favoriteNumber() {
    var instructor = {
        firstName: "Colt"
}
return {
    favoriteNumber : "That is my favorite!"
};
}


// Object Methods ES2015:

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "HI!";
    },
    sayBye(){
        return this.firstName + "says 'BYE!'";
    }
}


  // ## **createAnimal function**

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}