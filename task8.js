function sortAge(a,b){
    if(a.age>b.age)
        return 1;
    else
        return -1;
}

let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };

let people = [ vasya , masha , vovochka ];
console.log(people.sort(sortAge));
console.log(people[0].age) // 6