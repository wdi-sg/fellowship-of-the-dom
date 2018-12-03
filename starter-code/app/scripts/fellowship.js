console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var createMiddleEarth = document.createElement('section');
  createMiddleEarth.setAttribute('id', 'middle-earth');
  // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
  for (var i=0; i<lands.length; i++) {
     var addLand = document.createElement('article');
     var newh1Tag = document.createElement('h1');
     newh1Tag.innerHTML = lands[i];
     addLand.appendChild(newh1Tag);
     createMiddleEarth.appendChild(addLand);
    };
  // // append middle-earth to your document body
  var addToBody = document.getElementsByTagName('body')[0];
  addToBody.appendChild(createMiddleEarth);
};

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  for (var i=0; i<hobbits.length; i++) {
    var puttingHobbitsHere = document.getElementsByTagName('article')[0]
    var newHobbit = document.createElement('ul');
    newHobbit.innerHTML = hobbits[i];
    newHobbit.setAttribute('class', 'hobbit');
    puttingHobbitsHere.appendChild(newHobbit);
  }
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var newRing = document.createElement('div');
  newRing.setAttribute('id', 'the-ring');
  newRing.setAttribute('class', 'magic-imbued-jewelry');
  var getFrodo = document.getElementsByTagName('ul')[0];
  getFrodo.appendChild(newRing);
  newRing.addEventListener('click', nazgulScreech);
};

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var createAside = document.createElement('aside');
  for (var i=0; i<buddies.length; i++) {
    var newBuddies = document.createElement('ul');
    newBuddies.innerHTML = buddies[i];
    createAside.appendChild(newBuddies);
  };
  var getRivendell = document.getElementsByTagName('article')[1];
  getRivendell.appendChild(createAside);
};

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var changeStrider = document.querySelectorAll('aside > ul')[3];
  changeStrider.innerHTML = 'Aragorn';
};

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var initHobPlace = document.querySelectorAll('article')[0];
  var newHobPlace = document.querySelectorAll('article')[1];
  var assembleHobbits = document.querySelectorAll('article > ul');
  newHobPlace.appendChild(assembleHobbits);
  initHobPlace.removeChild(assembleHobbits);
};


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
