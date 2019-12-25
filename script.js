var searchBtn = $("#searchBtn");
var restaurantInfo = $("#restaurantInfo");
var restaurants = [];

function displayRestaurantInfo(){
    var restaurant = $(this).attr("data-name");
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

$(searchBtn).on("click", function(event) {
    event.preventDefault();
    var resraurant = $("#user-input").val().trim();
    restaurants.push(restaurant);
    
    displayRestaurantInfo();
});