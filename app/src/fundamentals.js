// Workshop / Training / Course JavaScript Fundamentals

/*
- scurt intro
	- primul workshop dintr-o serie mai lunga
	- e bine sa inveti JS pentru a intelege mai bine structurile de nivel mai inalt

- scurt istoric
	- scris initial in 10 zile
	- evolutie foarte lenta
	- JS vs ES vs DOM
	- versiunea curenta ES6
*/

// Primitives

var s = 'tim.js';
var n = 2;
var b = true;
var u = undefined;
var l = null;

// log( typeof NaN );


// falsey values

// number 0
// string empty
// boolean false
// undefined
// null
// NaN

var num = 2;

const o = {
	num,
	str: '2',
	obj: {
		bool: true,
		arr: [
			{ a: 1, b: 2 },
			{ a: 3, b: 4 }
		]
	},
	foo() {
		console.log('foo xxx');
	}
};
console.log(19);
