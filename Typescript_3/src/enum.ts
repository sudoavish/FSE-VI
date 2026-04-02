// What is enum => enum is a special type in typescript which allows us to define a set of named constants. It is a way to give more friendly names to sets of numeric values. Enums can be used to represent a collection of related values, such as days of the week, months of the year, or any other set of related constants.

// personal blogging website
type Role = "admin" | "user";
interface Blog {
    title: string;
    body: string;
    imageURL: string;
}

function addBlog(role: Role, blog: Blog): string {
    if(role === "user") {
        return "not authorized";
    }
    return "blog added successfully";
}

addBlog("user", {
    title: "my first blog",
    body: "this is my first blog",
    imageURL: "https://www.google.com/image.jpg"
});

addBlog("admin", {
    title: "my second blog",
    body: "this is my second blog",
    imageURL: "https://www.google.com/image2.jpg"
});

// addBlog("guest", {
//     title: "my third blog",
//     body: "this is my third blog",
//     imageURL: "https://www.google.com/image3.jpg"
// });


enum Role2 {
    user="user",
    admin="admin"
}

console.log(Role2.user); // 0
console.log(Role2.admin); // 1

// default value of enum is 0, 1, 2, 3, ... and so on. we can also assign custom values to enum members.
function addBlog2(role: Role2, blog: Blog): string {
    if(role === "user") {
        return "not authorized";
    }
    return "blog added successfully";
}
addBlog2(Role2.user, {
    title: "my first blog",
    body: "this is my first blog",
    imageURL: "https://www.google.com/image.jpg"
});