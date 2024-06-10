import { useAuth } from '@/context/auth';
import { login, logout } from '@/lib/auth';
import { useState } from 'react';

export default function Main() {
  const user = useAuth();
  const [waiting, setWaiting] = useState(false); // Removed the explicit type definition

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <div>
      {user === null && !waiting && <button onClick={signIn}>ログイン</button>}
      {user && <button onClick={logout}>ログアウト</button>}
    </div>
  );
}
