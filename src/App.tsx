import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { Router } from "./Router"



export function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

