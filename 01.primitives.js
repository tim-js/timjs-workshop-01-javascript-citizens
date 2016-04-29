/**
 *  Primitives
 */

// string
var str   = 'Andrei Pfeiffer';
// number
var nr    = 12;
// boolean
var bool  = true;
// null
var nil   = null;
// undefined
var undef = undefined;
// Symbol (ES6)
var symb  = Symbol('some description');


/**
 *  null vs undefined
 */
// undefined = non existence, missing
// null      = non value, emptiness (in regard to objects)


/**
 *  variables
 */

// case sensitive
var Nr = 34;


/**
 *  typeof operator
 */

console.log(typeof str);
console.log(typeof nr);
console.log(typeof bool);
console.log(typeof nil);
console.log(typeof undef);
console.log(typeof symb);


/**
 *  Loosely typed, Dynamic language
 */

var nr1 = 1;
var nr2 = '1';

// implicit type coercion
console.log(nr1 == nr2);
console.log(nr1 === nr2);


/**
 *  type casting
 */

// to number
var age = '34.5';
age = parseInt(age);
age = parseFloat(age);
// age = +age;
console.log(age + 1);

// to string
var username = 1122;
username = String(username);
// username = '' + username;
console.log(0 + username);

// to boolean
var exists = 1;
console.log(!!exists);


/**
 *  falsey values
 */

if () {
	// true branch
} else {
	// false branch
}

console.log( !!'' );
console.log( !!0 );
console.log( !!false );
console.log( !!null );
console.log( !!undefined );
console.log( !!NaN );

// "if (typeof)" vs "if ()"

if (
	typeof age !== 'undefined' &&
	parseInt(age) !== NaN &&
	parseInt(age) > 0
) {
	// code
}

if ( parseInt(age) ) {
	// code
}
