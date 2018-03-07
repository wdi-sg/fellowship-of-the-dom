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
  let section = document.createElement("section");
  section.id = "middle-earth"

  lands.forEach(function(i){
    // console.log(i);
    let article = document.createElement("article");
    article.innerHTML = `<h1>${i}</h1>`;
    section.appendChild(article);
    // console.log(article);
  });
  // console.log(section);
  body.appendChild(section);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  let secondArticle = document.getElementsByTagName("article")[0];
  let unList = document.createElement("ul");
  hobbits.forEach(function(hobbit){
    let list = document.createElement("li");
    list.textContent = hobbit;
    unList.appendChild(list);
  });
  secondArticle.appendChild(unList);
  // console.log(secondArticle);
  // console.log(unList);
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  let ring = document.createElement("div");
  ring.id = "the-ring";
  ring.classList.add("magic-imbued-jewelry");
  ring.addEventListener("click", nazgulScreech);

  frodo = document.getElementsByTagName("li")[0];
  frodo.appendChild(ring);
  // console.log(frodo);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  let aside = document.createElement("aside");
  let buddiesList = document.createElement("ul");
  // console.log(buddiesList);
  buddies.forEach(function(buddy){
    let buddyLi = document.createElement("li");
    buddyLi.textContent = buddy;
    buddiesList.appendChild(buddyLi);
  });
  aside.appendChild(buddiesList);
  // console.log(aside);

  let rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let query = document.querySelectorAll("li");
  query.forEach(function(each){
    if (each.textContent === "Strider") {
      each.textContent = "Aragorn";
    }
  });
};

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  let theShire = document.querySelectorAll("article")[0].querySelector('ul');
  let rivendell = document.querySelectorAll('article')[1];
  // console.log(theShire);
  rivendell.appendChild(theShire);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  let rivendell = document.querySelectorAll('article')[1];
  let newDiv = document.createElement("div");
  newDiv.id = "the-fellowship";
  rivendell.appendChild(newDiv);
  // console.log(rivendell);

  let everyone = rivendell.querySelectorAll("li");
  // console.log(everyone);

  // new list
  let newList = document.createElement("ul");
  newDiv.appendChild(newList);

  everyone.forEach(function(member){
    newList.appendChild(member);
    // alert(`welcome ${member.textContent}`);
  });

  // console.log(rivendell);

  // TO DO - CLEAN UP EMPTY HTML TAGS

}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  let query = document.querySelectorAll("li");
  query.forEach(function(li){
    if(li.textContent==="Gandalf the Grey") {
      li.textContent = "Gandalf the White";
      li.style.backgroundColor = "white";
      li.style.border = "2px solid grey";
      // console.dir(li.style);
    }
  });
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  let parent;
  document.querySelectorAll("ul").forEach(function(eachLi){
    if(eachLi.hasChildNodes()){
      parent = eachLi;
    }
  });

  // console.log(query);
  let query = document.querySelectorAll("li");
  query.forEach(function(li){
    // console.log(li.textContent);
    if(li.textContent==="Boromir") {
      // console.log(li);
      li.style.textDecoration = "line-through";
      parent.removeChild(li);
    }
  });
}

hornOfGondor();


// CLEAN UP EMPTY UL
  document.querySelectorAll("ul").forEach(function(eachLi){
    if(!eachLi.hasChildNodes()){
      grandParent = eachLi.parentNode;
      grandParent.removeChild(eachLi);
    }
  });

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  // get sam and frodo
  let query = document.querySelectorAll("li");
  let mordor = document.querySelectorAll("article")[2];
  let newUl = document.createElement("ul");
  newUl.id = "mount-doom";
  query.forEach(function(li){
    // console.log(li.textContent);
    if(li.textContent==="Frodo Baggins" || li.textContent==="Samwise \'Sam\' Gamgee") {
      newUl.appendChild(li);
      // console.log(li);
    }
  });

  mordor.appendChild(newUl);
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  let gollum = document.createElement("div");
  gollum.id = "gollum";
  let ring = body.querySelector("#the-ring");
  // console.log(ring);

  gollum.appendChild(ring);

  // console.log(gollum);

  let mountDoom = body.querySelector("#mount-doom");

  mountDoom.appendChild(gollum);

}

weWantsIt();
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  let gollum = body.querySelector("#gollum");
  console.log(gollum);

  let parent = gollum.parentNode;
  console.log(parent.innerHTML);
  console.log(parent.innerText);
  parent.removeChild(gollum);

}

thereAndBackAgain();
