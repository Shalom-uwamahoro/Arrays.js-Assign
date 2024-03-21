// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arrayArr1= [3,7,34,90,12];
let arrayArr2= ["true","green","where",12,56];
console.log('last item', arrayArr1[arrayArr1.length -1]);
console.log('last item', arrayArr2[arrayArr2.length -1]);


// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

const myPets = ["Cow", "Bird", "Snake", "Dog"];
const statement = myPets.join();
console.log({statement});

// Write a JS script to sort the following array items var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort(function(a, b){return a - b}));

// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function removeDuplicates(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));


let arrDuplicates=(word)=>{
	let duplicates =word.filter((item, index) =>word.indexOf(item) !== index);
	return Array.from(new Set(duplicates));
}
console.log(arrDuplicates(arr));


// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
function searchWord(word5){
    word5= word5.map(item => String(item).toLowerCase());
    if(word5.includes("food")){
        return "food";
    } else {
        return "the search word was not found"
    }
}
console.log(searchWord(arr5));


// Write a JS script to sort the following string:let word = "renniw"

let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log({sortedWord});