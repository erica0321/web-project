import styles from '../style/MainProject.module.css';

export default function Project({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>{data.title}&nbsp;</div>
      <div className={styles.info}>{data.subTitle}</div>

      <div className={styles.content}>
        <div className={styles.left}>
          {data.image ? (
            <img src={data.image} alt="이미지" className={styles.image} />
          ) : null}
        </div>
        <div className={styles.right}>
          <div className={styles.text}>기간 | {data.length}</div>
          <div className={styles.text}>담당 | {data.role}</div>
          <div className={styles.text}>스택 | {data.stack}</div>
          <div className={styles.text}>인원 | {data.member}</div>

          <ul className={styles.ul}>
            {data.feature.map((feat, index) => {
              return <li key={index}>{feat}</li>;
            })}
          </ul>
        </div>
      </div>
      {data.results && (
        <div className={styles.result}>
          <div className={styles.title}>성과 | </div>
          <div className={styles.resultList}>
            {data.results.map((result, index) => {
              return <div key={index}>{result}</div>;
            })}
          </div>
        </div>
      )}
      <div className={styles.linkContainer}>
        {data.site ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={data.site}
            className={styles.link}
          >
            <img src={data.siteIcon} alt="이미지" className={styles.icon} />
            {data.siteTitle}
          </a>
        ) : null}
        {data.site ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={data.site}
            className={styles.link}
          >
            🖇️ &nbsp;{data.portfolioTitle}
          </a>
        ) : null}
      </div>
    </div>
  );
}
