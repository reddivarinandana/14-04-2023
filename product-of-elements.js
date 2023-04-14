//Write a program to calculate a product of all elements in an array?

let arr = [1,2,3,4,5];
let n=arr.length;
let result = 1;
for (let i = 0; i < n; i++){
    result = result * arr[i];
}
console.log(result);