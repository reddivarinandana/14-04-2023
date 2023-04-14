//Given an array of number rearrange the array according to below example
//Input : Array = [2,3,4,6,5,1,8]
//Output : Array = [2,4,6,8,3,5,1]

let arr = [2,3,4,6,5,1,8];
let start = 0;
let end = arr.length-1;
while(start < end){
    while(arr[start] % 2 == 0){
        start++;
    }
    while(arr[end] % 2 != 0){
        end--;
    }
    if(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]+" ");
}


