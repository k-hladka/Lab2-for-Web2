function arraySort(arr){
    let arrayCopy=arr.slice();
    return arrayCopy.sort();
}

let array = ["HTML", "JavaScript", "CSS"];
console.log(arraySort(array));// CSS, HTML, JavaScript
console.log(array);// HTML, JavaScript, CSS