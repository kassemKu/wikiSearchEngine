document.addEventListener("readystatechange", function(event) {
    if (event.target.readyState === "complete") initApp();
});
function initApp() {
    // get out focus elements
    const form = document.getElementById("ws-searchbar");
    // set focus
    // listeners clear text
    form.addEventListener("submit", submitSearch);
}
const submitSearch = (e)=>{
    e.preventDefault();
// delete search result
// process the search
// set focus
};

//# sourceMappingURL=index.f75de5e1.js.map
