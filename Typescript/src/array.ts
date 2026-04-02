let numArr: number[] =[1,2];

type user = {
    name: string,
    age: number,
}

let users: user[] = [{
    name: "Avish",
    age: 20,
}, {
    name: "Meow",
    age: 6,
}]


function printUserName(users: user[]): void{
    users.forEach((u: user): void=> {
        console.log(u.name);
    })
}

printUserName(users);