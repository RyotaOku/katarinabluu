// pages/index.tsx
import React from 'react';
import UserHome from '@/components/appHome';
import JobCalendar from '@/components/calendar';
import Head from 'next/head';
import Navigation from '@/components/navigation';

const Home: React.FC = () => {
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
        <JobCalendar />
        <UserHome />
      </main>
    </div>
  );
};

export default Home;
