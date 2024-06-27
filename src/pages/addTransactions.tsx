// pages/transactions.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/transactions.module.css';
import router from 'next/router';

const AddTransactions: React.FC = () => {
  return (
    <div className={styles.container}>
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
        <main></main>
      </Navigation>
    </div>
  );
};

export default AddTransactions;
