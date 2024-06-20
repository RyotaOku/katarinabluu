// src/components/register.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/registerPage.module.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the email submission logic here
    console.log({ email });
  };

  const handleSubmitClick = () => {
    router.push('/2auth');
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        onClick={() => router.back()}
      >
        ←
      </button>
      <h1 className={styles.header}>アプリをはじめよう</h1>
      <p className={styles.description}>
        有効なメールアドレスを入力してください。
      </p>
      <form
        className={styles.form}
        onSubmit={handleRegister}
      >
        <input
          type="email"
          id="email"
          value={email}
          placeholder="sample@mail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.emailInput}
        />
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handleSubmitClick}
        >
          認証コードを受け取る
        </button>
      </form>
    </div>
  );
};
const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
export default RegisterPage;
