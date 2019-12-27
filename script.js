var searchBtn = $("#searchBtn");
var userInput = $("#user-input");
var restaurantInfo = $("restaurantInfo")
var restaurants = [];

function displayRestaurantInfo(){
    var restaurant = $(this).attr("data-name");
    var queryURL = "http://opentable.herokuapp.com/api/restaurants?=" + restaurant

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)

        var restaurantDiv = $("<div class='restaurant'>");

        restaurantInfo.append(restaurantDiv);
    });
};

// $(searchBtn).on("click", function(event) {
//     event.preventDefault();
//     var restaurant = $("#user-input").val().trim();
//     restaurant.attr("data-name")
//     restaurants.push(restaurant);
    
//     displayRestaurantInfo();
// });