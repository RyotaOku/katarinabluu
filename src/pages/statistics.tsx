// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import { getUserSession } from '@/lib/session';
import router from 'next/router';

const Statistics: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // User verification
    // const userId = getUserSession();
    // if (userId) {
    //   setUserId(userId);
    // } else {
    //   // Handle case where user is not logged in, e.g., redirect to login
    //   router.push('/index');
    // }
  }, []);
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

export default Statistics;
