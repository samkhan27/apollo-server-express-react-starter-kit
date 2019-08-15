const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const http = require('http');

// Import type definitions
const { typeDefs } = require('./app/graphql/typeDefs')

// Import resolvers
const { resolvers } = require('./app/graphql/resolvers')

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const apollo = new ApolloServer({ typeDefs, resolvers })

const app = express()
// set up http server with the express app
const httpServer = http.Server(app);
// Set the Port
const PORT = process.env.PORT || 4000;

apollo.applyMiddleware({ app })
app.use(express.static("client/dist"));

// This `listen` method launches a web-server.  Existing apps
httpServer.listen({ port: PORT }, () =>
  console.log(`🚀 Server listening at port: ${PORT}`)
)