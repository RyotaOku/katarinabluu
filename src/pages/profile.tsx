// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';

const ProfileDetail: React.FC = () => {
  return (
    <Navigation>
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
      <main>
        <p>lol</p>
      </main>
    </Navigation>
  );
};

export default ProfileDetail;
