// pages/execution.tsx
import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/execution.module.css';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

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

const Execution: React.FC = () => {
  return (
    <div>
      aaa
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
            <div className={styles.transactionList}>
              <div className={styles.transaction}>
                <div className={styles.transactionDate}>
                  <p>05/26 (木)</p>
                  <p>¥38,050</p>
                </div>
                <div className={styles.transactionDetails}>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#FF6384' }}
                    ></span>
                    <span>ファミリーマート</span>
                    <span>-¥1,300</span>
                  </div>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#36A2EB' }}
                    ></span>
                    <span>定期代</span>
                    <span>-¥24,230</span>
                  </div>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#FFCE56' }}
                    ></span>
                    <span>スーパー</span>
                    <span>-¥12,520</span>
                  </div>
                </div>
              </div>
              <div className={styles.transaction}>
                <div className={styles.transactionDate}>
                  <p>05/25 (水)</p>
                  <p>¥75,200</p>
                </div>
                <div className={styles.transactionDetails}>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#4BC0C0' }}
                    ></span>
                    <span>化粧水</span>
                    <span>-¥2,400</span>
                  </div>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#FF6384' }}
                    ></span>
                    <span>バイト</span>
                    <span>+¥75,200</span>
                  </div>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#FFCE56' }}
                    ></span>
                    <span>焼肉</span>
                    <span>-¥9,900</span>
                  </div>
                </div>
              </div>
              <div className={styles.transaction}>
                <div className={styles.transactionDate}>
                  <p>05/24 (火)</p>
                  <p>¥3,200</p>
                </div>
                <div className={styles.transactionDetails}>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#FF6384' }}
                    ></span>
                    <span>バイト</span>
                    <span>+¥3,200</span>
                  </div>
                  <div className={styles.transactionItem}>
                    <span
                      className={styles.categoryColor}
                      style={{ backgroundColor: '#FFCE56' }}
                    ></span>
                    <span>焼肉</span>
                    <span>-¥3,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.floatingButton}>+</button>
        </div>
      </main>
    </div>
  );
};

export default Execution;
