class Ride{
    static Name;
    constructor(Name, Model){
        this.Name = Name, 
        this. Model = Model
    }

    bike(){
        console.log(`This is ${this.Name} and model is ${this.Model}`);
        
    }
}

const p1 = new Ride("pulser", "f1");
p1.bike();