// Problem 1




function func(arg1, arg2) {
        console.log(this['0']); // a
        console.log(arg1); // b
        console.log(arg2); // c


}

func.call('a', 'b', 'c')

// Problem 2



function func(arg1, arg2) {
        console.log(this["0"]); // a
        console.log(arg1); // b
        console.log(arg2); // c
}


var ayy = 'a'
var bee = 'b'
var cee = 'c'

func.apply("ayy",[bee , cee])


// Problem 3

var obj = {
  x: 10,
  y: 32
};


function average() {
    return (this.x + this.y) / 2;
}

average.call(obj)


// Problem 4



function func(arg1, arg2) {
        console.log(this['0']); // a
        console.log(arg1); // b
        console.log(arg2); // c
}

func.apply('a', ['b', 'c']);



// Problem 5


function func(arg1, arg2) {
        console.log(this["0"]); // a
        console.log(arg1); // b
        console.log(arg2); // c
}

var ayy = 'a'
var beecee = ['b', 'c']

func.apply(ayy,beecee)


// Problem 6


function average() {
     return (this.x + this.y) / 2;
}


// Problem 7

//Explicit
function add(){
  console.log(this.count)
	return this.count++;
}

var counter = {
    count: 0
}
var counter2 = {
    count: 0
}

var counter3 = {
    count: 0
}

//These don't work
var boundOne = add.bind(counter);
boundOne();

var boundTwo = add.bind(counter2);
boundTwo();

var boundThree = add.bind(counter3);
boundThree();
boundThree();
boundThree();
boundThree();
boundThree();
boundThree();
boundThree();
boundThree();
boundThree();

// Problem 8

//Explicit
function callIt(func) {
	 func();
}

var counter = {
        count: 0,
        // Sloppy-mode method
        inc: function () {
            this.count++;
        }
}

callIt(counter.inc);

// Didn’t work:
console.log(counter.count); // 0

console.log(count);  // NaN


//I DONT GET THIS AT ALL



// Problem 9




// <button id="btn" type="button">Get the car's brand</button>

var car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};

var el = document.getElementById("btn");
el.addEventListener("click", car.getBrand);


// Problem 10


var o = {
  a: 1,
  b: 2,
  c: 3,
  average: function(){
    return (this.a + this.b + this.c) / 3;
  }
};

console.log(o.average()); //doesn't work

// Problem 11



function avg(){
    return (a, b, c) / 3;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  average: avg
};

var p = {
  a: 1,
  b: 2,
  c: 3,
  average: avg
};

console.log(o.average); //doesn't work
console.log(p.average); //doesn't work

// Day 7: #11
// 1) Create two objects called “one” and “two”. Give “one” a property "name" with the value "Ryan". Give "two" a property "name" with the value "Dan".
//
// 2) Give "one" a method called “sayName” that returns ("Hello, my name is " + this.name).
//
// 3) Create a variable called "newSayName" and set it equal to "one"'s sayName function bound to the "two" object.
//
// 4) Invoke "newSayName" and save the result to a variable called "helloMessage".

var one = {
  name:"Ryan",
  sayName: function(){
  	console.log("Hello, my name is " + this.name)
  }
}

var two = {
  name:"Dan"
}

var newSayName = one.sayName.bind(two);

newSayName



 {
    sayName: function() {
        alert("Squire");
    },
    whoAreYou: function() {
        return this.sayName();
    }
}
