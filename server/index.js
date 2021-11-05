const Joi = require('joi');
const express = require('express');
const app = express();
//const DevApi = require("@justinkprince/dev-api");

app.use(express.json());


// const config = {
//     resources: ["users", "groups", "books"],
//     filepath: "./data/app.json",
//     port: 3003,
//   };
  
// const api = new DevApi(config);
// api.listen(3003);


const restaurants = [
    {   
        id: 1, 
        name: 'restaurant1', 
        cuisine: 'cuisine1', 
        price: 'price1', 
        location: 'location1', 
        pastVisits: 'pastVisits1', 
        wantToGo: 'wantToGo1'
    },
    { 
        id: 2, 
        name: 'restaurant2', 
        cuisine: 'cuisine2', 
        price: 'price2', 
        location: 'location2', 
        pastVisits: 'pastVisits2', 
        wantToGo: 'wantToGo2'
    },
    { 
        id: 3, 
        name: 'restaurant3', 
        cuisine: 'cuisine3', 
        price: 'price3', 
        location: 'location3', 
        pastVisits: 'pastVisits3', 
        wantToGo: 'wantToGo3'
    }
];

//define new routes with app.get
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/restaurants', (req, res) => {
    res.send(restaurants);
});

app.post('/api/restaurants', (req, res) => {
    const {error} = validateRestaurant(req.body); //result.error
    if(error) {
        //400 bad request
        return res.status(400).send(error.details[0].message);
    }

    // const schema = Joi.object ({
    //     name: Joi.string().min(3).required()
    // });

    // const result = schema.validate(req.body);

    // if(result.error) {
    //     //400 bad request
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    const restaurant = {
        id: restaurants.length + 1,
        name: req.body.name,
        cuisine: req.body.cuisine,
        price: req.body.price,
        location: req.body.location,
        pastVisits: req.body.pastVisits,
        wantToGo: req.body.wantToGo
    };

    restaurants.push(restaurant);
    res.send(`${restaurant.name} added to the database.`);
});

app.put('/api/restaurants/:id', (req, res) => {
    //Look up the restaurant
    //if not existing, return 404
    let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
    if (!restaurant) {
        return res.status(404).send('The restaurant with the given ID was not found.');
    }
    //Can simplify these  --if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');

    //Validate
    //If invalid, return 400 - bad request
    const {error} = validateRestaurant(req.body); //result.error
    if(error) {
        //400 bad request
        return res.status(400).send(error.details[0].message);
    }

    //Update restaurant -- ADD MORE TO THIS --48MIN
    restaurant.name = req.body.name;
    //Return the updated restaurant
    res.send(restaurant);
});

app.delete('/api/restaurants/:id', (req, res) => {
    //Look up the restaurant
    //Not existing, return 404
    let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
    if (!restaurant) res.status(404).send('The restaurant with the given ID was not found.');


    //Delete
    const index = restaurants.indexOf(restaurant);
    restaurants.splice(index, 1);

    //Return the same restaurant
    res.send(`${restaurant.name} was deleted.`);
});

//id is name of parameter 21:59
app.get('/api/restaurants/:id', (req, res) => {
    let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');
    res.send(restaurant);
})

function validateRestaurant(restaurant) {
    const schema = Joi.object ({
        name: Joi.string().min(3).required(),
        cuisine: Joi.string().min(4).required(),
        price: Joi.string().min(1).required(),
        location: Joi.string().min().required(),
        pastVisits: Joi.string().min(),
        wantToGo: Joi.string().min(),
    });

    return schema.validate(restaurant);
}

// PORT Is NOT working -- just uses port 3000 --19:52 on video "set PORT=XXXX" cmd
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));