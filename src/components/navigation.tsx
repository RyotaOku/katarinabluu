// components/navigation.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { motion, cubicBezier } from 'framer-motion';
import styles from '@/styles/navigation.module.css';
import { footerArray } from '@/types/footerTypes'; // Ensure this is correctly defined and imported

const Navigation: React.FC = () => {
  const [pathStat, setPathStat] = useState('/');

  useEffect(() => {
    setPathStat(location.pathname);
  }, []);

  const variant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.4, 0, 0.2, 1),
      },
    },
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Image
            src="/profile.jpg" // Ensure you have this image or replace it with a correct path
            alt="Profile"
            width={40}
            height={40}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.date}>20日5月2024年</div>
        <div className={styles.dropdown}>▼</div>
      </header>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          {footerArray.map((e, idx) => (
            <motion.div
              className={`${styles.navItem} ${pathStat === e.path ? styles.active : ''}`}
              key={idx}
              variants={variant}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={e.path}
                className={styles.button}
              >
                <Icon as={e.icon} />
                <span>{e.label}</span>
                {pathStat === e.path && <div className={styles.border}></div>}
              </Link>
            </motion.div>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default Navigation;
