// pages/addTransactions.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaTrash, FaTimes } from 'react-icons/fa';
import Navigation from '@/components/navigation';
import styles from '@/styles/addTransactions.module.css';
import { iconMappings } from '@/types/icon';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const pageTitle = '入出金';

interface TransactionEntry {
  category: string;
  amount: number;
  comment: string;
  bgColor: string; // Added background color property
}

const AddTransaction: React.FC = () => {
  const router = useRouter();
  const [entries, setEntries] = useState<TransactionEntry[]>([]);
  const [isIncome, setIsIncome] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    const iconMapping = iconMappings.find((icon) => icon.key === category);
    if (iconMapping) {
      const { color } = iconMapping;
      setEntries([
        ...entries,
        { category, amount: 0, comment: '', bgColor: color },
      ]);
    }
  };

  const handleAmountChange = (index: number, amount: number) => {
    const newEntries = [...entries];
    newEntries[index].amount = amount;
    setEntries(newEntries);
  };

  const handleCommentChange = (index: number, comment: string) => {
    const newEntries = [...entries];
    newEntries[index].comment = comment;
    setEntries(newEntries);
  };

  const handleDelete = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleDiscard = () => {
    setEntries([]);
    router.push('/transactions');
  };

  const handleSubmit = () => {
    console.log('Submitted entries:', entries);
    toast.success('登録成功ですわ！', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      router.push('/transactions');
    }, 3000);
  };

  const total = entries.reduce(
    (sum, entry) => sum + (isIncome ? entry.amount : -entry.amount),
    0,
  );

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
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.switch}>
            <button
              className={`${styles.switchButton} ${styles.expenditure} ${!isIncome ? styles.active : ''}`}
              onClick={() => setIsIncome(false)}
            >
              支出
            </button>
            <button
              className={`${styles.switchButton} ${styles.income} ${isIncome ? styles.active : ''}`}
              onClick={() => setIsIncome(true)}
            >
              収入
            </button>
          </div>
          <FaTimes
            className={styles.closeIcon}
            onClick={handleDiscard}
          />
        </div>
        <div className={styles.entries}>
          {entries.map((entry, index) => {
            const IconComponent = iconMappings.find(
              (icon) => icon.key === entry.category,
            )?.icon;
            return (
              <div
                key={index}
                className={styles.entry}
              >
                <div
                  className={styles.entryIcon}
                  style={{ backgroundColor: entry.bgColor }}
                >
                  {IconComponent && <IconComponent />}
                </div>
                <input
                  type="text"
                  placeholder="タイトル"
                  value={entry.comment}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                  className={styles.commentInput}
                />
                <span>{isIncome ? '+' : '-'}¥</span>
                <input
                  type="number"
                  value={Math.abs(entry.amount)}
                  onChange={(e) =>
                    handleAmountChange(index, parseFloat(e.target.value))
                  }
                  className={styles.amountInput}
                />
                <FaTrash
                  onClick={() => handleDelete(index)}
                  className={styles.deleteIcon}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.iconGrid}>
          {iconMappings.map((icon, index) => (
            <div
              key={index}
              className={styles.icon}
              onClick={() => handleCategoryClick(icon.key)}
            >
              <icon.icon />
            </div>
          ))}
        </div>
        <div
          className={`${styles.bottomSection} ${isIncome ? styles.incomeBorder : styles.expenditureBorder}`}
        >
          <div className={styles.total}>
            <span>{isIncome ? '収入' : '支出'} 合計</span>
            <span> ¥{total.toLocaleString()}</span>
          </div>
          <button
            className={`${styles.submitButton} ${isIncome ? styles.incomeButton : styles.expenditureButton}`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </Navigation>
  );
};

export default AddTransaction;
