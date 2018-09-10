

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

// Part 5


function beautifulStranger() {
buddies[3] = 'Aragorn';

}
beautifulStranger();

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
var sectionOne = document.createElement('div');

console.log(body);

// Part 1

function makeMiddleEarth() {

  // create a section tag with an id of middle-earth

  var sectionOne = document.createElement('div');
  sectionOne.id = "middle-earth";

  // add each land as an article tag

    var sectionTwo = document.createElement("article");

    for(var i = 0; i < 3; i++) {
        articleDiv = document.createElement('article');
        pushInside = sectionOne.appendChild(articleDiv);

  // inside each article tag include an h1 with the name of the land

    var h = document.createElement("h1");
    var t = document.createTextNode('text');
    h.appendChild(t);
    document.body.appendChild(h);


    t.textContent = lands[i];

        pushInside.appendChild(h);
    }
  // append middle-earth to your document body

    body.appendChild(sectionOne);
};

makeMiddleEarth();

// Part 2
// display an unordered list of hobbits in the shire (which is the second article tag on the page)
function makeHobbits() {

    unorderedList = document.createElement('ul');

        for(var i = 0; i < hobbits.length; i++) {

            a = document.getElementsByTagName("article");

            pushInsideTwo = a[0].appendChild(unorderedList);

            listOfHobbits = document.createElement('li');

            hobbets = unorderedList.appendChild(listOfHobbits);

            hobbets.textContent = hobbits[i];

// give each hobbit a class of hobbit

        listOfHobbits.classList.add("hobbit");

        }
};

makeHobbits();

  // create a div with an id of 'the-ring'

  ringLotro = document.createElement('div');
  ringLotro.id = "the-ring";
  ringLotro.classList.add("magic-imbued-jewelry");

  // give the div a class of 'magic-imbued-jewelry'



  // add the ring as a child of Frodo
  //frodo = document.getElementsByClassName('hobbit');
     frodo = document.querySelector("li");
    frodo.appendChild(ringLotro);




  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

//keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell

     unorderedListB = document.createElement('aside');

        for(var i = 0; i < buddies.length; i++) {

            b = document.getElementsByTagName("article");

            pushInsideThree = b[1].appendChild(unorderedListB);


            listOfBuddies = document.createElement('li');

            buddiesList = pushInsideThree.appendChild(listOfBuddies);

            buddiesList.textContent = buddies[i];

        }
};

makeBuddies();




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
