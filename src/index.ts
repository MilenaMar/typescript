let message: string = 'Hello word';
message += 'again';
console.log(message);


// primitive javaScript data types 

let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
let biggy: bigint = 24n;

// build in classes 

let regexp: RegExp = new RegExp('ab+c');
let array: Array<number> = [1,2,3];
let set: Set<number> = new Set([1,2,3]);

// another way to declare arrays 
let arraySecond: number[]= [1,2,3];

//usage

arraySecond =[1]
arraySecond=[1,2,3,3,4]

//Tuple
let tuple: [number, number] = [0,0];
//usage (if is less than two numbers we will receive and error from the compiler)
tuple = [1,1]
tuple= [1,2]

//and both values need to be numbers.

// Object Types and Type Aliases

// I can declare and object type the following way 

let center: {x: number, y: number} = {
    x:1,
    y:1,
}

let unit: {x: number, y: number} = {
    x:1,
    y:1,
}

// but the repetion is not good here is where we can use a type Alias
// Type alias help us to define intend 
type Point = {x: number, y:number};

//and then replace 

let centerSecond: Point = {
    x:1,
    y:1,
}

let unitSecond: Point = {
    x:1,
    y:1,
}

// Const Declaration 
const point : Point = {x:0, y:0}; // if the name on the variable does'n match we will receive and error e.i xx


// Functions 

/*this function will receive only two parameters thar are numbers 
 and the return of the function is a number*/
function add(a:number, b:number): number{
return a+b;
}

/* this function won't return and receives one message type string*/

function log (message:string): void{
console.log('Log:', message)
}

/* this function can recive a rest parameter and will add 
it to and array in this case of numbers */
function sum (...values: number[]) {
    return values.reduce((previous, current)=>{
        return previous + current
    })
}

sum(1,2);//3
sum(1,2,3);//6

// First clase functions 



//refactoring 

type Add= (a:number, b:number)=>number; 

let addSecond: Add;
addSecond = function (a: number, b:number): number {
    return a+b
}

// Structural Typing 

type User= {id: string};
type Product = {id: string};

let user: User = {id: 'milenamartinez'}
let product: Product = {id:'productmilenabuy'}

/* Because of they structure typescript allows to say 
user = product and product = user  */

type Point2D = {x: number, y:number};
type Point3D = {x:number, y:number, z:number};

let point2D: Point2D = {x:0, y:10}
let point3D: Point3D = {x:0, y:10, z:20}

/* in Typescript structural typing extra information is ok less information is Not!*/
//point2D = point3D // Duck typing;

// Classes in Typescript

class Animal {
   private name: string; // if private is use the name can't be acces outside the class

    constructor(name:string){
        this.name = name; 
    }

    public move(distanceinMeters:number): void{
        console.log(`${this.name} moved ${distanceinMeters}m.`)
    }
}

let cat = new Animal('cat');
cat.move(10);



