function reverseSort(array){
    let sort;
    for(let i=0; i<array.length-1; i++){
        for(let j=i+1; j<array.length; j++){
            if(arr[i]<arr[j]){
                sort=arr[i];
                arr[i]=arr[j];
                arr[j]=sort;
            }
        }
    }
    return array;
}

let arr=[5, 2, 1, -10, 8];
console.log(reverseSort(arr));