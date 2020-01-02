
$(document).ready(function() {
    var userInput = $("#autocomplete-input");
    var restaurantInfo = $("#restaurant-info");
    var movieInfo = $("#movie-info");
    var movie = "";
    
    function movieGenre(price){
      var comedy = ["We're The Millers", "SuperBad", "Life Of Brain", "Animal House", "Hot Fuzz"];
      var adventure = ["Avengers: Endgame", "Jurassic Park", "Casino Royale", "Mission Impossible: Fallout", "John Wick"];
      var biography = ["Hacksaw Ridge", "First Man", "The Social Network", "Bohemian Rhapsody", "Sully"];
      var romance = ["The Notebook", "Titanic", "Forrest Gump", "A Walk To Remember", "Crazy Rich Asians"];

      if (price === 4){
        var randomNumber = Math.floor(Math.random()* romance.length)
        movie = romance[randomNumber]
        displayMovieInfo();
        
      }
      else if (price === 3){
        var randomNumber = Math.floor(Math.random()* biography.length)
        movie = biography[randomNumber]
        displayMovieInfo();
      }
      else if (price === 2){
        var randomNumber = Math.floor(Math.random()* adventure.length)
        movie = adventure[randomNumber]
        displayMovieInfo();
      }
      else if (price === 1){
        var randomNumber = Math.floor(Math.random()* comedy.length)
        movie = comedy[randomNumber]
        displayMovieInfo();
      }
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
            for (var i = 0; i<response.restaurants.length;i++){
              movieGenre(response.restaurants[i].price);

            }
          });
        };
        
    function displayMovieInfo(){
      console.log(movie);
      
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
