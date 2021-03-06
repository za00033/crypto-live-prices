/*
----------------
After editing and run the express node server with html files, steps are:
1- npm run build (ensures that the new changed in html files are compiled with tailwind)
2- node index.js (runs the express server)
*/

const http = require("http");



const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();
var func = async() => {
    let data = await CoinGeckoClient.ping();
    console.log(data);
};

const express = require('express');

const app = express();

//The first step is to import the path module, which comes with Node.js by default.
//The path module allows us to work with directories and file paths, 
//which we need when we serve static assets such as images, for instance.
const path = require('path');

//Tell Node.js what the source of our templates is. 
//Now, Node.js knows where to look for our pug templates.
app.set('views', path.join(__dirname, 'views'));

//Tells Node.js what engine to use. In our case, it is Pug.
//app.set('view engine', 'pug');


//Specify the directory from where to serve static assets such as JavaScript, CSS, images, and so on
//Tells Node.js that we store the static assets in a directory named public.
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    //res.render('index');
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/ziad', (req, res) => {
    //res.render('index');
    res.redirect('http://ziad.azzabi.co.uk');
});

const server = app.listen(3000, () => {
    console.log(`Express server application started on port ${server.address().port}`);
});


//-----------------------------------------


