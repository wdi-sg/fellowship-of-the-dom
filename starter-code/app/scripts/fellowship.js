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

  //   var landOne = document.createElement('article');
  //   var landTwo = document.createElement("article");
  //   var landThree = document.createElement("article");
  //   middleEarth.appendChild(landOne);
  //   middleEarth.appendChild(landTwo);
  //   middleEarth.appendChild(landThree);

  // // inside each article tag include an h1 with the name of the land
  // landOne.innerHTML = '<h1>' + lands[0] + '</h1>';
  // landTwo.innerHTML = '<h1>' + lands[1] + '</h1>'
  // landThree.innerHTML = '<h1>' + lands[2] + '</h1>'


    var landArticle = document.createElement("article");
    var landHeading = document.createElement("h1");
    landHeading.textContent = lands[0];
    landArticle.appendChild(landHeading);
    middleEarth.appendChild(landArticle);


    var landArticle = document.createElement("article");
    var landHeading = document.createElement("h1");
    landHeading.textContent = lands[1];
    landArticle.appendChild(landHeading);
    middleEarth.appendChild(landArticle);


    var landArticle = document.createElement("article");
    var landHeading = document.createElement("h1");
    landHeading.textContent = lands[2];
    landArticle.appendChild(landHeading);
    middleEarth.appendChild(landArticle);

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
  ring.addEventListener("click", nazgulScreech);
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
    ul.classList.add("buddy");
    aside.appendChild(ul);



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

var buddyList = document.querySelectorAll('ul');

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
  var rivendell = document.querySelectorAll('h1')[1];
  var hobbitJourney = document.querySelectorAll('ul')[0];
  rivendell.appendChild(hobbitJourney);
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
  fellowship.setAttribute("id", "the-fellowship");
  var rivendell = document.querySelectorAll('h1')[1];
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'


  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.querySelectorAll('li')[0];
  gandalf.innerHTML = "Gandalf the White";
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "thick solid grey";
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9

function hornOfGondor() {
    alert('The horn of Gondor has been blown!');
    var boromir = document.querySelectorAll('li')[4];
    boromir.style.textDecoration = "line-through";
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var frodo = document.querySelectorAll('li.hobbit')[0];
  var sam = document.querySelectorAll('li.hobbit')[1];
  var mordor = document.querySelectorAll('h1')[2];

  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  // gollum.innerHTML = "<h1> gollum </h1>";
  gollum.setAttribute("id", "gollum");
  var mordor = document.querySelectorAll('h1')[2];
  mordor.appendChild(gollum);
  var ring = document.getElementById('the-ring');
  gollum.appendChild(ring);
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollum = document.getElementById('gollum');
  var mountDoom = document.getElementById('mount-doom');
  mountDoom.removeChild(gollum);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  var hobbitOne = document.querySelectorAll('li.hobbit')[0]
  var hobbitTwo = document.querySelectorAll('li.hobbit')[1]
  var hobbitThree = document.querySelectorAll('li.hobbit')[2]
  var hobbitFour = document.querySelectorAll('li.hobbit')[3]

  var shire = document.querySelectorAll("h1")[0];

  shire.appendChild(hobbitOne);
  shire.appendChild(hobbitTwo);
  shire.appendChild(hobbitThree);
  shire.appendChild(hobbitFour);

}

thereAndBackAgain();