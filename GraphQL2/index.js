import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users = [
    {
        id: "1",
        name: "Kumar",
        email: "kumar@example.com",
        password: "password123",
        phone: 1234590
    },
    {
        id: "2",
        name: "John",
        email: "john@example.com",
        password: "password456",
        phone: 9084321
    }
];

let Blog = [
    {
        id: "1",
        title: "My First Blog Post",
        description: "This is the content of my first blog post.",
        Date: "2024-06-01",
    },
    {
        id: "2",
        title: "My Second Blog Post",
        description: "This is the content of my second blog post.",
        Date: "2024-06-02",
    }
];

const typeDefs = `
    type User {
        id: ID!, #ID is a special type in GraphQL that represents a unique identifier, often used for database records. It can be a string or an integer, but it is typically treated as a string.
        name: String,
        email: String,
        password: String,
        phone: Int
    }
    
    type Blog {
        id: ID!,
        title: String,
        description: String,
        Date: String
    }

    type Query {
        getUsers: [User],
        getUser(id: ID!): User,

        getBlogs: [Blog],
        getBlog(id: ID!): Blog
    }

    type Mutation {
        # mutations are used to modify data on the server, such as creating, updating, or deleting records. They typically take arguments that specify the data to be modified and return the modified data or a status message.

        addUser(name: String!, email: String!, password: String!, phone: Int!): User,
        deleteUser(id:ID!) : String

        addBlog(title: String!, description: String!, Date: String!): Blog,
        deleteBlog(id:ID!) : String 
        updateBlog(id: ID!, title: String, description: String, Date: String): Blog
    }

`;


const resolvers = {
    Query: {
        // resolver functions has 4 arguments: parent, args, context, info  (optional)
        // args is an object that contains the arguments passed to the query, in this case, it will contain the id argument for getUser query.
        
        getUsers: () => { return users; },
        getUser: (parent, args) => { return users.find(user => user.id == args.id); },

        getBlogs: () => { return Blog; },
        getBlog: (parent, args) => { return Blog.find(blog => blog.id == args.id); }
    },


    Mutation: {
        addUser: (parent, args) => {    
            const newUser = {
                id: String(Math.floor(Math.random() * 1000000)), // Generate a new ID based on the current number of users
                name: args.name,    
                email: args.email,
                password: args.password,
                phone: args.phone
            };
            users.push(newUser);
            return newUser;
        },
        deleteUser: (parent, args) => {
            const userIndex = users.findIndex(user => user.id == args.id);
            if (userIndex == -1) {
                return "User not found";
            }
            users.splice(userIndex, 1);
            return "User deleted successfully";
        }, 


        addBlog: (parent, args) => {
            const newBlog = {
                id: String(Math.floor(Math.random() * 1000000)), // Generate a new ID based on the current number of blogs
                title: args.title,
                description: args.description,
                Date: args.Date
            };
            Blog.push(newBlog);
            return newBlog;
        },
        
        deleteBlog: (parent, args) => {
            const blogIndex = Blog.findIndex(blog => blog.id == args.id);   
            if (blogIndex == -1) {
                return "Blog not found";
            }
            Blog.splice(blogIndex, 1);
            return "Blog deleted successfully";
        },

        updateBlog: (parent, args) => {
            const blogIndex = Blog.findIndex(blog => blog.id == args.id);
            if (blogIndex == -1) {
                return null; 
            }
            const updatedBlog = {
                id: args.id,
                title: args.title || Blog[blogIndex].title, 
                description: args.description || Blog[blogIndex].description, 
                Date: args.Date || Blog[blogIndex].Date 
            };
            Blog[blogIndex] = updatedBlog;  
            return updatedBlog;
        }
    }
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`Server ready`);