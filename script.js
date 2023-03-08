// Setting variables
let apiUrl = "https://projet-api-mariekosduc.vercel.app/definition";
let button = document.getElementById("get-new-definition");

// Fetch API to display a tech definition
const getDefinition = () => {
fetch(apiUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    // produit
    document.getElementById("title").innerHTML = value.title + " :"; // affiche l'intitulé
    document.getElementById("definition").innerHTML = value.description; // affiche la définition
  })
  .catch(function (err) {});
};

// Display a first definition on page opening
getDefinition()

// Display a new definition on button click
button.onclick = () => {
  console.log("clic!");
  getDefinition();
};
