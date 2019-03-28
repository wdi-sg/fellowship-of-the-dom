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
  // add each land as an article tag
  for (i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
    middleEarth.appendChild(land);
  }
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

var theShire = document.querySelectorAll('article')[0];
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit

  var listOfHobbits = document.createElement('ul');
  for (i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.innerHTML = hobbits[i];
    hobbit.className = 'hobbit';
    listOfHobbits.appendChild(hobbit);
    theShire.appendChild(listOfHobbits);
  }
}

makeHobbits();


// Part 3
var frodo = body.querySelectorAll('li')[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  frodo.appendChild(theRing);
  theRing.addEventListener('click', nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4

var rivendell = body.querySelectorAll('article')[1];
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var listOfBuddies = document.createElement('ul');
  for (i = 0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.innerHTML = buddies[i];
    listOfBuddies.appendChild(buddy);
  }
  aside.appendChild(listOfBuddies);
  rivendell.appendChild(aside);
}

makeBuddies();


// Part 5

var strider = rivendell.querySelectorAll('li')[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.innerHTML = 'Aragon';
}

beautifulStranger();


// Part 6

var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);

}

leaveTheShire();


// Part 7

var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for (i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
    // alert(fellowshipMembers[i].innerHTML + ' has joined the fello party!');
  }
    rivendell.appendChild(theFellowship);

}
 forgeTheFellowShip();

// Part 8

var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.innerHTML = 'Gandalf the White';
  gandalf.style.backgroundColor = 'white';
  gandalf.style.border = '5px solid gray';
}

theBalrog();


// Part 9

var boromir = fellowshipMembers[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('The horn of gonder bellows');
  boromir.style.textDecoration = 'linethrough';
  boromir.parentNode.removeChild(boromir);
}

hornOfGondor();


// Part 10

var sam = fellowshipMembers[6];
var mordor = body.querySelectorAll('article')[2];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mount_doom = document.createElement('div');
  mount_doom.setAttribute('id', 'mount_doom');
  mordor.appendChild(mount_doom);
}

itsDangerousToGoAlone();  


// Part 11


var gollum = document.createElement('div');

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  mordor.appendChild(gollum);
  gollum.setAttribute('id', 'gollum');
  var theRing = document.querySelector('#the-ring');

  // mordor.appendChild(gollum);
  gollum.appendChild(theRing);
}
  
weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  gollum.parentNode.removeChild(gollum);
  var shireHobbs = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for (var i = 0; i < hobbits.length; i++) {
    shireHobbs.appendChild(hobbits[i]);
  }
 
  theShire.appendChild(shireHobbs);
}

thereAndBackAgain();









