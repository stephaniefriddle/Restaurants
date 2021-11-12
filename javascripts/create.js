function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    formJSON.visited = document.getElementById('visited').checked, 
    formJSON.favorite = document.getElementById('favorite').checked, 
    formJSON.priority = document.getElementById('priority').checked


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
    .then(alert("Restaurant was added"))
    .then(document.getElementById('createForm').reset());
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

//     data = {
//         name: formData.querySelector('input[name="name"]').value,
//         cuisine: formData.querySelector('input[name="cuisine"]').value,
//         price: formData.querySelector('input[name="price"]').value,
//         location: formData.querySelector('input[name="location"]').value,
//         pastVisits: formData.querySelector('input[name="pastVisits"]').value,
//     }


