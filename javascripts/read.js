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
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {

        let restaurants = data.data;

        removeChildren(resultContainer);

        function generateTableHead(table, tableData) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of tableData) {
                let th = document.createElement('th');
                let text = document.createTextNode(key);
                if (key === 'priority') {
                    th.setAttribute("colspan", "3");
                }
                th.appendChild(text);
                row.appendChild(th);
            }
        }

        function generateTable(table, tableData) {
            for (let element of tableData) {
                let row = table.insertRow();
                for (key in element) {
                    let cell = row.insertCell();
                    //cell.setAttribute("icon", key) --for CSS maybe? want to display check or x
                    let text = document.createTextNode(element[key]);

                    if (key === 'priority') {
                        let actionCell = row.insertCell();
                        actionCell.setAttribute("class", "d-flex");
                        let updateButton = document.createElement("button");
                        updateButton.innerHTML = "Update";
                        updateButton.classList = "updateRestaurant btn btn-secondary";
                        updateButton.setAttribute("data-restaurant-id", element.id);
                        updateButton.setAttribute("display-name", element.name)
                        updateButton.setAttribute("data-bs-toggle", "modal");
                        updateButton.setAttribute("data-bs-target", "#myModal");
                        updateButton.setAttribute("data-visited", element.visited);
                        updateButton.setAttribute("data-favorite", element.favorite);
                        updateButton.setAttribute("data-priority", element.priority);
                        updateButton.addEventListener("click", updateRestaurant);
                        actionCell.appendChild(updateButton);
                        
                        let deleteButton = document.createElement("button");
                        deleteButton.innerHTML = "Delete";
                        deleteButton.classList = "deleteRestaurant btn btn-secondary";
                        deleteButton.setAttribute("data-restaurant-id", element.id);
                        deleteButton.addEventListener("click", deleteRestaurant);
                        actionCell.appendChild(deleteButton);
                    }
                    cell.appendChild(text);
                }
            }
        }
        let table = document.querySelector('table');
        let tableData = Object.keys(restaurants[0]);
        generateTable(table, restaurants);
        generateTableHead(table, tableData);
    })
}

loadRestaurantsBtn.addEventListener('click', function() {
    loadRestaurants();
})