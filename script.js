
$(document).ready(function() {
  var searchBtn = $("#searchBtn");
var userInput = $("#autocomplete-input");
    var restaurantInfo = $("restaurantInfo")

    function displayRestaurantInfo(){
        var restaurant = $(userInput).val();
        console.log(restaurant);
        var queryURL = "http://opentable.herokuapp.com/api/restaurants?name=" + restaurant

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)

            var restaurantDiv = $("<div class='restaurant'>");

            restaurantInfo.append(restaurantDiv);
        });
    };

    // displayRestaurantInfo();

    $("#searchBtn").on("click", function(event) {
        event.preventDefault();
        
        userInput.val().trim();
        
        displayRestaurantInfo();

    });
};

$("#searchBtn").on("click", function(event) {
  event.preventDefault();
  displayMovieInfo();
//     var restaurant = $("#user-input").val().trim();
//     restaurant.attr("data-name")
//     restaurants.push(restaurant);
    
//     displayRestaurantInfo();
});

// RANDOM MOVIE GENERATOR
// using the movie api, create a list of randomly generated movies to display
// first see what is displayed in the movies in console log, perhaps movie id
// use that informaiton to randomly generate an id which should pick out a random movie, use passowrd generator as an example.

function displayMovieInfo(){
  var movie = $("#movie-input").val().trim();
  console.log(movie)
  var movieURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=e379c334";

  $.ajax({
    url: movieURL,
    method: "GET"
  }).then(function(movieResponse) {
    console.log(movieResponse)

    var movieDiv = $("<div class='movie'>");

    movieInfo.append(movieDiv);

});

}

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


})