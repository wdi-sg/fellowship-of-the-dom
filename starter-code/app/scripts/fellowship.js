$(function () {
  console.log("DOM is ready");

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
    var landArticle = $(`
      <article>
        <h1>${land}</h1>
      </article>
      `)

    return landArticle
  })

  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $middleEarth.append(landArr)
  $body.append($middleEarth)
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var theShire = $('article').first()
  var $hobbitList = $('<ul>')

  var hobbitsArr = hobbits.map(function(hobbit) {
    var $hobbitLi = $('<li class="hobbit">').text(hobbit)
    return $hobbitLi
  })
  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)
}
makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  var $ring = $('<div id="the-ring" class="magic-imbued-jewelry">')
  $ring.on('click', nazgulScreech)
  $('.hobbit').first().append($ring)
}
keepItSecretKeepItSafe()



// Part 4


function makeBuddies() {
  var $aside = $('<aside>')
  var $buddiesList = $('<ul>')
  var buddiesArr = buddies.map(function(buddies) {
    var buddiesLi = $('<li>').text(buddies)
    return buddiesLi
  })
  $buddiesList.append(buddiesArr)
  $aside.append($buddiesList)
  var rivendell = $('article:nth-child(2)')
  rivendell.append($aside)
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
makeBuddies()
// Part 5

function beautifulStranger() {
  var $strider = $('aside').find('ul').find('li').eq(3)
  $strider.text('Aragorn')
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var $hobbits = $('.hobbit')
  var uList = $('article:nth-child(2)').find('ul')
  uList.append($hobbits)
}
leaveTheShire()

// Part 7
function forgeTheFellowShip() {
  var rivendell = $('article:nth-child(2)')
  var $theFellowship = $('<div>the-fellowship</div>')
  rivendell.append($theFellowship)
  var $fellowshipLi = $('<ul>')
  $theFellowship.append($fellowshipLi)

  var $fellowshipArr = $('article:nth-child(2)').find('li')
  $fellowshipArr.each(function() {
    $fellowshipLi.append($(this))
    // alert($(this).text() + ' has joined your party')
  })
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip()


// Part 8


function theBalrog() {
  var $gandalf = $('article:nth-child(2)').find('div').find('li').eq(0)
  $gandalf.text('Gandalf the White')
  $gandalf.css("backgroundColor", "white")
  $gandalf.css("border", "10px solid grey")
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog()

// Part 9

function hornOfGondor() {
  // alert('The horn of Gondor has been blown!')
  var $boromir = $('article:nth-child(2)').find('div').find('li').eq(4)
  $boromir.css("text-decoration", "line-through")
  $boromir.remove()

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor()


// Part 10

function itsDangerousToGoAlone(){
  var $frodo = $('article:nth-child(2)').find('div').find('li').eq(4)
  var $sam = $('article:nth-child(2)').find('div').find('li').eq(5)
  // console.log($sam.text())
  var $mordor = $('article:nth-child(3)')
  $mordor.append($frodo)
  $mordor.append($sam)
  var $mountDoom = $('<div id="mount-doom">')
  $mordor.append($mountDoom)
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  var $gollum = $('<div id="gollum">')
  var $mordor = $('article:nth-child(3)')
  $mordor.append($gollum)
  var $ring = $('#the-ring')
  $gollum.append($ring)
  var $mountDoom = $('#mount-doom')
  $mountDoom.append($gollum)
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt()

// Part 12

function thereAndBackAgain() {
  var $gollum = $('#gollum')
  $gollum.remove()
  var $hobbits = $('.hobbit')
  var theShire = $('article').first()
  theShire.append($hobbits)
  var buddies = $('article:nth-child(2)').find('ul')
  buddies.remove()
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain()

})
