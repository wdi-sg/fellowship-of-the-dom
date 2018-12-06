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
  var middleEarth = document.createElement('section');
  middleEarth.id = "middle-Earth";
  // add each land as an article tag
  for (i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
  // inside each article tag include an h1 with the name of the land
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
    middleEarth.appendChild(land);
      }
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();

var shire = document.getElementsByTagName("article")[0];
var rivendell = document.getElementsByTagName("article")[1];
var mordor = document.getElementsByTagName("article")[2];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList = document.createElement("ul");
  // give each hobbit a class of hobbit
    for (i = 0; i < hobbits.length; i++) {
        var hobbit = document.createElement("li");
        hobbit.innerHTML = hobbits[i];
        hobbit.className = hobbit;
        hobbitList.appendChild(hobbit);
    }
    shire.appendChild(hobbitList);
}

makeHobbits();
// Part 3
var frodo = document.getElementsByTagName("li")[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = "magic-imbued-jewelry";
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = document.createElement("ul");

  for (i = 0; i < buddies.length; i++) {
    var buddy = document.createElement("li");
    buddy.innerHTML = buddies[i];
    buddiesList.appendChild(buddy);
  }
  aside.appendChild(buddiesList);
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll("li")[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}

beautifulStranger();

// Part 6

var hobbits = shire.querySelector("ul");

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}

leaveTheShire();

// Part 7
var fellowShipMember = rivendell.querySelectorAll("li");
var theFellowship = document.createElement("div");
var length = fellowShipMember.length;

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  theFellowship.id = "the-fellowship";
  // add each hobbit and buddy one at a time to 'the-fellowship'
   for (i = 0; i < fellowShipMember.length; i++) {
    theFellowship.appendChild(fellowShipMember[0]);
   }
   rivendell.appendChild(theFellowship);
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8cs


var gandalf = fellowShipMember[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = '3px solid gray';
}

theBalrog();


// Part 9
/*
var boromir = fellowShipMember[3];
console.log("The name of boromir is: " + boromir.innerHTML);

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("the horn of gondor has been blown.");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  theFellowship.removeChild(boromir);

}

hornOfGondor();

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

*/