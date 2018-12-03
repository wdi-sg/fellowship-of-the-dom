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
let documentBody = document.getElementById('body');

function makeMiddleEarth() {
  let middleEarthSection = document.createElement('section');
  for (land in lands) {
    let landArticle = document.createElement('article');
    landArticle.id = `${lands[land]}`;
    landArticle.innerHTML = `<h1>${lands[land]}</h1>`;
    middleEarthSection.appendChild(landArticle);
  };
  documentBody.appendChild(middleEarthSection);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  let landShire = document.getElementById('The Shire');
  for (hobbit in hobbits) {
    let listHobbit = document.createElement('li');
    listHobbit.innerHTML = `${hobbits[hobbit]}`;
    listHobbit.className = 'hobbit';
    landShire.appendChild(listHobbit);
  }
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  let frodo = document.querySelector('li');
  let ring = document.createElement('div');
  ring.id = 'the-ring';
  ring.className = 'magic-imbued-jewelry';
  frodo.appendChild(ring);
  ring.addEventListener('onclick', nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  let asideBuddies = document.createElement('aside');
  for (buddy in buddies){
    let listBuddy = document.createElement('li');
    listBuddy.innerHTML = `${buddies[buddy]}`;
    asideBuddies.appendChild(listBuddy);
    let rivendell = document.getElementById('Rivendell');
    rivendell.appendChild(asideBuddies);
  }
};
makeBuddies();

// Part 5


function beautifulStranger() {
  let rivendell = document.getElementById('Rivendell');
  rivendell.childNodes[1].childNodes[3].innerText='Aragon';  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


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

function itsDangerousToGoAlone() {
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