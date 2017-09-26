$(function() {
  console.log("Linked.")
  // Dramatis Personae
  var hobbits = [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc 'Merry' Brandybuck",
    "Peregrin 'Pippin' Took"
  ]

  var buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"]

  var lands = ["The Shire", "Rivendell", "Mordor"]
  var $body = $("body")

  // Part 1

  function makeMiddleEarth() {
    let $middleEarth = $('<section id="middle-earth">')
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    let landArr = lands.map(function(land) {
      let landArticle = $(`
        <article>
          <h1>${land}</h1>
        </article>
        `)
      return landArticle
    })

    // append middle-earth to your document body
    $middleEarth.append(landArr)
    $body.append($middleEarth)
  }

  makeMiddleEarth()

  // Part 2
  let $theShire = $("article:nth-child(1)")
  let $hobbitList = $("<ul>")

  function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit

    let hobbitsArr = hobbits.map(function(hobbit) {
      $eachHobbit = $(`<li class="hobbit">${hobbit}</li>`)
      return $eachHobbit
    })
    $hobbitList.append(hobbitsArr)
    $theShire.append($hobbitList)
  }

  makeHobbits()

  // Part 3

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
    let $divRing = $("<div id='the-ring' class='magic-imbued-jewelry'>")
    let $frodo = $theShire.find(".hobbit").first()
    $frodo.append(" ", $divRing)
    $divRing.on("click", nazgulScreech)
  }

  keepItSecretKeepItSafe()

  // Part 4

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  let $rivendell = $("article:nth-child(2)")

  function makeBuddies() {
    let $aside = $("<aside>")
    let $buddyList = $("<ul>")
    let buddiesArr = buddies.map(function(eachDude) {
      $eachBuddy = $("<li>")
      $eachBuddy.text(eachDude)
      return $eachBuddy
    })
    $buddyList.append(buddiesArr)
    $aside.append($buddyList)
    $rivendell.append($aside)
  }

  makeBuddies()

  // Part 5

  // change the 'Strider' textnode to 'Aragorn'
  function beautifulStranger() {
    let $aragon = $rivendell.find("li").eq(3)
    $aragon.text("Aragorn")
    // console.log($aragon.text())
  }

  beautifulStranger()

  // Part 6

  // assemble the hobbits and move them to Rivendell
  function leaveTheShire() {
    $rivendell.append($hobbitList)
    $theShire.find("ul").remove()
  }

  leaveTheShire()

  // Part 7
  $totalMembers = $rivendell.find("li")

  function forgeTheFellowShip() {
    $theFellowship = $("<div id='the-fellowship'>")
    // console.log($totalMembers.length)
    for (let i = 0; i < $totalMembers.length; i++) {
      $theFellowship.append($totalMembers.eq(i))
      // alert($totalMembers.eq(i).text() + " has joined the fellowship!")
    }
    // $rivendell.find("aside").remove()
    // $rivendell.find("ul").remove()
    $rivendell.append($theFellowship)
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }

  forgeTheFellowShip()

  // Part 8

  function theBalrog() {
    let $gandalf = $totalMembers.eq(0)
    $gandalf.text("Gandalf the White")
    $gandalf.css("background-color", "white")
    $gandalf.css("border", "3px solid grey")
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
  }

  theBalrog()

  // Part 9

  function hornOfGondor() {
    //alert('The horn of gondor has been blown!')
    let $boromir = $totalMembers.eq(4)
    $boromir.css("textDecoration", "line-through")
    $boromir.remove()
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
  }

  hornOfGondor()
  // Part 10
  let $mordor = $("article:nth-child(3)")

  function itsDangerousToGoAlone() {
    let $frodo = $totalMembers.eq(5)
    let $sam = $totalMembers.eq(6)
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    let $mordorDiv = $('<div id="mount-doom">')
    $mordorDiv.append($frodo)
    $mordorDiv.append($sam)
    $totalMembers.remove($frodo)
    $totalMembers.remove($sam)

    $mordor.append($mordorDiv)
  }

  itsDangerousToGoAlone()

  // Part 11

  function weWantsIt() {
    let $gollum = $('<div id="gollum">Gollum</div>')
    $mordor.append($gollum)
    let $ring = $mordor.find("#the-ring")
    $gollum.append($ring)

    let $doom = $mordor.find("#mount-doom")
    $doom.append($gollum)
    // $ring.remove()
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
  }

  weWantsIt()

  // Part 12

  function thereAndBackAgain() {
    let $gollumLoc = $mordor.find("#gollum")
    $gollumLoc.remove()

    let $hobbits = $body.find(".hobbit")
    console.log($hobbits.length)
    $theShire.append($hobbits)
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
  }

  thereAndBackAgain()
})
