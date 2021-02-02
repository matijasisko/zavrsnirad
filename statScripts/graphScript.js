function createGraph(wins, podiums, DNFs, totalRaces) {
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("graph-container")[0];
    container.innerHTML = "";

    canvas.id = "myChart";
    container.appendChild(canvas)

    other = (totalRaces - (wins + podiums + DNFs));

    var myChart = new Chart(canvas, {
        type: 'pie',
        data: {
            labels: ['Wins', 'Podiums', 'Other', 'DNFs'],
            datasets: [{
                data: [wins, podiums, other, DNFs],
                backgroundColor: [
                    'rgb(225, 6, 0)',
                    'darkred',
                    'rgb(233, 236, 239)',
                    'lightgray'
                ],
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,

        }
    });
}
