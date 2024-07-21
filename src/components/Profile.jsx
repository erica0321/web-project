import styles from '../style/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.main}>
      <h2>Profile</h2>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.subTitle}>학력</h3>
          <p>한국외국어대학교 정보통신공학과 (전공심화)</p>
          <span className={styles.dateNot}>2020.03 - 2024.02</span>
          <p className={styles.score}>총점: 4.27 / 4.5</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>어학성적</h3>
          <p>
            TOEIC: 880<span className={styles.date}>2023.02</span>
          </p>
          <p>
            OPIc: IM1<span className={styles.date}>2024.03</span>
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>수상내역</h3>
          <p>
            인공지능 아이디어 페스티벌 장려상
            <span className={styles.date}>2022.11</span>
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subTitle}>자격증</h3>
          <p>
            정보처리기사<span className={styles.date}>2024.07</span>
          </p>
        </div>
      </div>
    </div>
  );
}
