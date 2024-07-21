import styles from '../style/Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link to="" className={styles.tab}>
          이력서
        </Link>
        <Link to="/portfolio" className={styles.tab}>
          포트폴리오
        </Link>
      </div>
    </div>
  );
}
