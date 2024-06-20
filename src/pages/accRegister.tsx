import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/accRegister.module.css'; // Import CSS Module
import router from 'next/router';
import addData from '../lib/addData'; // Import the addData function

const AccRegister: React.FC = () => {
  const [userName, setUserName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [email, setEmail] = React.useState(''); // Added email state
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log('User created:', user);

      // Prepare additional user data
      const additionalData = {
        userName,
        gender,
        birthday,
      };

      // Save additional user data to Firestore
      const { result, error } = await addData(
        'users',
        user.uid,
        additionalData,
      );
      if (error) {
        console.error('Error adding additional data:', error);
      } else {
        console.log('Additional data added:', result);
      }

      // Redirect to jobRegister after successful sign-up
      router.push('/jobRegister');
    } catch (error) {}
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
        htmlFor="email"
        className={styles.formLabel}
      >
        メールアドレス
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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

export default AccRegister;
