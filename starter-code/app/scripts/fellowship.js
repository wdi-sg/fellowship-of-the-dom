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
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var section = document.createElement("section")
    section.id = "middle-earth"
    lands.forEach(function(land){
        var article = document.createElement("article")
        var articleName = document.createElement("h1")
        articleName.textContent = land
        article.appendChild(articleName)
        section.appendChild(article)
    })
    body.appendChild(section)
}

makeMiddleEarth();

var shire = document.querySelectorAll("article")[0]

// Part 2

function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    // give each hobbit a class of hobbit
    var ul = document.createElement("ul")

    hobbits.forEach(function(hobbit){
        var li = document.createElement("li")
        li.className = "hobbit"
        li.textContent = hobbit
        ul.appendChild(li)
    })
    shire.appendChild(ul)
}

makeHobbits();

// Part 3

var nazgulScreech = document.getElementById("nazgul-screech")

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add the ring as a child of Frodo
    // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

    var theRing = document.createElement("div")
    theRing.className = "magic-imbued-jewelry"
    theRing.id = "the-ring"
    theRing.addEventListener("click", function(){
        nazgulScreech.play();
    })
    var frodo = document.querySelectorAll("li")[0]
    frodo.appendChild(theRing)
}

keepItSecretKeepItSafe()

// Part 4

var rivendell = document.querySelectorAll("article")[1]

function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var aside = document.createElement("aside")
    var ul = document.createElement("ul")
    buddies.forEach(function(buddy){
        var li = document.createElement("li")
        li.textContent = buddy
        ul.appendChild(li)
    })
    aside.appendChild(ul)
    rivendell.appendChild(aside)
}

makeBuddies()

// Part 5

function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    rivendell.querySelectorAll("li")[3].textContent = "Aragorn"
}

beautifulStranger()

// Part 6

function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    rivendell.appendChild(shire.querySelector("ul"))
}

leaveTheShire()

// Part 7

function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var theFellowship = document.createElement("div")
    theFellowship.id = "the-fellowship"
    rivendell.appendChild(theFellowship)

    var heroes = document.querySelectorAll("li")
    for (var i = 0; i < heroes.length; i++){
        document.getElementById("the-fellowship").appendChild(heroes[i])
        // alert(heroes[i].textContent + " has joined your party!")
    }
}

forgeTheFellowShip()

var theFellowship = document.getElementById("the-fellowship")

// Part 8

function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    var gandalf = theFellowship.querySelector("li")
    gandalf.textContent = "Gandalf the White"
    gandalf.style.background = "white"
    gandalf.style.border = "2px solid gray"
    gandalf.style.color = "white"
}

theBalrog()

// Part 9

function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    alert("The horn of Gondor has been blown!")
    alert("Boromir has been killed by the Uruk-hai!")
    theFellowship.querySelectorAll("li")[4].remove()
}

hornOfGondor()

// Part 10

var mordor = document.querySelectorAll("article")[2]

function itsDangerousToGoAlone(){
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    var mountDoom = document.createElement("div")
    mountDoom.id = "mount-doom"

    mordor.appendChild(theFellowship.querySelectorAll("li")[4])
    mordor.appendChild(theFellowship.querySelectorAll("li")[4])
    mordor.appendChild(mountDoom)
}

itsDangerousToGoAlone()

// Part 11

var frodo = mordor.querySelectorAll("li")[0]
var mountDoom = document.getElementById("mount-doom")

function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
    var gollum = document.createElement("div")
    gollum.id = "gollum"
    gollum.appendChild(document.getElementById("the-ring"))
    mountDoom.appendChild(gollum)
}

weWantsIt()

// Part 12

function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
    document.getElementById("gollum").remove()
    var travellingHobbitses = document.getElementsByClassName("hobbit")
    for(var i = 0; i < travellingHobbitses.length; i++){
        shire.appendChild(travellingHobbitses[i])
    }
}

thereAndBackAgain()
