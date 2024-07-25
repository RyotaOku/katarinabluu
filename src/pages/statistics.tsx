import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/statistics.module.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  const [data, setData] = useState<UserData | null>(null);
  const [userName, setUserName] = useState<string>('Unknown User');
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Mock user verification and data fetching
    const mockUserId = 'exampleUserId';
    setUserId(mockUserId);
    fetchData(mockUserId);
  }, []);

  const fetchData = async (userId: string) => {
    // Mock data
    const userData: UserData = {
      userName: 'John Doe',
      salary: 300000,
      total: 500000,
      workHours: '160h',
      transactions: [
        { name: 'Groceries', amount: 30000, color: '#FF6384' },
        { name: 'Utilities', amount: 15000, color: '#36A2EB' },
      ],
      fixedTransactions: [
        { name: 'Rent', amount: 100000, color: '#FFCE56' },
        { name: 'Internet', amount: 5000, color: '#4BC0C0' },
      ],
      income: 400000,
      fixedExpenses: 105000,
    };

    console.log('Fetched user data:', userData);
    setData(userData);
    setUserName(userData.userName);
  };

  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

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
            <p>
              {activeTab === 'monthly' ?
                currentMonth.format('YYYY年 M月')
              : currentMonth.format('YYYY年')}
            </p>
            <div className={styles.toggleButtons}>
              <button
                className={activeTab === 'monthly' ? styles.active : ''}
                onClick={() => setActiveTab('monthly')}
              >
                月
              </button>
              <button
                className={activeTab === 'yearly' ? styles.active : ''}
                onClick={() => setActiveTab('yearly')}
              >
                年
              </button>
            </div>
          </header>
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
            {activeTab === 'monthly' && (
              <div className={styles.arrowContainer}>
                <button
                  onClick={handlePreviousMonth}
                  className={`${styles.arrowButton} ${styles.animateArrow}`}
                >
                  ←
                </button>
                <button
                  onClick={handleNextMonth}
                  className={`${styles.arrowButton} ${styles.animateArrow}`}
                >
                  →
                </button>
              </div>
            )}
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
              <p>
                時給{' '}
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
              <button
                className={`${styles.dropdownButton} ${showDropdown ? styles.active : ''}`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                ▼ 詳細を表示
              </button>
              {showDropdown && (
                <div className={styles.dropdownContent}>
                  <p>勤務時間: {data?.workHours}</p>
                  <p>交通費: ¥2000</p>
                </div>
              )}
            </div>
            <div className={styles.transactionSection}>
              <div className={styles.transactionHeader}>
                <p>固定費</p>
                <p className={styles.expense}>¥{data?.fixedExpenses ?? 0}</p>
              </div>
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
          <div className={styles.addExpenseButton}>
            <Link href="/addMonthExp">
              <button>固定費入力・変更</button>
            </Link>
          </div>
          <div className={styles.showAllExpensesButton}>
            <Link href="/transactions">
              <button>固定費以外の全ての支出を見る</button>
            </Link>
          </div>
        </div>
      </main>
    </Navigation>
  );
};

export default Statistics;
