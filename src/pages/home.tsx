// pages/index.tsx
import React, { useEffect, useState } from 'react';
import UserHome from '@/components/appHome';
import JobCalendar from '@/components/calendar';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import { getUserSession } from '@/lib/session';
import router from 'next/router';

const Home: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = getUserSession();
    if (userId) {
      setUserId(userId);
    } else {
      // Handle case where user is not logged in, e.g., redirect to login
      router.push('/index');
    }
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
        <h1>シフト表だぜ</h1>
        {userId ?
          <>
            <p>Hello, User ID: {userId}</p>
            <JobCalendar />
            <UserHome />
          </>
        : <p>Loading...</p>}
      </main>
    </div>
  );
};

export default Home;
