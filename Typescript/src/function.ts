function canVote(age: number): boolean {  // Input: number, Output: boolean
    if (age < 18) {
        return false;
    }
    return true;
}

const result = canVote(20);  // Works
console.log(result);         // true
// Error if wrong: canVote("20");  // Error: Argument of type 'string' is not assignable to 'number'.



const add = (a: number, b: number): number => a + b;
console.log(add(5, 10));  // 15



// Greeting Function
function greet(name: string): void {
    console.log("Hello, " + name + "!");
}

greet("Meow");

// 2 Sum Function
function sum(a:number, b:number) : number {
    return a+b;
}

console.log(sum(10,9));