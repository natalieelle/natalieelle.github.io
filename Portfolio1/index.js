let quotes = [
    `"Hi, my name is Natalie! 
    Look below for an axios id 
    from my favorite pokemon 
    and a quote from them!`,
    
    `"Hi, my name is Natalie! 
    Look below for an axios id
    from my favorite pokemon 
    and a quote from them!
    
    Make sure to take a look
    at my LinkedIn page: 
    https://www.linkedin.com/in/natalie-laurent`,

    `"Hi, my name is Natalie! 
    I'm a student at UCF and 
    this is my Portfolio Project. 

    Look below for an axios id
    from my favorite pokemon 
    and a quote from them!
    Make sure to take a look 
    at my LinkedIn page: 
    https://www.linkedin.com/in/natalie-laurent`

]
let index = (Math.floor(Math.random()*3))
console.log(quotes[index])

const axios = require("axios");

   
    //Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/pikachu')
//And then...
    .then(function (response) {
        //Use the 'data'
        const pokemonp = response.data;

        //In this example, the above URL will return an object
        //with data on the Pokemon requested
        console.log(gradient.rainbow(pokemonp.name + " is my favorite pokemon and his ID is " + pokemonp.id));
    })
    .catch(function (error) {
        //handle error
        console.log("Error: " + error);
    });
    const chalk = require('chalk');
    const log = console.log;
    const gradient = require('gradient-string');

    axios('https://www.affirmations.dev/')
    //And then...
        .then(function (response) {
            //Use the 'data'
            const affirmation = response.data;
    
            //In this example, the above URL will return an object
            //with data on the Pokemon requested
            console.log(gradient.pastel('♥ ♥ Pikachu says "' + affirmation.affirmation + '." Try again for more words of affirmation from Pikachu ♥ ♥'));
        })   