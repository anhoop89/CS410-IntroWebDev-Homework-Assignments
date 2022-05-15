const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
let app = document.querySelector('#results');

const addDrinksToDom = (drinkItems) => {
  let mainPage = document.createElement("div");
  mainPage.classList.add(".container", "row", "justify-content-center");

  drinkItems.drinks.forEach(drink => {
    let drinkContent = document.createElement("div");
    let drinkImage = document.createElement("img");
    let drinkName = document.createElement("p");

    drinkContent.classList.add("eachDrink", "col-md-3", "p-0", "m-3", "figure");
    // card.style.width = "12rem";

    drinkImage.classList.add("drink-image", "card-img-top");
    drinkImage.alt = drink.strDrink;
    drinkImage.setAttribute("src", drink.strDrinkThumb);

    drinkName.classList.add("drink-name", "font-weight-bold");
    drinkName.textContent = drink.strDrink;

    drinkContent.appendChild(drinkImage);
    drinkContent.appendChild(drinkName);
    mainPage.appendChild(drinkContent);
  });

  app.appendChild(mainPage);
}

const fetchData = (url) => {
  // Add your code here
  fetch(url)
    .then(response => response.json())
    .then(drinkData => {
      console.log(drinkData);
      addDrinksToDom(drinkData);
    })
    .catch(error => {
      console.log(" - Failed to load the source - ", error);
      let showError = document.createElement('div');
      showError.textContent = "An error occured. Please reload the page again!";
      showError.classList.add("text-center");
      app.appendChild(showError);
    })
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    })
};

fetchData(url);
