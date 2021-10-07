let anime = ["Berserk", "Sword Art Online", "Demon Slayer", "7 Deadly Sins"];
let valueNumber = 20;
let animeCheck = true;
let apiKey = "aAzuofkf1CDirDH1Beh8nyTLxRfds6MC";
let repeatCheck;
// let testClick = document.getElementById("add-button");

function pageLoad() {

    let body = document.getElementsByTagName("body")[0];
    let bodyDivOne = document.createElement("div");
    let bodyDivTwo = document.createElement("div");
    let bodyDivThree = document.createElement("div");
    let bodyDivFour = document.createElement("div");
    let bodyDivFive = document.createElement("div");
    let bodyDivSix = document.createElement("div");
    let bodyDivSeven = document.createElement("div");
    let bodyBr = document.createElement("br");
    let navInput = document.createElement("input");
    let navBar = document.createElement("nav");
    let navForm = document.createElement("form");
    let navSubmit = document.createElement("button");
    let navMore = document.createElement("button");
    let navAnime = document.createElement("button");
    let navDiv = document.createElement("div");

    bodyDivOne.setAttribute("id", "start");
    bodyDivOne.setAttribute("class", "container mw-100");
    // Try className if this does not work

    bodyDivTwo.setAttribute("id", "navRow");
    bodyDivTwo.setAttribute("class", "row");

    bodyDivThree.setAttribute("class", "row");

    bodyDivFour.setAttribute("class", "col-xl-3 col-lg-3 col-md-5 col-sm-12");

    bodyDivFive.setAttribute("id", "buttonArea");

    bodyDivSix.setAttribute("class", "col-xl-9 col-lg-9 col-md-7 col-sm-12");

    bodyDivSeven.setAttribute("id", "imgHere");
    
    // body.appendChild(bodyDiv);

    // bodyDiv.setAttribute("class", "row");
    // bodyDiv.setAttribute("id", "navRow");

    body.appendChild(bodyDivOne);
    bodyDivOne.appendChild(bodyDivTwo);
    bodyDivOne.appendChild(bodyBr);
    bodyDivOne.appendChild(bodyDivThree);
    bodyDivThree.appendChild(bodyDivFour);
    bodyDivFour.appendChild(bodyDivFive);
    bodyDivThree.appendChild(bodyDivSix);
    bodyDivSix.appendChild(bodyDivSeven);

    

    // Id was newAnimal
    navInput.setAttribute("id", "newAnime");
    navInput.setAttribute("class", "form-control");
    navInput.setAttribute("placeholder", "Example: Bleach");
    navInput.type = "text";

    navBar.setAttribute("class", "navbar navbar-dark bg-dark");

    navForm.setAttribute("class", "form-inline");

    navMore.innerText = "More";
    navMore.setAttribute("id", "more-button");
    navMore.setAttribute("class", "btn btn-primary");
    navMore.type = "button";

    navSubmit.innerText = "Search";
    navSubmit.setAttribute("id", "add-button");
    navSubmit.setAttribute("class", "btn btn-primary");
    navSubmit.type = "submit";
    // navSubmit.value = "Submit";

    navAnime.innerText = "Anime";
    navAnime.setAttribute("id", "anime-button");
    navAnime.setAttribute("class", "animeChange btn btn-warning");
    navAnime.type = "submit";

    // navMore.onclick = function () {

    //     alert("Did something");

    //     console.log("Test More Button Works");
        
    // };

    navForm.appendChild(navInput);
    navForm.appendChild(navSubmit);
    navForm.appendChild(navMore);
    navDiv.appendChild(navAnime);
    navBar.appendChild(navForm);
    navBar.appendChild(navDiv);

    bodyDivTwo.appendChild(navBar);
};

function renderButtons() {

    const buttonsCheck = document.getElementById("buttonArea");

    // while (buttonsCheck.firstChild) {
    //     buttonsCheck.removeChild(clearButtons.lastChild);
    // };

    while (buttonsCheck.lastChild) {

        buttonsCheck.removeChild(buttonsCheck.lastChild);

    };

    for (let i = 0; i < anime.length; i++) {

        let createAnimeButton = document.createElement("button");
        
        createAnimeButton.setAttribute("class", "animeButton btn btn-info");
        createAnimeButton.setAttribute("dataName", anime[i]);
        // createAnimeButton.setAttribute("onclick", "gifQuery(this)");
        createAnimeButton.innerText = anime[i];

        createAnimeButton.onclick = function () {
            gifQuery(this);
        };

        buttonsCheck.appendChild(createAnimeButton);
    };
};

pageLoad();
renderButtons();

let testClick = document.getElementById("add-button");
testClick.onclick = function() {newQuery()};

