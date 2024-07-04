import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/transactions.module.css';
import router from 'next/router';
import getDocuments from '@/lib/getData';

const pageTitle = '入出金';

const handleAddButton = () => {
  router.push('/addTransactions');
};

interface Transaction {
  amount: number;
  bgColor: string;
  category: string;
  comment: string;
  date: string;
}

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { result, error } = await getDocuments('transactions');
      if (error) {
        console.error(error);
      } else {
        setTransactions(result as Transaction[]);
      }
    }

    fetchData();
  }, []);

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.category.includes(searchTerm) ||
      transaction.comment.includes(searchTerm),
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
              クリア
            </button>
          </div>
          <div className={styles.transactionsList}>
            {filteredTransactions.map((transaction, index) => (
              <div
                key={index}
                className={styles.transaction}
              >
                <div className={styles.header}>
                  <div className={styles.date}>
                    {new Date(transaction.date).toLocaleDateString()}
                  </div>
                  <div className={styles.total}>
                    <span className={styles.income}>
                      Amount: {transaction.amount}
                    </span>
                  </div>
                </div>
                <div className={styles.entries}>
                  <div className={styles.entry}>
                    <span
                      className={styles.entryDot}
                      style={{ backgroundColor: transaction.bgColor }}
                    />
                    <span className={styles.entryLabel}>
                      {transaction.category}
                    </span>
                    <span className={styles.entryAmount}>
                      {transaction.comment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className={styles.addButton}
            onClick={handleAddButton}
          >
            +
          </button>
        </main>
      </Navigation>
    </div>
  );
};

export default Transactions;
