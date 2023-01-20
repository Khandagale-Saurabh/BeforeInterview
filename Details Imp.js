explain difference in call apply and bind

Call, Apply, and Bind are all methods used to call a function in JavaScript. 

Call is used to invoke the function and pass arguments one by one.
Apply is used to invoke the function and pass arguments as an array.
Bind is used to set the this keyword explicitly and also binds arguments passed to it, which needs to be invoked later. It returns a bound function that, when executed, will have the correct context ("this") and arguments already set.
with example

Call: 

function greet(name, profession) {
  console.log(`Hi ${name}, ${profession}!`);
}

greet.call(null, 'John', 'Developer'); // Hi John, Developer!

Apply:

function greet(name, profession) {
  console.log(`Hi ${name}, ${profession}!`);
}

greet.apply(null, ['John', 'Developer']); // Hi John, Developer!

Bind:

function greet(name, profession) {
  console.log(`Hi ${name}, ${profession}!`);
}

let boundGreet = greet.bind(null, 'John'); 
boundGreet('Developer'); // Hi John, Developer!
more complex example


Call:

let user = {
  name: 'John',
  age: 30,
  greet: function(name, profession) {
    console.log(`Hi, ${name}, ${this.name} is a ${profession}`);
  }
}

user.greet.call(user, 'David', 'Developer'); // Hi, David, John is a Developer

Apply:


let user = {
  name: 'John',
  age: 30,
  greet: function(name, profession) {
    console.log(`Hi, ${name}, ${this.name} is a ${profession}`);
  }
}

user.greet.apply(user, ['David', 'Developer']); // Hi, David, John is a Developer

Bind:

let user = {
  name: 'John',
  age: 30,
  greet: function(name, profession) {
    console.log(`Hi, ${name}, ${this.name} is a ${profession}`);
  }
}

let boundGreet = user.greet












==============================================
  For in vs for of
  ============================================

    let arr = ['el1', 'el2', 'el3'];

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue)
}
    
    
    0
1
2
addedProp
el1
el2
el3
