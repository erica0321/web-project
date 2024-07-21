import styles from '../style/Main.module.css';
import Info from '../components/Info';
import Introduce from '../components/Introduce';
import MainProject from '../components/MainProject';
import OtherExperience from '../components/OtherExperience';
import Profile from '../components/Profile';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.emoji}>🔗 </div>
        <div className={styles.title}>노현아 | 이력서 </div>
      </div>
      <Info />
      <div className={styles.divider} />
      <Introduce />
      <div className={styles.divider} />
      <Profile />
      <div className={styles.divider} />
      <WorkExperience />
      <div className={styles.divider} />
      <MainProject />
      <div className={styles.divider} />
      <OtherExperience />
      <div className={styles.divider} />
      <Skills />
    </div>
  );
}