function gifQuery (info) {

    event.preventDefault();

    valueNumber = 20;

    let searchAnime = info.getAttribute("dataname");
    // console.log(searchAnime);

    if (searchAnime == repeatCheck) {
        return
    } else {
        repeatCheck = searchAnime;
    };

    document.getElementById('imgHere').innerHTML = '';

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchAnime + "&api_key=" + apiKey + "&limit=10";

    fetch(queryURL)
        .then(response => {

            return response.json()

        })
        .then(response => {

            // console.log(response);
            let result = response.data;
            console.log(result);

            for (i = 0; i < result.length; i++) {

                let imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "card");
                
                let textDiv = document.createElement("div");
                textDiv.setAttribute("class", "card-body");

                let p = document.createElement("p");
                p.setAttribute("class", "cardbody");
                p.innerText = "Rating: " + result[i].rating;
                p.setAttribute("style", "float: left;");

                let buttonFav = document.createElement("button");
                buttonFav.setAttribute("class", "fave btn btn-primary");
                buttonFav.innerText = "Favorite";
                buttonFav.setAttribute("style", "float: right");

                let imageGif = document.createElement("img");
                imageGif.setAttribute("src", result[i].images.fixed_height_still.url);
                imageGif.setAttribute("dataStill", result[i].images.fixed_height_still.url);
                imageGif.setAttribute("dataAnimate", result[i].images.fixed_height.url);
                imageGif.setAttribute("dataState", "still");
                imageGif.setAttribute("class", "gif");

                textDiv.appendChild(p)
                textDiv.appendChild(buttonFav);
                imgDiv.appendChild(imageGif)
                imgDiv.appendChild(textDiv);

                imageGif.onclick = function () {
                    animateGif(this);
                };

                let appendGif = document.getElementById("imgHere");
                appendGif.appendChild(imgDiv);
            };

            valueNumber += 10;

            console.log(valueNumber);
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

function animateGif(info) {

    let getAnimate = info.getAttribute("dataanimate");
    let getStill = info.getAttribute("datastill");
    let stateCheck = info.getAttribute("datastate");

    if (stateCheck === "still") {
        info.setAttribute("src", getAnimate);
        info.setAttribute("datastate", "not");
    }
    else {
        info.setAttribute("src", getStill);
        info.setAttribute("datastate", "still");
    };
};

function newQuery() {

    event.preventDefault();

    let searchText = document.getElementById("newAnime").value;
    let searchCheck = document.getElementById("newAnime").value.toLocaleLowerCase().replace(/\s+/g, "");

    // console.log(anime);

    for (let i = 0; i < anime.length; i++) {
        let animeLower = anime[i].toLocaleLowerCase().replace(/\s+/g, "");
        // console.log(animeLower);
        // console.log(searchCheck);
        if (animeLower == searchCheck) {
            document.getElementById("newAnime").value = '';
            console.log("Anime name/item already exists.");
            return
        };
    };

    repeatCheck = searchText;

    anime.push(searchText);
    console.log(anime);
    // alert(searchText);
    // let searchInfo = searchText.replace(/\s+/g, "");
    // alert(searchInfo);
    let createAnimeButton = document.createElement("button");
    const buttonsCheck = document.getElementById("buttonArea");

    createAnimeButton.setAttribute("class", "animeButton btn btn-info");
    createAnimeButton.setAttribute("dataName", searchText);
    createAnimeButton.innerText = searchText;

    createAnimeButton.onclick = function () {
        gifQuery(this);
    };

    buttonsCheck.appendChild(createAnimeButton);

    document.getElementById("newAnime").value = '';
    document.getElementById('imgHere').innerHTML = '';

    valueNumber = 20

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchText + "&api_key=" + apiKey + "&limit=10";

    fetch(queryURL)
        .then(response => {

            return response.json()

        })
        .then(response => {

            // console.log(response);
            let result = response.data;
            // console.log(result);

            for (i = 0; i < result.length; i++) {

                let imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "card");
                
                let textDiv = document.createElement("div");
                textDiv.setAttribute("class", "card-body");

                let p = document.createElement("p");
                p.setAttribute("class", "cardbody");
                p.innerText = "Rating: " + result[i].rating;
                p.setAttribute("style", "float: left;");

                let buttonFav = document.createElement("button");
                buttonFav.setAttribute("class", "fave btn btn-primary");
                buttonFav.innerText = "Favorite";
                buttonFav.setAttribute("style", "float: right");

                let imageGif = document.createElement("img");
                imageGif.setAttribute("src", result[i].images.fixed_height_still.url);
                imageGif.setAttribute("dataStill", result[i].images.fixed_height_still.url);
                imageGif.setAttribute("dataAnimate", result[i].images.fixed_height.url);
                imageGif.setAttribute("dataState", "still");
                imageGif.setAttribute("class", "gif");

                textDiv.appendChild(p)
                textDiv.appendChild(buttonFav);
                imgDiv.appendChild(imageGif)
                imgDiv.appendChild(textDiv);

                imageGif.onclick = function () {
                    animateGif(this);
                };

                let appendGif = document.getElementById("imgHere");
                appendGif.appendChild(imgDiv);
            };

            valueNumber += 10;

            // console.log(valueNumber);
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

// pageLoad();
// renderButtons();