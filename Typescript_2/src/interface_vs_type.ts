// Union type -> combination of multiple type
// Only implies to type
// Cannot do this using interface

type numOrStr = number | string | boolean;

// let a: number
// a = 10;
// a = "hello" // error 

let a: numOrStr;
a = 10;
a = "hello";
a = true;

type role = "user" | "admin";

let r: role;
r = "admin";
r = "user";
// r = "fcvbndw";


interface Emp{
    name:string,
    empId: string,
    salary: number,
    phone: number
}

interface TeamLead{
    name:string,
    empId: string,
    salary: number,
    projectID: string
}

type EmpOrTeamLead = Emp | TeamLead;

let e: EmpOrTeamLead = {
    name: "Avish",
    empId: "Meow",
    salary: 4919861,
    projectID : "rxtcyvbn",
    phone: 8284009268,
}


// Intersection

type empAndTeamLead = Emp & TeamLead;
let e1: empAndTeamLead = {
    name: "asdfghjkl",
    empId: "hvjb",
    salary: 95461,
    phone: 8284009268,
    projectID: "vboubi",
}


// Interface are expandable while types are not

interface User {
    name: string,
}
interface User {
    age: number,
}

let u:User = {
    name: "Avish",
    age: 20,
}

/*

type Person = {
    name: string,
}
type Person = {
    age: string,
}

*/


/*
1. Types support union and intersection operation while interfaces do not
2. Interfaces are expandable and automatically merged while types are not
3. Interfaces are mainly used to define the structure of objects and classes
4. Types are more versatile and can be used to define various types including primitives, unions, intersections, and tuples
*/
