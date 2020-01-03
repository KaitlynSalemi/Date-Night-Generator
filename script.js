
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
        var restaurant = userInput.val();
        console.log(restaurant);
        var queryURL = "http://opentable.herokuapp.com/api/restaurants?name=" + restaurant

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // console.log(response);
            for (var i = 0; i < response.restaurants.length; i++) {
                // console.log(response.restaurants[i]);
                // console.log(response.restaurants[i].name)
                // console.log(response.restaurants[i].address)
                // console.log(response.restaurants[i].city)
                // console.log(response.restaurants[i].state)
                // console.log(response.restaurants[i].postal_code)
                // console.log(response.restaurants[i].phone)
                // console.log(response.restaurants[i].price)
                // console.log(response.restaurants[i].reserve_url)
                // console.log(response.restaurants[i].image_url)

                // var restaurantName = $("<p>").text(response.restaurants[i].name);

                // restaurantName.attr('class', 'rt')
                // restaurantName.attr('data-name', response.restaurants[i].name)
                // restaurantName.attr('data-address', response.restaurants[i].address)
                // restaurantName.attr('data-city', response.restaurants[i].city)
                // restaurantName.attr('data-state', response.restaurants[i].state)
                // restaurantName.attr('data-postal_code', response.restaurants[i].postal_code)
                // restaurantName.attr('data-phone', response.restaurants[i].phone)
                // restaurantName.attr('data-price', response.restaurants[i].price)
                // restaurantName.attr('data-reserve_url', response.restaurants[i].reserve_url)
                // restaurantName.attr('data-image_url', response.restaurants[i].image_url)

                // restaurantInfo.append(restaurantName);

                // console.log($(this).attr("data-name"));
                // var rtName = $(this).attr("data-name");
                // var rtImg = $(this).attr("data-image_url");
                // var rtAddress = $(this).attr('data-address');
                // var rtCity = $(this).attr('data-city');
                // var rtState = $(this).attr('data-state');
                // var rtPC = $(this).attr('data-postal_code');
                // var rtPhone = $(this).attr('data-phone');
                // var rtPrice = $(this).attr('data-price');
                
        
                var row = $("<div>").attr('class', "row");
                var col = $("<div>")
                // .attr('class', 'col s12 m7');

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
                var action = $("<div>").attr('class', 'card-action');
                var generateMovieBtn = $("<a>");
        
                span.text(response.restaurants[i].name);
                pAddress.text(response.restaurants[i].address);
                pCSP.text((response.restaurants[i].city)+ " " + (response.restaurants[i].state) + " " +(response.restaurants[i].postal_code));
                pPhone.text("Phone #: " + (response.restaurants[i].phone));
                pPrice.text("Price: " + (response.restaurants[i].price));
                generateMovieBtn.text("Generate Movie");
        
        
                restaurantInfo.append(row);
                row.append(col);
                col.append(cardDiv);
                cardDiv.append(cardImage);
                cardImage.append(img);
                cardImage.append(span);
                cardDiv.append(content);
                content.append(pAddress);
                content.append(pCSP);
                content.append(pPhone);
                content.append(pPrice);
                cardDiv.append(action);
                action.append(generateMovieBtn);

            }
            
        });




        // <div class ="row">
        //     <div class="col s12 m7">
        //         <div class="card">
        //             <div class="card-image">
        //                 <img src="images/sample-1.jpg">
        //                 <span class="card-title">Card Title</span>
        //             </div>
        //             <div class="card-content">
        //                 <p>I am a very simple card. I am good at containing small bits of information.
        //                 I am convenient because I require little markup to use effectively.</p>
        //             </div>
        //             <div class="card-action">
        //                 <a href="#">This is a link</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    
    };

   
       



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
            // console.log(movieResponse)
            console.log(movieResponse)
            var title = movieResponse.Title;
            var pOne = $("<p>").text(title);
            movieInfo.append(pOne);
            console.log(movieResponse.Title);
            var year = movieResponse.Year;
            var pTwo = $("<p>").text(year);
            movieInfo.append(pTwo);
            console.log(movieResponse.Year);
            var rated = movieResponse.Rated;
            var pThree = $("<p>").text(rated);
            movieInfo.append(pThree);
            console.log(movieResponse.Rated);
            var plot = movieResponse.Plot;
            var pFour = $("<p>").text(plot)
            movieInfo.append(pFour);
            console.log(movieResponse.Plot);
            $("#movie-info").empty();
            $("#movie-info").append(pOne, pTwo, pThree, pFour);
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
      });

      userInput.keypress(function(event){
        
        
        if(event.which === 13){
          displayRestaurantInfo();
            // $("#searchBtn").click();
        }
  
  });
      
    });
    
 
