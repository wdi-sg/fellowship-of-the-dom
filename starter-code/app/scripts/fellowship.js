document.addEventListener('DOMContentLoaded',function(){

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

var middleEarth = document.createElement('section');
middleEarth.setAttribute('id','middle-earth');

  // add each land as an article tag
var landArticle1 = document.createElement('article');
landArticle1.classList.add = "the-shire";

var landArticle2 = document.createElement('article');
landArticle2.classList.add = "rivendell";

var landArticle3 = document.createElement('article');
landArticle3.classList.add = "mordor";

  // inside each article tag include an h1 with the name of the land
var landHeading1 = document.createElement('h1');
landHeading1.textContent = lands[0];

var landHeading2 = document.createElement('h1');
landHeading2.textContent = lands[1];

var landHeading3 = document.createElement('h1');
landHeading3.textContent = lands[2];


  // append middle-earth to your document body
landArticle1.appendChild(landHeading1);
landArticle2.appendChild(landHeading2);
landArticle3.appendChild(landHeading3);

middleEarth.appendChild(landArticle1);
middleEarth.appendChild(landArticle2);
middleEarth.appendChild(landArticle3);

body.appendChild(middleEarth);

}

makeMiddleEarth();


// Part 2
var shire = body.querySelector("article");

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
 var hobbitsUl = document.createElement('ul');
var hobbitNames = [];

  for(i=0; i<hobbits.length;i++){
var hobbitsList = document.createElement('li');
  hobbitsList.textContent = hobbits[i];
  hobbitsUl.appendChild(hobbitsList);
  shire.appendChild(hobbitsUl);

  var words = hobbits[i].split(" ")[0];
    hobbitNames.push(words);
};

  for(i=0; i<hobbitNames.length;i++){
document.querySelectorAll('li')[i].classList.add(hobbitNames[i]);
}

}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ringDiv = document.createElement('div');
    ringDiv.setAttribute("id", "the-ring");

  // give the div a class of 'magic-imbued-jewelry'
    ringDiv.classList.add("magic-imbued-jewelry");

  // add the ring as a child of Frodo
    var getFrodo = document.querySelectorAll("li")[0];
    getFrodo.appendChild(ringDiv);

  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

ringDiv.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();


// Part 4

var rivendell = document.querySelectorAll("article")[1];

function makeBuddies() {
  // create an aside tag
  var asideTag = document.createElement('aside');

  // attach an unordered list of the 'buddies' in the aside
var buddiesUl = document.createElement('ul');

for (j=0; j<buddies.length; j++){
var buddiesList = document.createElement('li');
  buddiesList.textContent = buddies[j];
  buddiesUl.appendChild(buddiesList);
  asideTag.appendChild(buddiesUl);
};

  // insert your aside as a child element of rivendell

rivendell.appendChild(asideTag);
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var getStriderLi = document.querySelectorAll('li')[7];
while(getStriderLi.firstChild) getStriderLi.removeChild(getStriderLi.firstChild);
    //document.querySelectorAll('li')[7].firstChild = "Strider";
getStriderLi.appendChild(document.createTextNode("Aragorn"));

}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    var getHobbitsUl = document.querySelectorAll('article')[0];
    var getRiveUl = document.querySelectorAll('article')[1];
//getHobbitsUl.firstChild.nextSibling = everything inside and including <ul></ul>.
//firstChild >>> <h1></h1>
//nextSibling >>> <ul></ul>

var shirePeople = getHobbitsUl.firstChild.nextSibling;
getRiveUl.appendChild(shirePeople);
getHobbitsUl.removeChild(getHobbitsUl.firstChild.nextSibling);
  }

// leaveTheShire();

// Part 7

var riven = document.querySelectorAll('article')[1];

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
    fellowship.classList.add("the-fellowship");
    riven.appendChild(fellowship);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var linksArr = document.querySelectorAll('li');

    for(i=0;i<linksArr.length;i++){
    var fellowshipDiv = document.querySelectorAll('div')[2];
        fellowshipDiv.appendChild(linksArr[i])
            alert(`${linksArr[i].innerText} has joined your party!`);
        }
    };



// forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var getGandalf = document.querySelectorAll('li')[4];
while(getGandalf.firstChild) getGandalf.removeChild(getGandalf.firstChild);
    //document.querySelectorAll('li')[7].firstChild = "Strider";
var newGandalf = getGandalf.appendChild(document.createTextNode("Gandalf the White"));

  // apply style to the element
var gandalfStyle = getGandalf.style;

  // make the background 'white', add a grey border
gandalfStyle.backgroundColor = "white";
gandalfStyle.borderColor = "grey";
}

// theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  var blowHorn = alert(`Horn of Gondor has been blown!`);

  // Boromir's been killed by the Uruk-hai!
var boromirKilled = alert( `Boromir has been killed by the Uruk-hai!`);

  // put a linethrough on boromir's name

document.querySelectorAll('li')[8].style.textDecoration = "line-through";

  // Remove Boromir from the Fellowship
  document.querySelectorAll('li')[8].removeChild(document.querySelectorAll('ul')[1].lastChild);

}

hornOfGondor();


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

});
