// reverse an array

const arr = [1, 4, 3, 2];
const b = [];
for (i = arr.length - 1; i > -1; i--) {
  b.push(arr[i]);
}
const c = b.toString();
let d = c.replaceAll(",", " ");
console.log(d);

//expected output = 2 3 4 1 