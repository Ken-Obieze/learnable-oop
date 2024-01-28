# JavaScript Classes staatic Properties and Methods Example and Usage

## Authour
Ejiofor Obieze (B)

This repository demonstrates the use of JavaScript classes with static and instance properties and methods. Two classes, `MyClass` and `MyDetails`, are provided as examples.

## MyClass

### Static Property

* `staticProperty`: A static property of the `MyClass` class. Static properties are associated with the class itself, not instances of the class.

### Instance Property

* `instanceProperty`: An instance property of the `MyClass` class. Each instance of the class can have its own value for this property.

### Constructor

* `constructor`: A special method that initializes the instance properties when a new instance of the class is created.

### Static Method

* `staticMethod()`: A static method of the `MyClass` class. Static methods are associated with the class and can be called without creating an instance.

### Instance Method

* `instanceMethod()`: An instance method of the `MyClass` class. It can be called on instances of the class and has access to instance properties.

### Usage Example

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

## MyDetails

### Static Property

* `authorName:` A static property of the MyDetails class representing the author's name.

### Instance Property

* `authorHeight:` An instance property of the MyDetails class representing the author's height.

### Constructor

* `constructor:` Initializes the instance properties when a new instance of the MyDetails class is created.

### Static Method

* `authourSing():` A static method of the MyDetails class representing the author's singing.

```javascript
console.log('Author Name:', MyDetails.authorName); // Output: Ejiofor Obieze

console.log('Author Singing:');
MyDetails.authourSing(); // Output: La, La Lah!!!

const newDetails = new MyDetails("2 meters");

console.log('Author Height:', newDetails.authorHeight); // Output: 2 meters

```
These examples showcases the use of static and instance properties/methods in JavaScript classes, demonstrating their distinct purposes and applications. Static properties/methods are associated with the class itself, while instance properties/methods are specific to instances of the class.
