/* jshint esversion: 9 */
var quoteElement = document.getElementById("quote");
var quoteHolderElement = document.getElementById("quote-holder");
var quotedElement = document.getElementById("quoted");
fetch("https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
            "x-rapidapi-key": "055b2ccb9cmshb75b4e57c21c01ap1b0d68jsncdcf88a755a2",
            "accept": "application/hal+json"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .catch(err => {
        console.log(err);
    }).then(quote => {
        quoteElement.innerHTML = quote.value;
        quoteElement.className = "show";
        quotedElement.className = "show";
        quoteHolderElement.className = "show";
    });