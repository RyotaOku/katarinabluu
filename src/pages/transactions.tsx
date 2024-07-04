import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/transactions.module.css';
import router from 'next/router';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const pageTitle = '入出金';

const firebaseConfig = {
  apiKey: 'AIzaSyC17gWndexNK6-oqEC_yAwmjDmpx-f5Tl0',
  authDomain: 'katarinabluu.firebaseapp.com',
  projectId: 'katarinabluu',
  storageBucket: 'katarinabluu.appspot.com',
  messagingSenderId: '626019077247',
  appId: '1:626019077247:web:0b27fabf8e56267456834a',
  measurementId: 'G-DM4PBSEKZJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch transactions
        const colRef = collection(db, 'transactions');
        const querySnapshot = await getDocs(colRef);
        const documents = querySnapshot.docs.map((doc) => doc.data());
        console.log('Fetched transactions:', documents);
        const filteredResult = documents.filter(isValidTransaction);
        setTransactions(filteredResult as Transaction[]);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    }

    fetchData();
  }, []);

  const isValidTransaction = (doc: any): doc is Transaction => {
    return (
      typeof doc.amount === 'number' &&
      typeof doc.bgColor === 'string' &&
      typeof doc.category === 'string' &&
      typeof doc.comment === 'string' &&
      typeof doc.date === 'string'
    );
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const hasCategory = transaction.category !== undefined;
    const hasComment = transaction.comment !== undefined;

    if (!hasCategory || !hasComment) {
      console.log('Transaction missing category or comment:', transaction);
    }

    return (
      (hasCategory && transaction.category.includes(searchTerm)) ||
      (hasComment && transaction.comment.includes(searchTerm))
    );
  });

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
