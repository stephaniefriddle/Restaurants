const resultContainer = document.querySelector('.result-container');
const loadRestaurantsBtn = document.querySelector('.load-btn');

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
