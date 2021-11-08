//const resultContainer = document.querySelector('.result-container');
const deleteRestaurantBtn = document.querySelector('.deleteRestaurant');


function deleteRestaurant() {

    let restaurantId = deleteRestaurantBtn.id;
    console.log(restaurantId);

    fetch('http://localhost:3000/api/restaurants/delete/' + restaurantId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(response => response.json())
    .then(data => {
        let restaurants = data;
        restaurants.forEach(function(restaurant) {
            const div = document.createElement('div');
            div.innerHTML = restaurant.name + restaurant.cuisine + restaurant.price + restaurant.visited + restaurant.favorite +  restaurant.priority;
            // let input = document.createElement("input");
            // input.setAttribute("type", "hidden");
            // input.setAttribute("id", restaurant.id);
            // div.appendChild(input);
            let updateButton = document.createElement("button");
            updateButton.innerHTML = "Update";
            updateButton.setAttribute("class", "updateRestaurant");
            updateButton.setAttribute("id", restaurant.id);
            div.appendChild(updateButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute("class", "deleteRestaurant");
            deleteButton.setAttribute("id", restaurant.id);
            div.appendChild(deleteButton);

            resultContainer.appendChild(div);
        });
    })
}

if(deleteRestaurantBtn){
    deleteRestaurantBtn.addEventListener('click',  function() {
        resultContainer.innerHTML = '';
        deleteRestaurant();
        alert("Restaurant was deleted");
    })
}

// deleteRestaurantBtn.addEventListener('click', function() {
//     resultContainer.innerHTML = '';
//     deleteRestaurant();
//     alert("Restaurant was deleted");
// })