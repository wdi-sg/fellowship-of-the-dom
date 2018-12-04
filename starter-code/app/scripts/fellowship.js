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
  section.id = "middle-earth";

  lands.forEach(function(land){
    var article = document.createElement("article");
    var h1 = document.createElement("h1");
    h1.textContent = land;

    article.appendChild(h1);
    section.appendChild(article);
  });

  body.appendChild(section);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var firstArticle = document.getElementsByTagName("article")[0];
  var hobbitUl = document.createElement("ul");
  firstArticle.appendChild(hobbitUl);

  hobbits.forEach(function(hobbit){
    var hobbitLi = document.createElement("li");
    hobbitLi.className = "hobbit";
    hobbitLi.textContent = hobbit;

    hobbitUl.appendChild(hobbitLi);
  });
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var div = document.createElement("div");
  div.id = "the-ring";
  div.className = "magic-imbued-jewelry";

  var frodo = document.getElementsByTagName("li")[0];
  frodo.appendChild(div);
  document.getElementById("the-ring").addEventListener('click', nazgulScreech);
}


keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement("aside");
  var ulBuddy = document.createElement("ul");

  buddies.forEach(function(buddy){
     var liBuddy = document.createElement("li");
     liBuddy.textContent = buddy;

     ulBuddy.appendChild(liBuddy);
  });
  aside.appendChild(ulBuddy);
  document.querySelectorAll("article")[1].appendChild(aside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  // var rivendell = document.getElementsByTagName("aside")[0].childNodes[0];
  var strider = document.getElementsByTagName("ul")[1].childNodes[3];
  strider.textContent = "Aragorn";

}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsArr = document.getElementsByClassName("hobbit");
  var rivendell = document.getElementsByTagName("aside")[0].childNodes[0];

  // for (var i = hobbitsArr.length -1; i >= 0; i--) {
  //   rivendell.appendChild(hobbitsArr[i]);
  // }
  // for (var i=0; i < hobbitsArr.length; i++){
  //   rivendell.appendChild(hobbitsArr[i]);
  // }

  // since hobbitsArr is a HTML collection, <Array.from> / Array.prototype.forEach.call converts this collection into an array
  Array.from(hobbitsArr).forEach(function(hobbit){
    rivendell.appendChild(hobbit);
  })
}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var rivendell = document.getElementsByTagName("aside")[0];
  var div = document.createElement("div");
  div.id = "the-fellowship";
  rivendell.appendChild(div);
  var ul = document.createElement("ul");
  div.appendChild(ul);

  var allHobbitsBuddies = document.getElementsByTagName("li");
  // console.log(allHobbitsBuddies);

  var listRivendell = document.getElementsByTagName("ul")[2]


  var allHobbitsBuddiesArr =  Array.from(document.getElementsByTagName("li"));
  while (allHobbitsBuddiesArr.length > 0){
    var j= allHobbitsBuddiesArr.length -1;

    if (allHobbitsBuddiesArr.length > 1){
        listRivendell.appendChild(allHobbitsBuddiesArr[0]);
        listRivendell.appendChild(allHobbitsBuddiesArr[j]);
        allHobbitsBuddiesArr.pop();
        allHobbitsBuddiesArr.shift();
        alert(allHobbitsBuddies[0].textContent + " is here!");
        alert(allHobbitsBuddies[j].textContent + " is here!");
    } else {
        listRivendell.appendChild(allHobbitsBuddiesArr[0]);
        allHobbitsBuddiesArr.pop();
        alert(allHobbitsBuddies[0].textContent + " is here!");
    }
  }
}
forgeTheFellowShip();


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  var gandalf = document.getElementsByTagName("li")[0];
  gandalf.textContent = "Gandalf the White";
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "2px solid grey";
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("the horn of gondor has been blown!");
  alert("Boromir's been killed by the Uruk-hai!");
  var boromir = document.getElementsByTagName("li")[8];
  boromir.style.textDecoration = "line-through";

}

hornOfGondor();

// // // Part 10

// // function itsDangerousToGoAlone(){
// //   // take Frodo and Sam out of the fellowship and move them to Mordor
// //   // add a div with an id of 'mount-doom' to Mordor
// // }


// // // Part 11

// // function weWantsIt() {
// //   // Create a div with an id of 'gollum' and add it to Mordor
// //   // Remove the ring from Frodo and give it to Gollum
// //   // Move Gollum into Mount Doom
// // }


// // // Part 12

// // function thereAndBackAgain() {
// //   // remove Gollum and the Ring from the document
// //   // remove all the baddies from the document
// //   // Move all the hobbits back to the shire
// // }
