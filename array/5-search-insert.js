// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

let numArray = [10, 20, 30, 40, 50, 60, 40];

let newNumber = 40;

let value = numArray.filter((value)=>{
    if(value === newNumber){
        console.log(value);
    }
})