// pages/information.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '@/styles/shift_information.module.css';
import Navigation from '@/components/navigation';
import UserHome from '@/components/appHome';

const Information: React.FC = () => {
  const router = useRouter();
  const { date } = router.query;
  const part_time: string[] = [
    'family mart',
    'seven eleven',
    'KFC',
    'MC Donald',
  ];
  const add_part_time = () => {
    router.push('/shift/add_parttime');
  };
  return (
    <Navigation title={''}>
      <div className={styles.container}>
        <Head>
          <title>Shift Information Page</title>
          <meta
            name="description"
            content="Information about shifts"
          />
          <link
            rel="icon"
            href="/favicon.ico"
          />
        </Head>
        <main className={styles.main}>
          {date ?
            <p>今日は: {date}</p>
          : <p>No date selected</p>}
          <h1>Shift を追加</h1>
          <p className={styles.sectionTitle}>基本情報</p>
          <p>バイト先 : {part_time[1]}</p>
          <button
            className={styles.partTimeButton}
            onClick={add_part_time}
          >
            +バイト先を追加
          </button>
          <div className={styles.formGroup}>
            <label htmlFor="start">勤務時間</label>
            <input
              type="datetime-local"
              id="start"
              name="start"
              value={date ? `${date}T09:00` : ''}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="end">終了時間</label>
            <input
              type="datetime-local"
              id="end"
              name="end"
              value={date ? `${date}T09:00` : ''}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="break_time">休憩時間</label>
            <input
              type="time"
              id="break_time"
              defaultValue="00:30"
            />
          </div>
          <p>給料：10000円</p>
          <div className={styles.formGroup}>
            <label htmlFor="salary">給料の個別設定</label>
            <input
              type="text"
              id="salary"
            />
          </div>
          <p className={styles.sectionTitle}>その他</p>
          <div className={styles.formGroup}>
            <label htmlFor="memo">メモ</label>
            <input
              type="text"
              id="memo"
              placeholder="メモを入力"
            />
          </div>
          <button className={styles.btn}>完了する</button>
        </main>
      </div>
    </Navigation>
  );
};

export default Information;
