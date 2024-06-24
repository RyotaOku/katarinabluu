// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';

const Transactions: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta
          name="description"
          content="あなたのジョブシフト"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navigation />
      <main>
        <p>lol</p>
      </main>
    </div>
  );
};

export default Transactions;
