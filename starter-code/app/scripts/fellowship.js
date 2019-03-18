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
  middleEarth.id = "middle-earth";


  // add each land as an article tag
  var theShire = document.createElement("article");
  var rivendell = document.createElement("article");
  var mordor = document.createElement("article");


// inside each article tag include an h1 with the name of the land
  var theShireHeading = document.createElement("h1");
  theShireHeading.textContent = lands[0];
  var rivendellHeading = document.createElement("h1");
  rivendellHeading.textContent = lands[1];
  var mordorHeading = document.createElement("h1");
  mordorHeading.textContent = lands[2];

  theShire.appendChild(theShireHeading);
  rivendell.appendChild(rivendellHeading);
  mordor.appendChild(mordorHeading);


  // append middle-earth to your document body
    middleEarth.appendChild(theShire);
    middleEarth.appendChild(rivendell);
    middleEarth.appendChild(mordor);

    body.appendChild(middleEarth);

    return body;
}

// makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement("ul");
  var frodo = document.createElement("li");
  frodo.textContent = hobbits[0];
  frodo.classList.add("hobbits");
  var sam = document.createElement("li");
  sam.textContent = hobbits[1];
  sam.classList.add("hobbits");
  var merry = document.createElement("li");
  merry.textContent = hobbits[2];
  merry.classList.add("hobbits");
  var pippin = document.createElement("li");
  pippin.textContent = hobbits[3];
  pippin.classList.add("hobbits");

  unorderedList.appendChild(frodo);
  unorderedList.appendChild(sam);
  unorderedList.appendChild(merry);
  unorderedList.appendChild(pippin);


  var getMiddleEarth = makeMiddleEarth();
  var landsList = getMiddleEarth.querySelectorAll("h1");
  var theShire = landsList[0];
  var theShireAppendWithHobbits = theShire.appendChild(unorderedList);
  // console.log(theShireAppendWithHobbits);
  return theShireAppendWithHobbits;

}

// makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var ring = document.createElement("button");
  ring.setAttribute("id", "the-ring");
  ring.setAttribute("class", "magic-imbued-jewelry");

  var getHobbits = makeHobbits();
  var hobbitList = getHobbits.querySelectorAll("li");
  var frodo = hobbitList[0];
  frodo.appendChild(ring);

  // ring.on("click", nazgulScreech);

  return frodo;

}




// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  keepItSecretKeepItSafe();
  var aside = document.createElement("aside");

  var buddiesList = document.createElement("ul");

  var gandalf = document.createElement("li");
  gandalf.textContent = buddies[0];
  var legolas = document.createElement("li");
  legolas.textContent = buddies[1];
  var gimli = document.createElement("li");
  gimli.textContent = buddies[2];
  var strider = document.createElement("li");
  strider.textContent = buddies[3];
  var boromir = document.createElement("li");
  boromir.textContent = buddies[4];

  buddiesList.appendChild(gandalf);
  buddiesList.appendChild(legolas);
  buddiesList.appendChild(gimli);
  buddiesList.appendChild(strider);
  buddiesList.appendChild(boromir);

  aside.appendChild(buddiesList);

  var getMiddleEarth = makeMiddleEarth();
  var landsList = getMiddleEarth.querySelectorAll("h1");
  var rivendell = landsList[1];
  rivendell.appendChild(aside);

  return aside;


}

// makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aside = makeBuddies();
  var buddiesList = aside.querySelectorAll("li");
  buddiesList[3].textContent = "Aragorn";

  return aside;
}

// beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var theShireAppendWithHobbits = makeHobbits();
  console.log(theShireAppendWithHobbits);
  var childList = theShireAppendWithHobbits.querySelectorAll("li");
  console.log(childList);

  var firstChild = childList[0];
  var secondChild = childList[1];
  var thirdChild = childList[2];
  var fourthChild = childList[3];

  theShireAppendWithHobbits.removeChild(firstChild)
  theShireAppendWithHobbits.removeChild(secondChild)
  theShireAppendWithHobbits.removeChild(thirdChild)
  theShireAppendWithHobbits.removeChild(fourthChild)

  var aside = beautifulStranger();

  var asideChildList = aside.querySelector("ul");
  asideChildList.appendChild(theShireAppendWithHobbits.removeChild(firstChild));
  asideChildList.appendChild(theShireAppendWithHobbits.removeChild(secondChild));
  asideChildList.appendChild(theShireAppendWithHobbits.removeChild(thirdChild));
  asideChildList.appendChild(theShireAppendWithHobbits.removeChild(fourthChild));

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