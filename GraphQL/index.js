import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users = [
    {
        name: "Kumar",
        email: "kumar@example.com",
        password: "password123",
        phone: 1234567890
    },
    {
        name: "John",
        email: "john@example.com",
        password: "password456",
        phone: 9087654321
    }
];


const typeDefs = `
    type User {
        name: String,
        email: String,
        password: String,
        phone: Int
    }

    type Query {
        getUsers: [User],
        getUser: User
    }
`;


const resolvers = {
    Query: {
        getUsers: () => { return users; },
        getUser: () => { return users[0]; }
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