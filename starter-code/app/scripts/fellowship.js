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
    section.id="Middle-Earth";
  // add each land as an article tag
    lands.forEach(function(land){
        var article = document.createElement("Article")
        article.innerHTML = "<h1>"+land+"</h1>";
        section.appendChild(article);
    });
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
    document.body.appendChild(section);
}

// setTimeout(makeMiddleEarth, 1000);
makeMiddleEarth();

// Part 2
var shireArticle = body.getElementsByTagName("article")[0];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the *first* article tag on the page)
  shireArticle.id="Shire";
  var unorderedList = document.createElement("ul");
  unorderedList.id="hobbits";
    hobbits.forEach(function(hobbit){
        var listItem = document.createElement("li")
        listItem.textContent = hobbit;
        unorderedList.appendChild(listItem);
        listItem.className="hobbit";
    });
    shireArticle.appendChild(unorderedList);
  // give each hobbit a class of hobbit
}

// setTimeout(makeHobbits, 2000);
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    var ring = document.createElement("div");
    ring.id="the-ring";
  // give the div a class of 'magic-imbued-jewelry'
    ring.className="magic-imbued-jewelry";
  // add the ring as a child of Frodo
    var frodo = body.getElementsByClassName("hobbit")[0];
    frodo.appendChild(ring);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    ring.addEventListener("click", nazgulScreech);
}

// setTimeout(keepItSecretKeepItSafe, 3000);
keepItSecretKeepItSafe()

// Part 4

var rivendellBuddies= body.getElementsByTagName("article")[1];

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
    var unorderedList = document.createElement("ul");
    buddies.forEach(function(buddy){
        var listItem = document.createElement("li")
        listItem.textContent = buddy;
        unorderedList.appendChild(listItem);
        listItem.className="buddy";
    });
  // insert your aside as a child element of rivendell
    rivendellBuddies.appendChild(unorderedList);
}

// setTimeout(makeBuddies, 4000);
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  body.getElementsByClassName("buddy")[3].textContent="Aragorn";
}

// setTimeout(beautifulStranger, 5000);
beautifulStranger();

// Part 6

function leaveTheShire() {
    var getHobbits = shireArticle.querySelector("ul");
     rivendellBuddies.appendChild(getHobbits);
}

// setTimeout(leaveTheShire, 6000);
leaveTheShire();


// Part 7


var fellowShip = document.createElement("div");
fellowShip.id="the-fellowship";

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  rivendellBuddies.querySelectorAll('li').forEach(function(fellow){
    fellowShip.appendChild(fellow);
    // alert(fellow.innerHTML + " has joined the party.")
    });
    rivendellBuddies.appendChild(fellowShip);
  // after each character is added make an alert that they have joined your party
}

// setTimeout(forgeTheFellowShip, 7000);
forgeTheFellowShip();


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  body.getElementsByClassName("buddy")[0].textContent="Gandalf the White";
  // apply style to the element
  body.getElementsByClassName("buddy")[0].style.backgroundColor="white";
  // make the background 'white', add a grey border
  body.getElementsByClassName("buddy")[0].style.border="grey solid 1px";
}

// setTimeout(theBalrog, 8000);
theBalrog();

// Part 9
var boromir = body.getElementsByClassName("buddy")[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown")
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  boromir.style.textDecoration="line-through";
  // Remove Boromir from the Fellowship
  // body.getElementsByClassName("buddy").removeChild(body.getElementsByClassName("buddy").childNodes[4]);
  boromir.parentNode.removeChild(boromir);
}

// setTimeout(hornOfGondor, 9000);
hornOfGondor();


// Part 10
var mordor = body.getElementsByTagName("article")[2];
var mountDoom = document.createElement("div");
mountDoom.id = "mount-doom";

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom.appendChild(rivendellBuddies.querySelectorAll('li')[4]);
  mountDoom.appendChild(rivendellBuddies.querySelectorAll('li')[4]);
  mordor.appendChild(mountDoom);
}

// setTimeout(itsDangerousToGoAlone, 10000);
itsDangerousToGoAlone()

// Part 11

var gollum = document.createElement("div");
gollum.id="Gollum";

var frodo = body.querySelectorAll('li')[6];

function weWantsIt() {
    var ring = frodo.querySelector('#the-ring');
  // Create a div with an id of 'gollum' and add it to Mordor
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}

// setTimeout(weWantsIt, 11000);
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mountDoom.removeChild(gollum);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
    var unorderedList = document.createElement("ul");
    // var getHobbits = body.getElementsByClassName("hobbit");
    var getHobbits = body.querySelectorAll('.hobbit');
    unorderedList.id="hobbits";
    getHobbits.forEach(function(hobbit){
        unorderedList.appendChild(hobbit);
    });
    shireArticle.appendChild(unorderedList);
    // alert(fellow.innerHTML + " has joined the party.")
}
// setTimeout(thereAndBackAgain, 12000);
thereAndBackAgain()

