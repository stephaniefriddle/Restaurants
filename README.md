# Restaurants
The struggle of deciding where to eat is real, so I designed this project to keep an ongoing list of restaurants. All the restaurants come from my personal experiences and recommendations. I've implemented checkboxes to highlight restaurants by whether or not I've been there, if it's one of my favorites, or if it's somewhere new I've heard about and really want to make it a priority to try. I want to be able to go to this list and easily find options for any occassion or event.

To accomplish this, I have a web server that's connected with ExpressJS. I use CRUD actions to manipulate the data.

## Requirements and Project Features
You're currently reading the README, but below you will find the other requirements and features I've chosen to implement:

 - I used Bootstrap to create a responsive design with two media queries, one for mobile and one for desktop. On the main page, the table of the results is responsive. On mobile the table layout is vertical. If on desktop view, table is responsive and will scroll horizontally if needed.

 - You'll see more than the required 5 commits.

 - Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app 
      - You will see this feature with the 'Ready? Let's do it.' button.

 - Retrieve data from an external API and display data in your app 
      - I use CRUD actions with fetch() for this.

 - Post to an external API and show that it has saved/persisted.
    - The create.html page includes the form and once the restaurant is saved, please head to the index.html page and load the restaurants. It should be the last result. You can also look in the data.json file that's created.
 
 - Create a form and save the values (on click of Submit button) to an external file 
    - The create.html page includes the form and once the restaurant is saved, please head to the index.html page and load the restaurants. It should be the last result. You can also look in the data.json file that's created.

 - Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application 
    - the list of restaurants is an array.
 
 - Create a web server with at least one route and connect to it from your application using ExpressJS.
 

## Using Restaurants
This is built with a separate server side and front end.

To start off:

 - Clone this repository

 - Open index.html

To start the server side:

 - Install [Node.js](https://nodejs.dev/learn/how-to-install-nodejs) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

 - Run `npm start`, which will initiate the server.

 - If the server stops, restart with `npm start` or `nodemon start server/index.js`.