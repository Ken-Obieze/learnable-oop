# Descriptive Statistics Calculator (Ejis Descriptive Statistics Calculator)

## Authour
Ejiofor Obieze (B)

## Introduction

Welcome to Ejis Descriptive Statistics Calculator! This is a js script that allows you to perform various descriptive statistics calculations on a set of numeric data. The script calculates measures of central tendency (mean, median, mode) and measures of dispersion (range, variance, standard deviation, mean deviation, quartile deviation).

## Usage

1. **Getting Started**
   - Make sure you have Node.js installed on your machine.
   - Clone the repository:
    ```bash
    git clone https://github.com/Ken-Obieze/learnable-oop.git
    cd Descriptive_Statistic
    ```

2. **Run the Script**
   - Open a terminal and navigate to the directory where the script is located.
   - Run the script using the command: `node descriptive_statistics.js`.

3. **Input Data**
   - Follow the on-screen instructions to enter numeric data. Type 'done' when you are finished.

4. **Perform Calculations**
   - After entering data, you can choose to perform specific calculations by entering the corresponding commands:
     - 1: Mean
     - 2: Median
     - 3: Mode
     - 4: Range
     - 5: Variance
     - 6: Standard Deviation
     - 7: Mean Deviation
     - 8: Quartile Deviation
     - 9: Perform all calculations
     - 10: Exit

5. **View Results**
   - The script will display the results based on your chosen calculations.

6. **Exit**
   - Type '10' to exit the script.

## Dependencies
* prompt-sync: Used to prompt the user for input synchronously.

## Example

```bash
$ node descriptive_statistics.js
***** WELCOME TO EJIS DESCRIPTIVE STATISTICS CALCULATOR *****
        Enter a number (or type 'done' to finish):5
        Enter a number (or type 'done' to finish):26
        Enter a number (or type 'done' to finish):6
        Enter a number (or type 'done' to finish):6
        Enter a number (or type 'done' to finish):3
        Enter a number (or type 'done' to finish):3
        Enter a number (or type 'done' to finish):6
        Enter a number (or type 'done' to finish):

    You have provided the following numbers for the calculation:
    5,26,6,6,3,3,6

                 To perform Measure of Central Tendency Calculations
        Type     1 For "Mean"
                 2 For "Median:", stats.median());
                 3 For ("Mode:", stats.mode());
                 To perform Measures of Dispersion Calculation
        Type     4 For "Range:"
                 5 For "Variance:"
                 6 For "Standard Deviation:"
                 7 For "Mean Deviation:"
                 8 For "Quartile Deviation:"
                 9 to perform all implemented Descriptive Statistics operation on the data provided
                 10 to exit 
        Enter Cpommand: 9
        Mean: 7.857142857142857
        Median: 6
        Mode: [ 6 ]
        Range: 23
        Variance: 56.40816326530612
        Standard Deviation: 7.510536816054238
        Mean Deviation: 5.183673469387755
        Quartile Deviation: 1

            ***** THANK YOU FOR USING EJIS DESCRIPTIVE STATISTICS CALCULATOR  *****
            ******************************** BYE  *********************************
```
