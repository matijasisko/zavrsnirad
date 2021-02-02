window.onload = function () {
    let temp = document.querySelector(".choose-year");
    for (let i = 1950; i < 2020; i++) {
        let temp2 = document.createElement("li")
        let temp3 = document.createElement("a")
        temp2.classList.add("list-group-item")
        temp3.classList.add("year-value")
        temp.appendChild(temp2)
        temp2.appendChild(temp3)
        temp3.innerHTML = i;
        temp3.addEventListener("click", this.handleYearClick)

        if (i == combination.year) {
            temp3.classList.add("selected-something")
            temp3.click()
        }
    }
};


function dateConverter(date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);

    return (day + "-" + month + "-" + year)
}



