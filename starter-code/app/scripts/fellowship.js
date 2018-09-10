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
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var middleEarth = document.createElement('section')
    middleEarth.setAttribute('id', 'middle-earth')
    lands.forEach(function(element) {
        var newLand = document.createElement('article')
        newLand.innerHTML = `<h1>${element}</h1>`
        middleEarth.appendChild(newLand)
    })
    body.appendChild(middleEarth)
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
    var newList = document.createElement('ul')
    hobbits.forEach(function(element) {
        var newHobbit = document.createElement('li')
        newHobbit.innerHTML = element
        newHobbit.setAttribute('class', 'hobbit')
        newList.appendChild(newHobbit)
    })
    var shire = document.querySelectorAll('article')[0]
    shire.appendChild(newList)
}

makeHobbits()


// Part 3

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add the ring as a child of Frodo
    // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    var theRing = document.createElement('div')
    theRing.setAttribute('id', 'the-ring')
    theRing.setAttribute('class', 'magic-imbued-jewelry')
    theRing.addEventListener('click', nazgulScreech)
    var frodo = document.getElementsByClassName('hobbit')[0]
    frodo.appendChild(theRing)
}

keepItSecretKeepItSafe()


// Part 4


function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var newAside = document.createElement('aside')
    var newList = document.createElement('ul')
    buddies.forEach(function(element) {
        var newBuddy = document.createElement('li')
        newBuddy.innerHTML = element
        newList.appendChild(newBuddy)
    })
    var rivendell = document.querySelectorAll('article')[1]
    rivendell.appendChild(newAside)
    newAside.appendChild(newList)
}

makeBuddies()

// Part 5


function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    var target = document.getElementsByTagName("li");
    var searchText = "Strider";

    for (var i = 0; i < target.length; i++) {
        if (target[i].textContent == searchText) {
            target[i].textContent = 'Aragorn'
        }
    }
}

beautifulStranger()


// Part 6

function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    var shire = document.querySelectorAll('article')[0]
    var rivendell = document.querySelectorAll('article')[1]
    var hobbitSquad = shire.children[1]
    shire.removeChild(hobbitSquad)
    rivendell.appendChild(hobbitSquad)
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var rivendell = document.querySelectorAll('article')[1]
    var fellowship = document.createElement('div')
    var newList = document.createElement('ul')
    var oldList = document.querySelectorAll('ul')
    //document.querySelectorAll('ul')[0].children[0].textContent

    fellowship.setAttribute('id', 'the-fellowship')

    for (i = oldList.length - 1; i >= 0; i--) {
        for (x = oldList[i].children.length - 1; x >= 0; x--) {
            var transfer = oldList[i].children[x]
            alert(oldList[i].children[x].textContent + ' has joined the party!')
            newList.appendChild(transfer)
        }
    }
    fellowship.appendChild(newList)
    rivendell.appendChild(fellowship)
}

forgeTheFellowShip()


// Part 8


function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    var target = document.getElementsByTagName("li")
    var searchText = "Gandalf the Grey"
    var content

    for (var i = 0; i < target.length; i++) {
        if (target[i].textContent == searchText) {
            content = target[i]
            content.textContent = 'Gandalf the White'
            content.style.background = 'white'
            content.style.border = '1px solid grey'
        }
    }
}

theBalrog()


// Part 9

function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    alert("Horn of Gondor has been blown! Boromir's been killed by the Uruk-hai!")
    var fellowship = document.getElementById('the-fellowship')
    var target = document.getElementsByTagName("li")
    var searchText = "Boromir"
    var content

    for (var i = 0; i < target.length; i++) {
        if (target[i].textContent == searchText) {
            content = target[i]
            content.style.textDecoration = 'line-through'
            fellowship.firstChild.removeChild(content)
        }
    }
}

hornOfGondor()


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