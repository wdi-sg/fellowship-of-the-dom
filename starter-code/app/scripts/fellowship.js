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
// create a section tag with an id of middle-earth

var middleEarth = document.createElement('section');
    middleEarth.id = "middle-earth"

    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
        for (var i = 0; i < lands.length; i++) {
            var newLand = document.createElement('article')
            var newh1 = document.createElement('h1')
            newh1.textContent = lands[i]
            newLand.appendChild(newh1)
            middleEarth.appendChild(newLand)
        }

    // append middle-earth to your document body

body.appendChild(middleEarth);

// Part 2
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit

var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'
];

var theShire = body.getElementsByTagName("article")[0];
var rivendell = body.getElementsByTagName("article")[1];
var mordor = body.getElementsByTagName("article")[2];

var theHobbits = document.createElement("ul")

for (var i = 0; i < hobbits.length; i++) {
    var eachHobbit = document.createElement("li") //create
    eachHobbit.textContent = hobbits[i] //modify
    eachHobbit.classList.add('hobbit') //add
    theHobbits.appendChild(eachHobbit)
}

theShire.appendChild(theHobbits);

// Part 3
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'

var theRing = document.createElement('div');
theRing.setAttribute('id', 'the-ring');
theRing.setAttribute('class','magic-imbued-jewelry');

    //add the ring as a child of Frodo

var frodo = document.getElementsByClassName('hobbit')[0]
frodo.appendChild(theRing)

    // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

function nazgulScreech() {
    document.getElementById("nazgul-screech").play();
    }

theRing.addEventListener("click", nazgulScreech);

// Part 4
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell

var buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
];

var buddiesAside = document.createElement('aside')
var buddiesList = document.createElement("ul")

for (i in buddies) {
    var eachBuddy = document.createElement("li") //create
    eachBuddy.textContent = buddies[i] //modify
    buddiesList.appendChild(eachBuddy)
    buddiesAside.appendChild(buddiesList)
}
rivendell.appendChild(buddiesAside)

// Part 5
    // change the 'Strider' textnode to 'Aragorn'

 var strider = rivendell.querySelectorAll("li")[3]
 strider.textContent = "Aragorn";

// Part 6

function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
}

rivendell.appendChild(theHobbits)

// Part 7

{
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
}

var theFellowship = document.createElement('div');
var newFellowship = rivendell.appendChild(theFellowship)
var fellowshipMembers = rivendell.querySelectorAll('li');
    for (i in fellowshipMembers) {
        theFellowship.appendChild(fellowshipMembers[i]);
        alert(`${fellowshipMembers[i].textContent} has joined your party`);
    }

// function forgeTheFellowShip() {

//     }
// }


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

function itsDangerousToGoAlone() {
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