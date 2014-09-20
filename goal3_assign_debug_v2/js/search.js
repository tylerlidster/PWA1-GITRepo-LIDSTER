/*Name: Tyler Lidster
Date: 9.19.14
Class & Section:  PWA1-01
Comments: "goal3_debug_search_3"
*/
// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var search; //DEFINE VARIABLE
    var resultsDIV = document.getElementById("results"),    //DEFINE VARIABLES
		searchInput = document.forms[0].search,             //Define Variables
		currentSearch = ''
	;

	// Validates search query
	var validate = function(query){

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                     //while loop for search results
			query = query.substring(1, query.length);
		}
		while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);   //while loop for search results
        }

		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.");
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;     //Call the function

		}

		search(query);
	};

	// Finds search matches
        search = function(query) {

        // split the user's search query string into an array

        var queryArray = query.split(" ");                      //split the search string into an array
        // array to store matched results from database.js
        var results = [];

        // loop through each index of db array
        for (var i = 0, j = db.length; i < j; i++) {                //for loop

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                dbItem = queryArray[ii].toLowerCase();

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(dbItem);
                if (compare !== -1) {               //if compare is not equal to -1
                    results.push(db[i]);            //push results

                }

            }


        }

        results.sort();

        // Check that matches were found, and run output functions
        //If-else statement
        //If the search results length is 0 or empty then there is not a match
        //Else: show/display the matches
        if (results.length === 0) {
            noMatch();
        } else {
            showMatches(results);
        }

    };

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;

	};

	// Put matches into page as paragraphs with anchors
    //Display matched search result onto page in a last, main link large
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
        //for loop
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].substring(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validate(query);


        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };

})();