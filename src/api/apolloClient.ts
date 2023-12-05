import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const uri = "https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql";

const httpLink = createHttpLink({
  uri,
  headers: {
    "x-token": "fe-test-2023",
  },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
