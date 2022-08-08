function randomSortArray(arr){
      let rand=Math.round(Math.random()*100);
        if(rand % 2 === 0)
            return 1;
        else
            return -1;
}
let arrayNumber = [1, 2, 3, 4, 5];
console.log(arrayNumber.sort(randomSortArray));