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
  var middleEarth = document.createElement('section') 
  // add each land as an article tag
  for (var i = 0; i < lands.length; i++) {
   var land =  document.createElement('article')
    // inside each article tag include an h1 with the name of the land
    land.innerHTML = '<h1>' + lands[i] + '</h1>'
    middleEarth.appendChild(land)
  }
    // append middle-earth to your document body
body.appendChild(middleEarth);

}

makeMiddleEarth();


// Part 2

var theShire = body.querySelectorAll('article')[0]

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
   var hobbitList = document.createElement('ul')
  // give each hobbit a class of hobbit
  for (var i = 0; i < hobbits.length; i++) {
    var list = document.createElement('li')
    list.className = 'hobbit'
    list.innerText = (hobbits[i])
    hobbitList.appendChild(list)
  }
theShire.appendChild(hobbitList);
}

makeHobbits();


// Part 3

  var frodo = document.querySelectorAll('.hobbit')[0]

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div')
  theRing.setAttribute ('id', 'the-ring')
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute ('class', 'magic-imbued-jewelry')
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech)
  // add the ring as a child of Frodo
  frodo.appendChild(theRing)
}

keepItSecretKeepItSafe();
  
// Part 4

  var rivendell = body.querySelectorAll('article')[1];

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside')
  var ul = document.createElement('ul')
  // attach an unordered list of the 'buddies' in the aside
  for (var i = 0; i < buddies.length; i++) {
    var li = document.createElement('li')
    li.innerText = buddies[i]
    ul.appendChild(li)
  }
  aside.appendChild(ul)
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = rivendell.querySelectorAll('li')[3];
  strider.textContent = 'Aragorn';

}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = theShire.querySelector('ul');
// theShire.removeChild(hobbits)
  rivendell.appendChild(hobbits)
}

leaveTheShire();  


// Part 7

var everybody = document.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowShip = document.createElement('div')
  // add each hobbit and buddy one at a time to 'the-fellowship'

  for (var i = 0; i < everybody.length; i++) {
    theFellowShip.appendChild(everybody[i])
    //alert(everybody[i].textContent + ' has joined the party!')
  }
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(theFellowShip);
}

forgeTheFellowShip();

// Part 8

var gandalf = everybody[0];
function theBalrog() {
 // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.innerText = 'Gandalf the White';
  // apply style to the element
  gandalf.style.backgroundColor = 'white';
  // make the background 'white', add a grey border
  gandalf.style.border = '10px solid grey';
}

theBalrog();


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
