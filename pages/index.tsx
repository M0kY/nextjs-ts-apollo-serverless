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
  revalidate: number;
};

const IndexPage: React.FC<Props> = () => (
  <App>
    <Head>
      <title>Home page</title>
    </Head>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <Submit />
    <PostList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPostsDocument,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
