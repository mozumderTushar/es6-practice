class Parent{
    constructor(){
        this.fatherName = "Schwernegger" ;
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}

const baby1 = new Child('Tom');
const baby2 = new Child('Zerry');

console.log(baby1.getFullName());
console.log(baby2.getFullName());