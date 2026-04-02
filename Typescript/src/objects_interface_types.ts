// Object Literal: Inline types (good for one-off).

let user2: { name: string, age: number } = {
    name: "Avish",
    age: 20
};
console.log(user2.name);  // Safe—TS knows 'name' exists and is string





// Interface: A reusable "shape" for objects (your example had a small issue: interfaces should start with uppercase, like User—it's a convention for readability).

interface User {  // PascalCase
    name: string;
    age: number;
    city: string;  // Note: Use semicolons ; (not commas , in older styles)
}

let user4: User = {
    name: "Avish",
    age: 20,
    city: "Fzk"  // Error if missing: { name: "Avish", age: 20 }  // Error: Property 'city' is missing.
};



// Type Alias: Similar to interface, but more flexible for non-objects too.

type Person = {
    name: string;
    age: number;
    city: string;
};

let person1: Person = {
    name: "Avish",
    age: 20,
    city: "Fzk"
};

/*

Interface vs. Type? As a beginner, use type for simple stuff. Use interface if you might "extend" it later (e.g., interface Admin extends User { role: string; }).

*/


// Create an interface Book with title: string, author: string, and pages: number.

interface Book {
    title: string;
    author?: string;
    pages: number;
}

const book1: Book = {
  title: "The Hobbit",
  pages: 310
};

let book2: Book = {
    title: "Game Of Thrones",
    author: "George RR Martin",
    pages: 1074,
}

console.log(book1);   
console.log(book2);