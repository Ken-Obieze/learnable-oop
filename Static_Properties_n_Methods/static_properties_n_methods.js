#!/usr/bin/env node

class MyClass {
  static staticProperty = 'I am a static property';
  instanceProperty;
  
  constructor(instancePropertyValue) {
    this.instanceProperty = instancePropertyValue;
  }
  
  static staticMethod() {
    console.log('This is a static method');
  }

  instanceMethod() {
    console.log(`This is an instance method. Instance property value: ${this.instanceProperty}`);
  }
}
  
console.log('Accessing static property:');
console.log(MyClass.staticProperty); // Output: I am a static property

console.log('Accessing static method:');
MyClass.staticMethod(); // Output: This is a static method
  
const myInstance = new MyClass('Instance property value');
  
console.log('Accessing instance method:');
console.log(myInstance.instanceProperty); // Output: Instance property value
myInstance.instanceMethod(); // Output: This is an instance method. Instance property value: Instance property value

class MyDetails {
  static authorName = 'Ejiofor Obieze';
  authorHeight;
  
  constructor(height) {
    this.authorHeight = height;
  }
  
  static authourSing() {
    console.log('La, La Lah!!!');
  }

  instanceMethod() {
    console.log(`This is an instance method. Instance property value: ${this.instanceProperty}`);
  }
}

console.log(MyDetails.authorName); // Output: Ejiofor Obieze
MyDetails.authourSing(); // Output: La, La Lah!!!
const newDetails = new MyDetails("2 meters");

console.log(newDetails.authorHeight); // Output: 2 meters
