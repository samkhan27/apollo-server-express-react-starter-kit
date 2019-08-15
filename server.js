const express = require('express')
const { ApolloServer } = require('apollo-server-express');

// Import type definitions
const { typeDefs } = require('./app/graphql/typeDefs')

// Import resolvers
const { resolvers } = require('./app/graphql/resolvers')

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })
app.use(express.static("client/dist"));

// This `listen` method launches a web-server.  Existing apps
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)