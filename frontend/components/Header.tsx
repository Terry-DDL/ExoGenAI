import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image
          src="/images/exogen-logo.svg"
          alt="ExoGen logo"
          width={56}
          height={56}
        />
        <span className={styles.brandName}>ExoGen</span>
      </div>
      <nav className={styles.nav}>
        <a href="#explore" className={styles.link}>
          Explore
        </a>
        <a href="#data" className={styles.link}>
          Data
        </a>
        <a href="#export" className={styles.link}>
          Export
        </a>
      </nav>
    </header>
  );
}
