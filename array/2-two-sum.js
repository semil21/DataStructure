// add any elements from array such that its total is equal to answer

// Input: nums = [2,7,11,15], target = 9

let number = [ 1,2,3,4,5]
let answer = 9

for (let i=0 ; i <= number.length; i++){
    for (let j =1; j<=number.length ; j++){
        let total = i + j
        if(total === answer){
            console.log(i , j )
        }
         
    }
}