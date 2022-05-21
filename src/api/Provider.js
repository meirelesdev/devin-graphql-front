import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_GRAPHQL_API_SUB,
  })
);

const client = new ApolloClient({
  uri: process.env.REACT_APP_HOST_API,
  cache: new InMemoryCache(),
});
const Provider = ({children}) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
export default Provider