'use strict';
const {expect} = require('chai');
const binarySearch = require('./binary-search');

const test1 = [1,3,4,5,10,15,20,22,23,98,1000];
const test2 = [-3,-2,0, 9, 10, 11, 12, 15, 17, 18, 19, 20];
const test3 = [-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5];


describe('Binary Search', () => {
	it('returns true if target value is in array', () =>{
		expect(binarySearch(test1, 10)).to.equal(true);
		expect(binarySearch(test2, -3)).to.equal(true);
		expect(binarySearch(test2, 20)).to.equal(true);
		expect(binarySearch(test3, 2.6)).to.equal(true);
	});

	it('returns false if target value is not in array', () => {
		expect(binarySearch(test2, 25)).to.equal(false);
		expect(binarySearch(test3, 4)).to.equal(false);
	});

	//(OPTIONAL) WRITE YOUR OWN TESTS HERE. Include >=1 edge case :)
	it('returns false if the array is empty', () => {
		expect(binarySearch([], 25)).to.equal(false);
	})
	it('appropriately handles array of strings', () => {
		expect(binarySearch(['aardvark', 'cat', 'dog', 'elephant', 'mouse', 'zebra'], 'cat')).to.equal(true);
	})
});
