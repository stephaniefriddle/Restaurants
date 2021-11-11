const updateRestaurantBtn = document.querySelector('.updateRestaurant');


function updateRestaurant(event) {

    restaurantButton = event.target;
    let restaurantId = restaurantButton.getAttribute('data-restaurant-id');
    let displayName = restaurantButton.getAttribute('display-name')

    document.getElementById('insert-name').innerHTML = `Update ${displayName}`;

    // document.getElementById('save-btn').onclick = function() {  
    //     let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
    //     for (let checkbox of markedCheckbox) {  
    //       document.body.append(checkbox.value + ' ');  
    //     }  
    //   }  

    //event isn't triggering, I don't think
    document.getElementById('save-btn').submit = function(event) {  
        submitButton = event.target;
        let visitedValue = document.getElementById('visited').value;
        let favoriteValue = document.getElementById('favorite').value;
        let priorityValue = document.getElementById('priority').value;
        let updatedRestaurant = {visited: visitedValue, favorite: favoriteValue, priority: priorityValue}

    

    //let updatedRestaurant = {visited: visitedValue, favorite: favoriteValue, priority: priorityValue}

    fetch('http://localhost:3000/api/restaurants/update/' + restaurantId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(updatedRestaurant)
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(loadRestaurants());
}
}