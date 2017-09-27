$(function(){
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
  var $middleEarth = $('<section id="middle-earth">')
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  var landArr = lands.map(function(land){
    var landArticle = $(`
      <article>
        <h1> ${land} <h1>
      </article>
      `)
    return landArticle
  })
  // append middle-earth to your document body
  $middleEarth.append(landArr)
  $body.append($middleEarth)

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var theShire = $('article').first()
  var $hobbitList = $('<ul>')

  var hobbitsArr = hobbits.map(function(hobbit){
    var $hobbitLi = $('<li>').text(hobbit)
    $hobbitLi.addClass('hobbit')
    return $hobbitLi
  })
  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)

}

makeHobbits()
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var $theRing = $('<div id="the-ring">')
  // give the div a class of 'magic-imbued-jewelry'
  $theRing.addClass('magic-imbued-jewelry')
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  $theRing.on('click', function(){
    nazgulScreech()
  })
  // add the ring as a child of Frodo
  var $Frodo = $('.hobbit').first()
  $Frodo.append($theRing)
}

keepItSecretKeepItSafe()

// Part 4


function makeBuddies() {
  // create an aside tag
  var $aside = $('<aside>')
  // attach an unordered list of the 'buddies' in the aside
  var $buddiesList = $('<ul>')
  var buddiesArr = buddies.map(function(buddy){
    var $buddiesLi = $('<li>').text(buddy)
    return $buddiesLi


  })
  $buddiesList.append(buddiesArr)
  $aside.append($buddiesList)
  // insert your aside as a child element of rivendell
  var $rivendell = $('article').eq(1)
  $rivendell.append($aside)
}
makeBuddies()

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = $('aside').find('li').eq(3)
  strider.text('Aragorn')
}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var $hobbit = $('.hobbit')
  var $rivendell = $('article').eq(1).find('ul')


  $rivendell.append($hobbit)
}
leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var $rivendell = $('article').eq(1).find('ul')
  var $theFellowship = $('<div>the-fellowship</div>')
  $rivendell.append($theFellowship)
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var $fellowshipArr = $('article').eq(1).find('li')
  var $fellowshipList = $('<ul>')

  $theFellowship.append($fellowshipList)

  $fellowshipArr.each(function(index){
      $fellowshipList.append($(this))
      //alert($(this).text() + " joined the party")
  })
}
forgeTheFellowShip()
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $Gandalf = $('article').eq(1).find('div').find('li').eq(0)
  $Gandalf.text('Gandalf the White')
  // apply style to the element
  // make the background 'white', add a grey border
  $Gandalf.css('backgroundColor','white')
  $Gandalf.css('border', '10px solid grey')

}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  //alert('The horn of Gondor has been blown')
  // Boromir's been killed by the Uruk-hai!
  $boromir = $('article').eq(1).find('div').find('li').eq(4)
  // put a linethrough on boromir's name
  $boromir.css("text-decoration", "line-through")
  // Remove Boromir from the Fellowship
}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  $frodo = $('article').eq(1).find('div').find('li').eq(5)
  $sam = $('article').eq(1).find('div').find('li').eq(6)

  $mordor = $('article').eq(2)
  $mordor.append($frodo)
  $mordor.append($sam)

  // add a div with an id of 'mount-doom' to Mordor
  $mountDoom = $('<div id="mount-doom">')
  $mordor.append($mountDoom)
}
itsDangerousToGoAlone()


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var $gollum = $('<div id="gollum">')
  var $mordor = $('article').eq(2)

  $mordor.append($gollum)
  // Remove the ring from Frodo and give it to Gollum
  var $theRing = $('#the-ring')
  $gollum.append($theRing)
  // Move Gollum into Mount Doom
  $mountDoom = $('#mount-doom')
  $gollum.append($mountDoom)
}

weWantsIt()
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var $gollum = $('#gollum')
  $gollum.remove()
  // remove all the baddies from the document
  var $baddies = $('li[class!=hobbit]')
  $baddies.remove()

  // Move all the hobbits back to the shire
  var $hobbits = $('li[class=hobbit]')
  var theShire = $('article').first()
  var $fellowship = $('aside').find('div')
  theShire.append($hobbits)
  $fellowship.remove()


}
thereAndBackAgain()
})
