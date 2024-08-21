// Var operation
// var name = "Avi";
// console.log(name);
// var age=22;
// console.log(age);
// var place = "punjab"
// console.log(place);

// function print(userName, userAge){
//     return "my inspiration place is "+ userName + "\n" + "what place temp was " + userAge+ '';
// }
// console.log(display("avi", 25));

// function display(course, courseCode){
//     return "I am sturdying "+ course + "\n" + "the course code is " + courseCode+ '';
// }
// console.log(display("React", "Int252"));


// Block Scope 

// function varscope(){
//     const x=2;
//     if(true){
//         const x=1;
//         console.log(x);
        
//     }
//     console.log(x);
// }

// varscope()
function sum(...arg){
    return arg[0]+arg[1]+arg[2];
}
const Car = {
    Name: 'Lambo',
    Val1: 23,
    Val2: 43,
    Model: ()=>{
        console.log("My car name is "+Car.Name);
        
    },
    Model1: ()=>{
        console.log("My car name is "+Car.Val1);
        
    },
    Model2: ()=>{
        console.log("My car name is "+Car.Val2);
        
    },
}
Car.Model();
Car.Model1();
Car.Model2();
