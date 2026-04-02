// typeNarrowing

function foo(arg: string | number | boolean) {
    if (typeof arg == "string") {
        return arg.toUpperCase(); 
    }
    return arg;
}

console.log(foo("hello")); // "HELLO"
console.log(foo(42));      // 42

interface User {
    name: string;
    email: string;
    password: string;
    phone?: number;
}

let user1: User = {
    name: "sdfgh",
    email: "sdfgh",
    password: "sdfgh",
    phone: 1234567890
}

let user2: User = {
    name: "sdfgh",
    email: "sdfgh",
    password: "sdfgh"
}

function getPhone(user: User){
    if("phone" in user){
        return user.phone;
    }
    return 0;
}

console.log(getPhone(user1)); // 1234567890