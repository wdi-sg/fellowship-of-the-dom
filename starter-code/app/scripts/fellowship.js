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
var theShire;
var rivendell;
var mordor;
// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  // add each land as an article tag
  theShire = document.createElement("article");
  rivendell = document.createElement("article");
  mordor = document.createElement("article");
  middleEarth.appendChild(theShire);
  middleEarth.appendChild(rivendell);
  middleEarth.appendChild(mordor);
  // inside each article tag include an h1 with the name of the land
  var theShireH1 = document.createElement("h1");
  var rivendellH1 = document.createElement("h1");
  var mordorH1 = document.createElement("h1");
  theShireH1.innerHTML = lands[0];
  rivendellH1.innerText = lands[1];
  mordorH1.innerText = lands[2];
  theShire.appendChild(theShireH1);
  rivendell.appendChild(rivendellH1);
  mordor.appendChild(mordorH1);
  // append middle-earth to your document body
  document.body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
var frodoLi;
var unorderedListHobbits;
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  unorderedListHobbits = document.createElement("ul");
  frodoLi = document.createElement("li");
  frodoLi.innerHTML = "Frodo Baggins";
  var samwiseLi = document.createElement("li");
  samwiseLi.innerHTML = "Samwise Gangee";
  var merryLi = document.createElement("li");
  merryLi.innerHTML = "Merry";
  var pippinLi = document.createElement("li");
  pippinLi.innerHTML = "Pippin";
  // give each hobbit a class of hobbit
  frodoLi.setAttribute("class", "hobbit");
  samwiseLi.setAttribute("class", "hobbit");
  merryLi.setAttribute("class", "hobbit");
  pippinLi.setAttribute("class", "hobbit");
  //append everything
  theShire.appendChild(unorderedListHobbits);
  unorderedListHobbits.appendChild(frodoLi);
  unorderedListHobbits.appendChild(samwiseLi);
  unorderedListHobbits.appendChild(merryLi);
  unorderedListHobbits.appendChild(pippinLi);
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // give the div a class of 'magic-imbued-jewelry'
  frodoLi.appendChild(theRing);
  // add the ring as a child of Frodo
  theRing.addEventListener("click", nazgulScreech);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var asideBuddies = document.createElement("aside");
  var ulBuddies = document.createElement("ul");
  for (let i = 0; i < buddies.length; i++) {
    const buddy = buddies[i];
    var buddyElement = document.createElement("li");
    buddyElement.setAttribute("class", "buddy");
    buddyElement.innerHTML = buddy;
    ulBuddies.appendChild(buddyElement);
  }
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  asideBuddies.appendChild(ulBuddies);
  rivendell.appendChild(asideBuddies);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var listElements = document.getElementsByTagName("li")
  for (let i = 0; i < listElements.length; i++) {
    const element = listElements[i].innerHTML;
    if(element === "Strider") {
      listElements[i].innerHTML = "Aragorn";
    }
  }
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(unorderedListHobbits);
}
leaveTheShire();

// Part 7

var fellowshipDiv;
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  fellowshipDiv = document.createElement("div");
  fellowshipDiv.setAttribute("id", "the-fellowship");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var buddyElements = document.getElementsByClassName("buddy");
  var hobbitElements = document.getElementsByClassName("hobbit");
  var buddyElementsLength = buddyElements.length;
  var hobbitElementsLength = hobbitElements.length;
  for (let i = 0; i < buddyElementsLength; i++) {
    const buddy = buddyElements[0];
    fellowshipDiv.appendChild(buddy);
    alert(buddy.innerHTML + " has joined the fellowship.");
  }
  for (let j = 0; j < hobbitElementsLength; j++) {
    const hobbit = hobbitElements[0];
    fellowshipDiv.appendChild(hobbit);
    alert(hobbit.innerHTML + " has joined the fellowship.");
  }
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
