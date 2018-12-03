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
  var midEarth = document.createElement("section");
  midEarth.id = "middle-earth";
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  for (var i in lands) {
    var landArticle = document.createElement("article");
    var landText = document.createElement("h1");
    landText.textContent = lands[i];
    landArticle.appendChild(landText);
    midEarth.appendChild(landArticle);
  }
  // append middle-earth to your document body
  document.body.appendChild(midEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var secondArticle = document.getElementsByTagName("article")[0];
  for (var i in hobbits) {
    var unorderedList = document.createElement("ul");
    var listItem = document.createElement("li");
    var listItemContent = document.createTextNode(hobbits[i]);
    listItem.className = "hobbit";
    listItem.appendChild(listItemContent);
    unorderedList.appendChild(listItem);
  }
  secondArticle.appendChild(unorderedList);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ringDiv = document.createElement("div");
  ringDiv.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  ringDiv.className = "magic-imbued-jewelry";
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ringDiv.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  var frodo = document.getElementsByTagName("li")[0];
  frodo.appendChild(ringDiv);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var asideTag = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside

    var unorderedList = document.createElement("ul");
    for (var i in buddies) {
            var listItem = document.createElement("li");
            var listItemContent = document.createTextNode(buddies[i]);
            listItem.appendChild(listItemContent);
            unorderedList.appendChild(listItem);
        }
        asideTag.appendChild(unorderedList);
        // insert your aside as a child element of rivendell
        var rivendell = document.getElementsByTagName("h1")[1];
        rivendell.appendChild(asideTag);
    }

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementsByTagName("li")[4].textContent = "Aragorn"
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.getElementsByTagName("ul")[0];
  hobbits.parentNode.removeChild(hobbits);
  document.getElementsByTagName("h1")[1].appendChild(hobbits);
}

leaveTheShire();


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
