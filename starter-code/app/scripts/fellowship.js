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

var middleEarth = document.createElement('section')
  // middleEarth.setAttribute('id');
  middleEarth.id = "middle-earth";

  var land;
  var title;
  for (var i = 0; i < lands.length; i++) {
    land = document.createElement('article');
    title = document.createElement('h1');
    title.innerHTML = lands[i];
    land.appendChild(title);
    middleEarth.appendChild(land);
  }

  body.appendChild(middleEarth);  
}

makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit

  var list = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.innerHTML = hobbits[i];
    hobbit.className = "hobbit";
    list.appendChild(hobbit);
  }

  var arrLand = document.getElementsByTagName('article');
  arrLand[0].appendChild(list);
}

makeHobbits();

var frodo = body.querySelectorAll('li')[0];

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

var theRing = document.createElement("div");
theRing.id = "the-ring";
theRing.className = "magic-imbued-jewelry";

//add event listener
  theRing.addEventListener("click", nazgulScreech);

  var arrName = document.getElementsByTagName('li');
  arrName[0].appendChild(theRing);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

var aside = document.createElement("aside");
var buddyList = document.createElement("ul");
for (var i = 0; i <buddies.length; i++) {
  var buddy = document.createElement("li");
  buddy.innerHTML = buddies[i];
  buddyList.appendChild(buddy);
}

aside.appendChild(buddyList);
var arrLand = document.getElementsByTagName('article');
arrLand[1].appendChild(aside);

}

makeBuddies();

var strider = rivendell.querySelectorAll('li')[3];

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

var arrLand = document.getElementsByTagName('article');
var arragon = arrLand[1].getElementsByTagName("li");
arragon[3].innerHTML = "Aragon";

}

beautifulStranger();

var hobbits = theShire.querySelector('ul');

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
rivendell.appendChild(hobbits);
}

leaveTheShire();

// Part 7

var fellowshipMembers = rivendell.querySelectorAll("li");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

var fellowship = document.createElement("div");
fellowship.id = "the-fellowship";
for (i=0; i<fellowshipMembers.length; i++) {
    fellowship.appendChild(fellowshipMembers[i]);
    // alert(fellowshipMembers[i].innerHTML + ' has joined the fellowship!');
}
    rivendell.appendChild(fellowship);
}


forgeTheFellowShip();

// Part 8

var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

gandalf.innerHTML = "Gandalf the White";
gandalf.style.border = '3px solid gray';
gandalf.style.background = "white";

}

theBalrog();

// Part 9

var boromir = fellowshipMembers[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  // alert("The horn of gondor has been blown!");

boromir.style.textDecoration = "linethrough";
boromir.parentNode.removeChild(boromir);

}

hornOfGondor()

// Part 10

var frodo = fellowshipMembers[5];
var sam = fellowshipMembers[6];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

mordor.appendChild(frodo);
mordor.appendChild(sam);

var mountDoom = document.createElement("div");
mountDoom.id = "mount-doom";
mordor.appendChild(mountDoom);

}

itsDangerousToGoAlone();


// Part 11

var mountDoom = mordor.querySelector('#mount-doom');

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

var gollum = document.createElement("div");
gollum.id = "gollum";
theRingRemove = frodo.querySelector("#the-ring");
// remove from frodo, move to gollum
gollum.appendChild(theRingRemove);

mountDoom.appendChild(gollum);

}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

gollum.parentNode.removeChild(gollum);

  var hobbitAll = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0; i < hobbits.length; i++) { 
    hobbitAll.appendChild(hobbits[i]);
  }
  theShire.appendChild(hobbitAll);


}

thereAndBackAgain();



