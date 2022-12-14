function ObjSession(subjectName='mathematics', grade=60, enlisted=true){
    this.subjectName=subjectName;
    this.grade=grade;
    this.enlisted=enlisted;
}
let arraySession=[
    new ObjSession('Математика', 60, true),
    new ObjSession('Біологія', 32, false),
    new ObjSession('Фізика', 75, true),
    new ObjSession('Література', 40, false),
    new ObjSession('Українська мова', 80, true),
    new ObjSession('Фізичне виховання', 55, false)
];

function showSubjectName(array){
    for(let i=0; i<array.length;i++){
        if(array[i].enlisted===true)console.log(array[i].subjectName);
    }
    for(let i=0; i<array.length;i++){
        if(array[i].enlisted===false)console.log(array[i].subjectName);
    }
}

function addSubjectName(array, obj){
    let test=0;
    for(let i=0;i<array.length;i++){
        if(array[i].subjectName===obj.subjectName){
            test=1;
            if(array[i].grade< obj.grade)
                array[i].grade=obj.grade;
            if(array[i].grade>=60)
                array[i].enlisted=true;
        }
    }
    if(test===0)
        array.push(obj);
    return array;
}

function calcAVG(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i].grade;
    }
    return sum/array.length;
}

function uncountedSubject(array) {
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i].enlisted===false)
            count++;
    }
    return count;
}

function maxGrade(array){
    let max=-99;
    let resultSubjectName;
    for(let i=0;i<array.length;i++){
        if(array[i].grade>max){
            max=array[i].grade;
            resultSubjectName=array[i].subjectName;
        }
    }
    return resultSubjectName;
}

function searchSubject(grade, array){
    let searchGrade=[];
    for(let i=0; i < array.length; i++){
        if(array[i].grade === grade)
            searchGrade.push(array[i].subjectName);
    }
    return searchGrade;
}

addSubjectName(arraySession, new ObjSession('Фізичне виховання', 90));
showSubjectName(arraySession);
console.log(calcAVG(arraySession));
console.log(uncountedSubject(arraySession));
console.log(maxGrade(arraySession));
console.log(searchSubject(40, arraySession));
