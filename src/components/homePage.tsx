import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/homePage.module.css';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleMainButtonClick = () => {
    router.push('/registerPage');
  };

  return (
    <div className={styles.container}>
      <div className={styles.phoneMockup}>
        <div className={styles.notch}></div>
      </div>
      <div className={styles.actionSection}>
        <button
          className={styles.mainButton}
          onClick={handleMainButtonClick}
        >
          アプリを利用する
        </button>
        <p className={styles.existingAccount}>既にアカウントをお持ちの方</p>
      </div>
    </div>
  );
};

export default HomePage;
