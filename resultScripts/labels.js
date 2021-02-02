function raceLable(year, gp) {
    let cont = document.getElementsByClassName("label-display")[0];
    cont.innerHTML = "";
    paragraph = document.createElement("p");

    if (gp == "") {
        paragraph.innerHTML = year + " - Race results";
    } else {
        paragraph.innerHTML = year + " " + gp + " - Race result";
    }
    cont.appendChild(paragraph);
}

function driverLable(year, driver) {
    let cont = document.getElementsByClassName("label-display")[0];
    cont.innerHTML = "";
    paragraph = document.createElement("p");

    if (driver == "") {
        paragraph.innerHTML = year + " - Driver standings";
    } else {
        paragraph.innerHTML = year + " - Driver standings - " + driver;
    }
    cont.appendChild(paragraph);
}

function constLable(year, constructor) {
    let cont = document.getElementsByClassName("label-display")[0];
    cont.innerHTML = "";
    paragraph = document.createElement("p");

    if (constructor == "") {
        paragraph.innerHTML = year + " - Constructor standings";
    } else {
        paragraph.innerHTML = year + " - Constructor standings - " + constructor;
    }
    cont.appendChild(paragraph);
}