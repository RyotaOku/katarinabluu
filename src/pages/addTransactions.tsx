// pages/addTransactions.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaTrash, FaTimes } from 'react-icons/fa';
import Navigation from '@/components/navigation';
import styles from '@/styles/addTransactions.module.css';
import { iconMappings } from '@/types/icon';

interface TransactionEntry {
  category: string;
  amount: number;
  comment: string;
}

const AddTransaction: React.FC = () => {
  const router = useRouter();
  const [entries, setEntries] = useState<TransactionEntry[]>([]);
  const [isIncome, setIsIncome] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setEntries([...entries, { category, amount: 0, comment: '' }]); // Adds a placeholder entry
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

  const total = entries.reduce(
    (sum, entry) => sum + (isIncome ? entry.amount : -entry.amount),
    0,
  );

  return (
    <Navigation title="Add Transaction">
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
                <div className={styles.entryIcon}>
                  {IconComponent && <IconComponent />}
                </div>
                <span>{entry.category}</span>
                <input
                  type="number"
                  value={Math.abs(entry.amount)}
                  onChange={(e) =>
                    handleAmountChange(index, parseFloat(e.target.value))
                  }
                  className={styles.amountInput}
                />
                <input
                  type="text"
                  placeholder="コメント"
                  value={entry.comment}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                  className={styles.commentInput}
                />
                <span>{isIncome ? '+' : '-'}</span>
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
              <span>{icon.key}</span>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <span>合計</span>
          <span>¥{total.toLocaleString()}</span>
        </div>
      </div>
    </Navigation>
  );
};

export default AddTransaction;
