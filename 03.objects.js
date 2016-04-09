/**
 *  Objects
 */


// object literal
var me = {
	firstName: 'Andrei',
	lastName : 'Pfeiffer',
	age: 34,
	skills: [
		{ name: 'html', level: 8 },
		{ name: 'css',  level: 7 },
		{ name: 'js',   level: 6 },
	],
	getAge: function() {
		return this.age;
	}
};


/**
 *  usage
 */

// data structures (ES6 Set/Map)
// code structure (methods)


/**
 *  property access
 */
// console.log( me.firstName );
// console.log( me.skills[1].level );


/**
 *  properties with spaces
 */
// console.log( me['first Name'] );


/**
 *  properties as expressions
 */
var name = 'Name';
// console.log( me['first ' + name] );


/**
 *  enhanced literals (ES6)
 */


/**
 *  delete property
 */

// delete me.skills;
// console.log(me);


/**
 *  property descriptors
 */
// console.log( Object.getOwnPropertyDescriptor(me, 'age') );
// Object.defineProperty(me, 'age', {
// 	writable: false
// });


/**
 *  freezing (seal, preventExtensions)
 */
// Object.freeze(me);
// me.age = 1;
// me.city = 'Timisoara';
// delete me.skills;
// console.log( Object.isFrozen(me) );


/**
 *  iterations
 */
// console.log( Object.keys(me) );
Object.keys(me).forEach(function(item) {
// 	console.log(item);
});

var you = Object.create(me);
you.firstName = 'Gigel';
you.lastName = 'Popescu';
for (var prop in you) {
	// console.log(item);
}


/**
 *  JSON - JavaScript Object Notation
 */
var data = { name: 'Andrei', age: 34 };
// console.log( JSON.stringify( data ) );
var json = '{ "name": "Andrei", "age": 34 }';
// console.log( JSON.parse( json ) );


/**
 *  null
 */

// removes reference, clears memory
// me = null;


/**
 *  typeof
 */
// console.log(typeof me);
