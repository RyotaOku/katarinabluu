// components/navigation.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { motion, cubicBezier } from 'framer-motion';
import styles from '@/styles/navigation.module.css';
import { footerArray } from '@/types/footerTypes'; // Ensure this is correctly defined and imported

interface FooterProps {
  children: React.ReactNode;
  title: string; // Add the title prop
}

const Navigation = ({ children, title }: FooterProps) => {
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
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="あなたのジョブシフト"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Image
            src="/images/profile.jpg" // Ensure you have this image or replace it with a correct path
            alt="Profile"
            width={40}
            height={40}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.date}>{title}</div>
        <div className={styles.dropdown}>▼</div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          {footerArray.map((e, idx) => (
            <motion.div
              className={styles.navItem}
              key={idx}
              variants={variant}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={e.path}
                className={`${styles.button} ${pathStat === e.path ? styles.active : ''}`}
              >
                <Icon as={e.icon} />
                <span>{e.label}</span>
                {/* {pathStat === e.path && <div className={styles.border}></div>} */}
              </Link>
            </motion.div>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default Navigation;
