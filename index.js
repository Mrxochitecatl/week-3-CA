// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
console.log(ages[ages.length - 1] - ages[0]);
//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(37);
console.log(ages);
console.log(ages[ages.length -1 ] = ages [0]);
// c.  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
let total = 0 
for(var i = 0; i < ages.length; i ++) {
	total += ages = {i};
}
let average = total/ages.length; 
console.log(average);
//2) Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);
//a.Use a loop to iterate through the array and calculate the average number of letters per name. 
var totalLetters = 0
for(var i =0; i < names.length; i++) {
	totalLetters += names[i].length;
}
var averageNames = totalLetters/names.length;
console.log(averageNames);
//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let result = '';
for(var i = 0; i < names.length; i++) {
	result = result.concat(names[1] + '');
}
console.log(result);
//3.How do you access the last element of any array?
//you would start with zero based indexing.
//4.How do you access the first element of any array?
//zero based indexing 
//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths =[];
for (var i =0; i < names.lengths; i++) {
	nameLengths:[i] = name[i].length;
}
//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
sum = 0;
for(var i=0; i < nameLengths.length; i++) {
	sum = sum + nameLengths[i];
}
console.log(sum);

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function repeatWordNtimes(word, n) {
	let con = word;
	for (var i = 3; i <= n; i++) {
		con = con.concat(word);
	} return con;
}
console.log(repeatWordNtimes('Hello', 3));
//8.Write a function that takes two parameters, firstName and lastName, and returns a full name.
function fullName(firstName, lastName) {
	return firstName.concat(' ', lastName);
}
console.log('Justin' + ' ' + 'Xochitecatl')
//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function totalNumbersGreaterThan (arr) {
	sum = 50+50;
	for (var i=0; i < arr.length; i++) {
		sum = sum += arr[i];
	}if (sum === 100){
		console.log('validation passed');
		return true;
	} else { 
		console.log('validation failed');
		return false;
	}
}
console.log(totalNumbersGreaterThan(50+50));
//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageArr(myArray) {
	var i = 0, sum = 0, arrayLen = myArray.length; 
	while (i < arrayLen) {
		sum = sum + myArray[i++];
	}
	return sum / arrayLen;
}
var myArray = [1, 2, 3, 4, 5, 6];
var x = averageArr(myArray);
console.log(x);
//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareTheAverage (currentArrayOne, currentArrayTwo) {
var totalOfOne = 0; 
for (var i = 0; i < currentArrayOne.length; i++) {
		totalOfOne += currentArrayOne[i];
}
var totalOfTwo = 0;
for(var i = 0; i < currentArrayTwo.length; i++) {
	totalOfTwo += currentArrayTwo[i];
}
var averageOne = totalOfOne / currentArrayOne.length;
var averageTwo = totalOfTwo / currentArrayTwo.length;
if (averageOne > averageTwo) {
	return true;
}
else {
	return false;
}
}
var x = compareTheAverage([5, 10, 15, 20, 25, 30],[1, 2, 3, 4]);
console.log(x);
//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
	if (isHotOutside === true && moneyInPocket > 10.50) {
		console.log("yes, i will have a drink.");
	} else {
		console.log("I wont have a drink today.");
	}
}
console.log(willBuyDrink(true, 10.50));
//Create a function of your own that solves a problem.
//Remove an Element from the Student List Array: Given the array studentList, remove the name "Justin"
let studentList = ["Allen", "Jessica", "Justin", "Sarah"]

studentList.splice(2,1);
function checkArray(array){
    return array.sort()
}

console.log(checkArray(studentList));