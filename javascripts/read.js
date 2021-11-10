const resultContainer = document.querySelector('.result-container');
const loadRestaurantsBtn = document.querySelector('.load-btn');

function removeChildren(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function loadRestaurants() {
    fetch('http://localhost:3000/api/restaurants', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {

        let restaurants = data;

        function generateTableHead(table, tableData) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of tableData) {
                let th = document.createElement('th');
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        function generateTable(table, tableData) {
            for (let element of tableData) {
                let row = table.insertRow();
                for (key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }

        let table = document.querySelector('table');
        let tableData = Object.keys(restaurants[0]);
        generateTable(table, restaurants);
        generateTableHead(table, tableData);


            // let updateButton = document.createElement("button");
            // updateButton.innerHTML = "Update";
            // updateButton.setAttribute("class", "updateRestaurant");
            // updateButton.setAttribute("data-restaurant-id", restaurant.id);
            // //updateButton.addEventListener("click", updateRestaurant);
            // div.appendChild(updateButton);

            // let deleteButton = document.createElement("button");
            // deleteButton.innerHTML = "Delete";
            // deleteButton.setAttribute("class", "deleteRestaurant");
            // deleteButton.setAttribute("data-restaurant-id", restaurant.id);
            // //deleteButton.addEventListener("click", deleteRestaurant);
            // div.appendChild(deleteButton);

            // let input = document.createElement("input");
            // input.setAttribute("type", "hidden");
            // input.setAttribute("id", restaurant.id);
            // div.appendChild(input);

    })
}

loadRestaurantsBtn.addEventListener('click', function() {
    //event.preventDefault(); //Do I need this? add 'event' inside of function()
    removeChildren(resultContainer);
    loadRestaurants();
})

