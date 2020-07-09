import React from 'react';
import Head from 'next/head';
import type { NormalizedCacheObject } from 'apollo-cache-inmemory';
import App from '../components/App';
import InfoBox from '../components/InfoBox';
import Header from '../components/Header';
import Submit from '../components/Submit';
import PostList, { allPostsQueryVars } from '../components/PostList';
import { initializeApollo } from '../lib/apolloClient';
import { AllPostsDocument } from '../generated/graphql';

type Props = {
  initialApolloState: NormalizedCacheObject;
};

const SSRPage: React.FC<Props> = () => {
  return (
    <App>
      <Head>
        <title>SSR page</title>
      </Head>
      <Header />
      <InfoBox>ℹ️ This page shows how to use SSR with Apollo.</InfoBox>
      <Submit />
      <PostList />
    </App>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPostsDocument,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default SSRPage;
