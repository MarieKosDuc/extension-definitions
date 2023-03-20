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

// get a random definition from API , all categories mixed
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
const langagesSelect = document.getElementById("select-langages");

const architectureArray = [];
const getTitlesArchitecture = [architectureArray, "/architecture"];
const architectureSelect = document.getElementById("select-architecture");

const systemesArray = [];
const getTitlesSystemes = [systemesArray, "/systeme-reseau"];
const systemesSelect = document.getElementById("select-systemes");

const testArray = [];
const getTitlesTest = [testArray, "/culture-test"];
const testCultureSelect = document.getElementById("select-culture-test");

const structuresArray = [];
const getTitlesStructures = [structuresArray, "/structures-exec"];
const structuresSelect = document.getElementById("select-structures-exec");

// get all titles from a category and push them in an array
function getAllTitles(catArray, catSelect) {
  // fetch API on category endpoint (as set in catArray[1])
  fetch(apiUrl + catArray[1])
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    // push definitions titles into catArray[0], reduce catArray to its [0] index to eliminate the category endpoint
    .then(function (value) {
      for (let i = 0; i < value.length; i++) {
        catArray[0].push(value[i].title);
      }
      catArray = catArray[0];
      return catArray;
    })
    // use catArray to create HTML options in the category's "select" tag
    .then(function (catArray) {
      setParadigmesTitle(catArray, catSelect);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// pushing all titles to the select tag
function setParadigmesTitle(array, select) {
  for (let i = 0; i < array.length; i++) {
    // for each definition: create an "option" HTML tag with title as text, index as value
    let option = new Option(array[i], i, false, false);
    select.add(option);
  }
}

getAllTitles(getTitlesParadigmes, paradigmesSelect);
getAllTitles(getTitlesLangages, langagesSelect);
getAllTitles(getTitlesArchitecture, architectureSelect);
getAllTitles(getTitlesSystemes, systemesSelect);
getAllTitles(getTitlesTest, testCultureSelect);
getAllTitles(getTitlesStructures, structuresSelect);

// Display the selected definition in main div

paradigmesSelect.onchange = () => {
  let selectValue = paradigmesSelect.value;
  // console.log(selectValue);
  if (selectValue) {
    categorySwitch = `/paradigmes/${selectValue}`;
    getDefinition();
  }
};

langagesSelect.onchange = () => {
  let selectValue = langagesSelect.value;
  // console.log(selectValue);
  if (selectValue) {
    categorySwitch = `/langages/${selectValue}`;
    getDefinition();
  }
};

architectureSelect.onchange = () => {
  let selectValue = architectureSelect.value;
  console.log(selectValue);
  if (selectValue) {
    categorySwitch = `/architecture/${selectValue}`;
    getDefinition();
  }
};

systemesSelect.onchange = () => {
  let selectValue = systemesSelect.value;
  console.log(selectValue);
  if (selectValue) {
    categorySwitch = `/systeme-reseau/${selectValue}`;
    getDefinition();
  }
};

testCultureSelect.onchange = () => {
  let selectValue = testCultureSelect.value;
  // console.log(selectValue);
  if (selectValue) {
    categorySwitch = `/culture-test/${selectValue}`;
    getDefinition();
  }
};

structuresSelect.onchange = () => {
  let selectValue = structuresSelect.value;
  // console.log(selectValue);
  if (selectValue) {
    categorySwitch = `/structures-exec/${selectValue}`;
    getDefinition();
  }
};
