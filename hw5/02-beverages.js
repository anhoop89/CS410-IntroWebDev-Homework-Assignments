const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
let app = document.querySelector('#results');

const fetchData = async (url) => {
  // Add your code here
  try {
    let response = await fetch(url);
    const drinkData = await response.json();

    let mainPage = document.createElement("div");
    mainPage.classList.add(".container", "row", "justify-content-center");

    drinkData.drinks.forEach(drink => {
      let drinkContent = document.createElement("div");
      let drinkImage = document.createElement("img");
      let drinkName = document.createElement("p");

      drinkContent.classList.add("eachDrink", "col-md-3", "p-0", "m-3", "figure");

      drinkImage.classList.add("drink-image", "card-img-top");
      drinkImage.alt = drink.strDrink;
      drinkImage.setAttribute("src", drink.strDrinkThumb);

      drinkName.classList.add("drink-name", "font-weight-bold");
      drinkName.textContent = drink.strDrink;

      drinkContent.appendChild(drinkImage);
      drinkContent.appendChild(drinkName);
      mainPage.appendChild(drinkContent);
      app.appendChild(mainPage);
    });

    let loader = document.querySelector("#loading");
    app.removeChild(loader);

  } catch (error) {
    console.log(" - Failed to load the source - ", error);

    let showError = document.createElement('div');
    showError.textContent = "An error occured. Please reload the page again!";
    showError.classList.add("text-center");
    app.appendChild(showError);

    let loader = document.querySelector("#loading");
    app.removeChild(loader);
  }
};

fetchData(url);