import React from 'react';
import styles from '../styles/homePage.module.css';

const homePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phoneMockup}>
        <div className={styles.notch}></div>
      </div>
      <div className={styles.actionSection}>
        <button className={styles.mainButton}>アプリを利用する</button>
        <p className={styles.existingAccount}>既にアカウントをお持ちの方</p>
      </div>
    </div>
  );
};

export default homePage;
