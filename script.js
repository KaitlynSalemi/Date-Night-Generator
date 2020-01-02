var searchBtn = $("#searchBtn");
var userInput = $("#autocomplete-input");

$(document).ready(function() {
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


})