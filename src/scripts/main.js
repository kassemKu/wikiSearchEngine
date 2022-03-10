import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

function initApp() {
  // set focus
  setSearchFocus();
  // get searchbar element
  const form = document.getElementById("ws-searchbar");
  // listeners
  form.addEventListener("submit", submitSearch);
}

const submitSearch = (e) => {
  // ignore the default prevent (refresh page)
  e.preventDefault();
  // delete search result
  // process the search
  processTheSearch();
  // set focus
  setSearchFocus();
};

// search action
const processTheSearch = async () => {
  // clean the search text before submitted
  const searchTerm = getSearchTerm();

  // if empty search "" return
  if (searchTerm === "") return;
  // process the search
  const resultArray = await retrieveSearchResults(searchTerm);
};
