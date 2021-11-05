const resultContainer = document.querySelector('.result-container');
const loadRestaurantsBtn = document.querySelector('.load-btn');

function loadRestaurants() {
    fetch('http://localhost:3000/api/restaurants')
    .then(response => response.json())
    //.then(data => console.log(data));
    .then(function(restaurants) {
        restaurants.forEach(function(restaurant) {
        const div = document.createElement('div');
        div.innerHTML = restaurant.name;
        resultContainer.appendChild(div);
     });
    });
}

loadRestaurantsBtn.addEventListener('click', function() {
    resultContainer.innerHTML = '';
    loadRestaurants();
})
