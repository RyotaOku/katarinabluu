// pages/transactions.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/forgotPass.module.css';
import router from 'next/router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // Ensure your Firebase config and initialization are in this file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPass: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('パスワードリセットリンクを送信しました！');
      console.log('Password reset link sent to:', email);
      // Optionally redirect or inform the user to check their email
    } catch (error) {
      toast.error('パスワードリセットリンクの送信に失敗しました。');
      console.error('Password reset error:', error);
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Calendar App</title>
        <meta
          name="Password Recovery"
          content="あなたのジョブシフト"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h1 className={styles.title}>パスワードを忘れた方はこちら</h1>
          <div className={styles.inputs}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.buttons}>
            <button
              type="submit"
              className={styles.submitButton}
            >
              パスワードリセットリンクを送信
            </button>
          </div>
        </form>
        <a
          href="#"
          onClick={handleLoginRedirect}
          className={styles.loginRedirect}
        >
          ログインページに戻る
        </a>
      </main>
    </div>
  );
};

export default ForgotPass;
