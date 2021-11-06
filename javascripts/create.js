function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    formJSON.pastVisits = data.getAll("checkbox");

    const results = document.querySelector('.results');
    results.innerText = JSON.stringify(formJSON, null, 2);
    console.log(results);

    fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formJSON),
    })
    //.then(response => response.json());
    // .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


// const submitRestaurantBtn = document.querySelector('#submit');

//const { response } = require("express");

// function submitRestaurant() {
//     //e.preventDefault();
//     const formData = new FormData(document.querySelector("#createForm"));

//     data = {
//         name: formData.querySelector('input[name="name"]').value,
//         cuisine: formData.querySelector('input[name="cuisine"]').value,
//         price: formData.querySelector('input[name="price"]').value,
//         location: formData.querySelector('input[name="location"]').value,
//         pastVisits: formData.querySelector('input[name="pastVisits"]').value,
//     }

//         fetch('http://localhost:3000/api/restaurants', {
//             method: 'POST',
//             // mode: 'cors',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         restaurants.push(restaurant);
//         res.send(`${restaurant.name} added to the database.`);
// }

// submitRestaurantBtn.addEventListener('click', function() {
//     resultContainer.innerHTML = '';
//     submitRestaurant();
// })

