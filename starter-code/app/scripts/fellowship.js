console.log("Linked.");
$(function(){

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
    var $middeleEarth = $('<section id="middle-earth">')
      var landArr =lands.map(function(land){ //from string create a new array
        console.log('land',land)
      var landArticle = $(`<article><h1>${land}</h1></article>`)

      return landArticle
    })
    //console.log(landArr)
    $middeleEarth.append(landArr)
    $body.append($middeleEarth)

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
  makeHobbits();

  // Part 3

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
    var theFrodo= $('.hobbit').first()

    var $div = $('<div>')
    $div.attr('id', 'the-ring');
    $div.addClass('magic-imbued-jewelry');
    //console.log($div)
    $div.on('click',nazgulScreech)
    theFrodo.append($div)

  }
keepItSecretKeepItSafe()


  // Part 4


  function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var $buddiesList = $('<ul>')

    var $rivendell = $('article:nth-child(2)')
    var $aside = $('<aside>')
    var buddiesArr = buddies.map(function(buddy){
      var $buddyLi = $('<li>').text(buddy)
      return $buddyLi

    })

    console.log(buddiesArr);

    $buddiesList.append(buddiesArr)
    $aside.append($buddiesList)
    $rivendell.append($aside)
}

makeBuddies()

  // Part 5


  function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    var $stridePath = $('aside').find('li').eq(3)
    //console.log($pathStrider)
    $stridePath.text('Aragorn')

  }
beautifulStranger()

  // Part 6

  function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    var $hobbit = $('.hobbit')
    var $aside = $('article:nth-child(2)').find('ul')

    //console.log(hobbit)
    $aside.append($hobbit)
    //$hobbitList.append(hobbitsArr)

  }
leaveTheShire()

  // Part 7

var $theFellowship = $('<div id="the-fellowship">')
var $rivendell =$('article:nth-child(2)')
var $character = $rivendell.find('li')

  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

    var $rivendell =$('article:nth-child(2)')
    var $character = $rivendell.find('li')
    //console.log($character)

    //$character.append(the-fellowship)
    for(var i = 0; i<$character.length;i++){
      $theFellowship.append($character.eq(i))
      //alert($character.eq(i).text()+ " has joined your party")

    }
    $rivendell.append($theFellowship)



  }
forgeTheFellowShip()

  // Part 8


  function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    var $div = $character.eq(0)
    //console.log($div)
    $div.text("Gandalf the White")
    $div.css('background-color','white')
    $div.css('border','1px solid grey')


  }
  theBalrog()


  // Part 9

  function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    //alert('the horn of gondor has been blown')
    var $boromir = $character.eq(4)
    $boromir.css("textDecoration", "line-through")
    $boromir.remove()
  }
hornOfGondor()

  // Part 10

  function itsDangerousToGoAlone(){
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    var $frodo = $character.eq(5)
    var $sam = $character.eq(6)
    var $mordor =$('article:nth-child(3)')
    var $mordorDiv =$('<div id="mount-doom">')
    $mordorDiv.append($frodo)
    $mordorDiv.append($sam)
    $mordor.append($mordorDiv)

  }
itsDangerousToGoAlone()
  // Part 11
var $mordor =$('article:nth-child(3)')
var $mordorDiv =$('<div id="mount-doom">')

  function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
    var $gollumDiv = $('<div id="gollum">')
    $mordor.append($gollumDiv)
    var $ringLocation = $mordor.find("#the-ring")
    //console.log($ringLocation)
    $gollumDiv.append($ringLocation)
    $gollumDiv.append($mordorDiv)
    //console.log($gollumDiv)
  }

weWantsIt()

  // Part 12


  function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
    $('#gollum').remove()
    

    var $middeleEarth =$('article:nth-child(1)').find('h1')
    //console.log($middeleEarth);
    var $hobbit = $('.hobbit')
    $middeleEarth.append($hobbit)

  }

thereAndBackAgain()
})
