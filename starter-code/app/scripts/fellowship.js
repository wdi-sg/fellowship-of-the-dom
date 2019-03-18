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
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  var shireArticle = document.createElement("article");
  var rivendellArticle = document.createElement("article");
  var mordorArticle = document.createElement("article");
  middleEarth.appendChild(mordorArticle);
  middleEarth.appendChild(rivendellArticle);
  middleEarth.appendChild(shireArticle);
  shireArticle.innerHTML = '<h1>' + lands[0] + '</h1>';
  shireArticle.setAttribute('id', 'land-shire');
  rivendellArticle.innerHTML = '<h1>' + lands[1] + '</h1>';
  rivendellArticle.setAttribute('id', 'land-rivendell');
  mordorArticle.innerHTML = '<h1>' + lands[2] + '</h1>';
  mordorArticle.setAttribute('id', 'land-mordor');
  document.body.appendChild(middleEarth);
}

makeMiddleEarth();

var mordor = document.querySelectorAll('article')[0];
var rivendell = document.querySelectorAll('article')[1];
var theShire = document.querySelectorAll('article')[2];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var uList = document.createElement("ul");
  theShire.appendChild(uList);
  var hobbit1 = document.createElement("li");
  uList.appendChild(hobbit1);
  hobbit1.innerHTML = hobbits[0];
  hobbit1.classList.add("hobbit");
  hobbit1.setAttribute("id", "frodo");

  var hobbit2 = document.createElement("li");
  uList.appendChild(hobbit2);
  hobbit2.innerHTML = hobbits[1];
  hobbit2.classList.add("hobbit");
  hobbit2.setAttribute("id", "sam");

  var hobbit3 = document.createElement("li");
  uList.appendChild(hobbit3);
  hobbit3.innerHTML = hobbits[2];
  hobbit3.classList.add("hobbit");

  var hobbit4 = document.createElement("li");
  uList.appendChild(hobbit4);
  hobbit4.innerHTML = hobbits[3];
  hobbit4.classList.add("hobbit");

}

makeHobbits();

// Part 3

  var theRing = document.createElement("div");

  var frodo = document.getElementById("frodo");
  var sam = document.getElementById("sam")
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.setAttribute("id", "the-ring");
  theRing.classList.add("magic-imbued-jewelry");
  frodo.appendChild(theRing);
  document.getElementById("the-ring").addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var asideElement = document.createElement("aside");
  var uList = document.createElement("ul");
  asideElement.appendChild(uList);
  asideElement.setAttribute("id", "hobbits-list");
  rivendell.appendChild(asideElement);

  var buddies1 = document.createElement("li");
  uList.appendChild(buddies1);
  buddies1.innerHTML = buddies[0];

  var buddies2 = document.createElement("li");
  uList.appendChild(buddies2);
  buddies2.innerHTML = buddies[1];

  var buddies3 = document.createElement("li");
  uList.appendChild(buddies3);
  buddies3.innerHTML = buddies[2];

  var buddies4 = document.createElement("li");
  uList.appendChild(buddies4);
  buddies4.innerHTML = buddies[3];
  buddies4.setAttribute("id", "strider");

  var buddies5 = document.createElement("li");
  uList.appendChild(buddies5);
  buddies5.innerHTML = buddies[4];
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
document.getElementById("strider").innerHTML = "Aragorn";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsList = theShire.querySelector('ul');
  rivendell.appendChild(hobbitsList)
}

leaveTheShire();

// Part 7


  var everybody = rivendell.querySelectorAll('li');
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  rivendell.appendChild(theFellowship);
  for (i=0; i<everybody.length; i++) {
    theFellowship.appendChild(everybody[i]);
    alert(everybody[i].innerHTML + ' has joined your party!');
  }
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  everybody[0].innerHTML = 'Gandalf the White';
  everybody[0].style.border = 'grey 1px solid';
  everybody[0].style.backgroundColor = 'white';
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('The horn of Gondor has been blown!');
  alert('Boromir has fallen by the hands of Uruk-hai!');
  everybody[4].style.textDecoration = 'line-through';
}

hornOfGondor();


// Part 10

  var mountDoom = document.createElement('div');
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(sam);
  mordor.appendChild(frodo);
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();



// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  gollum.appendChild(theRing);
  mountDoom.appendChild(gollum);

}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var gollum2 = mordor.querySelectorAll('div')[1];
  mountDoom.removeChild(gollum2);

  var hobbitsListItems = body.querySelectorAll('.hobbit');
  var hobbitsList = document.createElement('ul');
  for (i=0; i<hobbitsListItems.length; i++) {
    hobbitsList.appendChild(hobbitsListItems[i]);
    }
  theShire.appendChild(hobbitsList);
}

thereAndBackAgain();