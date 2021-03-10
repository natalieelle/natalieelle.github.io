const axios = require("axios");

//Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//And then...
    .then(function (response) {
        //Use the 'data'
        const pokemon = response.data;

        //In this example, the above URL will return an object
        //with data on the Pokemon requested
        console.log(chalk.blue.bold("This is a " + pokemon.name + " and its ID is " + pokemon.id));
    })