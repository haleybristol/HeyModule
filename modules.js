'use strict';

(function(exports){

	exports.readMe = function() {
		console.log('Created By: Haley Bristol, \n Date: November 12, 2016 \n Hack University JavaScript Foundations Course');
	};

	exports.minimum = function(a, b ) {
		if (a < b) {
			return a;
		}
		else if  ( b < a ) {
			return b;
		}
		else {
			return false;
		}
	}

	exports.countBs = function(string) {
		var b = 0;
		for( i = 0; i < string.length; i++ ) {
			if (string.charAt(i) === 'b') {
				b++;
			}
		}
		return b;
	};

	exports.isPrimeNumber = function(number) {
		if ( number < 2 ) {
			return false;
		}

		if ( number === 2 ) {
		 	return false;
		 }

		for ( i = 3; i < number; i++ ){
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	};

	exports.reverseArray = function(array) {
		var output = []
		for (var i = array.length -1; i >= 0; i-- ) {
			output.push(array[i]);
		}
		return output;
	};

	exports.countCharactersinString = function(string, character) {
	    var counted = 0;
	    for (var i = 0; i < string.length; i++)
	      if (string.charAt(i) == character)
	        counted += 1;
	    return counted;
	};

	exports.range = function(start, end, step){
		var array = [];
		if ( end > start ) {
			for( i = start; i <= end; i+= step){
				array.push(i);
			}
		}

		else {
			for (i = start; i >= end; i += step) {
				array.push(i);
			}
		}
		return array
	};

	exports.toThePowerOf = function(base, exponent) {
		var result = 1;
		for (var count = 0; count < exponent; count++) {
			result *= base;
		}
		return result;
	};

	function Person() {}

	Person.prototype.describe = function() {
		console.log(this.name, this.age);
	};

	Person.prototype.init = function(name, age) {
		this.name = name;
		this.age = age;
	};

	function Student() {}

	Student.prototype = new Person();

	Student.prototype.learn = function(subject) {
		this.subject = subject;
		console.log(this.name + ' just learned ' + subject);
	};

	function Teacher() {}

	Teacher.prototype = new Person();

	Teacher.prototype.level = function(gradeLevel) {
		console.log(this.name + ' teaches grade ' + gradeLevel );
	};

	// var msRobinson = new Teacher();

	// msRobinson.init('Ms. Robinson', 36);

	// msRobinson.level(2);


	// exports.sub = function(exports) {
	// 	var names = ["January", "February", "March", "April", "May", "June", "July", "August", 
	// 	"September", "October", "November", "December"];

	// 	exports.name = function(number) {
	// 		return names[number];
	// 	};

	// 	exports.number = function(name) {
	// 		return names.indexOf(name);
	// 	};
	// 	return exports;
	// }

})(typeof window === 'undefined' || window === null ? global.HeyModule = {} : this.HeyModule = {});


