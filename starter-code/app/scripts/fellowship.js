console.log("Linked.");

var ringClickCount = 0;

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

// bonus
function nazgulScreech() {
      document.getElementById("nazgul-screech").play();
      ringClickCount++;

      if (ringClickCount === 3) {
        document.body.remove();

        setTimeout(function () {
            document.body = document.createElement("body");
            document.body.innerHTML = "<p>The Ring has been returned to Sauron and the world is over.</p>";
            document.body.style.backgroundImage = "none";
            document.body.style.color = "black";
            document.body.style.fontFamily = "Arial";
            document.body.style.textShadow = "none";
            document.body.style.textAlign = "center";
        }, 1000);
      }
    }

// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var sectionTag = document.createElement("section");
  sectionTag.id = "middle-earth";

  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  for (var i = 0; i < lands.length; i++) {
    var articleTag = document.createElement("article");

    var h1Tag = document.createElement("h1");
    h1Tag.textContent = lands[i];

    articleTag.appendChild(h1Tag);
    sectionTag.appendChild(articleTag);
  }

  // append middle-earth to your document body
  document.body.appendChild(sectionTag);
}

// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var ulTag = document.createElement("ul");

  for (var i = 0; i < hobbits.length; i++) {
    var liTag = document.createElement("li");
    liTag.textContent = hobbits[i];

    ulTag.appendChild(liTag);
  }

  // find the article with h1 the shire and append to it
  var parentTag = document.querySelectorAll("#middle-earth article");

  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "the shire") {
        parentTag[i].appendChild(ulTag);
        break;
    }
  }
}

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  var divTag = document.createElement("div");
  divTag.id = "the-ring";
  divTag.className = "magic-imbued-jewelry";

  // Bonus: add an event listener so that when a user clicks on the ring,
  // the nazgulScreech function (provided) is invoked
  divTag.addEventListener("click", nazgulScreech);

  // add the ring as a child of Frodo
  var parentTag = document.querySelectorAll("#middle-earth article ul li");

  for (var i = 0; i < parentTag.length; i++) {
    var liTagContent = parentTag[i].textContent.toLowerCase();

    if (liTagContent === "frodo baggins") {
        parentTag[i].appendChild(divTag);
        break;
    }
  }
}

// Part 4
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  var asideTag = document.createElement("aside");
  var ulTag = document.createElement("ul");

  for (var i = 0; i < buddies.length; i++) {
    var liTag = document.createElement("li");
    liTag.textContent = buddies[i];

    ulTag.appendChild(liTag);
  }

  asideTag.appendChild(ulTag);

  // insert your aside as a child element of rivendell
  var parentTag = document.querySelectorAll("#middle-earth article");

  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "rivendell") {
        parentTag[i].appendChild(ulTag);
        break;
    }
  }
}

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var parentTag = document.querySelectorAll("#middle-earth article ul li");

  for (var i = 0; i < parentTag.length; i++) {
    var liTagContent = parentTag[i].textContent.toLowerCase();

    if (liTagContent === "strider") {
        parentTag[i].textContent = "Aragorn";
        break;
    }
  }
}

// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var assembleHobbitElements = null;
  var parentTag = document.querySelectorAll("#middle-earth article");

  // assemble the hobbits out of the shire
  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "the shire") {
        assembleHobbitElements = parentTag[i].getElementsByTagName("ul")[0];
        parentTag[i].getElementsByTagName("ul")[0].remove();
        break;
    }
  }

  // move them to Rivendell
  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "rivendell") {
        parentTag[i].appendChild(assembleHobbitElements);
        break;
    }
  }
}

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var parentTag = document.querySelectorAll("#middle-earth article");

  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "rivendell") {
        hobbitAndBuddyListElements = parentTag[i].getElementsByTagName("li");

        for (var b = 0; b < hobbitAndBuddyListElements.length; b++) {
            var divTag = document.createElement("div");
            divTag.className = "the-fellowship";

            hobbitAndBuddyListElements[b].appendChild(divTag);
            //alert(hobbitAndBuddyListElements[b].textContent + " have joined the party!");
        }

        break;
    }
  }
}

// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var parentTag = document.querySelectorAll("#middle-earth article ul li");

  for (var i = 0; i < parentTag.length; i++) {
    var liTagContent = parentTag[i].textContent.toLowerCase();

    if (liTagContent === "gandalf the grey") {
        parentTag[i].innerHTML = "Gandalf the White<div class=\"the-fellowship\"></div>";
        parentTag[i].style.background = "white";
        parentTag[i].style.border = "4px solid grey";
        break;
    }
  }
}

// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert("The horn of gondor has been blown! Boromir's been killed by the Uruk-hai!");

  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  var parentTag = document.querySelectorAll("#middle-earth article ul li");

  for (var i = 0; i < parentTag.length; i++) {
    var liTagContent = parentTag[i].textContent.toLowerCase();

    if (liTagContent === "boromir") {
        parentTag[i].querySelector(".the-fellowship").remove();
        parentTag[i].style.textDecoration = "line-through";
        break;
    }
  }
}

// Part 10
function itsDangerousToGoAlone() {
  var assembleHobbitElements = [];
  var parentTag = document.querySelectorAll("#middle-earth article ul li");

  // take Frodo and Sam out of the fellowship and move them to Mordor
  for (var i = 0; i < parentTag.length; i++) {
    var liTagContent = parentTag[i].textContent.toLowerCase();

    if (liTagContent === "frodo baggins" || liTagContent === "samwise \'sam\' gamgee") {
        parentTag[i].querySelector(".the-fellowship").remove();
        assembleHobbitElements.push(parentTag[i]);
        parentTag[i].remove();
    }
  }

  // move Frodo and Sam to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var divTag = document.createElement("div");
  divTag.id = "mount-doom";

  parentTag = document.querySelectorAll("#middle-earth article");

  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "mordor") {
        parentTag[i].appendChild(divTag);
        parentTag[i].appendChild(assembleHobbitElements[0]);
        parentTag[i].appendChild(assembleHobbitElements[1]);
        break;
    }
  }
}

// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var divTag = document.createElement("div");
  divTag.id = "gollum";

  // Remove the ring from Frodo and give it to Gollum
  var ringTag = document.querySelector("#the-ring");
  ringTag.remove();
  divTag.appendChild(ringTag);

  // Move Gollum into Mount Doom
  parentTag = document.querySelectorAll("#middle-earth article");

  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "mordor") {
        parentTag[i].appendChild(divTag);
        break;
    }
  }
}

// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollumDivTag = document.querySelector("#gollum");
  gollumDivTag.remove();

  // remove all the buddies from the document
  var assembleBuddiesAndHobbitElements = document.querySelectorAll("#middle-earth article ul li");

  for (var i = 0; i < assembleBuddiesAndHobbitElements.length; i++) {
    var liTagContent = assembleBuddiesAndHobbitElements[i].textContent.toLowerCase();

    if (liTagContent === "gandalf the grey" || liTagContent === "legolas"
        || liTagContent === "gimli" || liTagContent === "strider"
        || liTagContent === "boromir" ) {
        assembleBuddiesAndHobbitElements[i].remove();
    }
  }

  // Move all the hobbits back to the shire
  // select again after removing buddies from document
  var assembleHobbitElements = document.querySelectorAll("#middle-earth article ul li");
  var parentTag = document.querySelectorAll("#middle-earth article");

  // move hobbits back to the shire
  for (var i = 0; i < parentTag.length; i++) {
    var headerContent = parentTag[i].getElementsByTagName("h1")[0].textContent.toLowerCase();

    if (headerContent === "the shire") {
        for (var b = 0; b < assembleHobbitElements.length; b++) {
            parentTag[i].appendChild(assembleHobbitElements[b]);
        }
        break;
    }
  }
}

// main
makeMiddleEarth();
makeHobbits();
keepItSecretKeepItSafe()

makeBuddies();
beautifulStranger();
leaveTheShire();

forgeTheFellowShip();
theBalrog();
hornOfGondor();

itsDangerousToGoAlone();
weWantsIt();
//thereAndBackAgain();