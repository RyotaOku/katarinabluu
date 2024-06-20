import React from 'react';
import router, { useRouter } from 'next/router';
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

  const handleLogin = () => {
    router.push('/home');
  };

  const handleRegisterButton = () => {
    router.push('/register');
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <h1 className={styles.title}>ログイン</h1>
        <div className={styles.inputs}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="パスワード"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={styles.input}
          />

          <a
            href="#"
            className={styles.forgot}
          >
            パスワードを忘れた方はこちら
          </a>
        </div>
        <div className={styles.buttons}>
          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleLogin}
          >
            ログイン
          </button>

          <div className={styles.or}>
            <span>または</span>
          </div>

          <div className={styles.providers}>
            <button
              type="button"
              className={styles.providerButton}
            >
              <Image
                src="/providers/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
            </button>
            <button
              type="button"
              className={styles.providerButton}
            >
              <Image
                src="/providers/apple.svg"
                alt="Apple"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </form>
      <a
        href="#"
        onClick={handleRegisterButton}
        className={styles.register}
      >
        アカウントを持っていない方はこちら
      </a>
    </div>
  );
};

export default LoginPage;
