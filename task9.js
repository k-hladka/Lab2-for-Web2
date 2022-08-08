function Dog(nameDog, breedDog, ageDog){
    this.nameDog=nameDog;
    this.breedDog=breedDog;
    this.ageDog=ageDog;
    this.sayDog=function (){
        if(this.ageDog<1)
            console.log('Тяф');
        else if(this.ageDog>=1 && this.ageDog<3)
            console.log('Гав');
        else
            console.log('Ррр');
    }
}

let dog = new Dog('Bobik', 'Shepherd dog', 0.1); //'Тяф'
dog.sayDog();
