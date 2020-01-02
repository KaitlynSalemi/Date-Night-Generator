
$(document).ready(function() {
    var userInput = $("#autocomplete-input");
    var restaurantInfo = $("#restaurant-info");
    var movieInfo = $("#movie-info");
    var movie = {};
    function movieGenre(){
      var comedy = ["We're The Millers", "SuperBad", "Life Of Brain", "Animal House", "Hot Fuzz"];
      var adventure = ["Avengers: Endgame", "Jurassic Park", "Casino Royale", "Mission Impossible: Fallout", "John Wick"];
      var biography = ["Hacksaw Ridge", "First Man", "The Social Network", "Bohemian Rhapsody", "Sully"];
      var romance = ["The Notebook", "Titanic", "Forrest Gump", "A Walk To Remember", "Crazy Rich Asians"];
    }

    function displayRestaurantInfo(){
        var restaurant = $(userInput).val();
        console.log(restaurant);
        var queryURL = "http://opentable.herokuapp.com/api/restaurants?name=" + restaurant

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)

        });
    };

    function displayMovieInfo(){
        var movieURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=e379c334";

        $.ajax({
            url: movieURL,
            method: "GET"
        }).then(function(movieResponse) {
            console.log(movieResponse)

        });

    };
    
    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        
        userInput.val().trim();
        
        displayRestaurantInfo();
        displayMovieInfo();
    });


});

// function movieGenre(){
//   var genre = ["Action", "Thriller", "Musical","Crime", "Drama"]
//   var randomGenre = [];

// function movieButton(){
//   searchBtn();
// }

// function randomNumber(){
//   return Math.floor(Math.random()* randomGenre.length)
// };

// function searchBtn() {
//   var text = "";
//   for (var i = 0; i<4; i++){
//       text+=randomGenre[randomNumber()]
//   }
//   document.getElementById("searchBtn").value = text;
  
// }

// confirms();
// 
