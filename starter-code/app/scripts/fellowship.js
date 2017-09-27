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
    var $middleEarth = $('<section id="middle-earth">')
    var landArr = lands.map(function(land){
      //console.log(land)
      var landArticle = $(`
        <article>
          <h1>${land}</h1>
        </article>
        `)
      return landArticle
    })

    $middleEarth.append(landArr)
    $body.append($middleEarth)
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  }

  makeMiddleEarth();


  // Part 2
  var theShire = $('article').first()

  function makeHobbits() {
    var $hobbitList = $('<ul>')
    var listOfHobbits = hobbits.map(function(hobbit){
      var $singleHobbit = $('<li>').text(hobbit)
      $singleHobbit.addClass('hobbit')
      return $singleHobbit
    })
    $hobbitList.append(listOfHobbits)
    theShire.append($hobbitList)
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
  }
  makeHobbits() // need to call the function
  // Part 3


  function keepItSecretKeepItSafe() {
    var theFrodo = $(".hobbit").first()
    var $theRing = $('<div id="the-ring">')
    $theRing.addClass('magic-imbued-jewelry')

    theFrodo.append($theRing)
    $body.on('click', '#the-ring', nazgulScreech)

    function nazgulScreech(){
      document.getElementById("nazgul-screech").play()
    }



    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
  }

var $therivendell = $('article:nth-child(2)')
keepItSecretKeepItSafe()
  // Part 4


  function makeBuddies() {
    var $asideNew = $('<aside>')
    var $buddiesUl = $('<ul>')
    var buddiesList = buddies.map(function(buddie){
      var $singleBuddie = $('<li>').text(buddie)
      return $singleBuddie
    })
    $buddiesUl.append(buddiesList)
    $asideNew.append($buddiesUl)
    $therivendell.append($asideNew)
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
  }
makeBuddies()
  // Part 5


  function beautifulStranger() {
    //var theShire = $('article').first()
    var theStrider = $('article:nth-child(2) li:nth-child(4)')
    theStrider.text('Aragorn')
    // change the 'Strider' textnode to 'Aragorn'
  }
beautifulStranger()

  // Part 6

  function leaveTheShire() {
    var theHobbitsList = $('article:first-child ul')
    $therivendell.append(theHobbitsList)
    //dont need to remove?

    // assemble the hobbits and move them to Rivendell
  }

leaveTheShire()
  // Part 7


  function forgeTheFellowShip() {
    var $ulArray = $('<ul>')
    var $divTwo = $('<div class="the-fellowship">')
    var $olUlArray = $('<ul>')




    var $eachHobbit = $('.hobbit')
    $olUlArray.append($eachHobbit)
    var $eachBuddy = $('article:nth-child(2) ul:first-child li')
    $olUlArray.append($eachBuddy)
    // for(var i = 0; i<= $eachHobbit.length && i< $eachBuddy.length ;i++ ){
    //   $ulArray.append($eachHobbit[i])
    //   $ulArray.append($eachBuddy[i])
    // }
    // console.log($ulArray)

    $olUlArray.children().each(function(index){
      $ulArray.append($(this))
      alert($(this).text() + " has joined the party")
    })
    $divTwo.append($ulArray)
    $therivendell.append($divTwo)



    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
forgeTheFellowShip()

  // Part 8


  function theBalrog() {
    var theGandalf = $('.the-fellowship ul li:nth-child(5)')
    //console.log(theGandalf)
    theGandalf.text('Gandalf the White')
    theGandalf.css({'backgroundColor':'white','border' :'2px solid grey'})
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
  }

theBalrog()
  // Part 9

  function hornOfGondor() {
    alert("The horn of gondor has been blown")
    var theBoromir = $('.the-fellowship ul li:last-child')
    theBoromir.css({'text-decoration': 'line-through'})
    theBoromir.remove()

    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
  }
  hornOfGondor()


  // Part 10

var $theMordor = $('article:nth-child(3)')
  function itsDangerousToGoAlone(){
    var theFrodo = $('.the-fellowship ul li:first-child')
    var theSam = $('.the-fellowship ul li:nth-child(2)')
    var $ulGen = $('<ul>')

    $ulGen.append(theFrodo)
    $ulGen.append(theSam)
    $theMordor.append($ulGen)
    var divThree = $('<div id="mount-doom">')
    $theMordor.append(divThree)
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
  }
itsDangerousToGoAlone()

  // Part 11

  function weWantsIt() {
    var divFour = $('<div id="gollum">')
    $theMordor.append(divFour)
    var theRing = $('#the-ring')
    divFour.append(theRing)
    var gollum = $('#gollum')
    var mountDoom = $('#mount-doom')
    mountDoom.append(gollum)

    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
  }
  weWantsIt()


  // Part 12

  function thereAndBackAgain() {
      var gollum = $('#gollum')
      gollum.remove()
      //var toRemoveOne = $('article:nth-child(2) ul li:nth-child(3)')
      for( var i = 6;i>=2; i--){
        $('article:nth-child(2) ul li').eq(i).remove()
      }
      // var listToRemove= buddies.map(function(buddie){
      //   $therivendell.children().each(function(index){
      //     if((this).text !== buddie) continue
      //     else (this).remove()})
      // })
          //alert($(this).text() + " has joined the party")


      //
      var hobbitsNew = $('.hobbit')
      var $ulGen = $('<ul>')
      $ulGen.append(hobbitsNew)
      theShire.append($ulGen)
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
  }
thereAndBackAgain()

})
