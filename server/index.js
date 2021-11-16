//const Joi = require('joi');
const express = require('express');
const app = express();
const cors = require('cors');
const DevApi = require("@justinkprince/dev-api");
const loki = require('lokijs');

app.use(express.json());
app.use(cors());

//import loki from "lokijs";

const db = new loki(path.resolve('.data.json'), { persistenceMethod: "fs" });

let collection = db.getCollection('restaurants');

if (!collection) {
    collection = db.addCollection('restaurants');
}

// let restaurants = [
//     {   
//         id: 1, 
//         name: 'restaurant1', 
//         cuisine: 'cuisine1', 
//         price: '$$', 
//         visited: true,
//         favorite: false,
//         priority: false, 
//     },
//     { 
//         id: 2, 
//         name: 'restaurant2', 
//         cuisine: 'cuisine2', 
//         price: '$', 
//         visited: true,
//         favorite: true,
//         priority: true, 
//     },
//     { 
//         id: 3, 
//         name: 'restaurant3', 
//         cuisine: 'cuisine3', 
//         price: '$$$', 
//         visited: false,
//         favorite: false,
//         priority: true, 
//     }
// ];



//GET
app.get('/api/restaurants', (req, res) => {
    const restaurants = db.getCollection('restaurants').data;
    res.json(collection);
});

app.post('/api/add', (req, res) => {

    let restaurant = {
        id: restaurants.length + 1,
        name: req.body.name,
        cuisine: req.body.cuisine,
        price: req.body.price,
        visited: req.body.visited,
        favorite: req.body.favorite,
        priority: req.body.priority,
    };

    restaurants.push(restaurant);
    res.send({message: `${restaurant.name} added to the database.`});
});


//UPDATE
app.put('/api/restaurants/update/:id', (req, res) => {
    //Look up the restaurant
    //if not existing, return 404
    // let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
    // if (!restaurant) {
    //     return res.status(404).send('The restaurant with the given ID was not found.');
    // }
    //Can simplify these  --if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');

    const requestData = req.body;
    let collection = db.getCollection('restaurants');

    const restaurant = {
        ...collection.by("id", req.params.id),
        ...requestData,
    }

    collection.update(item);
    db.saveDatabase();
    res.json(item);
    // restaurant.visited = req.body.visited,
    // restaurant.favorite = req.body.favorite,
    // restaurant.priority = req.body.priority,

    //Return the updated restaurant
    //res.send(restaurant);
});

//DELETE
app.delete('/api/restaurants/delete/:id', (req, res) => {
    //Look up the restaurant
    //Not existing, return 404
    // let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
    // if (!restaurant) res.status(404).send('The restaurant with the given ID was not found.');

    let collection = db.getCollection('restaurants');
    collection.findAndRemove({ id: { $aeq: id} });
    db.saveDatabase();


    //Delete
    // const index = restaurants.indexOf(restaurant);
    // restaurants.splice(index, 1);

    //Return the same restaurant
    res.send({message: `Restaurant was deleted.`});
});

app.get('/api/restaurants/:id', (req, res) => {
    let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');
    res.send(restaurant);
})


// PORT Is NOT working -- just uses port 3000 --19:52 on video "set PORT=XXXX" cmd
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));