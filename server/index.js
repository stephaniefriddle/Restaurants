//const Joi = require('joi');
const express = require('express');
const app = express();
const cors = require('cors');
const loki = require('lokijs');
const path = require('path');

app.use(express.json());
app.use(cors());

//const db = new loki(path.resolve('./data.json'), { persistenceMethod: "fs" });
const db = new loki(('./data.json'), { persistenceMethod: "fs" });

let collection = db.getCollection('restaurants');

if (!collection) {
    console.log("collection");
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
    const restaurants = db.getCollection('restaurants');
    console.log(restaurants);
    res.json(restaurants);
});

app.post('/api/restaurants/add', (req, res) => {
    //const requestData = req.body;
    let collection = db.getCollection('restaurants');

    let restaurant = {
        id: collection.length + 1,
        name: req.body.name,
        cuisine: req.body.cuisine,
        price: req.body.price,
        visited: req.body.visited,
        favorite: req.body.favorite,
        priority: req.body.priority,
    };


    collection.insert(restaurant);
    db.saveDatabase();
    res.json(restaurant);

    // restaurants.push(restaurant);
    // res.send({message: `${restaurant.name} added to the database.`});
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
    // restaurant.priority = req.body.priority

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

//GET individual restaurant
// app.get('/api/restaurants/:id', (req, res) => {
//     let restaurant = restaurants.find(c => c.id === parseInt(req.params.id));
//     if (!restaurant) return res.status(404).send('The restaurant with the given ID was not found.');
//     res.send(restaurant);
// })


// PORT Is NOT working -- just uses port 3000 --19:52 on video "set PORT=XXXX" cmd
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));