// pages/accRegister.tsx
import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const AccRegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Account Registration</h1>
      <p>Welcome to the account registration page!</p>
      {/* Add your registration form and logic here */}
    </div>
  );
};

export default AccRegisterPage;

// const auth = getAuth();
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
