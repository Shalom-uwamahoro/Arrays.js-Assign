// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arrayArr1= [3,7,34,90,12];
let arrayArr2= ["true","green","where",12,56];
console.log('last item', arrayArr1[arrayArr1.length -1]);
console.log('last item', arrayArr2[arrayArr2.length -1]);
console.log(arrayArr2.length);

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

const myPets = ["Cow", "Bird", "Snake", "Dog"];
const statement = myPets.join(" ");
const state= myPets.join();
const myPetsIndex= myPets.indexOf("Bird");
console.log({myPetsIndex});
console.log({statement});
console.log({state});


// Write a JS script to sort the following array items var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort(function(a, b){return a - b}));

// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function arrayDuplicates(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index)
};
console.log(arrayDuplicates(arr));

let arrDuplicates=(word)=>{
	let duplicates =word.filter((item, index) =>word.indexOf(item) !== index);
	return Array.from(new Set(duplicates));
}
console.log(arrDuplicates(arr));


// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
function searchWord(arr5){
    word= arr5.map(item => String(item));
   // word= arr5.map(item => item);
    /* word= word5.map(item => String(item).toLowerCase());
     the above statement can work to*/
    if(word.includes("food")){
        return "food";
    } else {
        return "the search word was not found"
    }
}
console.log(searchWord(arr5));


// Write a JS script to sort the following string:let word = "renniw"

let word2 = "renniw";
let sortedWord = word2.split('').sort().join('');
console.log({sortedWord});