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
        removeChildren(resultContainer);
        restaurants.forEach(function(restaurant) {
            const div = document.createElement('input');
            div.innerHTML = restaurant.name + restaurant.cuisine + restaurant.price + restaurant.visited + restaurant.favorite +  restaurant.priority;
            // let input = document.createElement("input");
            // input.setAttribute("type", "hidden");
            // input.setAttribute("id", restaurant.id);
            // div.appendChild(input);


            let updateButton = document.createElement("button");
            updateButton.innerHTML = "Update";
            updateButton.setAttribute("class", "updateRestaurant");
            updateButton.setAttribute("data-restaurant-id", restaurant.id);
            updateButton.addEventListener("click", updateRestaurant);
            div.appendChild(updateButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute("class", "deleteRestaurant");
            deleteButton.setAttribute("data-restaurant-id", restaurant.id);
            deleteButton.addEventListener("click", deleteRestaurant);
            div.appendChild(deleteButton);

            resultContainer.appendChild(div);
        })
    });
}

loadRestaurantsBtn.addEventListener('click', function(event) {
    event.preventDefault();

    //removeChildren(resultContainer);
    loadRestaurants();
})

