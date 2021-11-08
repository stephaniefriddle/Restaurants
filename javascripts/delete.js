const resultContainer = document.querySelector('.result-container');
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
    .then(response => response.json()); //not sure if I need this here
}

deleteRestaurantBtn.addEventListener('click', function() {
    resultContainer.innerHTML = '';
    deleteRestaurant();
    alert("Restaurant was deleted");
})