/**
 *  Functions
 */


/**
 *  declaration vs expression
 */

function declaration() {
	console.log('function declaration');
}
// declaration();


var expression = function() {
	console.log('anonymous function expression');
};
// expression();


var namedExpression = function funcName() {
	console.log('named function expression');
};
// namedExpression();

// setTimeout(function funcName() {
// 	error;
// }, 500);


// IIFE Immediate Invoked Function Expression
(function() {
	console.log('IIFE');
})();


/**
 *  methods
 */

// object method
var user = {
	getName: function() {
		console.log('method');
	}
};
user.getName();
// enhanced literals


/**
 *  return statement
 */

function foo() {
	// early return
	return 'first';
	return 'second';
}
console.log( foo() );


/**
 *  constructor
 */

// constructor
function User(name) {
	var temp = 'temp';
	this.name = name;
	this.age  = 34;
}

var me = new User('Andrei');
console.log(me);


/**
 *  arrows
 */

// var arrow = function() {
// 	console.log('arrow function');
// };
var arrow = () => {
	console.log('arrow function');
};
// var arrow = () => 1;
// var arrow = () => { return 1; };

// arrow();
// no paranthesis for one argument
// implicit return


/**
 *  first-class functions
 */
