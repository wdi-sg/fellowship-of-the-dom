console.log("Linked.");
$(function() {

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
var $body = $('body')
// Part 1

var $middleEarth = $('<section id="middle-earth">')
// $body.append($middleEarth)
var $getMiddle = $('#middle-earth')
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  for(var i =0; i<lands.length; i++){
      var $newLandArticle = $('<article >')
      // var $header = $('<h1>')
      // $newLandArticle.append($header)
      $newLandArticle.text(lands[i])
      $middleEarth.append($newLandArticle)
  }
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $body.append($middleEarth)
}
makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var $shireArticle = $('article').first()
  var $newULList = $('<ul>')
  for(var i = 0; i<hobbits.length; i++){
  var $newListItem = $('<li class="hobbit">')
  $newListItem.text(hobbits[i])
  $newULList.append($newListItem)
} $shireArticle.append($newULList)
$getMiddle.append($shireArticle)
}
makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  var $ringDiv = $('<div id="the-ring">')
  $ringDiv.addClass("magic-imbued-jewelry")
  $ringDiv.on('click', nazgulScreech )
  var $frodo =$(' .hobbit').first()
  // add the ring as a child of Frodo
  $frodo.append($ringDiv)
}
keepItSecretKeepItSafe()

//.eq

// Part 4
function makeBuddies() {
  // create an aside tag
var $aside = $('<aside>')
  // attach an unordered list of the 'buddies' in the aside
  var $newULList = $('<ul>')
  for(var i = 0; i<buddies.length; i++){
  var $newListItem = $('<li>')
  $newListItem.text(buddies[i])
  $newULList.append($newListItem)
}$aside.append($newULList)
  // insert your aside as a child element of rivendell
  var $riv = $('#middle-earth article:nth-child(2)')
  $riv.append($aside)
  //console.log($riv);
}makeBuddies()


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var $strider = $('aside ul li:nth-child(4)')
  $strider.text('Aragorn')
}beautifulStranger()


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
var $hobbits = $('article:nth-child(1) ul')
//refactor to allow lis in an array to be moved, not ul.
var $riv = $('#middle-earth article:nth-child(2) aside')
//var $aside = $('<aside>')
//$aside.append($hobbits)
$riv.append($hobbits)
}leaveTheShire()

//Part 7
// function forgeTheFellowShip() {
//   // create a new div called 'the-fellowship' within rivendell
//   var $fellowDiv = $('<div id="the-fellowship">')
//   $fellowDiv.text('The Fellowship')
//   // add each hobbit and buddy one at a time to 'the-fellowship'
//   $buds = $('#middle-earth article:nth-child(2) aside ul').first()
//   $hobs = $('#middle-earth article:nth-child(2) aside ul').last()
//   iterate across buds/hobs
//   // after each character is added make an alert that they have joined your party
// var $riv = $('#middle-earth article:nth-child(2)')
// $riv.append($fellowDiv)
// }


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

})
