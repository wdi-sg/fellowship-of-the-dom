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
  var sectionTag = document.createElement('section');
  sectionTag.setAttribute('id', 'middle-earth');
  // add each land as an article tag
for (var i = 0; i < lands.length; i++) {
        var land = document.createElement('article');


  // inside each article tag include an h1 with the name of the land
  land.innerHTML = '<h1>' + lands[i] + '</h1>';
  sectionTag.appendChild(land);
}


  // append middle-earth to your document body
  body.appendChild(sectionTag);


}

makeMiddleEarth();


// Part 2
  var shire = body.querySelectorAll('article')[0];
  var rivendell = body.querySelectorAll('article')[1];
  var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)

  var listOfHobbits = document.createElement('ul');

  // give each hobbit a class of hobbit
  for (var i = 0; i < hobbits.length; i++) {
      var hobbit = document.createElement('li');
      hobbit.className = 'hobbit';
      hobbit.textContent = hobbits[i];
      listOfHobbits.appendChild(hobbit);
  }
  shire.appendChild(listOfHobbits);
}
makeHobbits();

// Part 3

var theRing = document.createElement('div');

function keepItSecretKeepItSafe() {

    var frodo = body.querySelectorAll('li')[0];

  // create a div with an id of 'the-ring'
  theRing.setAttribute('id', 'the-ring');

  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry');

  // add the ring as a child of Frodo
  frodo.appendChild(theRing);

  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);

}



keepItSecretKeepItSafe();

var body = document.body;

var theEnd = "The Ring has been returned to Sauron and the world is over.";

var count = 0;
theRing.addEventListener('click', function() {
    count++;
    if( count == 3 ) {
        document.getElementsByTagName('body')[0].innerHTML = '<font size="100px">' + theEnd + '</font>';
    }
})


// Part 4

var aside = document.createElement('aside');

function makeBuddies() {
  // create an aside tag
  aside = document.createElement('aside');

  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement('ul');

  for (var i = 0; i < buddies.length; i++) {
      var buddy = document.createElement('li');
      buddy.textContent = buddies[i];
      listOfBuddies.appendChild(buddy);
  }

  // insert your aside as a child element of rivendell
  aside.appendChild(listOfBuddies);
  rivendell.appendChild(aside);

}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  buddies[3] = 'Aragon';
  rivendell.removeChild(aside);
  makeBuddies();
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = shire.querySelector('ul');

  rivendell.appendChild(hobbits);

}

leaveTheShire();

// Part 7

var fellowshipMembers = document.querySelectorAll('li');

var arrayFellowship = [];

function forgeTheFellowShip() {

  // create a new div called 'the-fellowship' within rivendell
  var fellowshipAssemble = document.createElement('div');
  fellowshipAssemble.setAttribute = ('id', 'the-fellowship');

  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i = 0; i < fellowshipMembers.length; i++) {
      fellowshipAssemble.appendChild(fellowshipMembers[i]);
      arrayFellowship.push(fellowshipMembers[i].textContent);


      //alert(fellowshipMembers[i].textContent + " has joined the party!");
  }    alert(arrayFellowship + " has joined the party!");

  rivendell.appendChild(fellowshipAssemble);

  // after each character is added make an alert that they have joined your party

}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  fellowshipMembers[0].textContent = 'Gandalf the White';

  var deleting = document.getElementsByTagName('li');

  while (deleting[0]) deleting[0].parentNode.removeChild(deleting[0]);

  var fellowshipAssemble = document.createElement('div');
  fellowshipAssemble.setAttribute = ('id', 'the-fellowship');

  for (var i = 0; i < fellowshipMembers.length; i++) {
      fellowshipAssemble.appendChild(fellowshipMembers[i]);
  }

  rivendell.appendChild(fellowshipAssemble);

  // apply style to the element
  var gandalf = document.getElementsByTagName('li')[0];

  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "#FFFFFF";
  gandalf.style.border = "5px solid grey";
}

theBalrog();

// Part 9

var boromir = document.getElementsByTagName('li')[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("Horn of Gondor has been blown! \n Boromir has been killed by the Uruk-hai!");

  // Boromir's been killed by the Uruk-hai!
  // alert("Boromir has been killed by the Uruk-hai!");

  // put a linethrough on boromir's name

  boromir.innerHTML = '<strike>Boromir</strike>';

  // Remove Boromir from the Fellowship
  boromir.parentNode.removeChild(boromir);

}

hornOfGondor();

// Part 10

var frodo = document.getElementsByClassName('hobbit')[0];
var sam = document.getElementsByClassName('hobbit')[1];
var mountDoom = document.createElement('div');

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  frodo.parentNode.removeChild(frodo);
  sam.parentNode.removeChild(sam);

  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  // add a div with an id of 'mount-doom' to Mordor
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);

}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  theRing.parentNode.removeChild(theRing);
  gollum.appendChild(theRing);

  // Move Gollum into Mount Doom
  gollum.parentNode.removeChild(gollum);
  mountDoom.appendChild(gollum);

}

weWantsIt();

// Part 12



function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  theRing.parentNode.removeChild(theRing);
  gollum.parentNode.removeChild(gollum);

  // remove all the baddies from the document
  // ??

  // Move all the hobbits back to the shire
  var deleteHobbits = document.getElementsByClassName('hobbit');

  while (deleteHobbits[0]) deleteHobbits[0].parentNode.removeChild(deleteHobbits[0]);

  makeHobbits();

}

thereAndBackAgain();













