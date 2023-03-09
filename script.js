// Setting variables
const apiUrl = "https://projet-api-mariekosduc.vercel.app";
const buttonRandom = document.getElementById("get-new-definition");
const buttonParadigmes = document.getElementById("get-paradigmes");
const buttonLangages = document.getElementById("get-langages");
const buttonArchitecture = document.getElementById("get-architecture");
const buttonSystemes = document.getElementById("get-systemes-reseau");
const buttonStructures = document.getElementById("get-structures-exec");

let categorySwitch = "/random";

// ------------ Display a random definition -----------------

// get a random definition from API, all categories mixed
const getDefinition = () => {
  fetch(apiUrl + categorySwitch)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      document.getElementById("title").innerHTML = value.title + " :";
      document.getElementById("definition").innerHTML = value.description;
    })
    .catch(function (err) {
      console.log(err);
    });
};

// Display a first random definition on page opening
getDefinition();

// Display a new definition on button click
buttonRandom.onclick = () => {
  categorySwitch = "/random";
  getDefinition();
};

buttonParadigmes.onclick = () => {
  categorySwitch = "/paradigmes/random";
  getDefinition();
};

buttonLangages.onclick = () => {
  categorySwitch = "/langages/random";
  getDefinition();
};

buttonArchitecture.onclick = () => {
  categorySwitch = "/architecture/random";
  getDefinition();
};

buttonSystemes.onclick = () => {
  categorySwitch = "/systeme-reseau/random";
  getDefinition();
};

buttonStructures.onclick = () => {
  categorySwitch = "/structures-exec/random";
  getDefinition();
};

// ---------------- Add choices to the select tags by category ---------------

const paradigmesArray = [];
const getTitlesParadigmes = [paradigmesArray, "/paradigmes"];
const paradigmesSelect = document.getElementById("select-paradigmes");

const langagesArray = [];
const getTitlesLangages = [langagesArray, "/langages"];

const architectureArray = [];
const getTitlesArchitecture = [architectureArray, "/architecture"];

const systemesArray = [];
const getTitlesSystemes = [systemesArray, "/systeme-reseau"];

const testArray = [];
const getTitlesTest = [testArray, "/culture-test"];

const structuresArray = [];
const getTitlesStructures = [structuresArray, "/structures-exec"];

// get all titles from a category and push them in an array
function getAllTitles(catArray, catSelect) {
  fetch(apiUrl + catArray[1])
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      for (let i = 0; i < value.length; i++) {
        catArray[0].push(value[i].title);
      }
      catArray = catArray[0];
      return catArray;
    })
    .then(function (catArray, catSelect) {
      setParadigmesTitle(catArray, catSelect);
    })
    .catch(function (err) {
      console.log(err);
    });
}

getAllTitles(getTitlesParadigmes);
getAllTitles(getTitlesLangages);
getAllTitles(getTitlesArchitecture);
getAllTitles(getTitlesSystemes);
getAllTitles(getTitlesTest);
getAllTitles(getTitlesStructures);

// ESSAI
// let anOption = new Option("Texte", "Valeur", false, false);
// paradigmesSelect.add(anOption);

// let selectValue = paradigmesSelect.value;
// paradigmesSelect.onchange = () => {
//   console.log(selectValue);
// };

// const paradigmesSelect = document.getElementById("select-paradigmes");

// pushing all titles to the select tag
function setParadigmesTitle(array, select) {
  for (let i = 0; i < array.length; i++) {
    console.log("helo");
    let option = new Option(array[i], array[i], false, false);
    select.add(option);
  }
}
