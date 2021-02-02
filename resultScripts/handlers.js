let combination = {
    year: "1950",
    option: "Races",
    selector: "All",

    changeYear: function (newYear) {
        this.year = newYear;
    },

    changeOption: function (newOption) {
        this.option = newOption;
    },

    changeSelector: function (newSelector) {
        this.selector = newSelector;
    }
}

function handleYearClick(e) {

    let temp = document.getElementsByClassName("choose-year")[0];
    temp.getElementsByClassName("selected-something")[0].classList.remove("selected-something");
    e.currentTarget.classList.add("selected-something")


    combination.changeYear(e.currentTarget.innerHTML);
    sendRequest()
}
function handleOptionClick(e) {

    let temp = document.getElementsByClassName("choose-option")[0];
    temp.getElementsByClassName("selected-something")[0].classList.remove("selected-something");
    e.currentTarget.classList.add("selected-something")

    combination.changeOption(e.currentTarget.innerHTML);
    sendRequest();
}
function handleCircuitClick(e) {

    let temp = document.getElementsByClassName("choose-specific")[0];
    temp.getElementsByClassName("selected-something")[0].classList.remove("selected-something");
    e.currentTarget.classList.add("selected-something")


    let round = parseInt(e.currentTarget.getAttribute("value"));
    round = round + 1;
    round = round.toString();

    getGP(combination.year, round);
}
function handleDriverClick(e) {

    let temp = document.getElementsByClassName("choose-specific")[0];
    temp.getElementsByClassName("selected-something")[0].classList.remove("selected-something");
    e.currentTarget.classList.add("selected-something")

    getSingleDriver(combination.year, e.currentTarget.getAttribute("value"));
}
function handleConstructorClick(e) {

    let temp = document.getElementsByClassName("choose-specific")[0];
    temp.getElementsByClassName("selected-something")[0].classList.remove("selected-something");
    e.currentTarget.classList.add("selected-something")

    getSingleConstructor(combination.year, e.currentTarget.getAttribute("value"));
}
function sendRequest() {

    document.getElementsByClassName("right-container")[0].scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });;
    

    switch (combination.option) {
        case "Drivers":
            getDrivers(combination.year);
            combination.changeSelector = "All";
            break;

        case "Races":
            getRaces(combination.year);
            combination.changeSelector = "All";
            break;

        case "Constructors":
            getConstructors(combination.year);
            combination.changeSelector = "All";
            break;
    }

}


let allOptions = document.querySelectorAll(".option-value");
for (let i = 0; i < allOptions.length; i++) {
    let option = allOptions[i];
    option.addEventListener("click", this.handleOptionClick);
}