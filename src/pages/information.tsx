// pages/information.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Information: React.FC = () => {
  const router = useRouter();
  const { date } = router.query;

  return (
    <div>
      <Head>
        <title>Information Page</title>
        <meta
          name="description"
          content="Information about shifts"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <h1>Information Page</h1>
        {date ?
          <p>今日は: {date}</p>
          : <p>No date selected</p>}
      </main>
    </div>
  );
};

export default Information;
