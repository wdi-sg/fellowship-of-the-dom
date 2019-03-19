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


// Part 1 ✅

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

var makeSection = document.createElement('section');
makeSection.setAttribute('id', 'middle-earth');

// makeSection =
//// <section id="middle-earth"></section>

for (var i = 0; i < lands.length; i++) {
    var makeArticle = document.createElement('article');

    var makeH1 = document.createElement('h1');
    makeH1.textContent = lands[i];
    makeArticle.appendChild(makeH1);
    makeSection.appendChild(makeArticle);
}

var body = document.getElementsByTagName('body');
body[0].appendChild(makeSection);


}

makeMiddleEarth(lands);


// Part 2 ✅

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit

var theShire = document.getElementsByTagName('article')[0];
var makeHobbitsList = document.createElement('ul');

for (var i = 0; i < hobbits.length; i++) {
    var addHobbits = document.createElement('li');
    addHobbits.textContent = hobbits[i];
    makeHobbitsList.appendChild(addHobbits);
}

theShire.appendChild(makeHobbitsList);

}

makeHobbits(hobbits);


// Part 3 ✅

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

var createRingId = document.createElement('div');
createRingId.setAttribute('id', 'the-ring');
createRingId.setAttribute('class', 'magic-imbued-jewelry');
var Frodo = document.getElementsByTagName('li')[0];
Frodo.appendChild(createRingId);

createRingId.addEventListener('click',nazgulScreech);

}

keepItSecretKeepItSafe();


// Part 4 ✅


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

var rivendell = document.getElementsByTagName('article')[1];
var makeAside = document.createElement('aside');
var makeBuddiesList = document.createElement('ul');

for (var i = 0; i < buddies.length; i++) {

    var addBuddies = document.createElement('li');
    addBuddies.textContent = buddies[i];
    makeBuddiesList.appendChild(addBuddies);

}

makeAside.appendChild(makeBuddiesList);
rivendell.appendChild(makeAside);

}

makeBuddies(buddies);

// Part 5 ✅


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

var strider = document.getElementsByTagName('li')[7];
// but why not strider.innerHtml = "<li>Aragon</li>"?
strider.textContent = "Aragorn";

}

beautifulStranger();


// Part 6 ✅

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

var hobbits = document.getElementsByTagName('ul')[0];
var rivendell = document.getElementsByTagName('article')[1];
rivendell.appendChild(hobbits);

}

leaveTheShire();


// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell ✅
  // add each hobbit and buddy one at a time to 'the-fellowship' ❓❓❓❓❓❓
  // after each character is added make an alert that they have joined your party

var makeFellowship = document.createElement('div');
makeFellowship.setAttribute('class','the-fellowship');
var rivendell = document.getElementsByTagName('article')[1];
rivendell.appendChild(makeFellowship);

var fellowshipList = document.createElement('ul');

var currentPersons = document.getElementsByTagName('li');
var hobbitsList = document.getElementsByTagName('ul')[1];


// for (var i = 0; i < hobbitsList.length; i++) {
var hobbs = document.getElementsByTagName('li')[5];
var moveHobbs = hobbitsList.removeChild(hobbs);
fellowshipList.appendChild(moveHobbs);
// alert(hobbs + " has joined your party.");
// }

var hobbs = document.getElementsByTagName('li')[5];
var moveHobbs = hobbitsList.removeChild(hobbs);
fellowshipList.appendChild(moveHobbs);
// alert(hobbs + " has joined your party.");

var hobbs = document.getElementsByTagName('li')[5];
var moveHobbs = hobbitsList.removeChild(hobbs);
fellowshipList.appendChild(moveHobbs);
// alert(hobbs + " has joined your party.");

var hobbs = document.getElementsByTagName('li')[5];
var moveHobbs = hobbitsList.removeChild(hobbs);
fellowshipList.appendChild(moveHobbs);
// alert(hobbs + " has joined your party.");

var buddsList = document.getElementsByTagName('ul')[0];

// for (var i = 0; i < buddsList.length; i++) {
var budds = document.getElementsByTagName('li')[0];
var moveBudds = buddsList.removeChild(budds);
fellowshipList.appendChild(moveBudds);
// alert(budds + " has joined your party.");
// }

var budds = document.getElementsByTagName('li')[0];
var moveBudds = buddsList.removeChild(budds);
fellowshipList.appendChild(moveBudds);
// alert(budds + " has joined your party.");

var budds = document.getElementsByTagName('li')[0];
var moveBudds = buddsList.removeChild(budds);
fellowshipList.appendChild(moveBudds);
// alert(budds + " has joined your party.");

var budds = document.getElementsByTagName('li')[0];
var moveBudds = buddsList.removeChild(budds);
fellowshipList.appendChild(moveBudds);
// alert(budds + " has joined your party.");

var budds = document.getElementsByTagName('li')[0]
var moveBudds = buddsList.removeChild(budds);
fellowshipList.appendChild(moveBudds);
// alert(budds + " has joined your party.");

makeFellowship.appendChild(fellowshipList);

}

forgeTheFellowShip();


// Part 8 ✅

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

var gandalf = document.getElementsByTagName('li')[4];
gandalf.textContent = "Gandalf the White";
gandalf.setAttribute('style','background-color:white;border-style:solid;border-color:grey');
}

theBalrog();


// Part 9 ✅

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

alert("The horn of gondor has been blown");

var boromir = document.getElementsByTagName('li')[8];
boromir.setAttribute('style','text-decoration:line-through');
var fellowshipList = document.getElementsByTagName('ul')[2];
var removeBoromir = fellowshipList.removeChild(boromir);

}

hornOfGondor()


// Part 10 ✅

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

var frodo = document.getElementsByTagName('li')[0];
var sam = document.getElementsByTagName('li')[1];
var fellowshipList = document.getElementsByTagName('ul')[2];

var moveFrodo = fellowshipList.removeChild(frodo);
var moveSam = fellowshipList.removeChild(sam);

var mordor = document.getElementsByTagName('article')[2];
mordor.appendChild(moveFrodo);
mordor.appendChild(moveSam);

var addMountDoom = document.createElement('div');
addMountDoom.setAttribute('id', 'mount-doom');
mordor.appendChild(addMountDoom);

}

itsDangerousToGoAlone();


// Part 11 ✅

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

var mordor = document.getElementsByTagName('article')[2];
var addGollum = document.createElement('div');
addGollum.setAttribute('id','gollum');
mordor.appendChild(addGollum);

var theRing = document.getElementById('the-ring');
addGollum.appendChild(theRing);

var mountDoom = document.getElementById('mount-doom');
mountDoom.appendChild(addGollum);

}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire



}