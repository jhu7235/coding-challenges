
const compareForDuplicates = (cached, value) => {
	if (cached[value]) return true;
	return false;
};

const checkDataType = (data, type) => {
	switch (type) {
		case 'string':
			if (typeof data !== 'string') console.log(new Error('input is not string'));
			break;

		case 'array':
			if (!Array.isArray(data)) console.log(new Error('input is not array'));
			break;

		default:

	}
};

const inclusiveNumberLimit = (arr, lowerLimit, upperLimit) => {
	for (var i = 0; i < arr.length; i++) {
		// change console log to throw when done
		if (arr[i] < lowerLimit || arr[i] > upperLimit || typeof arr[i] != 'number') console.log(new Error('number not within bounds'));
	}
};

const checkDuplicate = (arr) => {
	checkDataType(arr, 'array');
	const cached = {};
	for (var i = 0; i < arr.length; i++) {
		if (compareForDuplicates(cached, arr[i])) return  arr[i];
		cached[arr[i]] = true;
	}
	return false;
};


// 1. Given an array of integers between 1 and 1,000,000. One integer is in the array twice. Find the duplicate.
const duplicateInteger = (ints) => {
	inclusiveNumberLimit(ints, 1, 1000000);
	return checkDuplicate(ints);
};

// empty array
console.log('EMPTY ARRAY');
console.log(duplicateInteger([]));
// not an array
console.log('NOT AN ARRAY');
console.log(duplicateInteger({}));
// no duplicates
console.log(duplicateInteger([1]));
// numbers not within bounds
console.log('INVALID ARRAY');
console.log(duplicateInteger([-100, 0, 1, 3]));
console.log(duplicateInteger([1, 3, 0]));
console.log(duplicateInteger([0, 10000000]));
// no duplicates
console.log('NO DUPLICATES');
console.log(duplicateInteger([ 11, 33, 3, 1, 2, 49, 23, 10]));
// duplicates
console.log('DUPLICATES');
console.log(duplicateInteger([ 1, 3, 4, 1, 2, 49, 10]));
console.log(duplicateInteger([ 14, 3, 3, 1, 2, 49, 10]));


// 2. Find the first non-repeating character in a string:("DEFD" -> E )
const duplicateCharacters = (str) => {
	checkDataType(str, 'string');
	return checkDuplicate(str.split(''));
};

// empty string
console.log('EMPTY STRING');
console.log(duplicateCharacters(''));
// // not an string
// console.log('NOT AN STRING');
// console.log(duplicateCharacters({}));
// no duplicates
console.log('NO DUPLICATES');
console.log(duplicateCharacters('LJE ASDFalsdkjf'));
console.log(duplicateCharacters('abcdefghijklmnopqrstuvwxyz'));
// duplicates
console.log('DUPLICATES');
console.log(duplicateCharacters('johny apleseed'));
console.log(duplicateCharacters('catFurIsSoft'));

// 3. A standard deck of 52 cards is represented in an array. Each card is represented as an integer. Write a method to shuffle the cards.
const shuffle = (arr) => {
	const newArr = arr.splice(0);
	const shuffledArray = [];
	while (newArr.length) {
		const index = Math.floor(Math.random() * newArr.length);
		const splicedValue = newArr.splice(index, 1);
		shuffledArray.push(...splicedValue);
	}
	return shuffledArray;
};

const shuffleDeck = (deck) => {
	checkDataType(deck, 'array');
	return shuffle(deck);
};

// empty deck
console.log('EMPTY DECK');
console.log(shuffleDeck([]));
// // not an array
// console.log('NOT AN ARRAY');
// console.log(shuffleDeck({}));
// full deck
console.log('FULL DECK');
console.log(shuffleDeck([
	1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
	30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
	40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
	50, 51, 52
]));
