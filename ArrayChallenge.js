function alwaysHungry(arr) {
    var amIHungry = "I'm Hungry"
    for(var x=0;x<arr.length;x++){
        if(arr[x] =='food'){
            console.log("Yummy");
            amIHungry = "I'm not hungry"
        }
    }
    console.log(amIHungry)
}
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"

// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var x=0;x<arr.length;x++){
        if(arr[x] > cutoff){
            filteredArr.push(arr[x])
        }
    }
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for(var x=0;x<arr.length;x++){
        sum += arr[x];
    }
    sum = sum/arr.length;
    //console.log(sum);
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]> sum){
            count += 1;
            //console.log(count);
        }
    }
    // count how many values are greated than the average
    return count;
}
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

function reverse(arr) {
    emptyArr = [];
        for(var x=0; x<arr.length; x++){
            emptyArr.push(arr[arr.length - x - 1]);
        }
    return emptyArr;
}
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0,1];
    var prev = 0;
    for(var x=2;x<n;x++){
        prev = (fibArr[x-2]) + (fibArr[x-1]);
        fibArr.push(prev);
    }
    return fibArr;
}
var result = fibonacciArray(10); //fobonacci ex - 4th val 2, 5th val 3 6th val would be 5 (4th val + 5th val)
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

