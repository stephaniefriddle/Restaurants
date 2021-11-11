const updateRestaurantBtn = document.querySelector('.updateRestaurant');

// const someData = {
//     visited: document.querySelector(visited).value,
//     favorite: document.querySelector(favorite).value,
//     priority: document.querySelector(priority).value
//    }

function updateRestaurant() {

    let restaurantId = updateRestaurantBtn.id;
    console.log(restaurantId);

    fetch('http://localhost:3000/api/restaurants/update/' + restaurantId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(someData)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(loadRestaurants());
}