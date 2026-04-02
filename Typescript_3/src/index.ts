type numStrBool = number[] | string[] | boolean[];

function firstValue(arg: numStrBool): number | string | boolean | undefined {
    return arg[0];
}

let res0 = firstValue([]); // undefined
let res1 = firstValue([1, 2, 3]); // number
let res2 = firstValue(["a", "cd", "b"]); // string
let res3 = firstValue([true, false, false]); // boolean
// let res4 = firstValue([1, "b", true]); // number | string | boolean


res1?.toString();
// res2?.toUpperCase();
res2?.toString();

// Union and intersection, information about type lost --> union does not presered type

function firstValueGeneric<T>(arg: T[]): T | undefined {
    return arg[0];
}

let out1 = firstValueGeneric<String>(["1", "2", "3"]);

out1?.toUpperCase();


// ? is used to make property optional
interface User {
    readonly aadhar: number; // readonly property cannot be modified after initialization  
    name: string;
    email: string;
    password: number;
    phone?: number;
}

