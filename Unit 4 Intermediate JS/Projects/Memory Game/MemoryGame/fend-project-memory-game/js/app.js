
/*Hide the modal */
$('#myModal').css('display',"none")

/* Begin the Timer */
/* Simple timer function courtesy of stackoverflow https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer */

function getDuration() {
    jQuery(function ($) {
        var fiveMinutes = 60 * 1,
            display = $('#time');
        starttimer(fiveMinutes, display);
    });
};


/* Create a list that holds all of your cards */
let deck =  Array.prototype.slice.call($('.deck').children().children());
let deckCardNames = [];
/* Create an empty list to store new decks */
let newDeck = [];
let matchArray = [];
let winArray = [];
let wIndex = [];
let score = $('.moves')[0].innerHTML;
let moveCount = 0;
let secondselapsed = 0;
deck.forEach( function(item) {
    deckCardNames.push(item.className);
});
/* Create an index of values representing the position of the cards within the deck */
let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let today = new Date()


/*call the setup function */
setup();

function setup(){
    shuffle(array);
    createdeck(deckCardNames);
    replacedeck(newDeck);
    resetstars();
    resetwinarray();
    getDuration();
}
/* set the start time */


/** Display the cards on the page 
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/
/* Create an Eventlistener that when restart is clicked the deck array is resorted */

$('#restart-button').click(function() {
    location.reload();
    setup()
});

/* Simple timer function courtesy of stackoverflow https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer */
function starttimer(duration, display) {
    var timer = duration, minutes, seconds;
    timerstein = setInterval(function () {
        secondselapsed++
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer == 0) {
            gameover();
        }
    }, 1000);
    return timerstein
};

function gameover() {
    alert( "This is taking too long, let's try again!")
    location.reload()
}

function resetstars(){
    numStars = $('.stars li');
    for (let z = 3; z > numStars.length; z--) {
        $('.stars').append('<li></li>');
        $('.stars li:last').append('<i></i>');
    };
    $('.stars i').toggleClass("fa fa-star", true);
    score = 0;
    $('.moves').text(score);
};

function resetwinarray(){
    while (winArray.pop()) {};
    while (wIndex.pop()) {};
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function createdeck(deckCardNames) {
    while (newDeck.pop()) {}
    for (let x = 0; x < deckCardNames.length; x++) {
        newDeck.push(deckCardNames[array[x]]);
    }
    return newDeck;

}
function replacedeck(newDeck) {
    /*change the li class to card for each li element of the deck*/
        $('li.card.match').toggleClass('match');
        $('li.card.open.show').toggleClass('open show');
        //$('li').toggleClass('card', true))
    /*Retrieve the i selectors from the existing deck and assign to variable */
    i_elements_deck = $('.card .fa')
    $.each(i_elements_deck, function(index) {
        $(this).removeAttr('class')
        $(this).addClass("fa " + newDeck[index])
    });
    return "succesfully reset game!"
}

/*    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)*/
function incrementscore(){
    moveCount++
    if (moveCount % 2 == 0){
        score++;
    };    
    $('.moves').text(score)
    if (score == 25) {
        $('.stars li:last').remove();
    } else if(score == 30) {
        $('.stars li:last').remove();
    } else if ($('.stars li').length ==1) {
        /* Do not remove the last star */
    };
};

/* set up the event listener for a card. */
$('ul.deck li').click(function() {
    curr_item_name= $(this).children()[0].className;
    curr_item_index= $(this).index()    
    if ($.inArray($(this).index(), wIndex) == -1) {
            /* *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)*/
        if (matchArray.length < 1){
            $(this).toggleClass('open show');
            matchArray.push([curr_item_name,curr_item_index]);
            incrementscore();
        } else if (matchArray.length == 1) {
            if (matchArray[0][1] != curr_item_index) {
                $(this).toggleClass('open show');
                matchArray.push([curr_item_name,curr_item_index]);
                incrementscore();
            };
        };
        if (matchArray.length == 2) {
            /*  - display the card's symbol (put this functionality in another function that you call from this one)*/
            /*  - if the list already has another card, check to see if the two cards match*/
            p2gamelogic();
        }; 
    };
});

function stoptimer() {
    clearInterval(timerstein);
};

function showmodal(){
    stoptimer()
    $(".modal-footer h3").html( "Time to Solve: " + secondselapsed + " Seconds");
    $('.stars').clone().appendTo('.modal-body')
    $('#myModal').css('display',"block");
}
function p2gamelogic(){
    setTimeout(function() {
        if (matchArray[0][0] === matchArray[1][0] && matchArray[0][0] !== undefined && matchArray[1][0] !== undefined) {
            if ($.inArray(matchArray[0], winArray) == -1) {
                winArray.push(matchArray[0][0]);
                winArray.push(matchArray[1][0]);
                wIndex.push(matchArray[0][1]);
                wIndex.push(matchArray[1][1]);
                /*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)*/
                $('li.card.open.show').toggleClass('match');
                $('li.card.match.open.show').toggleClass('open show');
                while (matchArray.pop()) {};
                if (winArray.length == 16) {
                    /*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one) */
                    showmodal()
                    //alert("We Have a Winner! Star Level: " + $('ul.stars')[0].childElementCount + " number of moves required: " + score + ", completion time: " + $('#time').text() );
                    //location.reload()
                    }
                }
            } else {
                /*    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one) */
                $('li.card.open.show').toggleClass('open show');
                while (matchArray.pop()) {};
            }
        }, 1000);
};
