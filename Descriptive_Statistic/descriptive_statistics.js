#!/usr/bin/env node

class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measure of Central Tendency
  
    mean() {
        const sum = this.data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const countMap = new Map();
      this.data.forEach((num) => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
      });
  
      let mode = [];
      let maxFrequency = 0;
  
      countMap.forEach((frequency, num) => {
        if (frequency > maxFrequency) {
          mode = [num];
          maxFrequency = frequency;
        } else if (frequency === maxFrequency) {
          mode.push(num);
        }
      });
  
      return mode;
    }
  
    // Measures of Dispersion
  
    range() {
      return Math.max(...this.data) - Math.min(...this.data);
    }
  
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map((num) => Math.pow(num - meanValue, 2));
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    meanDeviation() {
      const meanValue = this.mean();
      return this.data.reduce((acc, num) => acc + Math.abs(num - meanValue), 0) / this.data.length;
    }
  
    quartileDeviation() {
      const q3 = this.percentile(75);
      const q1 = this.percentile(25);
      return (q3 - q1) / 2;
    }
  
    percentile(percent) {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const index = (percent / 100) * (sortedData.length - 1);
      const lowerIndex = Math.floor(index);
      const upperIndex = Math.ceil(index);
  
      if (lowerIndex === upperIndex) {
        return sortedData[lowerIndex];
      } else {
        const lowerValue = sortedData[lowerIndex];
        const upperValue = sortedData[upperIndex];
        return lowerValue + (index - lowerIndex) * (upperValue - lowerValue);
      }
    }
}
  
// Getting user input
const data = [];
let userInput;
  
console.log("\t\t***** WELCOME TO EJIS DESCRIPTIVE STATISTICS CALCULATOR *****");

  do {
    const prompt = require('prompt-sync')();
    userInput = prompt("\tEnter a number (or type 'done' to finish):");
    if (userInput && userInput.toLowerCase() !== 'done') {
      const number = parseFloat(userInput);
      if (!isNaN(number)) {
        data.push(number);
      } else {
        console.log("Invalid input. Please enter a valid number.");
      }
    }
  } while (userInput && userInput.toLowerCase() !== 'done');
  
  
  
if (data.length > 0) {
    console.log(`
    You have provided the following numbers for the calculation:
    ${data}`);

    console.log(
        `
        \t To perform Measure of Central Tendency Calculations
        Type\t 1 For "Mean"
        \t 2 For "Median:", stats.median());
        \t 3 For ("Mode:", stats.mode());
        \t To perform Measures of Dispersion Calculation
        Type\t 4 For "Range:"
        \t 5 For "Variance:"
        \t 6 For "Standard Deviation:"
        \t 7 For "Mean Deviation:"
        \t 8 For "Quartile Deviation:"
        \t 9 to perform all implemented Descriptive Statistics operation on the data provided
        \t 10 to exit `
        );

    // Calculate and display descriptive statistics
    const stats = new DescriptiveStatistics(data);
    
    let command;

    do {
        // npm install prompt-sync
        // to install prompt module
        const prompt = require('prompt-sync')();
        command = prompt('\tEnter Cpommand: ');

        switch (command) {
        
        case '1':
            console.log("\tMean:", stats.mean());
            break;
       
        case '2':
            console.log("\tMedian:", stats.median());
            break;
        
        case '3':
            console.log("\tMode:", stats.mode());
            break;

        case '4':
            console.log("\tRange:", stats.range());
            break;

        case '5':
            console.log("\tVariance:", stats.variance());
            break;
        case '6':
            console.log("\tStandard Deviation:", stats.standardDeviation());
            break;
       
        case '7':
            console.log("\tMean Deviation:", stats.meanDeviation());
            break;
        
        case '8':
            console.log("\tQuartile Deviation:", stats.quartileDeviation());
            break;

        case '9':
            console.log("\tMean:", stats.mean());
            console.log("\tMedian:", stats.median());
            console.log("\tMode:", stats.mode());
            console.log("\tRange:", stats.range());
            console.log("\tVariance:", stats.variance());
            console.log("\tStandard Deviation:", stats.standardDeviation());
            console.log("\tMean Deviation:", stats.meanDeviation());
            console.log("\tQuartile Deviation:", stats.quartileDeviation());

            console.log(`
            ***** THANK YOU FOR USING EJIS DESCRIPTIVE STATISTICS CALCULATOR  *****
            ******************************** BYE  *********************************`);
            break;

        case '10':
            console.log(`
            ***** THANK YOU FOR USING EJIS DESCRIPTIVE STATISTICS CALCULATOR  *****
            ******************************** BYE  *********************************`);
            break;
        
        default:
            console.log("Invalid Input, Try again")
        }

    } while(command != '9' && command != '10');
  } else {
    console.log("Non valid input provided. Exiting...");
}
