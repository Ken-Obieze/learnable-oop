#!/usr/bin/env node

class MovieStore {
  constructor() {
    this.movies = [
      ["Inception", "Sci-Fi", 18],
      ["The Shawshank Redemption", "Drama", 16],
      ["The Dark Knight", "Action", 18]
    ];
    this.requests = [];
    this.cart = [];
  }

  displayMovies() {
    console.log("Available Movies:");
    for (let movie of this.movies){
      console.log(`${movie[0]}. - \t${movie[1]}. - ${movie[2]}`);
    }
  }

  displayRequests() {
    console.log("Requested Movies:");
    for (let request of this.requests){
      console.log(`${request}`);
    }
  }

  displayCart() {
    console.log("Movies in Cart:");
    for (let ct of this.cart){
      console.log(`${ct}`);
    }
  }

  rentMovie(movieIndex) {
    const movie = this.movies[movieIndex];
    if (movie && movie.isAvailable) {
      movie.isAvailable = false;
      console.log(`You have rented "${movie.title}"`);
    } else {
      console.log("Movie not available for rent.");
    }
  }

  addRequest(title) {
    this.requests.push(title);
    console.log(`
    You requested for "${title}".
    You would be notified when it is available`);
  }

  addToCart(title) {
    this.cart.push(title);
    console.log(`You added "${title}" to cart`);
  }
}

console.log("\t***** WELCOME TO EJIS MOVIE RENTAL STORE *****");

// Prompt for command
console.log(
    `
    \tType\t 1 to view movie Catalogue
    \t\t 2 to view movies in cart
    \t\t 3 to view my requests
    \t\t 4 to rent and Checkout
    \tOR\t Simply type movie name to add to cart:`
    );

let command;
const movieStore = new MovieStore();
do {
  // npm install prompt-sync
  // to install prompt module
  const prompt = require('prompt-sync')();
  command = prompt('Enter Cpommand: ');
  console.log(`You entered: ${command}`);

  switch (command) {
    
    case '1':
    	movieStore.displayMovies();
      break;
    
    case '2':
      movieStore.displayCart();
      break;
    t
    case '3':
      movieStore.displayRequests();
      break;
    t
    case '4':
      
      console.log(`
      ***** THANK YOU FOR PATRONIZING EJIS MOVIE STORE *****
      You Rented: ${movieStore.cart}

      You have Requested: ${movieStore.requests}
      ******************* SEE YOu SOON *********************`);
      break;
    
    default:
      if (checkMovie(command)) {
        movieStore.addToCart(command)
      } else {
        console.log(
          `
          Movie is not in our movie catalogue
          \tType\t R or r to make a request
          \t\t C or c to continue
          `);
          let cmd;

          do {
            cmd = prompt('Enter Command: ');
            console.log(`You entered: ${cmd}`);
            if (cmd === 'R' || cmd === 'r' ){
              movieStore.addRequest(command);
            } else if (cmd === 'C' || cmd === 'c' ) {
              console.log(" ** Returning to Movie Renting ** ");
            } else {
              console.log(" ** Enered wrong command try again ** ");
            }
          } while (cmd !== 'R' && cmd !== 'r' && cmd !== 'C' && cmd !== 'c');
          
      }
  }

} while(command != '4');

function checkMovie(movie) {
  const mov = new MovieStore().movies;

  for (i of mov) {
    if (i[0] === movie) {
      return (true);
    }
  }
  return (false);
}
