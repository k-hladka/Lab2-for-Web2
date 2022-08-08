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

showSubjectName(arraySession);