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
    middleEarth.setAttribute("id", "middle-earth");
  // add each land as an article tag
  var land = [];
  for (i=0; i<lands.length; i++) {
    land[i] = document.createElement("article");
  }
  // inside each article tag include an h1 with the name of the land
  var landName = [];
  for (i=0; i<lands.length; i++) {
    landName[i] = document.createElement("h1");
    landName[i].textContent = lands[i];
  }
  for (i=0; i<land.length; i++) {
    land[i].appendChild(landName[i]);
    middleEarth.appendChild(land[i]);
  }

  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  unorderedListHobbit = document.createElement("ul");
  var listHobbit = [];
  for (i=0; i<hobbits.length; i++) {
    listHobbit[i] = document.createElement("li")
    listHobbit[i].textContent = hobbits[i];
    unorderedListHobbit.appendChild(listHobbit[i]);
  }
  var landArray = document.getElementsByTagName("article");
  landArray[0].appendChild(unorderedListHobbit);
  // give each hobbit a class of hobbit
  for (i=0; i<hobbits.length; i++) {
    listHobbit[i].classList.add("hobbit");
}
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  ringDiv = document.createElement("div");
  ringDiv.setAttribute("id", "the-ring");

  // give the div a class of 'magic-imbued-jewelry'
  ringDiv.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of Frodo
  var hobbitsArray = document.getElementsByTagName("li");
  hobbitsArray[0].appendChild(ringDiv);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var ring = document.querySelector(".magic-imbued-jewelry");
  ring.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();


// Part 4

function makeBuddies() {
  // create an aside tag
  var asideTag = document.createElement("aside");

  // attach an unordered list of the 'buddies' in the aside
  var unorderedListBuddies = document.createElement("ul");
  var listBuddies = [];
  for (i=0; i<buddies.length; i++) {
    listBuddies[i] = document.createElement("li");
    listBuddies[i].textContent = buddies[i];
    unorderedListBuddies.appendChild(listBuddies[i]);
  }
  asideTag.appendChild(unorderedListBuddies);

  // insert your aside as a child element of rivendell
  var landArray = document.getElementsByTagName("article");
  landArray[1].appendChild(asideTag);
}

makeBuddies();


// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var buddiesArray = document.querySelector("aside ul").childNodes;
  buddiesArray[3].textContent = "Aragorn";
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var landArray = document.querySelectorAll("section article");
  var hobbitsArray = document.querySelectorAll(" article ul");
  hobbitsArray = landArray[0].removeChild(hobbitsArray[0]);
  landArray = landArray[1].appendChild(hobbitsArray);
}

leaveTheShire();

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