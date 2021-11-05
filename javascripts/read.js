//const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));


const resultContainer = document.querySelector('.result-container');
const loadRestaurantsBtn = document.querySelector('.load-btn');

function loadRestaurants() {
    fetch('http://localhost:3000/api/restaurants', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }

})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
})
}
//     fetch('http://localhost:3000/api/restaurants', {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         let restaurants = data.restaurants;
//         console.log(restaurants);
//     }); 
//     // {
//     //     console.log(data);
//     // }) 
//     // .then(function(restaurants) {
//     //     restaurants.forEach(function(restaurant) {
//     //     const div = document.createElement('div');
//     //     div.innerHTML = restaurant.name;
//     //     resultContainer.appendChild(div);
//     //  });
// //    });
// }

loadRestaurantsBtn.addEventListener('click', function() {
    resultContainer.innerHTML = '';
    loadRestaurants();
})


// document.getElementById(".load-btn").onclick = function() {
//     const req = new XMLHttpRequest();
//     req.open('GET', '/api/restaurants');
//     req.onload = function () {
//         const data = JSON.parse(req.response);
//         addList ({ data });
//     };

//     req.send();
// };

// function addList({ data }) {
//     resetContentArea();
  
//     const template = document.querySelector("#list-result");
//     const clone = template.content.cloneNode(true);
  
//     const ul = clone.querySelector("ul");
//     data.forEach((d) => {
//       const li = clone.querySelector("li").cloneNode(true);
//       const id = li.querySelector("#product-id");
//       id.textContent = d.id;
//       id.onclick = (e) => {
//         document.getElementById("product-id").value = e.currentTarget.textContent;
//       };
//       li.querySelector("#product-name").textContent = d.name;
//       li.querySelector("#product-price").textContent = d.price;
  
//       ul.appendChild(li);
//     });
  
//     results.appendChild(clone);
//   }