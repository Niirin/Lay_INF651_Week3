let myButton = document.querySelector("button");
let arrResult = document.getElementById("result");
let arr;

myButton.onclick= () => {
    //save the input value into a variable
    let input = document.getElementById("arr").value;
    arr = (input.split(",")).map(Number);
    // console.log(arr);
    arrayAnalyzer(arr);
}

function arrayAnalyzer(arr) {
    //code here
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);
    let avg = findAvg(arr);
    let evenArr = findEven(arr);

    arrResult.innerHTML= `max: The maximum value in the array, which would be ${maxVal}. <br>
   min: The minimum value in the array, which would be ${minVal}. <br>
    avg: The average of all the numbers in the array, which is ${avg}. <br>
    even numbers: An array of all the even numbers in the array, which would be [${evenArr}].`
}

function findAvg(arr) {
    let sum =0;
    for (let i=0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    return sum / arr.length;
    
}

function findEven(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}