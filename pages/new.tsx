import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import Head from 'next/head';

const NewPage = () => (
  <App>
    <Head>
      <title>Home page</title>
    </Head>
    <Header />
    <div>This is a new prebuilt test page</div>
  </App>
);

export default NewPage;
