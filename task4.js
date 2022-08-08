function filterRangeInPlace(arr, a, b){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>b || arr[i]<a)
            arr.splice(i,1);
    }
    return arr;
}

arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4));