// pages/statistics.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/statistics.module.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';
import { getUserSession } from '@/lib/session';
import { getDocument } from '@/lib/getData'; // Import the getDocument function
import { useRouter } from 'next/router';

const pageTitle = '給料計算';

Chart.register(ArcElement, Tooltip, Legend);

interface Transaction {
  name: string;
  amount: number;
  color: string;
}

interface UserData {
  userName: string;
  salary: number;
  total: number;
  workHours: string;
  transactions: Transaction[];
  fixedTransactions: Transaction[];
  income: number;
  fixedExpenses: number;
}

const Statistics: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [data, setData] = useState<UserData | null>(null); // State to store fetched data
  const [userName, setUserName] = useState<string>('Unknown User'); // State to store user name
  const router = useRouter();

  useEffect(() => {
    // User verification
    const fetchUserSession = async () => {
      const userId = await getUserSession();
      if (userId) {
        setUserId(userId);
        fetchData(userId); // Fetch data from Firestore
      } else {
        router.push('/'); // Redirect to login if not logged in
      }
    };

    fetchUserSession();
  }, [router]);

  const fetchData = async (userId: string) => {
    const { result, error } = await getDocument('users', userId);
    if (error) {
      console.error('Error fetching data:', error);
    } else if (result) {
      const userData = result as UserData;
      console.log('Fetched user data:', userData); // Debugging: print fetched data
      setData(userData);
      setUserName(userData.userName);
    } else {
      console.error('No such document!');
    }
  };

  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  // Example data, replace with data fetched from Firestore
  const chartData = {
    datasets: [
      {
        data: [data?.salary ?? 0, (data?.total ?? 0) - (data?.salary ?? 0)],
        backgroundColor: ['#3498db', '#E0E0E0'],
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  return (
    <Navigation title={pageTitle}>
      <Head>
        <title>Statistics</title>
        <meta
          name={pageTitle}
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
          <div className={styles.debug}>
            <p>Debug: User Name: {userName}</p> {/* Debug information */}
            <p>Debug: User ID: {userId}</p> {/* Debug information */}
          </div>
          <div className={styles.chartSection}>
            <div className={styles.chart}>
              <Doughnut
                data={chartData}
                options={{ maintainAspectRatio: false }}
              />
              <div className={styles.chartText}>
                <p className={styles.balanceLabel}>差し引いた今月の給料</p>
                <p className={styles.balance}>¥{data?.salary ?? 0}</p>
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
                勤務時間{' '}
                <span className={styles.detailValue}>
                  {data?.workHours ?? '0h00m'}
                </span>
              </p>
              <p>
                給料込み{' '}
                <span className={styles.detailValue}>¥{data?.total ?? 0}</span>
              </p>
            </div>
          </div>
          <div className={styles.transactions}>
            <div className={styles.transactionSection}>
              <div className={styles.transactionHeader}>
                <p>給料</p>
                <p className={styles.income}>¥{data?.income ?? 0}</p>
              </div>
              {/* Render transactions dynamically if data is available */}
              {data?.transactions?.map((transaction, index) => (
                <div
                  key={index}
                  className={styles.transactionItem}
                >
                  <span
                    className={styles.categoryColor}
                    style={{ backgroundColor: transaction.color }}
                  ></span>
                  <span>{transaction.name}</span>
                  <span className={styles.amount}>¥{transaction.amount}</span>
                </div>
              ))}
            </div>
            <div className={styles.transactionSection}>
              <div className={styles.transactionHeader}>
                <p>固定費</p>
                <p className={styles.expense}>¥{data?.fixedExpenses ?? 0}</p>
              </div>
              {/* Render fixed expenses dynamically if data is available */}
              {data?.fixedTransactions?.map((transaction, index) => (
                <div
                  key={index}
                  className={styles.transactionItem}
                >
                  <span
                    className={styles.categoryColor}
                    style={{ backgroundColor: transaction.color }}
                  ></span>
                  <span>{transaction.name}</span>
                  <span className={styles.amount}>¥{transaction.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Navigation>
  );
};

export default Statistics;
