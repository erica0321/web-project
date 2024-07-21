import styles from '../style/Portfolio.module.css';
export default function Portfolio() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.emoji}>🔗 </div>
        <div className={styles.title}>노현아 | 포트폴리오 </div>
      </div>
      <div className={styles.divider} />
      <h2>Projects</h2>
      <div className={styles.bottom}></div>
    </div>
  );
}
