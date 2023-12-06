// remove duplicate from array

const numArray = [60, 40, 20, 10, 30, 50, 20, 20, 20, 60];
const sortedArray = numArray.sort();

let i = 0;
let j = 1;
let sum = [];

while (i < numArray.length) {
  if (numArray[i] !== numArray[j]) {
    //   console.log("matched : ", "i =", numArray[i], "j =", numArray[j])
    sum.push(numArray[i]);
  }
  i++, j++;
}
console.log(sum);
