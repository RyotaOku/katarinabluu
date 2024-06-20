import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/accRegister.module.css'; // Import CSS Module
import router from 'next/router';

const AccRegister: React.FC = () => {
  const [userName, setUserName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', { userName, gender, birthday, password }); // Example logging
  };

  const handlePageChange = () => {
    router.push('/jobRegister');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.formContainer}
      >
        <div className={styles.labels}>
          <h1 className={styles.title}>ユーザー情報を登録</h1>
          <label
            htmlFor="userName"
            className={styles.formLabel}
          >
            ユーザーネーム
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className={styles.formInput}
            />
          </label>
          <div className={styles.ageGender}>
            <label
              htmlFor="gender"
              className={styles.formLabel}
            >
              性別
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                className={styles.formSelect}
              >
                <option value="">未選択</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
              </select>
            </label>
            <label
              htmlFor="birthday"
              className={styles.formLabel}
            >
              生年月日:
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
                className={styles.formInput}
              />
            </label>
          </div>
          <label
            htmlFor="password"
            className={styles.formLabel}
          >
            パスワード
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={styles.formInput}
            />
          </label>
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handlePageChange}
        >
          登録
        </button>
      </form>
    </>
  );
};

export default AccRegister;
