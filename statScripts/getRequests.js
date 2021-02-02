function getConstructors(year) {
    let xhttp = new XMLHttpRequest();
    if (year > 1957) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText).MRData.StandingsTable.StandingsLists[0];

                document.getElementsByClassName("choose-constructor")[0].innerHTML = "";

                for (let i = 0; i < data.ConstructorStandings.length; i++) {
                    constructor = data.ConstructorStandings[i].Constructor.name;
                    constructorID = data.ConstructorStandings[i].Constructor.constructorId;
                    insertConstructor(constructor, constructorID);
                }
            }
        };
        xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/constructorStandings.json?limit=50", true);
        xhttp.send();
    } else {
        warning();
    }
}
function getDrivers(year) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.StandingsTable.StandingsLists[0];

            document.getElementsByClassName("choose-driver")[0].innerHTML = "";

            for (let i = 0; i < data.DriverStandings.length; i++) {
                driver = data.DriverStandings[i].Driver.givenName + " " + data.DriverStandings[i].Driver.familyName;
                driverID = data.DriverStandings[i].Driver.driverId;
                insertDriver(driver, driverID);
            }
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/driverStandings.json?limit=200", true);
    xhttp.send();
}
function getSingleDriver(year, driverID) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.RaceTable;

            let points = 0;
            let wins = 0;
            let podiums = 0;
            let polePositions = 0;
            let DNFs = 0;
            let raceEntries = data.Races.length;

            let name = data.Races[0].Results[0].Driver.givenName + " " + data.Races[0].Results[0].Driver.familyName;
            let code = data.Races[0].Results[0].Driver.code;
            let dob = data.Races[0].Results[0].Driver.dateOfBirth;
            let nationality = data.Races[0].Results[0].Driver.nationality;


            for (let i = 0; i < raceEntries; i++) {

                points += parseInt(data.Races[i].Results[0].points);
                if (data.Races[i].Results[0].position == 1) {
                    wins += 1;
                }
                if (data.Races[i].Results[0].position == 2 || data.Races[i].Results[0].position == 3) {
                    podiums += 1;
                }
                if (data.Races[i].Results[0].grid == 1) {
                    polePositions += 1;
                }
                if (data.Races[i].Results[0].status != "Finished") {
                    if (data.Races[i].Results[0].status.slice(0, 1) != "+") {
                        DNFs += 1;
                    }
                }
            }

            createDriverInformation(name, code, dob, nationality, raceEntries, points, wins, polePositions)
            getConstructorNames(year, driverID);
            createGraph(wins, podiums, DNFs, raceEntries)
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/drivers/" + driverID + "/results.json?limit=50", true);
    xhttp.send();
}
function getConstructorNames(year, driverID) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.ConstructorTable;

            let temp = document.getElementsByClassName("information-container")[0];
            let cont = document.createElement("div");
            let ul = document.createElement("ul");
            cont.classList.add("container", "drivers-constructors", "list-container")
            ul.classList.add("list-group", "list-group-flush")
            temp.appendChild(cont)
            cont.appendChild(ul)

            for (let i = 0; i < data.Constructors.length; i++) {

                let li = document.createElement("li");
                li.classList.add("list-group-item");
                li.innerHTML = data.Constructors[i].name;
                ul.appendChild(li)
            }

            isOverflown(cont)
        }

    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/drivers/" + driverID + "/constructors.json?limit=50", true);
    xhttp.send();
}
function getSingleConstructor(year, constructorID) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.RaceTable;

            name = data.Races[0].Results[0].Constructor.name;
            nationality = data.Races[0].Results[0].Constructor.nationality;

            let points = 0;
            let wins = 0;
            let podiums = 0;
            let polePositions = 0;
            let DNFs = 0;
            let raceEntries = 0;

            for (let i = 0; i < data.Races.length; i++) {
                for (let j = 0; j < data.Races[i].Results.length; j++) {
                    raceEntries += 1;
                    points += parseInt(data.Races[i].Results[j].points);
                    if (data.Races[i].Results[j].position == 1) {
                        wins += 1;
                    }
                    if (data.Races[i].Results[j].position == 2 || data.Races[i].Results[j].position == 3) {
                        podiums += 1;
                    }
                    if (data.Races[i].Results[j].grid == 1) {
                        polePositions += 1;
                    }
                    if (data.Races[i].Results[j].status != "Finished") {
                        if (data.Races[i].Results[j].status.slice(0, 1) != "+") {
                            DNFs += 1;
                        }
                    }
                }
            }

            createConstructorInformation(name, nationality, points, wins, polePositions, raceEntries)
            getDriverNames(year, constructorID)
            createGraph(wins, podiums, DNFs, raceEntries);
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/constructors/" + constructorID + "/results.json?limit=50", true);
    xhttp.send();
}
function getDriverNames(year, constructorID) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.DriverTable;

            let temp = document.getElementsByClassName("information-container")[0];
            let cont = document.createElement("div");
            let ul = document.createElement("ul");
            cont.classList.add("container", "drivers-constructors", "list-container")
            ul.classList.add("list-group", "list-group-flush")
            temp.appendChild(cont)
            cont.appendChild(ul)

            for (let i = 0; i < data.Drivers.length; i++) {

                let li = document.createElement("li");
                li.classList.add("list-group-item");
                li.innerHTML = data.Drivers[i].givenName + " " + data.Drivers[i].familyName;
                ul.appendChild(li)
            }

            isOverflown(cont)
        }

    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/constructors/" + constructorID + "/drivers.json?limit=50", true);
    xhttp.send();

}
