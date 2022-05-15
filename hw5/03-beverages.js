$(document).ready(function () {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  // Add your code here
  const addDrinksToDom = drink => {
    $("#results").addClass(".container row justify-content-center");
    $("#results")
      // drinkContent
      .append($('<div>')
      .addClass("eachDrink col-md-3 p-0 m-3 figure")
        // drinkImage
        .append($('<img>')
        .addClass("drink-image card-img-top")
        .attr('src', drink.strDrinkThumb).attr('alt', drink.strDrink)
        )
        // drinkName
        .append($('<p>')
        .addClass("drink-name card-text")
        .text(drink.strDrink)
        )
      )
  };
  $.ajax({
    type: "GET",
    url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
    data: {
      format: 'json'
    },
    dataType: 'json',

    success: drinkData => {
      console.log("Loaded data successfully", drinkData);
      drinkData.drinks.forEach(drink => {
        addDrinksToDom(drink);
      })
    },

    error: error => {
      console.log(" - Failed to load the source - ", error);
      $("#results").append($('<p>')
        .addClass("text-center").text("An error occured. Please reload the page again!")
      );
    },

    complete: loader => {
      $("#loading").remove();
    },
  });
});
