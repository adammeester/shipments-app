import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql';

export const apolloClient = new ApolloClient({
  uri,
  headers: {
    'x-token': 'fe-test-2023',
  },
  cache: new InMemoryCache(),
});
