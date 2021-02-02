function getRaces(year) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.RaceTable;

            createHeader("Grand prix", "Winner", "Circuit", "Date", "Constructor", true);
            raceLable(year, "");
            for (let i = 0; i < data.Races.length; i++) {

                gp = data.Races[i].raceName;
                winner = data.Races[i].Results[0].Driver.givenName + " " + data.Races[i].Results[0].Driver.familyName;
                circuit = data.Races[i].Circuit.circuitName;
                date = dateConverter(data.Races[i].date);
                constructor = data.Races[i].Results[0].Constructor.name;

                insertRace(gp, i);
                createContent(gp, winner, circuit, date, constructor, i);
            }
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/results/1.json?limit=50", true);
    xhttp.send();
}





function getGP(year, round) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.RaceTable.Races[0];
            createHeader("Position", "Driver", "Car number", "Points", "Constructor", false);
            raceLable(year, data.raceName);


            for (let i = 0; i < data.Results.length; i++) {

                position = data.Results[i].position;
                carNumber = data.Results[i].number;
                points = data.Results[i].points;
                driver = data.Results[i].Driver.givenName + " " + data.Results[i].Driver.familyName;
                constructor = data.Results[i].Constructor.name;

                if (data.Results[i].status != "Finished") {
                    if (data.Results[i].status.slice(0, 1) != "+") {
                        position = "DNF";
                    }
                }
                createContent(position, driver, carNumber, points, constructor, i);
            }
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/" + round + "/results.json?limit=50", true);
    xhttp.send();
}
function getDrivers(year) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.StandingsTable.StandingsLists[0];

            createHeader("Position", "Driver", "Points", "Constructor", "Nationality", true);
            driverLable(year, "");

            for (let i = 0; i < data.DriverStandings.length; i++) {
                position = data.DriverStandings[i].position;
                nationality = data.DriverStandings[i].Driver.nationality;
                points = data.DriverStandings[i].points;
                driver = data.DriverStandings[i].Driver.givenName + " " + data.DriverStandings[i].Driver.familyName;
                constructor = data.DriverStandings[i].Constructors[0].name;
                driverID = data.DriverStandings[i].Driver.driverId;

                insertDriver(driver, driverID);
                createContent(position, driver, points, constructor, nationality, i);
            }
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/driverStandings.json?limit=150", true);
    xhttp.send();
}
function getSingleDriver(year, driverID) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.RaceTable;
            createHeader("Grand prix", "Position", "Points", "Date", "Constructor", false);
            let name = data.Races[0].Results[0].Driver.givenName + " " + data.Races[0].Results[0].Driver.familyName;
            driverLable(year, name)

            for (let i = 0; i < data.Races.length; i++) {

                gp = data.Races[i].raceName;
                position = data.Races[i].Results[0].position;
                points = data.Races[i].Results[0].points;
                date = dateConverter(data.Races[i].date);
                constructor = data.Races[i].Results[0].Constructor.name;

                if (data.Races[i].Results[0].status != "Finished") {
                    if (data.Races[i].Results[0].status.slice(0, 1) != "+") {
                        position = "DNF";
                    }
                }

                createContent(gp, position, points, date, constructor, i);
            }
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/drivers/" + driverID + "/results.json?limit=50", true);
    xhttp.send();
}
function getConstructors(year) {
    let xhttp = new XMLHttpRequest();



    if (year > 1957) {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText).MRData.StandingsTable.StandingsLists[0];
                createHeader("Position", "Constructor", "Nationality", "Points", "Wins", true);
                constLable(year, "")

                for (let i = 0; i < data.ConstructorStandings.length; i++) {

                    position = data.ConstructorStandings[i].position;
                    constructor = data.ConstructorStandings[i].Constructor.name;
                    nationality = data.ConstructorStandings[i].Constructor.nationality;
                    points = data.ConstructorStandings[i].points;
                    wins = data.ConstructorStandings[i].wins;
                    constructorID = data.ConstructorStandings[i].Constructor.constructorId;

                    insertConstructor(constructor, constructorID);
                    createContent(position, constructor, nationality, points, wins, i);
                }
            }
        };
        xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/constructorStandings.json?limit=50", true);
        xhttp.send();
    } else {
        warning();
    }
}
function getSingleConstructor(year, constructorID) {
    let xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText).MRData.RaceTable;
            createHeader("Round", "Grand prix", "Cricuit name", "Date", "Points", false);
            name = data.Races[0].Results[0].Constructor.name;
            constLable(year, name)


            for (let i = 0; i < data.Races.length; i++) {

                gp = data.Races[i].raceName;
                circuitName = data.Races[i].Circuit.circuitName;
                date = dateConverter(data.Races[i].date);
                round = data.Races[i].round;
                points = 0;
                for (let k = 0; k < data.Races[i].Results.length; k++) {

                    points = points + parseInt(data.Races[i].Results[k].points);

                }
                points = points.toString();

                createContent(round, gp, circuitName, date, points, i);
            }
        }
    };
    xhttp.open("GET", "http://ergast.com/api/f1/" + year + "/constructors/" + constructorID + "/results.json?limit=50", true);
    xhttp.send();
}