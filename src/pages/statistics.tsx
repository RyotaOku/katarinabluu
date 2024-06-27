// pages/statistics.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/statistics.module.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';

Chart.register(ArcElement, Tooltip, Legend);

const Statistics: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const data = {
    datasets: [
      {
        data: [11400, 51400 - 11400],
        backgroundColor: ['#3498db', '#E0E0E0'],
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  return (
    <Navigation title={''}>
      <Head>
        <title>Statistics</title>
        <meta
          name="description"
          content="Statistics Page"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.header}>
            <p>{currentMonth.format('YYYY年 M月')}</p>
            <div className={styles.toggleButtons}>
              <button className={styles.active}>月</button>
              <button>年</button>
            </div>
          </header>
          <div className={styles.chartSection}>
            <div className={styles.chart}>
              <Doughnut
                data={data}
                options={{ maintainAspectRatio: false }}
              />
              <div className={styles.chartText}>
                <p className={styles.balanceLabel}>差し引いた今月の給料</p>
                <p className={styles.balance}>¥11400</p>
              </div>
            </div>
            <div className={styles.arrowContainer}>
              <button
                onClick={handlePreviousMonth}
                className={styles.arrowButton}
              >
                ←
              </button>
              <button
                onClick={handleNextMonth}
                className={styles.arrowButton}
              >
                →
              </button>
            </div>
            <div className={styles.details}>
              <p>
                勤務時間 <span className={styles.detailValue}>0h00m</span>
              </p>
              <p>
                給料込み <span className={styles.detailValue}>¥51400</span>
              </p>
            </div>
          </div>
          <div className={styles.transactions}>
            <div className={styles.transactionSection}>
              <div className={styles.transactionHeader}>
                <p>給料</p>
                <p className={styles.income}>¥34,200</p>
              </div>
              <div className={styles.transactionItem}>
                <span
                  className={styles.categoryColor}
                  style={{ backgroundColor: '#FF6384' }}
                ></span>
                <span>ファミリーマート比花屋店</span>
                <span className={styles.amount}>¥1,000</span>
              </div>
              <div className={styles.transactionItem}>
                <span
                  className={styles.categoryColor}
                  style={{ backgroundColor: '#36A2EB' }}
                ></span>
                <span>セブンイレブン四番街中野店</span>
                <span className={styles.amount}>¥8,200</span>
              </div>
            </div>
            <div className={styles.transactionSection}>
              <div className={styles.transactionHeader}>
                <p>固定費</p>
                <p className={styles.expense}>¥9,200</p>
              </div>
              <div className={styles.transactionItem}>
                <span
                  className={styles.categoryColor}
                  style={{ backgroundColor: '#FFCE56' }}
                ></span>
                <span>AmazonPrime</span>
                <span className={styles.amount}>-¥1,000</span>
              </div>
              <div className={styles.transactionItem}>
                <span
                  className={styles.categoryColor}
                  style={{ backgroundColor: '#4BC0C0' }}
                ></span>
                <span>携帯料金</span>
                <span className={styles.amount}>-¥8,200</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Navigation>
  );
};

export default Statistics;
