# learnable Object Oriented Programming

### Author
Ejiofor Obieze (B)

This repository contains three projects, each residing in its own directory. Explore each project's README file for detailed information:

## 1. Descriptive Statistics Calculator (Ejis Descriptive Statistics Calculator)

### Introduction
Welcome to Ejis Descriptive Statistics Calculator! This JavaScript script allows you to perform various descriptive statistics calculations on a set of numeric data. The script calculates measures of central tendency (mean, median, mode) and measures of dispersion (range, variance, standard deviation, mean deviation, quartile deviation).

### Usage
1. Getting Started
* Make sure you have Node.js installed on your machine.
* Clone the repository:
    ```bash
        git clone https://github.com/Ken-Obieze/learnable-oop.git
        cd Descriptive_Statistic
    ```
2. Run the Script
* Open a terminal and navigate to the directory where the script is located.
* Run the script using the command: node descriptive_statistics.js.
3. Input Data
* Follow the on-screen instructions to enter numeric data. Type 'done' when you are finished.
4. Perform Calculations
* After entering data, you can choose to perform specific calculations by entering the corresponding commands.
5. View Results
* The script will display the results based on your chosen calculations.
6. Exit
* Type '10' to exit the script.

### Dependencies
* prompt-sync: Used to prompt the user for input synchronously.

## 2. Movie Rental Console Application (Ejis Movie Rental Store)

### Overview
Welcome to Ejis Movie Rental Store, a command-line application that allows users to browse a movie catalog, add movies to the cart, and make rental requests.

### Usage
1. View Movie Catalogue
* Type 1 to display the available movie catalog.
2. View Movies in Cart
* Type 2 to view the movies currently in the cart.
3. View My Requests
* Type 3 to see the list of requested movies.
4. Rent and Checkout
* Type 4 to rent and checkout. This option displays the rented and requested movies.
5. Add to Cart
* Simply type the movie name to add it to the cart.

### Installation
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

### Dependencies
* prompt-sync: Synchronous prompt for command-line applications.

## 3. JavaScript Classes Static Properties and Methods Example and Usage

### Overview
This repository demonstrates the use of JavaScript classes with static and instance properties and methods. Two classes, MyClass and MyDetails, are provided as examples.

### Usage Examples
```javascript
console.log('Accessing static property:');
console.log(MyClass.staticProperty); // Output: I am a static property

console.log('Accessing static method:');
MyClass.staticMethod(); // Output: This is a static method

const myInstance = new MyClass('Instance property value');

console.log('Accessing instance property:');
console.log(myInstance.instanceProperty); // Output: Instance property value

console.log('Accessing instance method:');
myInstance.instanceMethod(); // Output: This is an instance method. Instance property value: Instance property value
```
```javascript
console.log('Author Name:', MyDetails.authorName); // Output: Ejiofor Obieze

console.log('Author Singing:');
MyDetails.authourSing(); // Output: La, La Lah!!!

const newDetails = new MyDetails("2 meters");

console.log('Author Height:', newDetails.authorHeight); // Output: 2 meters

```

These examples showcase the use of static and instance properties/methods in JavaScript classes, demonstrating their distinct purposes and applications. Static properties/methods are associated with the class itself, while instance properties/methods are specific to instances of the class.
