/**
 *  Functions
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
// 	none;
// }, 500);


// IIFE Immediate Invoked Function Expression
(function() {
	// console.log('IIFE');
})();


// object method
var user = {
	getName: function() {
		console.log('method');
	}
};
// user.getName();
// enhanced literal


/**
 *  return statement
 */

function foo() {
	return 'value';
	return 1;
}
console.log( foo() );


// constructor
function User(name) {
	var temp = 'temp';
	this.name = name;
	this.age  = 34;
}

var me = new User('Andrei');
// console.log(me);


var arrow = function() {
	console.log('arrow function');
};
var arrow = () => {
	console.log('arrow function');
};
// no paranthesis for one argument
// implicit return


/**
 *  first-class citizen
 */