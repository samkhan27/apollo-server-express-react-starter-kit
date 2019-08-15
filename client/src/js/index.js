import React from 'react'
import ReactDOM from "react-dom"
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/container/App'
import client from './services/graphql/apolloClient'

const wrapper = document.getElementById("root")

wrapper ? ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, wrapper
) : false