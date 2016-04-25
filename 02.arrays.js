/**
 *  Arrays
 */


// array literal
var arr = [1, 2];
// var arr2 = new Array(2);


/**
 *  element access
 */
// zero based index
// console.log( arr[0] );
// arr[2] = 3;
// arr[arr.length] = 4;

// define higher index element
// arr[5] = 5;


/**
 *  length
 */

arr['a'] = 5;
// console.log( arr.length );


/**
 *  manipulation
 */

// https://graelaws.files.wordpress.com/2010/08/capture1.jpg
// http://i.stack.imgur.com/1pQk8.jpg


arr.push(3);
arr.push(4);
// arr.unshift(0);
// console.log( arr.length );


/**
 *  stack (modals on top of each other)
 */

// console.log( arr );
// console.log( arr.pop() );
// console.log( arr.pop() );
// console.log( arr );


/**
 *  queue (process queue, image processing)
 */

// console.log( arr );
// console.log( arr.shift() );
// console.log( arr.shift() );
// console.log( arr );


/**
 *  mixed
 */

// console.log( arr );
// console.log( arr.pop() );
// console.log( arr.shift() );
// console.log( arr );


/**
 *  sub-arrays
 */

// console.log( arr.slice(1, 3) );
// console.log( arr.splice(1, 2, 5, 6) );
// console.log( arr );


/**
 *  find index
 */
// console.log( arr.indexOf(1) );



/**
 *  filter
 */

var odds = arr.filter(function(item) {
	return (item % 2) !== 0;
});
// console.log(odds);


/**
 *  iterations
 */

for (var i = 0; i < arr.length; i += 1) {
	// console.log(arr[i], i);
	arr[i] += 10;
}
// console.log( arr );

arr.forEach(function(item, index) {
	// console.log(item, index);
	arr[i] += 10;
});
// console.log( arr );

var arr2 = arr.map(function(item, index) {
	return item + 10;
});
// console.log( arr );
// console.log( arr2 );


/**
 *  other useful methods
 */

// find, findIndex
// reduce, reduceRight
// lastIndexOf
// fill
// concat, join
// sort
// every, some

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


/**
 *  typeof
 */

// console.log( typeof arr );
// console.log( Array.isArray(arr) );
