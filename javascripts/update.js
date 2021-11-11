const updateRestaurantBtn = document.querySelector('.updateRestaurant');


function updateRestaurant(event) {

    restaurantButton = event.target;
    let restaurantId = restaurantButton.getAttribute('data-restaurant-id');
    let displayName = restaurantButton.getAttribute('display-name');

    document.getElementById('insert-name').innerHTML = `Update ${displayName}`;



    document.getElementById('save-btn').onclick = function(event) {

        saveButton = event.target; //do I need this?

        let updatedRestaurant = {
            visited: document.getElementById('visited').checked, 
            favorite: document.getElementById('favorite').checked, 
            priority: document.getElementById('priority').checked
        }
    
        fetch('http://localhost:3000/api/restaurants/update/' + restaurantId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(updatedRestaurant)
        })
        //.then(response => response.json())
        //.then(json => console.log(json))
        .then(loadRestaurants());
    }
}