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
  var middleEarth = document.createElement('section')

  for(var i = 0 ; i<lands.length ; i++){
    var eachLand = document.createElement('article')
    eachLand.innerHTML= "<h1>" + lands[i] + "</h1>"
    middleEarth.appendChild(eachLand)
    body.appendChild(middleEarth)
    }
}


makeMiddleEarth();

var shire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2]

// Part 2
// display an unordered list of hobbits in the shire (which is the second article tag on the page)
// give each hobbit a class of hobbit

function makeHobbits(){
  var hobbitList=document.createElement('ul');
  for(var i=0 ; i<hobbits.length; i++){
    var hobbit=document.createElement('li')
      hobbit.className = 'hobbit';
      hobbit.innerText = hobbits[i]
      hobbitList.appendChild(hobbit)
    }
    shire.appendChild(hobbitList)
}

makeHobbits();

// Part 3
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add the ring as a child of Frodo
// Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

var frodo = body.querySelectorAll('li')[0]

function keepItSecretKeepItSafe() {
  var theRing=document.createElement('div')
  theRing.setAttribute('id','the-ring')
  theRing.setAttribute('class','magic-imbued-jewelry')
  theRing.addEventListener('click',nazgulScreech )
  frodo.appendChild(theRing)
}
keepItSecretKeepItSafe();

// Part 4
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell

function makeBuddies() {
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i=0 ; i<buddies.length;i++){
    var buddy = document.createElement('li')
    buddy.textContent = buddies[i]
    buddyList.appendChild(buddy)
  }
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}

makeBuddies()

// Part 5
// change the 'Strider' textnode to 'Aragorn'
 var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  strider.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6
// assemble the hobbits and move them to Rivendell
var hobbits = shire.querySelector('ul')

function leaveTheShire() {
  rivendell.appendChild(hobbits)
}
leaveTheShire();

// Part 7
// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party

var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
    var theFellowship = document.createElement('div')
    theFellowship.setAttribute('id','the-fellowship')
    for(var i = 0 ; i<fellowshipMembers.length ; i++){
        theFellowship.appendChild(fellowshipMembers[i])
        alert(fellowshipMembers[i].textContent + 'has joined the fellowship!');
    }

    rivendell.appendChild(theFellowship)
}

forgeTheFellowShip();


// Part 8
// change the 'Gandalf' textNode to 'Gandalf the White'
// apply style to the element
// make the background 'white', add a grey border

var gandalf = fellowshipMembers[0]

function theBalrog() {
    gandalf.textContent = 'Gandalf the White'
    gandalf.style.border = '3px solid grey'
    gandalf.style.backgroundColor = 'white'
}

theBalrog()


// // Part 9
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// put a linethrough on boromir's name
// Remove Boromir from the Fellowship
var boromir = fellowshipMembers[4]

function hornOfGondor() {
    alert('horn of gondor has blown')
    boromir.style.textDecoration = 'line-through'
    boromir.parentNode.removeChild(boromir)
}

hornOfGondor();


// Part 10
// take Frodo and Sam out of the fellowship and move them to Mordor
// add a div with an id of 'mount-doom' to Mordor
var sam = fellowshipMembers[6]

function itsDangerousToGoAlone(){
    mordor.appendChild(frodo)
    mordor.appendChild(sam)
    var mountDoom = document.createElement('div')
    mountDoom.setAttribute('id','mount-doom')
    mordor.appendChild(mountDoom)
}

itsDangerousToGoAlone();


// // Part 11
// Create a div with an id of 'gollum' and add it to Mordor
// Remove the ring from Frodo and give it to Gollum
// Move Gollum into Mount Doom

var gollum, theRing

function weWantsIt() {
    gollum = document.createElement('div')
    gollum.setAttribute('id','gollum')
    theRing = frodo.querySelector('#the-ring');
    gollum.appendChild(theRing)
    var mountDoom = mordor.querySelector('#mount-doom')
    mountDoom.appendChild(gollum)
}

weWantsIt();


// Part 12
// remove Gollum and the Ring from the document
// remove all the baddies from the document
// Move all the hobbits back to the shire

function thereAndBackAgain() {
 gollum.parentElement.removeChild(gollum)
 var hobbitUL = document.createElement('ul')
 var hobbits = body.querySelectorAll('.hobbit')
    for(var i = 0 ; i<hobbits.length ; i++){
        hobbitUL.appendChild(hobbits[i])
    }
    shire.appendChild(hobbitUL)
}

thereAndBackAgain();
