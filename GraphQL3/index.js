import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users=[
    {
        id:1,
        name:"Shiwangi",
        email:"shiwangi123@gmail.com",
        password:"shiwangi123",
        phone:1234567890
    },
    
    {
        id:2,
        name:"Sk",
        email:"sk123@gmail.com",
        password:"sk123",
        phone:1234567890
    }
]
let blogs=[
    {
        id:1,
        title:"Blog1",
        desc:"This is my first blog",
        date:"01-03-2026",
        userId:1
    },
    {
        id:2,
        title:"Blog2",
        desc:"This is my second blog",
        date:"02-03-2026",
        userId:2
    }
]
const typeDefs=`
type User{
id:ID!, #ID is a special type in GraphQL which serialize to string
name:String,
email:String,
password:String,
phone:Int,
blog:[Blog]
}
type Blog{
id:ID!,
title:String,
desc:String,
date:String
userId:ID!
user:User
}
type Query{
getUsers:[User],
getUser(id:ID!):User,
getBlogs:[Blog],
getBlogById(id:ID!):Blog
}
type Mutation{
addUser(name:String,email:String,password:String,phone:Int):User
deleteUserById(id:ID!):User
addBlog(title:String,desc:String,date:String):Blog
deleteBlogById(id:ID!):Blog
updateBlog(id:ID!,title:String,desc:String,date:String):Blog
}
`
const resolvers={
    Query:{
        getUsers:()=>{
            return users;
        },
        //Resolver function has 4 parameters(optional):parent,args,context,info    args means input argument(object)
        getUser:(parent,args,context,info)=>{
            let id=args.id;
            let user=users.find((u)=>u.id==id);
            return user;
            //return users[0];
        },
        getBlogs:()=>{
            return blogs;
        },
        getBlogById:(parent,args,context,info)=>{
            let id=args.id;
            let blog=blogs.find((b)=>b.id==id);
            return blog;
        }
    },
    Mutation:{
        addUser:(_,args)=>{
            let {name,email,password,phone}=args;
            let newUser={
                id:String(Math.floor(Math.random()*1000000)),
                name:name,
                email:email,
                password:password,
                phone:phone
            }
            users.push(newUser);
            return newUser;
        },
        deleteUserById:(_,args)=>{
            let id=args.id;
            let deletedUser=users.find((u)=>u.id==id);
            users=users.filter((u)=>u.id!=id);
            return deletedUser;
        },
        addBlog:(_,args)=>{
            let {title,desc,date}=args;
            let newBlog={
                id:String(Math.floor(Math.random()*1000000)),
                title:title,
                desc:desc,
                date:date
            }
            blogs.push(newBlog);
            return newBlog;
        },
        deleteBlogById:(_,args)=>{
            let id=args.id;
            let deletedBlog=blogs.find((b)=>b.id==id);
            blogs=blogs.filter((b)=>b.id!=id);
            return deletedBlog;
        },
        updateBlog:(_,args)=>{
            let {id,title,desc,date}=args;
            let blog=blogs.find((b)=>b.id==id);
            if(blog){
                blog.title=title;
                blog.desc=desc;
                blog.date=date;
            }
            return blog;
        }
    },
    User:{
        blog:(parent,args,context,info)=>{
            //parent=> userObject={id:1,name:"Raman"}
            let userId=parent.id;
            let userBlogs=blogs.filter((b)=>b.userId==userId);
            return userBlogs;
        }
    },
    Blog:{
        user:(parent,args,context,info)=>{
            let userId=parent.userId;
            let blogUser=users.find((u)=>u.id==userId);
            return blogUser;
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});
await startStandaloneServer(server, {
    listen: { port: 4004 },
});
console.log("Server started");

// Create new entity:Blog{
// Id,title,desc,date
// }
// Query: 
// getBlogs:[Blog]
// getBlogByID:Blog
// Mutation:
// addBlog
// deleteBlogById
// updateBlog