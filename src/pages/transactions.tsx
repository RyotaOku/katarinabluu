// pages/transactions.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/transactions.module.css';
import router from 'next/router';

const pageTitle = '入出金';

const transactions = [
  {
    date: '05/26 (木)',
    total: '¥38,050',
    entries: [
      { label: 'ファミリーマート', amount: '+¥1,300', color: 'yellow' },
      { label: '定期代', amount: '-¥24,230', color: 'red' },
      { label: 'スーパー', amount: '-¥12,520', color: 'yellow' },
    ],
  },
  {
    date: '05/25 (水)',
    total: '¥75,200 / ¥6,900',
    entries: [
      { label: '化粧品', amount: '-¥2,400', color: 'blue' },
      { label: 'バイト', amount: '+¥75,200', color: 'green' },
      { label: '焼肉', amount: '-¥4,500', color: 'red' },
    ],
  },
  {
    date: '05/24 (火)',
    total: '¥3,200 / ¥2,000',
    entries: [
      { label: '外食', amount: '-¥2,000', color: 'orange' },
      { label: '親からお金', amount: '+¥3,200', color: 'pink' },
    ],
  },
];

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.entries.some((entry) => entry.label.includes(searchTerm)),
  );

  return (
    <div className={styles.container}>
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
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="検索"
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={styles.cancelButton}
              onClick={() => setSearchTerm('')}
            >
              キャンセル
            </button>
          </div>
          <div className={styles.transactionsList}>
            {filteredTransactions.map((transaction, index) => (
              <div
                key={index}
                className={styles.transaction}
              >
                <div className={styles.date}>{transaction.date}</div>
                <div className={styles.total}>{transaction.total}</div>
                {transaction.entries.map((entry, entryIndex) => (
                  <div
                    key={entryIndex}
                    className={styles.entry}
                  >
                    <span
                      className={styles.entryDot}
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className={styles.entryLabel}>{entry.label}</span>
                    <span className={styles.entryAmount}>{entry.amount}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.footer}>
            <button className={styles.addButton}>+</button>
          </div>
        </main>
      </Navigation>
    </div>
  );
};

export default Transactions;
