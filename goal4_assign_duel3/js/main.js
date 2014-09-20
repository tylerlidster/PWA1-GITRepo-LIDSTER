/*

 Name: Tyler Lidster
 Date: 9.19.14
 Class & Section:  PWA1-01
 Comments: "goal4_assign_duel3"
 */
/*
AAssignment 3
Part 3/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!");    //Display FIGHT!!! to the console

   //Define DOM Pieces
    
    var fighter1_txt = document.querySelector("#kabal").querySelector("p");         //return kabal element
    var fighter2_txt = document.querySelector("#kratos").querySelector("p");         //return kratos element
    var round_txt = document.querySelector("heading");                               //return heading element
    var button = document.getElementById("fight_btn");                          //return "fight_btn" element

    console.log();

    //Setup event listener for click event
    button.addEventListener("click", fight, false);

    //Create an array of objects for both fighters
    //Create variable for fighters
    //Give values to name, damage and health for each fighter
    var fighters = [
        {
            name:'BlackWidow',
            damage:20,
            health:100
        },
        {
            name:'WonderWoman',
            damage:20,
            health:100
        }];

    //OLD:
    //player name
    //var fighter1 = ["Black_Widow,20,100"];    //Define array for fighter #1
    //var fighter2 = ["Wonder_Woman,20,100"];   //Define array for fighter #2

    var round = 1;          //Define global variable for fighter rounds

    //Initialize DOM innerHTML text for top of HTML page
    //Text for top of display to show - name, round and health
    round_txt.innerHTML = "click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


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

        //alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]); //Alert box pops up, displaying playerOneName / playerOneHealth / START / playerTwoName / playerTwoHealth
        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        //Determine damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

        //inflict damage
        fighters[0].health -=f1;
        fighters[1].health -=f2;

        console.log(fighters[0].health, fighters[1].health);


        //for (var i = 0; i < 10; i++) //Create For Loop, if i is less than 10, program will loop and the i++ will add a number to the Round number
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //var minDamage1 = fighter1[1] * .5; //Create a variable for minDamage1 / Player 1
            //var minDamage2 = fighter2[2] * .5; //Create a variable for minDamage2 / Player 2
            //var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); //Math.random generates a random number between 0 and 1 / (Maximum Damage - Minimum Damage)-minDamage1 / Create F1 variable
            //var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); //Equation will generate a number between min and max damage / (Maximum Damage - Minimum Damage)-minDamage2 / Create F2 variable

            //inflict damage
            //Define variables for damage using array indexes
            //fighter1[2]-=f1; //Minus the damage inflicted from the random number created above / playerOneHealth -= f1
            //fighter2[2]-=f2; //Minus the damage inflicted from the random number created above / playerTwoHealth -= f2

            //console.log(fighter1[2]+" "+fighter2[2]); //Print to the console playerOneName & playerOneHealth - Do the same for player 2

            //check for winner
            var result = winnerCheck(); //Create result variable to catch the return of the function
            console.log(result); //Console log out result of winnercheck

            round_txt.innerHTML = "ROUND #" + round + " Results:";
            round++;

            if (result === "no winner") //Create if-else statement for if the result is no winner
            {
                fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

                //round++; //Advance to the next round by adding one to the round
                //alert(fighter[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter[2]); //Alert Player 1 and Player 2 of name, amount of health and ROUND # OVER

            } else { //If there's a winner or both players die then use the ELSE code

                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                //Disable the button - need the below if using addEventListener
                button.removeEventListener("click", fight, false);
                //button.disabled = true;

                //button.oneclick = "return false";

                document.querySelector('.buttonblue').innerHTML = 'DONE!!!';

                //alert(result); //To display the result to the user
                //break; //Break will break out of the for loop
            }

        }
    }

    function winnerCheck(){  //Add winnerCheck (); function to check if the players health fell below zero
        var result="no winner";

        if (fighters[0].health <1 && fighters[1].health <1) //If playerOneHealth is less than 1 and playerTwoHealth is less than 1
        {
            result = "You Both Die - GAME OVER"; //Then there is no winner

        } else if(fighters[0].health <1){ //SET UP ELSE-IF / If only playerOneHealth is less than one

            result =fighters[1].name +" WINS!!!"; //Result is playerTwoName WINS!!!

        } else if (fighters[1].health <1) //If only playerTwoHealth is less than one
        {
            result = fighters[0].name +" WINS!!!"; //Result is playerOneName WINS!!!
        }

        return result; //Return the result
    }

    /*******  The program gets started below *******/
    //console.log('programs starts')
    //fight();    //Call the fight function

})();


