function insertDriver(name, driverID) {
    let temp = document.createElement("li");
    let temp2 = document.createElement("a");
    temp.classList.add("list-group-item");
    temp2.setAttribute("value", driverID);
    document.getElementsByClassName("choose-driver")[0].appendChild(temp).appendChild(temp2);

    temp2.innerHTML = name;
    temp2.addEventListener("click", this.handleDriverClick)
}
function insertConstructor(name, constructorID) {
    let temp = document.createElement("li");
    let temp2 = document.createElement("a");
    temp.classList.add("list-group-item");
    temp2.setAttribute("value", constructorID);
    document.getElementsByClassName("choose-constructor")[0].appendChild(temp).appendChild(temp2);

    temp2.innerHTML = name;
    temp2.addEventListener("click", this.handleConstructorClick)
}
function warning() {
    cont = document.getElementsByClassName("choose-constructor")[0];
    cont.innerHTML = "";
    text = document.createElement("p");
    text.innerHTML = "The Constructors Championship was not awarded until 1958.";
    cont.appendChild(text);
}
function isOverflown(element) {
    if (element.scrollHeight > element.clientHeight) {
    } else {
        element.classList.add("scroll-margin");
    }
}
