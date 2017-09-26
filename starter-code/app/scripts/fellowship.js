 console.log("DOM is ready");

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

     var landArr = lands.map(function(land) {
     //console.log('land', land)
     //each land property within an article
     var landArticles = $(`<article><h1>${land}</h1></article>`)

       return landArticles
     })

     //console.log(landArr)

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
     //var theShire = $('article:nth-child(1)')
     var theShire = $('article').first()
     // display an unordered list of hobbits in the shire (which is the second article tag on the page)
     // give each hobbit a class of hobbit
     var $hobbitList = $('<ul>')

     var hobbitsArr = hobbits.map(function(hobbit){
       var $hobbitLi = $('<li>').text(hobbit)
       $hobbitLi.addClass('hobbit')
       return $hobbitLi
       //console.log('hobbit', hobbit)
     })

     $hobbitList.append(hobbitsArr)
     theShire.append($hobbitList)
   }

   makeHobbits()


   // Part 3

   function keepItSecretKeepItSafe() {
     // create a div with an id of 'the-ring'
     // give the div a class of 'magic-imbued-jewelry'
     // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
     // add the ring as a child of Frodo
     var theFrodo = $('.hobbit').first()

     //var $theRing =  $('<div id="the-ring">')
     var $theRing = $('<div>')
     $theRing.attr('id','the-ring')
     $theRing.addClass('magic-imbued-jewelry')
     //console.log($theRing)

     $theRing.on('click', nazgulScreech)
     theFrodo.append($theRing)
   }

   keepItSecretKeepItSafe()

   // Part 4


   function makeBuddies() {
     // create an aside tag
     // attach an unordered list of the 'buddies' in the aside
     // insert your aside as a child element of rivendell

     var theRivendell = $('article:nth-child(2)')
     //console.log(theRivendell)

     var $asideTag = $('<aside>')
     var $buddiesUl = $('<ul>')

     var buddiesArr = buddies.map(function(buddies){
       var $buddiesLi = $('<li>').text(buddies)

       return $buddiesLi
       //console.log('buddies', buddies)
     })

     $buddiesUl.append(buddiesArr)
     $asideTag.append($buddiesUl)
     theRivendell.append($asideTag)
   }

   makeBuddies()


   // Part 5


   function beautifulStranger() {
     // change the 'Strider' textnode to 'Aragorn'
     var Strider = $('aside').find('li').eq(3)
     //console.log(Strider)
     Strider.text('Aragorn')

   }
   beautifulStranger()


   // Part 6

   function leaveTheShire() {
     // assemble the hobbits and move them to Rivendell
     var hobbit = $('.hobbit')
     var $aside = $('article:nth-child(2)').find('ul')

     $aside.append(hobbit)
   }
   leaveTheShire()


   // Part 7


   function forgeTheFellowShip() {
     // create a new div called 'the-fellowship' within rivendell
     // add each hobbit and buddy one at a time to 'the-fellowship'
     // after each character is added make an alert that they have joined your party
     var $theFellowship = $('<div id="the-fellowship">')
     var theRivendell = $('article:nth-child(2)').find('ul')
     var theRivendellLi = theRivendell.find('li')
     console.log(theRivendellLi)
     theRivendell.append($theFellowship)
     //console.log(theRivendell)
     for(var i = 0; i < theRivendellLi.length; i++) {
       //var $person = $('article:nth-child(2)').find('li').eq(0).text();
       //alert(theRivendellLi[i] +" has joined the fellowship")
       $('#the-fellowship').append(theRivendellLi[i])
     }
   }
   forgeTheFellowShip()


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
     alert('horn of gondor has been blown!')


   }

   //hornOfGondor()


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
