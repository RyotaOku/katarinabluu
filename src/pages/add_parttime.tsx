// pages/information.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Modal from 'react-modal';
import styles from '../styles/add_parttime.module.css';
import Navigation from '@/components/navigation';

const Information: React.FC = () => {
  const router = useRouter();
  const { date } = router.query;
  const salary_deadlines: string[] = Array.from(
    { length: 30 },
    (_, i) => `${i + 1}日`,
  ).concat('月末');
  const [selectedDeadline, setSelectedDeadline] = useState('月末');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDeadlineClick = () => {
    setModalIsOpen(true);
  };

  const handleDeadlineSelect = (value: string) => {
    setSelectedDeadline(value);
    setModalIsOpen(false);
  };

  return (
    <Navigation title={''}>
      <div className={styles.container}>
        <Head>
          <title>Add Part Time Page</title>
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
          <h1>バイトを追加</h1>
          <p>表示色：</p>
          <p>ジャンル：</p>
          <p>基本情報</p>
          <p>
            バイト先 <input type="text" />
          </p>

          <label htmlFor="deadline">締切</label>
          <div
            onClick={handleDeadlineClick}
            className={styles.deadlineInput}
          >
            {selectedDeadline}
          </div>

          <p>給料日</p>
          <div>
            <label htmlFor="payday">給料日</label>
            <input
              type="date"
              id="payday"
            />
          </div>

          <p>給料：10000円</p>
          <div>
            <label htmlFor="salary">給料の個別設定</label>
            <input
              type="text"
              id="salary"
            />
          </div>
          <p>その他</p>
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <h2>締切を選択</h2>
          {salary_deadlines.map((value, index) => (
            <div
              key={index}
              onClick={() => handleDeadlineSelect(value)}
              className={styles.modalItem}
            >
              {value}
            </div>
          ))}
          <button
            onClick={() => setModalIsOpen(false)}
            className={styles.modalCloseBtn}
          >
            閉じる
          </button>
        </Modal>
      </div>
    </Navigation>
  );
};

export default Information;
