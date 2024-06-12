import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://tasmim.local/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});
