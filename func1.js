function addClass(obj, cls){
    let arr=obj.className.split(' ');
    let test=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===cls){
            test=1;
            break;
        }
    }
    if(test===0){
        if(obj.className[obj.className.length]!==' ' && cls[0]!==' ' && obj.className.length!==0)
            obj.className+=' ';
        obj.className+=cls;
    }
    return obj.className;
}
let obj = {
    className: 'open menu'
}
console.log(addClass(obj, 'new'));
console.log(addClass(obj, 'open'));
console.log(addClass(obj, 'me'));