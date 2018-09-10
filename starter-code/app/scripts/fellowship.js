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
  var newSection = document.createElement("section");
  newSection.id = "middle-earth";

// add each land as an article tag
  lands.forEach(function(element){

    //create article tags for each element in array
    var article = document.createElement("article")

    // inside each article tag include an h1 with the name of the land

    //create h1 tags for each element in array
    var nameOfLand = document.createElement("h1")

    //adding content from array into <article><h1>
    nameOfLand.textContent = element;
    //console.log(element);

    //moving <h1> into article
    article.appendChild(nameOfLand);

    //moving <article> into <section> created above which is in this function
    newSection.appendChild(article);
  })



  // append middle-earth to your document body
  document.body.appendChild(newSection);
};

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    var hobbitsInShire = document.createElement("ul")

    //declare that the variable shire to reference to "The Shire" article created above
    var shire = document.getElementsByTagName("article")[0]

    //add the unordered list "hobbitsInShire" to the article "The Shire"
    shire.appendChild(hobbitsInShire);

      hobbits.forEach(function(element){

        //for each element in hobbits array create a <li> tag
        var listOfHobbit = document.createElement("li");

        // give each hobbit a class of hobbit
        listOfHobbit.className = "hobbit";

        //for each created <li> tag, add in the names/element as content
        listOfHobbit.textContent = element;

        //add the <li> including name into the <ul> "hobbitsInShire" created above
        hobbitsInShire.appendChild(listOfHobbit);
        //console.log(listOfHobbit)

      })
}


makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var divTheRing = document.createElement("div");

  // give the div a class of 'magic-imbued-jewelry'

  divTheRing.className = ("magic-imbued-jewelry");

  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0]

  // add divTheRing to frodo in the <li> in The shire <ul>
  frodo.appendChild(divTheRing);


//Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  divTheRing.addEventListener("click", nazgulScreech);

};

keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {

    // create an aside tag
    var asideTag = document.createElement("aside");

    // attach an unordered list of the 'buddies' in the aside
    buddies.forEach(function(element){
        var unorderedList = document.createElement("ul");

        unorderedList.textContent = element;

        asideTag.appendChild(unorderedList);

    });


    // insert your aside as a child element of rivendell
    var rivendell = document.getElementsByTagName("article")[1];
    rivendell.appendChild(asideTag);


};
makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var riverdell = document.getElementsByTagName("article")[1]
  document.querySelector("ul:nth-child(4)").textContent = "Aragorn";

}

beautifulStranger()
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  //recall the hobits, not sure why recalling by class doesnt work but query is okay
  var moveHobbit = document.querySelectorAll(".hobbit")

  //find the location of rivendell inside the <aside Tag> where all the buddies are
  var rivendell = document.querySelector("article:nth-child(2) aside")


    moveHobbit.forEach(function(element){
        rivendell.appendChild(element);
  })


}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {

    // create a new div called 'the-fellowship' within rivendell
    var rivendellDiv = document.createElement("div");
    rivendellDiv.id = "the-fellowship";

    //locating rivendell Aside where all the hobbits are
    var rivendellAside = document.querySelector("article:nth-child(2) aside");

    //locating rivendell in general so as to put in the new div
    var rivendelArticle = document.querySelector("article:nth-child(2)")

    //re-locate the newly created div into rivendell which is inside an article
    rivendelArticle.appendChild(rivendellDiv);

    //declaring class .hobbit to movehobbit to use array methods
    moveHobbit = document.querySelectorAll(".hobbit")

    // add each hobbit and buddy one at a time to 'the-fellowship'
    //relocating each hobbit from <aside> to <div>
    moveHobbit.forEach(function(element, index){
        var divInRivendell = document.querySelector("div#the-fellowship");
        var name = element.textContent

        console.log(name + " relocated to the fellowship!")
        divInRivendell.appendChild(element);

    });

    //locate the buddies in array form
    var buddiesInAside = document.querySelectorAll("aside ul");

    buddiesInAside.forEach(function(element, index){
        var divInRivendell = document.querySelector("div#the-fellowship");
        var name = element.textContent

        console.log(name + " relocated to the fellowship!")
        divInRivendell.appendChild(element);

    });



  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.querySelector("#the-fellowship ul:first-of-type")
  gandalf.textContent = "Gandalf the White"

  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.borderColor = "grey";



}

theBalrog()

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
