class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    getDescription(){
        return ` This car is made by ${this.make}, model name is ${this.model} and  year is ${this.year}`;
    }
}
class ElectricCar extends Car{
    constructor(make,model,year,range){
     super(make,model,year);
     this.range=range;
    }
    getDescription(){
        return `${super.getDescription()} and range is ${this.range}`;
    }
}

const tesla=new ElectricCar('Tesla','model s',2019,300);
console.log(tesla.getDescription());