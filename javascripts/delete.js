const resultContainer = document.querySelector('.result-container');
const deleteRestaurantBtn = document.querySelector('.deleteRestaurant');


function deleteRestaurant() {

    let restaurantId = deleteRestaurantBtn.id;
    console.log(restaurantId);

    fetch('http://localhost:3000/api/' + restaurantId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(response => response.json());
}

deleteRestaurantBtn.addEventListener('click', function() {
    resultContainer.innerHTML = '';
    deleteRestaurant();
})