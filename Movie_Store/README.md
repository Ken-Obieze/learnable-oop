# Movie Rental console application (Ejis Movie Rental Store)


## Authour
Ejiofor Obieze (B)

## Overview
Welcome to Ejis Movie Rental Store, a command-line application that allows users to browse a movie catalog, add movies to the cart, and make rental requests.

## Usage
1. **View Movie Catalogue**
   - Type `1` to display the available movie catalog.

2. **View Movies in Cart**
   - Type `2` to view the movies currently in the cart.

3. **View My Requests**
   - Type `3` to see the list of requested movies.

4. **Rent and Checkout**
   - Type `4` to rent and checkout. This option displays the rented and requested movies.

5. **Add to Cart**
   - Simply type the movie name to add it to the cart.

### Additional Commands
- If the entered movie is not in the catalog:
  - Type `R` or `r` to make a request for the movie.
  - Type `C` or `c` to continue.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Ken-Obieze/learnable-oop.git
    cd Movie_Store/
    ```
2. Install dependencies:
    ```bash
    npm install prompt-sync
    ```
3. Run the application:
    ```bash
    node movie_store.js
    ```

## Dependencies
* prompt-sync: Synchronous prompt for command-line applications.

## Example
```bash
    ***** WELCOME TO EJIS MOVIE RENTAL STORE *****

    Type     1 to view movie Catalogue
             2 to view movies in cart
             3 to view my requests
             4 to rent and Checkout
    OR       Simply type movie name to add to cart:

Enter Command: 1
You entered: 1
Available Movies:
1. -   Inception. - 18
2. -   The Shawshank Redemption. - 16
3. -   The Dark Knight. - 18

Enter Command: Inception
You entered: Inception
You added "Inception" to cart

Enter Command: 2
You entered: 2
Movies in Cart:
Inception

Enter Command: 4
You entered: 4

***** THANK YOU FOR PATRONIZING EJIS MOVIE STORE *****
You Rented: Inception

You have Requested: []
******************* SEE YOU SOON *********************

```
