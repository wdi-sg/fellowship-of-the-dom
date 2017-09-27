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
var $body = $('body');


// Part 1


function makeMiddleEarth() {
  var $middleEarth = $('<section id="middle-earth">')

  var landArr = lands.map(function(land) {
    // console.log('land', land)
    var landArticle = $(`
      <article>
      <h1>${land}</h1>
      </article>
      `)

    return landArticle
  })

  // console.log(landArr)

  $middleEarth.append(landArr)
  $body.append($middleEarth)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var theShire = $('article').first()
  var $hobbitList = $('<ul>')

  var hobbitsArr = hobbits.map(function(hobbit) {
    var $hobbitLi = $('<li>').text(hobbit)
      $hobbitLi.addClass('hobbit')
      return $hobbitLi
  })

  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  var $theRing = $('<div id="the-ring">')
    $theRing.addClass('magic-imbued-jewelry')
    $theRing.on('click', nazgulScreech)
    $('article ul :nth-child(1)').append($theRing)

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe()

// Part 4


function makeBuddies() {
  var rivendell = $('article:nth-child(2)')
  var $buddyList = $('<aside>')

  var buddyArr = buddies.map(function(buddy) {
    var $buddyUl = $('<ul>').text(buddy)
    return $buddyUl
  })

    $buddyList.append(buddyArr)
    rivendell.append($buddyList)
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies()

// Part 5


function beautifulStranger() {
  $('article aside ul:nth-child(4)').replaceWith('<ul>Aragorn</ul>')
  // $('<ul>Aragorn</ul>').replaceAll('article aside ul:nth-child(4)')
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  var rivendell = $('article:nth-child(2)')
  var $hobbitList = $('article ul')

  rivendell.append($hobbitList)
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  var rivendell = $('article:nth-child(2)')
  var $theFellowship = $('<div id="the-fellowship">')
  var $fellowshipMembers = $('article:nth-child(2) ul')
  // $('#the-fellowship ul').first().removeClass('.hobbit')

  for(var i = 0, len = $fellowshipMembers.length; i < len; i++){
    $theFellowship.append($fellowshipMembers[i]);
    // alert($fellowshipMembers[i].textContent + ' has joined the fellowship!');
}
    rivendell.append($theFellowship)
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip()

// Part 8


function theBalrog() {
  $('#the-fellowship ul:nth-child(2)').replaceWith('<ul>Gandalf the White</ul>')

  $('#the-fellowship ul:nth-child(2)').css({'background-color': 'white', 'border': 'grey 5px solid'})

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog()

// Part 9

function hornOfGondor() {
  // alert('the horn of gondor has been blown')

  $('#the-fellowship ul:nth-child(5)').css({'text-decoration': 'line-through'})

  $('#the-fellowship ul:nth-child(5)').remove()

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  var mordor = $('article:nth-child(3)')
  var $mountDoom = $('<div id="mount-doom">')
  var frodo = $('#the-fellowship ul li:nth-child(1)')
  var sam = $('#the-fellowship ul li:nth-child(2)')

  $mountDoom.append(frodo, sam)

  mordor.append($mountDoom)

  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  var mordor = $('article:nth-child(3)')
  var $gollum = $('<div id="gollum">')
  var $mountDoom = $('<div id="mount-doom">')

  mordor.append($gollum)
  $('#the-ring').appendTo($gollum)


  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt()

// Part 12

function thereAndBackAgain() {

  $('#gollum').remove()

  var theShire = $('article').first()
  var rivendell = $('article:nth-child(2)')
  var $theHobbits = $('<div id="the-hobbits">')

  var $frodoAndSam = $('#mount-doom li')

  theShire.append($frodoAndSam)

  var $hobbitMembers = $('#the-fellowship ul li')

  theShire.append($hobbitMembers)


  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

thereAndBackAgain()

})
