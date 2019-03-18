const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const lands = ['The Shire', 'Rivendell', 'Mordor'];
const body = document.querySelector('body');

// Part 1
function makeMiddleEarth() {
    //Create a section tag with an id of middle-earth
    let section = document.createElement("section");
    section.setAttribute("id","middle-earth");
    //We then create an arr to store article tags
    //articleArr=[<article></article>,<article></article>,<article></article>]
    let articleArr = [];
    for(let i = 0;i < lands.length;i++){
        articleArr.push(document.createElement("article"));
    }
    //Inside each article tag include an h1 with the name of the land
    //Once we again we create multiple h1 and stores them in an arr
    //We then loop through the arr to add textContent to the h1 followed by appending them(h1) to article tagS
    //We then append article tagS to the section tag
    let h1Arr = [];
    for(let i = 0;i < lands.length;i++){
        h1Arr.push(document.createElement("h1"));
        h1Arr[i].textContent = lands[i];
        articleArr[i].append(h1Arr[i]);
        section.append(articleArr[i]);
    }
    // append middle-earth to your document body
    body.appendChild(section);
}
makeMiddleEarth();

// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  let ul = document.createElement("ul");
  let liArray = [];
  for(let i = 0;i < hobbits.length;i++){
    liArray.push(document.createElement("li"));
    liArray[i].textContent = hobbits[i];
    // give each hobbit a class of hobbit
    liArray[i].classList.add("hobbit");
    ul.appendChild(liArray[i]);
  }
  let article = document.querySelector("article");
  article.appendChild(ul);
}
makeHobbits();

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  let theRing = document.createElement("div");
  theRing.id = "the-ring"
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class","magic-imbued-jewelry");
  // add the ring as a child of Frodo
  let frodo = document.querySelector("li");
  frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    theRing.addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4
function makeBuddies() {
  // create an aside tag
  let aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  let ul    = document.createElement("ul");
  let liArr = [];
  for(let i = 0;i < buddies.length;i++){
    liArr.push(document.createElement("li"));
    liArr[i].textContent = buddies[i];
    ul.appendChild(liArr[i]);
    aside.appendChild(ul);
  }
  // insert your aside as a child element of rivendell
  let rivendell = document.querySelectorAll("h1")[1];
  rivendell.appendChild(aside);
}
makeBuddies();

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let striderLi = document.querySelectorAll("aside ul li")[3];
  striderLi.textContent = "Aragorn";
}
beautifulStranger();

// Part 6
function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    let ul          = document.querySelector("article ul");
    let liArr       = document.querySelectorAll("article ul")[0].children;
    let hobbitsArr  = [];
    let rivendellUl = document.querySelector("article h1 aside ul");
    // For some reason for-loop doesn't work but reverse does
    for(let i = liArr.length - 1 ;i >= 0;i--){
        hobbitsArr.push(ul.removeChild(liArr[i]));
        // console.log(liArr);
    }
    for(let i = hobbitsArr.length - 1 ;i >= 0;i--){
        rivendellUl.appendChild(hobbitsArr[i]);
    }
}
// leaveTheShire();

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  let fellowShip = document.createElement("div");
  let rivendell  = document.querySelectorAll("article")[1];
  rivendell.appendChild(fellowShip);
  console.log(rivendell);
  // add each hobbit and buddy one at a time to 'the-fellowship'

  // after each character is added make an alert that they have joined your party
}
// forgeTheFellowShip();

// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  let gandalf = document.querySelectorAll("aside ul li")[0];
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.background = "white";
  gandalf.style.border = "5px solid grey";
}
theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert("The horn of gondor has been blown and Boromir's been killed by the Uruk-hai!");
  // put a linethrough on boromir's name
  let boromir = document.querySelectorAll("aside ul li")[4];
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  let ul = document.querySelector("article h1 aside ul");
  ul.removeChild(boromir);
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