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

var lands = ['The Shire', 'Rivendell', 'Mordor']; // ["ARTICLE"]
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var section = document.createElement("section");
  section.setAttribute("id", "middle-earth");
  //console.log(section);

  // add each land as an article tag
  for (var i=0; i<lands.length; i++) {
    var addLand = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
  var header1 = document.createElement("h1");
  header1.textContent = lands[i];
  addLand.appendChild(header1);
  //console.log(header1);
  section.appendChild(addLand);
  //console.log(addLand);
}
  // append middle-earth to your document body
document.body.appendChild(section);
//console.log(body);
}

makeMiddleEarth();


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var theShire = document.getElementsByTagName("article")[0];
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement("ul");
  for (var i=0; i<hobbits.length; i++) {
    var listOfHobbits = document.createElement("li");
    listOfHobbits.textContent = hobbits[i];
    listOfHobbits.className = "hobbit";
    //console.log(listOfHobbits);
    unorderedList.appendChild(listOfHobbits);
  }
  //To display unorderedList in 1st article tag on page:
  theShire.appendChild(unorderedList);
  //console.log(theShire);
}

makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var div1 = document.createElement("div");
  div1.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  div1.className = "magic-imbued-jewelry";
  //console.log(div1);
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(div1);
  //console.log(frodo);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div1.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
  var asideElement = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var unorderedList2 = document.createElement("ul");
  for (var i=0; i < buddies.length; i++) {
    var listOfBuddies = document.createElement("li");
    listOfBuddies.textContent = buddies[i];
    unorderedList2.appendChild(listOfBuddies);
  }
    //console.log(unorderedList2);
    asideElement.appendChild(unorderedList2);
  // insert your aside as a child element of rivendell
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(asideElement);
  //console.log(rivendell);
}

makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = document.getElementsByTagName("li")[7];
  aragorn.textContent = 'Aragorn';
  //console.log(aragorn);
}

beautifulStranger();


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.querySelector("ul");
  //console.log(hobbits);

  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(hobbits);
  //console.log(rivendell);

}

leaveTheShire();

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement("div");
  theFellowship.setAttribute("id", "the-fellowship");

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var hobbitAndBuddyList = document.querySelectorAll("li");
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(theFellowship);

  for (var i=0; i< hobbitAndBuddyList.length; i++) {
    var eachHobbitAndBuddy = hobbitAndBuddyList[i].textContent;
    theFellowship.appendChild(hobbitAndBuddyList[i]);
    // after each character is added make an alert that they have joined your party
    alert(eachHobbitAndBuddy + " has joined your party!");
  }
  }

forgeTheFellowShip();


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalfTheWhite = document.getElementsByTagName("li")[0];
  gandalfTheWhite.textContent = "Gandalf the White";
  // apply style to the element
  gandalfTheWhite.style.border = "10px solid grey";
  // make the background 'white', add a grey border
  gandalfTheWhite.style.backgroundColor = "white";
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromir = document.getElementsByTagName("li")[4];
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  var removeBoromir = document.getElementById("the-fellowship");
  removeBoromir.removeChild(removeBoromir.childNodes[4]);
  //console.log(removeBoromir);
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.getElementsByClassName("hobbit")[0];
  var sam = document.getElementsByClassName("hobbit)")[1];
  var mordor = document.getElementsByTagName("article")[2];

  mordor.appendChild(sam);
  mordor.appendChild(frodo);
  //console.log(mordor);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  var mordor = document.getElementsByTagName("article")[2];
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  var ringId = document.getElementById("the-ring");
  var ring = ringId.parentNode.removeChild(ringId);
  //console.log(ring);
  gollum.appendChild(ring);
  //console.log(gollum);
  // Move Gollum into Mount Doom
  var mountdoom = document.getElementById("mount-doom");
  mountdoom.appendChild(gollum);
  //console.log(mountdoom);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollum = document.getElementById("the-ring");
  var mountdoom = document.getElementById("mount-doom");
  // var ringId = document.getElementById("the-ring");

  mountdoom.removeChild(gollum);
  //console.log(mountdoom);
  // remove all the buddies from the document
  var theShire = document.getElementsByTagName("article")[0];

  // Move all the hobbits back to the shire
  var hobbits = document.getElementsByClassName("hobbit");
  for (var i = 0; i<hobbits.length; i++) {
    theShire.appendChild(hobbits[i]);
  }

  console.log(theShire);
}

thereAndBackAgain();

