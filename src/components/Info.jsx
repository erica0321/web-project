import profile from '../img/profile.png';
import styles from '../style/Info.module.css';

export default function Info() {
  return (
    <div className={styles.info}>
      <img src={profile} alt="이미지" className={styles.profile} />
      <div className={styles.sideProfileList}>
        <div className={styles.sideList}>
          <strong className={styles.sideTitle}>[ CONTACT ]</strong>
          <div className={styles.sideContent}>✉️ hyunahrho29@gmail.com</div>
        </div>
        <div className={styles.sideList}>
          <strong className={styles.sideTitle}>[ CHANNEL ]</strong>
          <a
            target="_blank"
            rel="noreferrer"
            href={'https://github.com/erica0321'}
            className={styles.sideContent}
          >
            Github. https://github.com/erica0321
          </a>
        </div>
      </div>
    </div>
  );
}
