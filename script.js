


function car (brand,model,year){
  this.brand=brand;
   this.model=model;
    this.year=year;
    
this.getDetails =function (){
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
}

}

const car1=new car('Toyota','corolla',2020);
const car2=new car('tesla','model 3',2022);
const car3=new car('ford','mustang',2019);
const car4=new car("BMW", "X5", 2019);
console.log(car1.getDetails());
console.log(car2.getDetails());
console.log(car3.getDetails());
console.log(car4.getDetails());