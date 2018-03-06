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
window.onload = function() {

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var createSection = document.createElement("section");
  createSection.id = "middle-earth";
  // append middle-earth to your document body
  body.appendChild(createSection);
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land

  for (i = 0; i < lands.length; i++) {
    var createArticle = document.createElement("article");
    var findSection = document.querySelector("#middle-earth");
    createArticle.id = "land" + i;
    createArticle.innerHTML = "<h1>" + lands[i] + "</h1>";
    findSection.appendChild(createArticle);
  }


}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)

 var createUL = document.createElement("UL");
 createUL.id = "hobbitUL"
 findArticle = document.querySelector("#land0");
 findArticle.appendChild(createUL);

  // give each hobbit a class of hobbit
 
 for (i = 0; i < hobbits.length; i++) {

  var createLI = document.createElement("LI");
  createLI.classList = "hobbit";
  createLI.innerText = hobbits[i];
  createLI.id = "hobName" + i;
  var findHobbit = document.querySelector("#hobbitUL");
  findHobbit.appendChild(createLI);
 }



}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var createDIV = document.createElement("Div");
  // give the div a class of 'magic-imbued-jewelry'
  createDIV.classList = "magic-imbued-jewelry";
  // add the ring as a child of Frodo
  var findFrodo = document.querySelector("#hobName0");
  findFrodo.appendChild(createDIV);
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  document.querySelector(".magic-imbued-jewelry").addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  var createAside = document.createElement("aside");
  createAside.id = "buddyAside";
    // insert your aside as a child element of rivendell
  var findRivendell = document.querySelector("#land1");
  findRivendell.appendChild(createAside);

  // attach an unordered list of the 'buddies' in the aside
  var findAside = document.querySelector("#buddyAside");
  var createBuddyUL = document.createElement("UL");
  createBuddyUL.id = "buddy_list";
  findAside.appendChild(createBuddyUL);


  for (i = 0; i < buddies.length; i++) {
    var createBuddyLI = document.createElement("LI");
    createBuddyLI.classList = "buddiesUL";
    createBuddyLI.id = "buddy" + i;
    createBuddyLI.innerText = buddies[i];
    var findBuddy = document.querySelector("#buddy_list");
    findBuddy.appendChild(createBuddyLI);
  }
  


}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var findLI = document.querySelectorAll("li");
  for (i = 0; i < findLI.length; i++) {
    if (findLI[i].innerText === "strider") {
      findLI[i].innerText = "aragorn";
    }
  }

}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var findHobbits = document.querySelector("#hobbitUL");
  var findRivendell = document.querySelector("#land1");
  var currentHobbits = document.querySelector("#land0");

  currentHobbits.removeChild(findHobbits);
  findRivendell.appendChild(findHobbits);
}

leaveTheShire();
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  findRivendell = document.querySelector("#land1");
  var createDIV = document.createElement("Div");
  createDIV.id = "the-fellowship";
  findRivendell.appendChild(createDIV);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var locateBuddy = document.querySelectorAll(".buddiesUL");
  locateBuddy.forEach(function(buddy) {
    var findOrigin = document.querySelector("#buddy_list");
    var findFellowship = document.querySelector("#the-fellowship");
    findOrigin.removeChild(buddy);
    findFellowship.appendChild(buddy);
    alert(buddy.innerText + " has joined your party!");
  });

  var locateHobbits = document.querySelectorAll(".hobbit");
    locateHobbits.forEach(function(hob) {
      var findOrigin = document.querySelector("#hobbitUL");
      var findFellowship = document.querySelector("#the-fellowship");
      findOrigin.removeChild(hob);
      findFellowship.appendChild(hob);
      alert(hob.innerText + " has joined your party!");
    })
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var findGandalf = document.querySelector("#buddy0");
  findGandalf.style.cssText = "background-color: white; border-style: solid; border-color: grey;"
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been BLOWN!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var findBoromir = document.querySelector("#buddy4");
  findBoromir.style.cssText = "text-decoration: line-through;"
  // Remove Boromir from the Fellowship
  findBoromirParent = findBoromir.parentNode;
  findBoromirParent.removeChild(findBoromir);
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var createDIV = document.createElement("div");
  findMordor = document.querySelector("#land2");
  createDIV.id = "mount-doom";
  findMordor.appendChild(createDIV);

  var findF = document.querySelector("#hobName0");
  var findS = document.querySelector("#hobName1");
  var findFSP = findF.parentNode;
  var findDoom = document.querySelector("#mount-doom");

  findFSP.removeChild(findF);
  findFSP.removeChild(findS);
  findDoom.appendChild(findF);
  findDoom.appendChild(findS);


}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var createDIV = document.createElement("div");
  createDIV.id = "gollum";
  findMordor = document.querySelector("#land2");
  findMordor.appendChild(createDIV);
  // Remove the ring from Frodo and give it to Gollum
  findRing = document.querySelector(".magic-imbued-jewelry");
  findFrodo = findRing.parentNode;
  findFrodo.removeChild(findRing);

  findGollum = document.querySelector("#gollum");
  findGollum.appendChild(findRing);
  // Move Gollum into Mount Doom
  findMordor.removeChild(findGollum)
  var findMtD = document.querySelector("#mount-doom");
  findMtD.appendChild(findGollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var findGollum = document.querySelector("#gollum");
  var findMtD = findGollum.parentNode;
  findMtD.removeChild(findGollum);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var allHobbits = document.querySelectorAll(".hobbit");
  allHobbits.forEach(function(hob) {
    var hobParent = hob.parentNode;
    hobParent.removeChild(hob);
    var findShire = document.querySelector("#land0");
    findShire.appendChild(hob);
  })
}

thereAndBackAgain();


};