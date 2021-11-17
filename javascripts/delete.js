const deleteRestaurantBtn = document.querySelector('.deleteRestaurant');

function deleteRestaurant(event) {

    restaurantButton = event.target;
    let restaurantId = restaurantButton.getAttribute('data-restaurant-id');
    console.log(restaurantId);

    fetch('http://localhost:3000/api/restaurants/delete/' + restaurantId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(alert("Restaurant was deleted"))
}
