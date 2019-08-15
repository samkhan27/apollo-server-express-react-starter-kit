// GraphQL Client
import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch'

const env = process.env.NODE_ENV || 'dev';
const graphqlURI = env === 'production' ? 'https://apollo-express-react-starter-s.herokuapp.com/graphql' : 'http://localhost:4000/graphql'
const client = new ApolloClient({
  uri: graphqlURI,
  fetch: fetch
});

export default client;