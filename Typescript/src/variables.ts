let name: string = "Avish";  // Must be a string
let age: number = 20;        // Must be a number
let canVote: boolean = true; // True/false

// Arrays
let hobbies: string[] = ["coding", "reading"];

// Type inference (TS guesses the type if you don't specify)
let city = "Fzk";  // TS infers this as string automatically

console.log(name, age);  // Outputs: Avish 20

// Error example (TS will complain!)
// age = "twenty";  // Error: Type 'string' is not assignable to type 'number'.