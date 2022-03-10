export const getSearchTerm = () => {
  const rawSearchTerm = document
    .querySelector("form > input#ws-search")
    .value.trim();

  // look for the space (tow or more) with global case sensitive
  const regex = /[ ]{2,}/gi;
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const wikiSearchString = getWikiSearchString(searchTerm);
  const wikiSearchResults = await requestData(wikiSearchString);
  console.log(wikiSearchResults);
};

const getWikiSearchString = (searchTerm) => {
  const maxChars = getMaxChars();
  const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
  const searchString = encodeURI(rawSearchString);
  return searchString;
  // https://en.wikipedia.org/w/api.php?
  //action=query
  // &generator=search
  //   &gsrsearch=${searchTerm}
  //   &gsrlimit=20
  // &prop=pageimages|extracts
  //   &exchars=${maxChars}
  //   &exintro
  //   &explaintext
  //   &exlimit=max
  // &format=json
  // &origin=*
};

const getMaxChars = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxChars;
  if (width < 414) maxChars = 65;
  if (width >= 414 && width < 1400) maxChars = 100;
  if (width >= 1400) maxChars = 131;

  return maxChars;
};

const requestData = async (searchString) => {
  try {
    const response = await fetch(searchString);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
