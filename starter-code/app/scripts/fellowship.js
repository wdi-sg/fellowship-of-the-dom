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
    middleEarth.classList.add("middle_earth");

  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land


    for (i=0 ; i < lands.length ; i++) {
        var addLands = document.createElement("article");
        var addLandsH1 = document.createElement("h1");
        addLandsH1.textContent=lands[i];
        addLands.appendChild(addLandsH1);
        middleEarth.appendChild(addLands);
    }

  // // append middle-earth to your document body
    document.body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
    var addHobbits = document.createElement("article");
    var addHobbitsList = document.createElement("ul");
    addHobbits.appendChild(addHobbitsList);
    for (i=0 ; i < hobbits.length; i++) {
        var createHobbit = document.createElement("li");
        createHobbit.textContent = hobbits[i];
        createHobbit.classList.add("hobbit");
        addHobbitsList.appendChild(createHobbit);
    }
     var Shire = document.getElementsByTagName("article")[0]
     Shire.appendChild(addHobbits);
}

makeHobbits();


// // Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    var ring = document.createElement("div");
    ring.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
    ring.classList.add("magic-imbued-jewelry");
  // add the ring as a child of Frodo
    var Frodo = document.getElementsByTagName("li")[0];
    Frodo.appendChild(ring);
}

keepItSecretKeepItSafe();
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
var ringClick = document.getElementById("the-ring");
ringClick.addEventListener("click", nazgulScreech);



// // Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
    var addBuddies = document.createElement("aside");
    var addBuddiesList = document.createElement("ul");
    addBuddies.appendChild(addBuddiesList);
    for (i=0 ; i < buddies.length; i++){
        var createBuddy = document.createElement("li");
        createBuddy.textContent=buddies[i];
        addBuddiesList.appendChild(createBuddy);
    }
  // insert your aside as a child element of rivendell
    var rivendell = document.getElementsByTagName("h1")[1];
    rivendell.appendChild(addBuddies);
}

makeBuddies();


// // Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
    var strider = document.getElementsByTagName("ul")[1].childNodes[3];
    strider.textContent = "Aragorn"
}

beautifulStranger();


// // Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    var hobbitsLeave = document.getElementsByTagName("article")[1].parentNode;
    var hobbitsLeft = hobbitsLeave.removeChild(hobbitsLeave.childNodes[1]);
    var rivendell = document.getElementsByTagName("h1")[1];
    rivendell.appendChild(hobbitsLeft);
}

leaveTheShire();


// // Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
    var createFellowship = document.createElement("div");
    createFellowship.id = "the-fellowship";
    var rivendell = document.getElementsByTagName("h1")[1];
    rivendell.appendChild(createFellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
    for (i=0; i < hobbits.length; i++){
        var leaveOldHobbit = document.getElementsByTagName("article")[2].childNodes[0];
        var hobbitsLeftOld = leaveOldHobbit.removeChild(leaveOldHobbit.childNodes[0]);
        var selectFellowship = document.getElementById("the-fellowship");
        selectFellowship.appendChild(hobbitsLeftOld);
        alert(selectFellowship.childNodes[i] + "joined the fellowship");
    }
    for (i=0; i < buddies.length; i++){
        var leaveOldBuddy = document.getElementsByTagName("aside")[0].childNodes[0];
        var buddyLeftOld = leaveOldBuddy.removeChild(leaveOldBuddy.childNodes[0]);
        var selectFellowship = document.getElementById("the-fellowship");
        selectFellowship.appendChild(buddyLeftOld);
        alert(selectFellowship.childNodes[i] + "joined the fellowship");
    }

}

forgeTheFellowShip();
        // var selectFellowship = document.getElementById("the-fellowship").childNodes.getAttributeNode("outerText");
        // console.log(selectFellowship);

// // Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
    var selectGandalf = document.getElementById("the-fellowship").childNodes[4]
    selectGandalf.textContent = "Gandalf the White";
    selectGandalf.style.background = "white";
    selectGandalf.style.border = "thick solid grey";
}

theBalrog();

// // Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
    alert("horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
    var selectBoromir = document.getElementById("the-fellowship").childNodes[8];
    selectBoromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
    selectBoromir.parentNode.removeChild(selectBoromir);
}

hornOfGondor();

// // Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
    var selectFrodoSam = document.getElementById("the-fellowship").childNodes[0];
    var hobbitMordor = selectFrodoSam.parentNode.removeChild(selectFrodoSam);
    var selectMorder = document.getElementsByTagName("article")[3];
    selectMorder.appendChild(hobbitMordor);
    var selectFrodoSam = document.getElementById("the-fellowship").childNodes[0];
    var hobbitMordor = selectFrodoSam.parentNode.removeChild(selectFrodoSam);
    selectMorder.appendChild(hobbitMordor);
  // add a div with an id of 'mount-doom' to Mordor
    var mtDoom = document.createElement("div");
    mtDoom.id = "mount-doom";
    selectMorder.appendChild(mtDoom);
}

itsDangerousToGoAlone();

// // Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
    var createGollum = document.createElement("div");
    createGollum.id = "gollum";
    var selectMorder = document.getElementsByTagName("article")[3];
    selectMorder.appendChild(createGollum);
  // Remove the ring from Frodo and give it to Gollum
    var ringScuffle = document.getElementById("the-ring").parentNode.removeChild(document.getElementById("the-ring"));
    document.getElementById("gollum").appendChild(ringScuffle);
  // Move Gollum into Mount Doom
    document.getElementById("mount-doom").appendChild(document.getElementById("gollum"));

}

weWantsIt();


// // Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
    document.getElementById("gollum").parentNode.removeChild(document.getElementById("gollum"));
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

}

thereAndBackAgain();