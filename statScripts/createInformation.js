function createDriverInformation(name, code, dateOfBirth, nationality, totalRaces, points, wins, polePositions) {

    let container = document.getElementsByClassName("information-container")[0];
    container.innerHTML = "";

    nameElement = document.createElement("h5");
    dateOfBirthElement = document.createElement("h6");
    natElement = document.createElement("h6");
    raceStarts = document.createElement("h6");
    totalPoints = document.createElement("h6");
    ppR = document.createElement("h6");
    winPer = document.createElement("h6");
    poles = document.createElement("h6");
    constructors = document.createElement("h6");

    if (code) {
        nameElement.innerHTML = name + " - " + code;
    } else {
        nameElement.innerHTML = name;
    }

    dateOfBirthElement.innerHTML = "Date of birth: " + dateConverter(dateOfBirth);
    natElement.innerHTML = "Nationality: " + nationality;
    raceStarts.innerHTML = "Race entries: " + totalRaces;
    totalPoints.innerHTML = "Points: " + points;
    ppR.innerHTML = "Points per race: " + ((points) / (totalRaces)).toFixed(2);
    winPer.innerHTML = "Win percentage: " + ((wins / totalRaces) * 100).toFixed(2) + "%";
    poles.innerHTML = "Pole positions: " + polePositions;
    constructors.innerHTML="CONSTRUCTOR"

    container.appendChild(nameElement)
    container.appendChild(document.createElement("hr"))
    container.appendChild(dateOfBirthElement)
    container.appendChild(natElement)
    container.appendChild(document.createElement("hr"))
    container.appendChild(totalPoints)
    container.appendChild(raceStarts)
    container.appendChild(poles)
    container.appendChild(ppR)
    container.appendChild(winPer)
    container.appendChild(document.createElement("hr"))
    container.appendChild(constructors)
}
function createConstructorInformation(name, nationality, points, wins, polePositions, totalRaces) {
    let container = document.getElementsByClassName("information-container")[0];
    container.innerHTML = "";

    nameElement = document.createElement("h5");
    natElement = document.createElement("h6");
    totalPoints = document.createElement("h6");
    raceStarts = document.createElement("h6");
    ppR = document.createElement("h6");
    winPer = document.createElement("h6");
    poles = document.createElement("h6");
    drivers = document.createElement("h6");

    nameElement.innerHTML = name;
    natElement.innerHTML = "Nationality: " + nationality;
    raceStarts.innerHTML = "Race entries: " + totalRaces;
    totalPoints.innerHTML = "Points: " + points;
    ppR.innerHTML = "Points per race: " + ((points) / (totalRaces)).toFixed(2);
    winPer.innerHTML = "Win percentage: " + ((wins / totalRaces) * 100).toFixed(2) + "%";
    poles.innerHTML = "Pole positions: " + polePositions;
    drivers.innerHTML = "DRIVERS";


    container.appendChild(nameElement)
    container.appendChild(document.createElement("hr"))
    container.appendChild(natElement)
    container.appendChild(document.createElement("hr"))
    container.appendChild(totalPoints)
    container.appendChild(raceStarts)
    container.appendChild(poles)
    container.appendChild(ppR)
    container.appendChild(winPer)
    container.appendChild(document.createElement("hr"))
    container.appendChild(drivers)
}