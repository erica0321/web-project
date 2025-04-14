import profile from '../img/profile.png';
import styles from '../style/Info.module.css';

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.sideProfileList}>
        <div className={styles.sideList}>
          <strong className={styles.sideTitle}>CONTACT. </strong>
          <div className={styles.sideContent}>
            <strong>Phone.</strong> 010-2262-4196
          </div>
          <div className={styles.sideContent}>
            <strong>Email.</strong> hyunahrho29@gmail.com
          </div>
        </div>
        <div className={styles.sideList}>
          <strong className={styles.sideTitle}>CHANNEL. </strong>
          <a
            target="_blank"
            rel="noreferrer"
            href={'https://github.com/erica0321'}
            className={styles.sideContent}
          >
            <strong>Github.</strong> https://github.com/erica0321
          </a>
        </div>
      </div>
    </div>
  );
}
