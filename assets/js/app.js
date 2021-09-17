let anime = ["Berserk", "Sword Art Online", "Demon Slayer", "7 Deadly Sins"];

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

    navMore.innerHTML = "More";
    navMore.setAttribute("id", "more-button");
    navMore.setAttribute("class", "btn btn-primary");
    navMore.type = "submit";

    navSubmit.innerHTML = "Search";
    navSubmit.setAttribute("id", "add-button");
    navSubmit.setAttribute("class", "btn btn-primary");
    navSubmit.type = "submit";
    // navSubmit.value = "Submit";

    navAnime.innerHTML = "Anime";
    navAnime.setAttribute("id", "anime-button");
    navAnime.setAttribute("class", "animeChange btn btn-warning");
    navAnime.type = "submit";

    navSubmit.onclick = function () {

        alert("Did soemthing");

        console.log("TEST Search Button Works");

    };

    navMore.onclick = function () {

        alert("Did something");

        console.log("Test More Button Works");
        
    };

    navForm.appendChild(navInput);
    navForm.appendChild(navSubmit);
    navForm.appendChild(navMore);
    navDiv.appendChild(navAnime);
    navBar.appendChild(navForm);
    navBar.appendChild(navDiv);

    bodyDivTwo.appendChild(navBar);
};

function renderButtons() {

};

pageLoad();
renderButtons();