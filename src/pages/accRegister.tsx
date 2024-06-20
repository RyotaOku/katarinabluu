import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/accRegister.module.css'; // Import CSS Module

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

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <label
        htmlFor="userName"
        className={styles.formLabel}
      >
        ユーザーネーム
      </label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        className={styles.formInput}
      />
      <label
        htmlFor="gender"
        className={styles.formLabel}
      >
        性別
      </label>
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
      <label
        htmlFor="birthday"
        className={styles.formLabel}
      >
        生年月日:
      </label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={birthday}
        onChange={(event) => setBirthday(event.target.value)}
        className={styles.formInput}
      />
      <label
        htmlFor="password"
        className={styles.formLabel}
      >
        パスワード
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className={styles.formInput}
      />
      <button
        type="submit"
        className={styles.submitButton}
      >
        登録
      </button>
    </form>
  );
};

export default AccRegisterPage;
