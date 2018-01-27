// Concepts to cover in weeks 2, 3: 
// if, while, variables (all datatypes except array?), functions, 
// string concatenation, console.log, potentially googling?, return
// instances

// concepts to cover this week:
// review variables, functions, return, classes, instances

// start off by going over the basic data types again
// remember that we declare variables like this: `let variableName = {value};` 

// variable names can be whatever we want, but in particular, 
// they should be named for what they're going to be used for.
// Unlike math, where we give variable names of X and Y, we should instead use more descriptive names.

// So if I wanted to create a variable to keep track of my age, I could write

let myAge = 17;

// by the way, I can reasign this variable if I want to, but I do not have to say let again

myAge = 18;

// or instead, I could do 

myAge = myAge + 1; // which just takes myAge and sets it equal to itself + 1 

// also remember that the way we print things out is by doing
console.log(myAge);

// and then we have to open up the console in our browser

// if I wanted to create a variable to say whether or not I plan an instrument or not

let playInstrument = true;

// and finally, if I wanted to create a variable to store my name, I might put
let myName = "Garrett";

// if I want to add my last name onto my first name, all I have to do is actually add a plus sign
myName = "Garrett" + "Smith";

// go ahead and print this to the console
// if they don't remember how, show them

// but the problem with this all is that if I wanted to create multiple people, 
// I would have to create new variables, and that becomes a hassle. Let's say I had 3 other people,
// how would I store these properties (age, playsInstrument, name) for 3 people? [wait for response]
// I might have to do something like
name1 = "";
playsInstrument1 = true;
age = 12;
// etc...

// however at a certain point, this will get annoying, and if we have 5 or 6 properties, we really
// won't want to have to type all that out. So instead, we'll use something called classes.
// A class is basically just a template for something. So in our case, we have the template for a person,
// and each person has 3 qualities of playing an instrument, their age, and their name

// here's an example to walk through (discuss definition vs instantiation)

class Person {
    constructor() {
        this.name = "Garrett";
        this.playsInstrument = true;
        this.age = 17;
    }
}

let person1 = new Person();

console.log(person1.playsInstrument); // true

// after walking through what everything does, ask what the problem is [name is always "Garrett", etc.]
// talk about inputs on the constructor and change to

class Person {
    constructor(name, playsInstrument, age) {
        this.name = name;
        this.playsInstrument = playsInstrument;
        this.age = age;
    }
}

// now I can change my previous variable:
let person1 = new Person("Garrett", true, 17);

// ask how I would create another person with certain properties
let person2 = new Person("Random", false, 14);
let person3 = new Person("Another random value", true, 15);

// now, I'd like you all to try to create a class on your own. Let's say you're creating a Circle
// class. What are some properties a circle would have? [collect answers and make those the properties]

// could also get them to create the example of an Apple class here with apple type, color, taste, etc.

class Circle {
    constructor(radius, color, x, y) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
    }
}

// ask about how they think we can create a new instance of Circle
let myCircle = new Circle( /* properties here */ );

// Now, we've given our classes properties like radius, color, etc., but we can also give them actions
// so returning to the person class, let's give our person the ability to play music for someone else
class Person {
    constructor(name, playsInstrument, age) {
        this.name = name;
        this.playsInstrument = playsInstrument;
        this.age = age;
    }

    // to give our class Person an action we type nameOfAction() { /* code here */ }
    playMusic() {
        console.log(this.name + " is playing music!");
    }
}

// if we create yet another person
person4 = new Person("Tom", true, 20);

// we can do
person4.playMusic(); // check the console for a message

// my final challenge for you, is to
//    1. Create a function in your Circle class called drawCircle and then
//    2. look up how to draw a circle in an HTML canvas with javascript

// should turn out something like
class Circle {
    constructor(radius, color, x, y) {
        this.radius = radius;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    drawCircle() {

    }
}
