function removeClass(object, clss){
    let arr=object.className.split(' ');
    for(let i=0; i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]===clss){
                arr.splice(j,1);
            }
        }

    }
    object.className=arr.join(' ');
    return object;
}

let object = {
    className: 'open menu'
};

console.log(removeClass(object, 'open'));
console.log(removeClass(object, 'blabla'));