// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import { getUserSession } from '@/lib/session';
import router from 'next/router';
import styles from '@/styles/execution.module.css';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const pageTitle = '家計簿';

const data = {
  labels: ['収入', '支出'],
  datasets: [
    {
      label: '円',
      data: [78400, 46950],
      backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1,
    },
  ],
};

const transactions = [
  {
    date: '05/26 (木)',
    total: 38050,
    items: [
      {
        categoryColor: '#FF6384',
        description: 'ファミリーマート',
        amount: -1300,
      },
      { categoryColor: '#36A2EB', description: '定期代', amount: -24230 },
      { categoryColor: '#FFCE56', description: 'スーパー', amount: -12520 },
    ],
  },
  {
    date: '05/25 (水)',
    total: 75200,
    items: [
      { categoryColor: '#4BC0C0', description: '化粧水', amount: -2400 },
      { categoryColor: '#FF6384', description: 'バイト', amount: 75200 },
      { categoryColor: '#FFCE56', description: '焼肉', amount: -9900 },
    ],
  },
  {
    date: '05/24 (火)',
    total: 3200,
    items: [
      { categoryColor: '#FF6384', description: 'バイト', amount: 3200 },
      { categoryColor: '#FFCE56', description: '焼肉', amount: -3200 },
    ],
  },
];

const Execution: React.FC = () => {
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
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.chartSection}>
              <Pie data={data} />
              <div className={styles.chartDetails}>
                <p>
                  収入 <span className={styles.income}>¥78,400</span>
                </p>
                <p>
                  支出 <span className={styles.expense}>¥46,950</span>
                </p>
                <p>
                  収支 <span className={styles.balance}>¥31,450</span>
                </p>
              </div>
            </div>
            <div className={styles.transactions}>
              {transactions.map((transaction, index) => (
                <div
                  className={styles.transactionSection}
                  key={index}
                >
                  <div className={styles.transactionHeader}>
                    <p>{transaction.date}</p>
                    <p>¥{transaction.total.toLocaleString()}</p>
                  </div>
                  {transaction.items.map((item, idx) => (
                    <div
                      className={styles.transactionItem}
                      key={idx}
                    >
                      <span
                        className={styles.categoryColor}
                        style={{ backgroundColor: item.categoryColor }}
                      ></span>
                      <span>{item.description}</span>
                      <span>
                        {item.amount > 0 ?
                          `+¥${item.amount.toLocaleString()}`
                        : `-¥${Math.abs(item.amount).toLocaleString()}`}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className={styles.floatingButton}>+</button>
        </div>
      </main>
    </Navigation>
  );
};

export default Execution;
