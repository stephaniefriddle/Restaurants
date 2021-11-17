const express = require('express');
const app = express();
const cors = require('cors');
const loki = require('lokijs');

app.use(express.json());
app.use(cors());

const db = new loki(('./data.json'), { persistenceMethod: "fs" });

db.loadDatabase({}, () => {
    let collection = db.getCollection("restaurants");
  
    if (!collection) {
      collection = db.addCollection("restaurants");
    }
  });

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


//READ
app.get('/api/restaurants', (req, res) => {
    const restaurants = db.getCollection('restaurants');
    //console.log(restaurants);
    res.json(restaurants);
});

//CREATE
app.post('/api/restaurants/add', (req, res) => {
    let collection = db.getCollection('restaurants');

    let restaurant = {
        id: create_UUID(),
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
});


//UPDATE
app.put('/api/restaurants/update/:id', (req, res) => {

    const requestData = req.body;
    let collection = db.getCollection('restaurants');

    const restaurant = {
        ...collection.by("id", req.params.id),
        ...requestData,
    }

    collection.update(restaurant);
    db.saveDatabase();
    res.json(restaurant);
});

//DELETE
app.delete('/api/restaurants/delete/:id', (req, res) => {
    let collection = db.getCollection('restaurants');
    collection.findAndRemove({ id: { $aeq: req.params.id} });
    db.saveDatabase();
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