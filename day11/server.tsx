// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(nums);
// let newArray = nums.flatMap((arr, index, value) => {
//   console.log("First Arr value ", arr);
//   console.log("Second index = ", index);
//   console.log("Third value = ", value);
// });

// const arr = [[1, 2, 3], [5, 7, 8], [8, 9, 2][2], 23];
// console.log("This is 2D array", arr);
// console.log("One D Array ", arr.flat());

// const str = "Aannd";
// const strArr = Array.from(str);
// console.log(strArr);
// console.log(strArr.join());

// const num = Array.of("Anand", "Chaudhary", "Prakash", "24");
// console.log(num);

let text = "Aannd Prakash";
// let letter=text.charAt(text.length-2);
// let letter=text.charCodeAt(2)
// console.log(letter);
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());

const texts = "     Anand Prakash    ";
console.log(texts);
console.log(texts.trim());

// const ans = words.flatMap(word => word.split(""))
// console.log(ans);
// const words = ["Hello", "world", "how", "are", "you"];

// const numbers = [1, 2, 3, 4];

// const doubledAndSquared = numbers.flatMap(num => [num * 2, num * 3]);

// console.log(doubledAndSquared);

// const sentences = ["Hello world", "How are you?", "JavaScript is fun"];

// const words = sentences.flatMap(sentence => sentence.split(' '));

// console.log(words);

function fun() {
  let arr = [23, 56, 87, 32, 75, 13];
  let newArra = arr.slice(2, 4);
  console.log(newArra);
  console.log(arr);
}
fun();
