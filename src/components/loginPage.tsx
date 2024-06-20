import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/loginPage.module.css';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login attempted:', { email, password }); // Example logging
  };

  return (
    <div className={styles.container}>
      <h1>ログイン</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.loginForm}
      >
        <label
          htmlFor="email"
          className={styles.label}
        >
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.input}
        />
        <label
          htmlFor="password"
          className={styles.label}
        >
          パスワード
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
        />
        <button
          type="submit"
          className={styles.submitButton}
        >
          ログイン
        </button>
      </form>
      <div className={styles.register}>
        <p>アカウントを持っていない方は</p>
        <a href="#">こちら</a>
      </div>
    </div>
  );
};

export default LoginPage;
