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
var $body = $('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var $middleEarth = $('<section id = "middle-earth">')

  var landArr = lands.map(function (land){
    console.log("ready")

    var landArticle = $(`
    <article>
      <h1>${land}</h1>
    </article>`
    )
    return landArticle
  })
  $middleEarth.append(landArr)
  $body.append($middleEarth)
}

makeMiddleEarth();


// Part 2

var theShire = $('article').first()
var $hobbitList = $('<ul>')
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit


  var hobbitsArr = hobbits.map(function(hobbit){
    var $hobbitLi = $('<li>').text(hobbit)
    $hobbitLi.addClass('hobbit')
    return $hobbitLi
  })

  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)

}

makeHobbits();

// Part 3

function nazgulScreech(){
  document.getElementById("nazgul-screech").play();
  return
}

var $ring = $('<div class = "magic-imbued-jewelry">')
var frodo = $('body li');
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  $ring.on('click', nazgulScreech)
  frodo.append($ring);
}

keepItSecretKeepItSafe();


// Part 4

var $rivendell = $("article:nth-child(2)")


function makeBuddies() {
  // create an aside tag
  var $aside = $('<aside>')
  var $asideUl = $('<ul>')
  // attach an unordered list of the 'buddies' in the aside
  var addLi = buddies.map(function (buddy){
    console.log("ready")

    var $asideLi = $('<li>').text(buddy)

    return $asideLi
  })
  // insert your aside as a child element of rivendell
  $asideUl.append(addLi)
  $aside.append($asideUl)
  $rivendell.append($aside)


}
makeBuddies();


// Part 5


// var $changeText = $("rivendell:nth-child(4) ul")
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  this.$aragorn = $rivendell.find("li").eq(3)
  $aragorn.text("Aragorn")
}
beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $rivendell.append($hobbitList)
}
leaveTheShire()

// Part 7

var $totalChar = $rivendell.find("li")
// console.log($totalChar);
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var $fellowShip = $('<div id = "the-fellowship">')
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for(var i =0; i<$totalChar.length; i++){
    $fellowShip.append($totalChar.eq(i))
  }
  $rivendell.append($fellowShip)

  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  this.$gandalf = $totalChar.eq(0)
  $gandalf.text("Gandalf the White")
  // apply style to the element
  // make the background 'white', add a grey border
  $gandalf.css({"background-color": "white", "border": "10px solid gray"})
}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // alert("The horn of gondor has been blown")
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  this.$boromir = $totalChar.eq(4)
  $boromir.css("text-decoration", "line-through")
  // Remove Boromir from the Fellowship
  $boromir.remove()
}
hornOfGondor()


// Part 10
var $mordorMain = $("article:nth-child(3)")

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  this.$frodoMove = $totalChar.eq(5)
  this.$samMove = $totalChar.eq(6)
  // add a div with an id of 'mount-doom' to Mordor
  this.$modor = $('<div id="mount-doom">')

  $modor.append($frodoMove)
  $modor.append($samMove)
  $mordorMain.append($modor)
}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  $gollumDiv = $('<div id="gollum">')
  $gollumDiv.append($ring)
  $mordorMain.append($gollumDiv)
  // Remove the ring from Frodo and give it to Gollum
  // frodo.remove($ring)

  // Move Gollum into Mount Doom
}
weWantsIt()


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  
}
thereAndBackAgain()
