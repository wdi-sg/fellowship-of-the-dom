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

    var middleEarth = document.createElement("section");
    middleEarth.setAttribute("id", "middle-earth");

  // add each land as an article tag

    var landOne = document.createElement('article');
    var landTwo = document.createElement("article");
    var landThree = document.createElement("article");
    middleEarth.appendChild(landOne);
    middleEarth.appendChild(landTwo);
    middleEarth.appendChild(landThree);

  // inside each article tag include an h1 with the name of the land
  landOne.innerHTML = '<h1>' + lands[0] + '</h1>';
  landTwo.innerHTML = '<h1>' + lands[1] + '</h1>'
  landThree.innerHTML = '<h1>' + lands[2] + '</h1>'

  // append middle-earth to your document body

  body.appendChild(middleEarth);

}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  var shire = document.querySelectorAll("h1")[0];
  var ul = document.createElement("ul");
  shire.appendChild(ul);
  var hobbitList = document.querySelectorAll("ul")[0];
  var li = document.createElement("li");
  li.innerHTML = hobbits[0];
  li.classList.add("hobbit");
  hobbitList.appendChild(li);

  var liTwo = document.createElement("li");
  liTwo.innerHTML = hobbits[1];
  liTwo.classList.add("hobbit");
  hobbitList.appendChild(liTwo);

  var liThree = document.createElement("li");
  liThree.innerHTML = hobbits[2];
  liThree.classList.add("hobbit");
  hobbitList.appendChild(liThree);

  var liFour = document.createElement("li");
  liFour.innerHTML = hobbits[3];
  liFour.classList.add("hobbit");
  hobbitList.appendChild(liFour);
  // as shire returns an array of 3, you need shire[0] or the js wont know where to put.
  // give each hobbit a class of hobbit


}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement('div');
  ring.setAttribute("id", "the-ring");
  ring.classList.add("magic-imbued-jewelry");
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  var frodo = document.querySelectorAll('li.hobbit')[0];
  frodo.appendChild(ring);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {

    var rivendell = document.querySelectorAll('h1')[1];
    var aside = document.createElement('aside');
    rivendell.appendChild(aside);

    var rivendellBuddies = document.querySelectorAll('aside')[0];
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
    var ul = document.createElement('ul');

    var buddyOne = document.createElement('li');
    buddyOne.innerHTML = buddies[0];
    rivendellBuddies.appendChild(buddyOne);

    var buddyTwo = document.createElement('li');
    buddyTwo.innerHTML = buddies[1];
    rivendellBuddies.appendChild(buddyTwo);

    var buddyThree = document.createElement('li');
    buddyThree.innerHTML = buddies[2];
    rivendellBuddies.appendChild(buddyThree);

    var buddyFour = document.createElement('li');
    buddyFour.innerHTML = buddies[3];
    rivendellBuddies.appendChild(buddyFour);

    var buddyFive = document.createElement('li');
    buddyFive.innerHTML = buddies[4];
    rivendellBuddies.appendChild(buddyFive);
  // insert your aside as a child element of rivendell
}


makeBuddies();

// Part 5



function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragon = document.getElementsByTagName('li')[7];
  aragon.innerHTML = "Aragon";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
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