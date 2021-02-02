function createHeader(col1, col2, col3, col4, col5, multiple) {

    document.getElementsByClassName("results-display")[0].innerHTML = "";
    if (multiple == true) {
        document.getElementsByClassName("choose-specific")[0].innerHTML = "";
        insertRace("All", -1);
    }
    createTemplate("results-display", "table", "table", "", "")
    createTemplate("table", "thead", "theadClass", "", "")
    createTemplate("table", "tbody", "tbodyClass", "", "")
    createTemplate("theadClass", "tr", "trHeaderClass", "", "")
    createTemplate("trHeaderClass", "th", "", col1, "col")
    createTemplate("trHeaderClass", "th", "", col2, "col")
    createTemplate("trHeaderClass", "th", "", col3, "col")
    createTemplate("trHeaderClass", "th", "", col4, "col")
    createTemplate("trHeaderClass", "th", "", col5, "col")
}
function createTemplate(parent, element, className, innerHTML, scopeName) {

    let temp1 = document.getElementsByClassName(parent);
    let temp2 = document.createElement(element);

    if (className != "") {
        temp2.classList.add(className)
    }
    if (scopeName != "") {
        temp2.setAttribute("scope", scopeName)
    }

    temp2.innerHTML = innerHTML;
    temp1[0].appendChild(temp2)

}
function createContent(gp, winner, circuit, date, constructor, number) {

    let className = "trContentClass" + number;

    createTemplate("tbodyClass", "tr", className, "", "")
    createTemplate(className, "th", "", gp, "row")
    createTemplate(className, "td", "", winner, "")
    createTemplate(className, "td", "", circuit, "")
    createTemplate(className, "td", "", date, "")
    createTemplate(className, "td", "", constructor, "")
}
function insertRace(gp, i) {
    let temp = document.createElement("li");
    let temp2 = document.createElement("a");
    temp.classList.add("list-group-item");
    temp2.setAttribute("value", i);
    document.getElementsByClassName("choose-specific")[0].appendChild(temp).appendChild(temp2);

    temp2.innerHTML = gp;

    if (i == -1) {
        temp2.addEventListener("click", this.sendRequest)
        temp2.classList.add("selected-something")
    } else {
        temp2.addEventListener("click", this.handleCircuitClick)
    }
}
function insertDriver(name, driverID) {
    let temp = document.createElement("li");
    let temp2 = document.createElement("a");
    temp.classList.add("list-group-item");
    temp2.setAttribute("value", driverID);
    document.getElementsByClassName("choose-specific")[0].appendChild(temp).appendChild(temp2);

    temp2.innerHTML = name;

    if (driverID == -1) {
        temp2.addEventListener("click", this.sendRequest)
        temp2.classList.add("selected-something")
    } else {
        temp2.addEventListener("click", this.handleDriverClick)
    }
}
function insertConstructor(name, constructorID) {
    let temp = document.createElement("li");
    let temp2 = document.createElement("a");
    temp.classList.add("list-group-item");
    temp2.setAttribute("value", constructorID);
    document.getElementsByClassName("choose-specific")[0].appendChild(temp).appendChild(temp2);

    temp2.innerHTML = name;

    if (constructorID == -1) {
        temp2.addEventListener("click", this.sendRequest)
        temp2.classList.add("selected-something")
    } else {
        temp2.addEventListener("click", this.handleConstructorClick)
    }
}
function warning() {

    document.getElementsByClassName("label-display")[0].innerHTML = "";
    document.getElementsByClassName("choose-specific")[0].innerHTML = "";

    let container = document.createElement("div");
    container.classList.add("text-center");

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "The Constructors Championship was not awarded until 1958.";


    let temp = document.getElementsByClassName("results-display")[0];
    temp.innerHTML = "";

    temp.appendChild(container)
    container.appendChild(paragraph)
}