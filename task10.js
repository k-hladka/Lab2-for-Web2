function unique(arr){
    let arrCopy2=arr.slice();
    for(let i=0; i<arrCopy2.length; i++){
        for(let j=0; j<arrCopy2.length; j++){
            if(arrCopy2[i].localeCompare(arrCopy2[j])===0 && j!==i){
                arrCopy2.splice(j,1);
                j-=1;
            }

        }
    }
    return arrCopy2;
}

let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];
console.log(unique(strings)); // C++, C#, C, JavaScript
console.log(strings);