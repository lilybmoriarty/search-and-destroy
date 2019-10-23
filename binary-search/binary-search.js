'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let beginning = 0
	let endpoint = array.length-1
	let midpoint = Math.floor((endpoint+1)/2)
	while (array[midpoint] != target && array[beginning] != target && array[endpoint] != target) {
		// console.log("target:",target, "range:", beginning, midpoint, endpoint)
		if (midpoint === beginning || midpoint === endpoint) return false
		else if (target < array[midpoint]) endpoint = midpoint
		else beginning = midpoint
		midpoint = Math.floor((endpoint+beginning)/2)
	}
	return true
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
