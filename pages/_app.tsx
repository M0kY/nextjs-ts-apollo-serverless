import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import type { AppProps } from 'next/app';
import { useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
