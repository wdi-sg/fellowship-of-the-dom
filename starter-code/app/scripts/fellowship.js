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
  var section = document.createElement('section');
  section.setAttribute("id", "middle-earth");
  // create a section tag with an id of middle-earth
  for(var i = 0; i < lands.length; i++){
      // add each land as an article tag
      var land = document.createElement('article');
      // inside each article tag include an h1 with the name of the land
      land.innerHTML = '<h1>' + lands[i] + '</h1>';
      section.appendChild(land);
      // land.setAttribute("id", lands[i])
    }
    // append middle-earth to your document body
    body.appendChild(section);
}

makeMiddleEarth();

var allArticles = document.getElementsByTagName('article');
var theShire = allArticles[0]; // <article><h1>"the shire"</h1></article>
var rivendell = allArticles[1];
var mordor = allArticles[2];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement('ul');

  for (var i = 0; i < hobbits.length; i++) {
    var list = document.createElement('li');
    list.setAttribute("class", "hobbit");
    list.innerHTML = hobbits[i];
    unorderedList.appendChild(list);
  }
  theShire.appendChild(unorderedList);
}

makeHobbits();

// Part 3



var frodo = document.getElementsByClassName('hobbit')[0];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');

  theRing.addEventListener('click', nazgulScreech);

  frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var buddiesUnordered = document.createElement('ul')

  for (var i = 0; i < buddies.length; i++) {
    var buddiesList = document.createElement('li')
    buddiesList.innerHTML = buddies[i];
    buddiesUnordered.appendChild(buddiesList);
  }
  aside.appendChild(buddiesUnordered);

  rivendell.appendChild(aside);

}

makeBuddies()

// Part 5
var strider = rivendell.getElementsByTagName('li')[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragorn';
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsList = document.querySelector('article ul');
  rivendell.appendChild(hobbitsList);
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party


var theFellowShip = document.createElement('div');
theFellowShip.setAttribute("id", "the-fellowship");
rivendell.appendChild(theFellowShip);

var members = rivendell.querySelectorAll('li');   // returns an array

// must loop the array in order to access all elements of the array

for (var i = 0; i < members.length; i++) {
  theFellowShip.appendChild(members[i]);
  //alert(members[i].textContent + " has joined");
};


}
forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

 var gandalf = document.querySelectorAll('#the-fellowship li')[0];
 gandalf.style.backgroundColor = "white";
 gandalf.style.border = "5px solid grey";


}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
//alert("The horn of gondor has been blown")
//alert("Boromir's been killed by the Uruk-hai!")

var boromir = document.querySelectorAll('#the-fellowship li')[4];
boromir.style.textDecoration = "line-through";
var parentNode = document.querySelector('#the-fellowship')

parentNode.removeChild(boromir);


}

hornOfGondor()
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  var sam = document.querySelectorAll('#the-fellowship .hobbit')[1];

  mordor.appendChild(sam);
  mordor.appendChild(frodo);

}
itsDangerousToGoAlone()

// Part 11

var theRing = document.querySelector('#the-ring')


function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div')
  gollum.setAttribute("id", "gollum")
  mordor.appendChild(gollum)

  gollum.appendChild(theRing);


}
weWantsIt()

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  theRing.parentNode.removeChild(theRing);
  gollum.parentNode.removeChild(gollum);

  var hobbitList = document.querySelectorAll('.hobbit')
  // console.log(hobbitList)
  var hobbitsUnorderedList = document.createElement('ul')
  theShire.appendChild(hobbitsUnorderedList)

  for (var i = 0; i < hobbitList.length; i++) {
    hobbitsUnorderedList.appendChild(hobbitList[i]);
  }
  // what is baddies?? buddies??
  var top = document.querySelector('#the-fellowship')
  var nested = document.querySelectorAll('#the-fellowship li')
  for (var i = 0; i < nested.length; i++){
    top.removeChild(nested[i]);
  }
}

thereAndBackAgain()






// messy AF but got the hang-ish of it
// querySelectorAll will return an array. Hence to apply something to the element, need to loop it
// cannot create element in tag
// querySelector only select the first instance of the argument





