// <!-- JAVASCRIPT  -->
// <!-- ========================================= -->

$(document).ready(function () {

    var targetNumber = Math.floor(Math.random() * 50 + 10)

    // Selects a randomScore number to be shown at the start of the game
    // Number should be should be between 10 - 60
    $("#random-score").text(targetNumber);


    // Appending random number to the randomNumber id in the html doc
    //

    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    // Setting up random numbers for each crystal
    // Random number has to be between 1 - 12

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //  Decaring variables for tallies
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);


    //resets the game
    function reset() {
    userTotal=0;
    targetNumber = Math.floor(Math.random() * 50 + 10);
        $('#random-score').text(targetNumber);
     
    }

    //adds the wins to the userTotal
    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text("Wins:"+wins);
        reset();
    }

    //adds the losses to the userTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text("Losses:"+losses);
        reset()
    }

    //sets up click for crystals
    $('.crystal-image1').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#total-score').text(userTotal);
        //sets win/lose conditions
        if (userTotal === targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();
        }

    });

    $('.crystal-image2').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#total-score').text(userTotal);
        if (userTotal === targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();

        }

    });



    $('.crystal-image3').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#total-score').text(userTotal);
        //sets win/lose conditions
        if (userTotal === targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();

        }

    });


    $('.crystal-image4').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#total-score').text(userTotal);

        if (userTotal === targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();
        }



    });
});
