let combination = {
    year: "1950",
    driver: "",
    constructor: "",

    changeYear: function (newYear) {
        this.year = newYear;
    },

    changeOption: function (newDriver) {
        this.driver = newDriver;
    },

    changeSelector: function (newConstructor) {
        this.constructor = newConstructor;
    }
}
function handleYearClick(e) {

    let temp = document.getElementsByClassName("choose-year")[0];
    temp.getElementsByClassName("selected-something")[0].classList.remove("selected-something")
    e.currentTarget.classList.add("selected-something")

    let temp2 = document.getElementsByClassName("list-container");
    for (let i = 1; i < temp2.length; i++) {
        temp2[i].scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });;
    }



    combination.changeYear(e.currentTarget.innerHTML)

    getDrivers(combination.year)
    getConstructors(combination.year)
}
function handleDriverClick(e) {

    removeSelection()

    e.currentTarget.classList.add("selected-something")
    getSingleDriver(combination.year, e.currentTarget.getAttribute("value"));
}
function handleConstructorClick(e) {

    removeSelection()

    e.currentTarget.classList.add("selected-something")
    getSingleConstructor(combination.year, e.currentTarget.getAttribute("value"));
}
function removeSelection() {
    let dCont = document.getElementsByClassName("choose-driver")[0];
    let cCont = document.getElementsByClassName("choose-constructor")[0];

    let selectedDriver = dCont.getElementsByClassName("selected-something")[0];
    let selectedConstructor = cCont.getElementsByClassName("selected-something")[0];

    if (selectedDriver) {
        selectedDriver.classList.remove("selected-something")
    }
    if (selectedConstructor) {
        selectedConstructor.classList.remove("selected-something")

    }
}
