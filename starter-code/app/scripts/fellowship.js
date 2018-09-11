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

    var section = document.createElement("section");
    section.setAttribute('id', 'middle-earth');

    for (var i = 0; i < lands.length; i++) {
        var newArticle = document.createElement("article");
        var newHeader = document.createElement("h1");

        newHeader.textContent = lands[i];
        newArticle.appendChild(newHeader);
        section.appendChild(newArticle);
    }
    document.body.appendChild(section);
}



// Part 2

function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit

    var unorderedList = document.createElement("ul");
    var middleEarth = document.querySelectorAll("h1");
    var shire = middleEarth[0];

    for (var i = 0; i < hobbits.length; i++) {
        var list = document.createElement("li");

        list.classList.add("hobbit");
        list.textContent = hobbits[i];
        unorderedList.appendChild(list);
    }
    shire.appendChild(unorderedList);

}


// Part 3


function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add the ring as a child of Frodo
    // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

    var ringDiv = document.createElement("div");
    ringDiv.classList.add("magic-imbued-jewelry");
    ringDiv.setAttribute("id", "the-ring");
    var frodo = document.querySelector("li");
    frodo.appendChild(ringDiv);

    var fadeOut =function(){
    frodo.style="opacity:0;transition: opacity .25s ease-in-out";

    }

    var fadeIn =function(){
        frodo.style="opacity:1;transition: opacity .25s ease-in-out";

    }

    ringDiv.addEventListener("click", function( event ) {
        nazgulScreech();
        fadeOut();
        setTimeout(fadeIn,1000);

        if (event.detail ===3){
            alert("The Ring has been returned to Sauron and the world is over.");
            document.body.innerHTML = '';
        }
    });


}


// Part 4


function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell

    var middleEarth = document.querySelectorAll("h1");
    var rivendell = middleEarth[1];

    var asideTag = document.createElement("aside");
    var unorderedList = document.createElement("ul");

    for (var i = 0; i < buddies.length; i++) {
        var list = document.createElement("li");

        list.textContent = buddies[i];
        unorderedList.appendChild(list);
        asideTag.appendChild(unorderedList);
    }
    rivendell.appendChild(asideTag);
}


// Part 5


function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'

    var rivendell = document.querySelectorAll('article')[1];
    var strider = rivendell.querySelectorAll('li')[3];

    strider.textContent = "Aragorn";
}


// Part 6

function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell

    var rivendell = document.querySelectorAll('article')[1];
    var hobbit = document.querySelector('ul');
    rivendell.appendChild(hobbit);

}


// Part 7


function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

    var rivendell = document.querySelectorAll('article')[1];
    var fellowship = document.createElement("div");

    fellowship.classList.add("the-fellowship");
    var hobbitBuddies = document.querySelectorAll('li');

    for (var i = 0; i < hobbitBuddies.length; i++) {
        var individual = hobbitBuddies[i].textContent;
        fellowship.appendChild(hobbitBuddies[i]);
        var alertMess = individual + " just joined the party!"
        setInterval(console.log(alertMess), 5000);

    }
    rivendell.appendChild(fellowship);

}


// Part 8


function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border

    var gandalf = document.querySelector('li');

    gandalf.textContent = "Gandalf the White";
    gandalf.style = "background-color:white; border:3px solid grey;"
}



// Part 9

function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship

    alert("The horn of gondor has been blown!");
    alert("Boromir's been killed by the Uruk-hai!");
    var boromir = document.querySelector('li:nth-child(5)');

    boromir.style = "text-decoration: line-through;"
    boromir.parentNode.removeChild(boromir);
}



// Part 10

function itsDangerousToGoAlone() {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor

    var frodo = document.getElementsByClassName('hobbit')[0];
    var sam = document.getElementsByClassName('hobbit')[1];
    var modor = document.querySelectorAll('article')[2];

    modor.appendChild(frodo);
    modor.appendChild(sam);

    var mountdoom = document.createElement('div');

    mountdoom.setAttribute('id', 'mount-doom');
    modor.appendChild(mountdoom);

}


// Part 11

function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom

    var gollumDiv = document.createElement("div");
    gollumDiv.setAttribute('id', 'gollum');

    var ringDiv = document.getElementById('the-ring');
    var mountdoom = document.getElementById('mount-doom');

    mountdoom.appendChild(gollumDiv);
    gollumDiv.appendChild(ringDiv);

}


// Part 12

function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
    var gollumDiv = document.getElementById('gollum');
    var ringDiv = document.getElementById('the-ring');
    var mountdoom = document.getElementById('mount-doom');

    gollumDiv.removeChild(ringDiv);
    mountdoom.removeChild(gollumDiv);

    var shire = document.querySelectorAll('article')[0];
    var hobbits = document.getElementsByClassName('hobbit');
    for (var i=0; i<hobbits.length;i++){
        shire.appendChild(hobbits[i]);
    }
}

makeMiddleEarth();
setTimeout(makeHobbits, 4000);
setTimeout(keepItSecretKeepItSafe, 6000);
setTimeout(makeBuddies, 8000);
setTimeout(beautifulStranger, 10000);
setTimeout(leaveTheShire, 12000);
setTimeout(forgeTheFellowShip, 14000);
setTimeout(theBalrog, 16000);
setTimeout(hornOfGondor, 18000);
setTimeout(itsDangerousToGoAlone, 20000);
setTimeout(weWantsIt, 22000);
setTimeout(thereAndBackAgain, 24000);
