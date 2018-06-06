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

  var middleEarth = document.createElement("section");

  for (i = 0; i < lands.length; i++) {

  // add each land as an article tag

  var joinLand = document.createElement("article");

  // inside each article tag include an h1 with the name of the land

  joinLand.innerHTML = "<h1>" + lands[i] + "</h1>";
  middleEarth.appendChild(joinLand);

  // append middle-earth to your document body
  body.appendChild(middleEarth);

  }
}

makeMiddleEarth();


// Part 2

var shire = body.querySelector("article");

var hobbitFactory = document.createElement("ul");

function makeHobbits() {

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)

      for (j = 0; j < hobbits.length; j++) {

          var joinHobbit = document.createElement("li");
          joinHobbit.textContent = hobbits[j];
          joinHobbit.className = "hobbit";

        hobbitFactory.appendChild(joinHobbit);

        shire.appendChild(hobbitFactory);
      }
  }

makeHobbits();
  // give each hobbit a class of hobbit



// Part 3

var frodo = body.querySelector("li");

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'

  var theRing = document.createElement("div");

  theRing.setAttribute("id", "the-ring");

  // give the div a class of 'magic-imbued-jewelry'

  theRing.setAttribute("class", "magic-imbued-jewelry");

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  theRing.addEventListener("click", nazgulScreech);

  // add the ring as a child of Frodo

  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();


// Part 4

var rivendell = body.querySelectorAll("article")[1];

var buddy = document.createElement("ul");

function makeBuddies() {

  // create an aside tag

  var aside = document.createElement("aside");

  // attach an unordered list of the 'buddies' in the aside

  for (k = 0; k < buddies.length; k++) {

    var joinBuddy = document.createElement("li");
    joinBuddy.textContent = buddies[k];

    buddy.appendChild(joinBuddy);
    aside.appendChild(buddy);
  }

  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);

}

makeBuddies();

// Part 5

var strider = body.querySelectorAll("li")[7];

function beautifulStranger() {

  // change the 'Strider' textnode to 'Aragorn'

  strider.textContent = "Aragorn";

}

beautifulStranger();

// Part 6

// function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  rivendell.appendChild(hobbitFactory);

// }

// leaveTheShire();


// Part 7
var fellowShipMembers = rivendell.querySelectorAll("li");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell

  var theFellowShip = document.createElement("div");

  theFellowShip.className = "the-fellowship";

  rivendell.appendChild(theFellowShip);

  // add each hobbit and buddy one at a time to 'the-fellowship'

  for ( i = 0; i < fellowShipMembers.length; i++ ) {
    theFellowShip.appendChild(fellowShipMembers[i]);
    // alert(fellowShipMembers[i] + " has joined the fellowship!");
  }

  // after each character is added make an alert that they have joined your party

}

forgeTheFellowShip();

// // Part 8

var gandalf = fellowShipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'

  gandalf.textContent = "Gandalf the White";

  // apply style to the element
  // make the background 'white', add a grey border

  gandalf.style.background = "white";
  gandalf.style.border = "3px grey";
}

theBalrog();

// // Part 9

// function hornOfGondor() {
//   // pop up an alert that the horn of gondor has been blown
//   // Boromir's been killed by the Uruk-hai!
//   // put a linethrough on boromir's name
//   // Remove Boromir from the Fellowship
// }


// // Part 10

// function itsDangerousToGoAlone(){
//   // take Frodo and Sam out of the fellowship and move them to Mordor
//   // add a div with an id of 'mount-doom' to Mordor
// }


// // Part 11

// function weWantsIt() {
//   // Create a div with an id of 'gollum' and add it to Mordor
//   // Remove the ring from Frodo and give it to Gollum
//   // Move Gollum into Mount Doom
// }


// // Part 12

// function thereAndBackAgain() {
//   // remove Gollum and the Ring from the document
//   // remove all the baddies from the document
//   // Move all the hobbits back to the shire
// }
