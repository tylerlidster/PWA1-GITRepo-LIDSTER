/*
 Name: Tyler Lidster
 Date: 9.5.14
 Class & Section:  PWA1-01
 Comments: "goal1_assign_duel1"
 */
/*
Assignment 1
Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");    //Display FIGHT!!! to the console

    //player name
    var playerOneName = "Spiderman";    //Define playerOneName variable as "Spiderman"
    var playerTwoName = "Batman";   //Define playerTwoName variable as "Batman"

    //player damage
    var player1Damage = 20; //Define player1Damage as a deduction of 20
    var player2Damage = 20; //Define player2Damage as a deduction of 20

    //player health
    var playerOneHealth = 100; //Define playerOneHealth starting at 100
    var playerTwoHealth = 100; //Define playerTwoHealth starting at  100

    //initiate round
    var round=0; //Set the round to start at 0

    function fight(){   //STARTS THE FIGHT FUNCTION
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //Alert box pops up, displaying playerOneName / playerOneHealth / START / playerTwoName / playerTwoHealth
        for (var i = 0; i < 10; i++) //Create For Loop, if i is less than 10, program will loop and the i++ will add a number to the Round number
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; //Create a variable for minDamage1 / Player 1
            var minDamage2 = player2Damage * .5; //Create a variable for minDamage2 / Player 2
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //Math.random generates a random number between 0 and 1 / (Maximum Damage - Minimum Damage)-mindamage1 / Create F1 variable
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //Equation will generate a number between min and max damage / (Maximum Damage - Minimum Damage)-mindamage2 / Create F2 variable

            //inflict damage
            playerOneHealth-=f1; //Minus the damage inflicted from the random number created above / playerOneHealth -= f1
            playerTwoHealth-=f2; //Minus the damage inflicted from the random number created above / playerTwoHealth -= f2

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //Print to the console playerOneName & playerOneHealth - Do the same for player 2

            //check for victor
            var result = winnerCheck(); //Create result variable to catch the return of the function
            console.log(result); //Output to console the result
            if (result==="no winner") //Create if-else statement for if the result is no winner
            {
                round++; //Advance to the next round by adding one to the round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //Alert Player 1 and Player 2 of name, amount of health and ROUND # OVER

            } else{ //If there's a winner or both players die then use the ELSE code
                alert(result); //To display the result to the user
                break; //Break will break out of the for loop
            };

        };
    };

    function winnerCheck(){  //Add winnerCheck (); function to check if the players health fell below zero
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1) //If playerOneHealth is less than 1 and playerTwoHealth is less than 1
        {
            result = "You Both Die"; //Then there is no winner
        } else if(playerOneHealth<1){ //SET UP ELSE-IF / If only playerOneHealth is less than one
            result =playerTwoName+" WINS!!!"; //Result is playerTwoName WINS!!!
        } else if (playerTwoHealth<1) //If only playerTwoHealth is less than one
        {
            result = playerOneName+" WINS!!!"; //Result is playerTwoName WINS!!!
        };
        return result; //Return the result after the conditional runs
    };

    /*******  The program gets started below *******/
    console.log('programs starts')
    fight();    //Call the fight function

})();


