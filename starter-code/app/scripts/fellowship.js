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
  var middleEarth = document.createElement("section")
  middleEarth.setAttribute("id", "middle-earth");
  // add each land as an article tag
  for (i = 0; i < lands.length; ++i) {
    var articleLand = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
    var landName = document.createElement("h1");
    landName.innerHTML = lands[i];
    articleLand.appendChild(landName);
    middleEarth.appendChild(articleLand);
  // append middle-earth to your document body
    }
  body.appendChild(middleEarth);
}

makeMiddleEarth();

// Part 2

var shire = document.getElementsByTagName("article")[0];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  for (i = 0; i < hobbits.length; ++i) {
    var hobbitList = document.createElement("ul");
    hobbitList.innerHTML = hobbits[i];
    hobbitList.setAttribute("class", "hobbit");
    shire.appendChild(hobbitList);
  }
}

makeHobbits();

// Part 3

var frodo = hobbits[0];
var frodoRing = document.querySelector("ul");

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of Frodo
  frodoRing.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4

//var rivendell = lands[1];
var rivendell = document.getElementsByTagName("article")[1];

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  for (i=0; i < buddies.length; ++i) {

    var buddiesList = document.createElement("ul");
    buddiesList.innerHTML = buddies[i];
    aside.appendChild(buddiesList);
    }
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

var aragorn = document.querySelectorAll("ul")[7];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  aragorn.innerHTML = "Aragorn";
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  for (i = 0; i < 4; ++ i) {
    rivendell.appendChild(shire.querySelectorAll(".hobbit")[0]);
  }
}

leaveTheShire();

// Part 7

var fellowship = document.createElement("div");
fellowship.setAttribute("id", "the-fellowship");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (i = 0; i < 9; ++i) {
    fellowship.appendChild(rivendell.querySelectorAll("ul")[0]);
    console.log(rivendell.querySelectorAll("ul")[0].textContent + " has joined the party");
  }
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8

var gandalfWhite = rivendell.querySelectorAll("ul")[0].innerHTML;
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  rivendell.querySelectorAll("ul")[0].innerHTML = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  rivendell.querySelectorAll("ul")[0].setAttribute('style', 'background-color: white; border: 3px solid grey;');
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!!");
  // Boromir's been killed by the Uruk-hai!
  alert("Boromir has been killed by the Uruk-hai!!");
  // put a linethrough on boromir's name
  var boromir = rivendell.querySelectorAll("ul")[4]
  boromir.setAttribute('style', 'text-decoration: line-through;')
  // Remove Boromir from the Fellowship
  fellowship.removeChild(boromir);

}

hornOfGondor();

// Part 10
var mordor = document.getElementsByTagName("article")[2];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.appendChild(rivendell.querySelectorAll("ul")[4]);
  mordor.appendChild(rivendell.querySelectorAll("ul")[4]);
  // add a div with an id of 'mount-doom' to Mordor
}

var mountDoom = document.createElement("div");
mountDoom.setAttribute("id", "mount-doom");
mordor.appendChild(mountDoom);

itsDangerousToGoAlone();
// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(document.querySelectorAll("#the-ring")[0]);
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mountDoom.removeChild(gollum)
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  for (i = 0; i < document.querySelectorAll(".hobbit").length; ++i) {
    shire.appendChild(document.querySelectorAll(".hobbit")[i]);
  }
}

thereAndBackAgain();