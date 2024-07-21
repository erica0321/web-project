import styles from '../style/OtherExperience.module.css';

export default function Experience({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>{data.title}&nbsp;</div>
      <div className={styles.info}>{data.subTitle}</div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={data.image} alt="이미지" className={styles.image} />
        </div>
        <div className={styles.right}>
          <div className={styles.text}>기간 | {data.length}</div>
          <div className={styles.text}>담당 | {data.role}</div>
          <ul className={styles.ul}>
            {data.feature.map((feat, index) => {
              return <li key={index}>{feat}</li>;
            })}
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            href={data.link}
            className={styles.link}
          >
            {data.siteTitle}
          </a>
        </div>
      </div>
    </div>
  );
}
