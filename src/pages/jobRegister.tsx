import React from 'react';
import styles from '../styles/jobRegister.module.css';
import router from 'next/router';

const JobRegister: React.FC = () => {
  // State variables for form fields
  const [companyName, setCompanyName] = React.useState('');
  const [storeName, setStoreName] = React.useState('');
  const [workplace, setWorkplace] = React.useState('');
  const [payrollDate, setPayrollDate] = React.useState('');
  const [closingDate, setClosingDate] = React.useState('');
  const [hourlyWage, setHourlyWage] = React.useState(0); // Initialize as 0

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Job registration submitted:', {
      companyName,
      storeName,
      workplace,
      payrollDate,
      closingDate,
      hourlyWage,
    }); // Example logging
  };

  const handleLogin = () => {
    router.push('/home');
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.labels}>
          <h1 className={styles.title}>職場情報を登録</h1>
          <label
            htmlFor="companyName"
            className={styles.label}
          >
            会社名・店舗名
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              className={styles.input}
            />
          </label>
          <label
            htmlFor="storeName"
            className={styles.label}
          >
            店舗名
            <input
              type="text"
              id="storeName"
              name="storeName"
              value={storeName}
              onChange={(event) => setStoreName(event.target.value)}
              className={styles.input}
            />
          </label>
          <label
            htmlFor="workplace"
            className={styles.label}
          >
            配属先
            <input
              type="text"
              id="workplace"
              name="workplace"
              value={workplace}
              onChange={(event) => setWorkplace(event.target.value)}
              className={styles.input}
            />
          </label>
          <label
            htmlFor="payrollDate"
            className={styles.label}
          >
            給料日
            <input
              type="date"
              id="payrollDate"
              name="payrollDate"
              value={payrollDate}
              onChange={(event) => setPayrollDate(event.target.value)}
              className={styles.input}
            />
          </label>
          <label
            htmlFor="closingDate"
            className={styles.label}
          >
            締日
            <input
              type="date"
              id="closingDate"
              name="closingDate"
              value={closingDate}
              onChange={(event) => setClosingDate(event.target.value)}
              className={styles.input}
            />
          </label>
          <label
            htmlFor="hourlyWage"
            className={styles.label}
          >
            時給
            <input
              type="number"
              id="hourlyWage"
              name="hourlyWage"
              value={hourlyWage}
              onChange={(event) => setHourlyWage(parseInt(event.target.value))} // Use parseInt to convert string to int
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.buttons}>
          <button
            type="submit"
            className={styles.skipButton}
          >
            今は登録しない
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleLogin}
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobRegister;
