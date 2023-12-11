//  remove a specific element from array

let numArray = [1,2,3,4,4,3,4,2,4]

let newValue = numArray.filter((val)=>{
    return val != 3
})
console.log(newValue);
