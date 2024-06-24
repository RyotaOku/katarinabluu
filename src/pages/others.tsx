// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Navigation from '@/components/navigation';
import styles from '@/styles/others.module.css';
import Image from 'next/image';
import router from 'next/router';

const handleProfileEdit = () => {
  router.push('/profile');
};

const Others: React.FC = () => {
  return (
    <div>
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
            <div className={styles.profileSection}>
              <Image
                src="/profile.jpg" // Ensure you have this image or replace it with a correct path
                alt="Profile"
                width={80}
                height={80}
                className={styles.profileImage}
              />
              <div className={styles.profileDetails}>
                <h2 className={styles.name}>ペンギン</h2>
                <p className={styles.id}>ID: test_account</p>
                <button
                  className={styles.editButton}
                  onClick={handleProfileEdit}
                >
                  編集
                </button>
              </div>
            </div>
            <div className={styles.sections}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>お知らせ</h3>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionIcon}>🔔</span>
                  <span className={styles.sectionText}>お知らせ</span>
                </div>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>機能</h3>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionText}>収支分析</span>
                </div>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionText}>確定申告</span>
                </div>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>バイト先</h3>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionText}>バイト先一覧</span>
                </div>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionText}>保険料・税金確認</span>
                </div>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>設定</h3>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionText}>通知設定</span>
                </div>
                <div className={styles.sectionItem}>
                  <span className={styles.sectionText}>カレンダー設定</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Others;
