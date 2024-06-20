import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/homePage.module.css';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleMainButtonClick = () => {
    router.push('/register');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>ShiftSynk: Hyper Line in wallet</h1>
      </div>
      <div className={styles.phoneMockup}>
        <Image
          src="/iphone.svg"
          alt="Phone mockup"
          width={300}
          height={600}
        />
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
