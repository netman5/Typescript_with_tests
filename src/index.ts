let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished: boolean = true;

let numbers: number[] = [1, 2, 3];

// any variable declared without initiating it is of type any

// tuples: is a fixed set arry that can be either number, striung or boolean
let user: [number, string] = [1, 'James'];
// Reduce typles value to two, it is useful when we have only two value pair

// Enums
// Make to use PascalCase
const enum Size { Small = 1, Medium, Large };
// compiler will auto set value for other member
// If the value of the first child of the enum is a string, implicitly set the value of the other children to string

// Using enums
let mySize: Size = Size.Large;
console.log(mySize)

// Function

// If not returning any value annotatee void but always set the return type
function calculateTax(income: number, taxYear: number): number {
    if(taxYear < 2022)
        return income * 1.3;
    return income * 2
}

calculateTax(100_000, 2022)

// Object

let employee: {
    readonly id: number,
    name: string,
    age: number,
    hasAcar?: boolean
    retire: (date: Date) => void;
} = {
    id: 1,
    name: "Debbies",
    age: 37,
    retire: (date: Date) => {
        console.log(date);
        
    }
}


// Advance types

// Type alias

type Person = {
    readonly id: number,
    name: string,
    age: number,
}

let clone: Person = {
    id: 1,
    name: 'Taylor',
    age: 49
}


// Union types
function kgToLbs(weight: number | string): number {
    // use narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2
}

kgToLbs(20);
kgToLbs('20kg')

// Intersection

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal type (exact, specific value)

let quantity: 50 = 50;

let qts: 50 | 100 = 100;

// better still use type

type Quantity = 50 | 100;
let newQts: Quantity = 50;

type Metric = 'cm' | 'inch'

let kg: Metric = 'cm'
let size: string | number = 10 + kg


// working with null values

function greet(name: string | null | undefined){
    if(name)
        console.log(name.toLocaleUpperCase)

    else{
        console.log("Hola!");
        
    }
}

greet(null)


// Optional chanining

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);

// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// optional element access operator
let customers: number[] = [];
customers?.[0];

// optional call for function that returns null
let log: any = null;
log?.('2')