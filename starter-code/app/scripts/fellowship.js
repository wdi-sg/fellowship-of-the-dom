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
  var section = document.createElement("section");
  section.setAttribute("id","middleEarth");
  // add each land as an article tag
  for(var i = 0; i < lands.length; i++) {
    var addLand = document.createElement("article");

  // inside each article tag include an h1 with the name of the land
  addLand.innerHTML = '<h1>' + lands[i] + '</h1>'
  section.appendChild(addLand);
  }; 
  // append middle-earth to your document body
  body.appendChild(section);
};
makeMiddleEarth();


// Part 2

var theShire = document.getElementsByTagName("article")[0]
var rivendell = document.getElementsByTagName("article")[1]
var mordor = document.getElementsByTagName("article")[2]

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitList = document.createElement("ul");

  for(var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement("li");
    hobbit.innerHTML = hobbits[i];
    hobbit.setAttribute("class", "hobbit");
    hobbitList.appendChild(hobbit);
  };

  theShire.appendChild(hobbitList);
};

makeHobbits();

// Part 3

var frodo = document.getElementsByClassName("hobbit")[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

var div = document.createElement("div")
  div.setAttribute("id", "the-ring");
  div.setAttribute("class", "magic-imbued-jewelry");

  div.addEventListener("click", nazgulScreech);  //set eventlistener to div container
  frodo.appendChild(div);  //append div child to frodo parent
};

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
var aside = document.createElement("aside");
var buddiesList = document.createElement("ul");
for(var i = 0; i < buddies.length; i++) {
  var buddy = document.createElement("li");
  buddy.innerHTML = buddies[i];
  buddiesList.appendChild(buddy);
  }
aside.appendChild(buddiesList);
rivendell.appendChild(aside);
};

makeBuddies();

// Part 5

var selectStrider = rivendell.querySelectorAll("li")[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
 selectStrider.textContent = "Aragorn";
};

beautifulStranger();


// Part 6

var selectHobbits = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(selectHobbits);  // not using hobbitsList as this was created inside a LOCAL function.
};

leaveTheShire();


// Part 7

fellowshipList = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div');
  theFellowship.getAttribute("id", "the-fellowship");

  for(var i = 0; i < fellowshipList.length; i++) {
    theFellowship.appendChild(fellowshipList[i]);
    alert(fellowshipList.textContent + "has joined the Fellowship!");
  };
  rivendell.appendChild(theFellowship);
};

forgeTheFellowShip();



// Part 8

var gandalf = fellowshipList[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  gandalf.textContent = "Gandalf the White";
  gandalf.style.border = "3px solid gray";
  gandalf.styke.background = "white";
};

theBalrog();

// Part 9

var boromir = fellowshipList[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  alert("The horn of Gondor has been blown!");
  
  boromir.style.textDecoration = "line-through";  // uses textDecoration to put line-through
  boromir.parentNode.removeChild(boromir);    // remove child boromir from fellowshipList[4] which is a <li></li> from rivendell
};

hornOfGondor();

// Part 10

var sam = fellowshipList[6];  //check from console

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  
  var mountDoom = document.createElement("div");
  
  mountDoom.getAttribute("id", "mount-doom");   // created div of mountdoom and added id tag
  mordor.appendChild(mountDoom);
};

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement("div");
  gollum.getAttribute("id", "gollum");
  removeRing = frodo.querySelector("#the-ring");  // select #the-ring id from frodo and store in removeRing variable
  gollum.appendChild(removeRing)   // appendchild selected element id to gollum

  var mountDoom2 = mordor.querySelector("#mount-doom"); // mountDoom2 is diff from mountDoom as both are local var. Not global.
  moundoome2.appendChild(gollum);
};

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
gollum.parentNode.removeChild(gollum);

var hobbitList2 = document.createElement("ul");
var hobbits = document.getElementsByClassName("hobbits");

for(var i = 0; i < hobbits.length; i++) {
  hobbitList2.appendChild(hobbits[i]);
};

theShire.appendChild(hobbitList2);
};

thereAndBackAgain();
