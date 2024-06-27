// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';

const pageTitle = 'プロファイル';

const ProfileDetail: React.FC = () => {
  return (
    <Navigation title={pageTitle}>
      <Head>
        <title>Calendar App</title>
        <meta
          name={pageTitle}
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
