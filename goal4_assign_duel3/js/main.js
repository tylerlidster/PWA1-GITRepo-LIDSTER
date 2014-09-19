/*

 Name: Tyler Lidster
 Date: 9.19.14
 Class & Section:  PWA1-01
 Comments: "goal4_assign_duel3"
 */
/*
AAssignment 2
Part 2/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");    //Display FIGHT!!! to the console

    //player name
    var fighter1 = ["Black_Widow,20,100]"];    //Define array for fighter #1
    var fighter2 = ["Wonder_Woman,20,100"];   //Define array for fighter #2

    var round = 1;          //Define global variable for fighter rounds

    //OLD:
    //player damage
    //var player1Damage = 20; //Define player1Damage as a deduction of 20
    //var player2Damage = 20; //Define player2Damage as a deduction of 20
    //OLD:
    //player health
    //var playerOneHealth = 100; //Define playerOneHealth starting at 100
    //var playerTwoHealth = 100; //Define playerTwoHealth starting at  100
    //OLD:
    //initiate round
    //var round=0; //Set the round to start at 0

    //Main pop-up for fighting game
    function fight(){   //STARTS THE FIGHT FUNCTION

        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]); //Alert box pops up, displaying playerOneName / playerOneHealth / START / playerTwoName / playerTwoHealth

        for (var i = 0; i < 10; i++) //Create For Loop, if i is less than 10, program will loop and the i++ will add a number to the Round number
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5; //Create a variable for minDamage1 / Player 1
            var minDamage2 = fighter2[2] * .5; //Create a variable for minDamage2 / Player 2
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); //Math.random generates a random number between 0 and 1 / (Maximum Damage - Minimum Damage)-minDamage1 / Create F1 variable
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); //Equation will generate a number between min and max damage / (Maximum Damage - Minimum Damage)-minDamage2 / Create F2 variable

            //inflict damage
            //Define variables for damage using array indexes
            fighter1[2]-=f1; //Minus the damage inflicted from the random number created above / playerOneHealth -= f1
            fighter2[2]-=f2; //Minus the damage inflicted from the random number created above / playerTwoHealth -= f2

            console.log(fighter1[2]+" "+fighter2[2]); //Print to the console playerOneName & playerOneHealth - Do the same for player 2

            //check for victor
            var result = winnerCheck(); //Create result variable to catch the return of the function

            console.log(result); //Console log out result of winnercheck

            if (result==="no winner") //Create if-else statement for if the result is no winner
            {
                round++; //Advance to the next round by adding one to the round
                alert(fighter[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter[2]); //Alert Player 1 and Player 2 of name, amount of health and ROUND # OVER

            } else{ //If there's a winner or both players die then use the ELSE code

                alert(result); //To display the result to the user
                break; //Break will break out of the for loop
            };

        };
    };

    function winnerCheck(){  //Add winnerCheck (); function to check if the players health fell below zero
        var result="no winner";

        if (fighter1[2]<1 && fighter2[2]<1) //If playerOneHealth is less than 1 and playerTwoHealth is less than 1
        {
            result = "You Both Die"; //Then there is no winner

        } else if(fighter1[2]<1){ //SET UP ELSE-IF / If only playerOneHealth is less than one

            result =fighter2[0]+" WINS!!!"; //Result is playerTwoName WINS!!!

        } else if (fighter2[2]<1) //If only playerTwoHealth is less than one
        {
            result = fighter1[0]+" WINS!!!"; //Result is playerOneName WINS!!!
        };

        return result; //Return the result after the conditional runs
    };

    /*******  The program gets started below *******/
    //console.log('programs starts')
    fight();    //Call the fight function

})();


