
$(document).ready(function() {
  var userInput = $("#autocomplete-input");
  var restaurantInfo = $("#restaurant-info");
  var movieInfo = $("#movie-info");
  var movie = "";
  
  
  function movieGenre(price){
    $('.movie-display').empty();
    
      
    var comedy = ["We're The Millers", "SuperBad", "Life Of Brain", "Animal House", "Hot Fuzz", "Beetlejuice", "Ferris Bueller's Day Off", "The Hangover", "The Princess Bride", "This Is Where I Leave You"];
    var adventure = ["Avengers: Endgame", "Jurassic Park", "Casino Royale", "Mission Impossible: Fallout", "John Wick", "Jumanji", "Back To The Future", "Spectre", "The Goonies", "The Incredibles"];
    var biography = ["Hacksaw Ridge", "First Man", "The Social Network", "Bohemian Rhapsody", "Sully", "October Sky", "Dunkirk", "Rocketman", "The Wolf Of Wall Street", "Catch Me If You Can"];
    var romance = ["The Notebook", "Titanic", "Forrest Gump", "A Walk To Remember", "Crazy Rich Asians", "Dirty Dancing", "Silver Linings Playbook", "When Harry Met Sally", "Pretty Woman", "Breakfast At Tiffany's"];
    
    
    if (price == 4){
      var randomNumber = Math.floor(Math.random()* romance.length)
      movie = romance[randomNumber]
      
      displayMovieInfo();
    }
    else if (price == 3){
      var randomNumber = Math.floor(Math.random()* biography.length)
      movie = biography[randomNumber]
      
      displayMovieInfo();
    }
    else if (price == 2){
      var randomNumber = Math.floor(Math.random()* adventure.length)
      movie = adventure[randomNumber]
      displayMovieInfo();
    }
    else if (price == 1){
      var randomNumber = Math.floor(Math.random()* comedy.length)
      movie = comedy[randomNumber]
      displayMovieInfo();
    }
    
  }

  function displayRestaurantInfo(){
    var restaurant = userInput.val();
    
    var queryURL = "https://cors-anywhere.herokuapp.com/opentable.herokuapp.com/api/restaurants?name=" + restaurant

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#restaurant-info").empty();
     
      for (var i = 0; i < response.restaurants.length; i++) {
       
        

        var row = $("<div>").attr('class', "row");
        var col = $("<div>")
       

        var cardDiv = $("<div>").attr('class', 'card');
        var cardImage = $("<div>").attr('class', 'card-image');
        var img = $("<img>");
        img.attr('src', response.restaurants[i].image_url);
        var span = $("<span>").attr('class', 'card-title');
        var content = $("<div>").attr('class', 'card-content');
        var pAddress = $("<p>");
        var pCSP = $("<p>");
        var pPhone = $("<p>");
        var pPrice = $("<p>");
        var reserve = $("<p>");
        var reserveLink = $("<a>");
        var action = $("<div>").attr('class', 'card-action');
        var generateMovieBtn = $("<a>").attr('class', 'generate-movie');
        generateMovieBtn.attr('href', movieInfo);

        span.text(response.restaurants[i].name);
        pAddress.text(response.restaurants[i].address);
        pCSP.text((response.restaurants[i].city)+ " " + (response.restaurants[i].state) + " " +(response.restaurants[i].postal_code));
        pPhone.text("Phone #: " + (response.restaurants[i].phone));
        pPrice.text("Price: " + (response.restaurants[i].price));
        pPrice.attr("data-price",response.restaurants[i].price);
        pPrice.attr("class", "price");
        reserveLink.text("Reserve")
        reserveLink.attr("href", response.restaurants[i].reserve_url);
        reserveLink.attr("target", "_blank");
        generateMovieBtn.text("Generate Movie");
        
       


        restaurantInfo.append(row);
        row.append(col);
        col.append(cardDiv);
        cardDiv.append(cardImage);
        cardImage.append(img);
        content.append(span);
        cardDiv.append(content);
        content.append(pAddress);
        content.append(pCSP);
        content.append(pPhone);
        content.append(pPrice);
        content.append(reserve);
        reserve.append(reserveLink);
        cardDiv.append(action);
        action.append(generateMovieBtn);
          

      }
        
    });
  };

  
  function displayMovieInfo(){

    
    var movieURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=e379c334";

    $.ajax({
      url: movieURL,
      method: "GET"
    }).then(function(movieResponse) {
      
      var row = $("<div>").attr('class', "row");
     
      var col = $("<div>")
      var cardDiv = $("<div>").attr('class', 'card');


      var cardImage = $("<div>").attr('class', 'card-image');
      var img = $("<img>");
      img.attr('src', movieResponse.Poster);
      
      var content = $("<div>").attr('class', 'card-content');
      var pTitle = $("<p>").attr('class', 'movie-title');
      var pYear = $("<p>");
      var pRating = $("<p>");
      var pPlot = $("<p>");

     
      pTitle.text(movieResponse.Title);
      pYear.text("Year: " + movieResponse.Year);
      pRating.text("Rating: " + (movieResponse.Rated));
      pPlot.text(movieResponse.Plot);
      
      movieInfo.append(row);
      row.append(col);
      col.append(cardDiv);
      cardDiv.append(cardImage);
      cardImage.append(img);
      cardDiv.append(content);
      content.append(pTitle, pYear, pRating, pPlot);
      row.attr('class', 'movie-display')

    });

  };

  $(document).on("click", ".generate-movie",function(event) {
    event.preventDefault();

    var price = $(this).parent().parent().find("div.card-content").find("p.price").attr("data-price");

    movieGenre(price);
  });

  $("#searchBtn").on("click", function(event) {
    event.preventDefault();
    
    userInput.val().trim();
    
    displayRestaurantInfo();
  });

  userInput.keypress(function (event) {
    if (event.which === 13) {
      displayRestaurantInfo();
    }
  });

});




 
