import styles from '../style/WorkExperience.module.css';

export default function WorkExperience() {
  return (
    <div className={styles.main}>
      <h2>Work Experience</h2>
      <div className={styles.container}>
        <div className={styles.subTitle}>
          (주) 플록스{' '}
          <span className={styles.gray}>- 2023 ICT 학점 연계 인턴십</span>&nbsp;
        </div>
        <div className={styles.info}>
          상품 정보 추출하는 웹 스크래퍼 및 크롬 익스텐션 기능 고도화 / 웹 개발
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wishbucket.io"
              className={styles.link}
            >
              <img
                alt="이미지"
                src="https://www.wishbucket.io/favicon.ico"
                className={styles.icon}
              />
              위시버킷 바로가기
            </a>
            <div className={styles.role}>담당 | 프론트엔드</div>
            <div className={styles.data}>2023.09 ~ 2024.02 (6개월)</div>
          </div>
          <div className={styles.right}>
            <ul>
              <li>웹 페이지 정보를 추출하는 스크래퍼 고도화</li>
              <li>위시버킷 크롬 익스텐션 vue에서 react로 migration</li>
              <li>React 기반 frontend 웹페이지 개발</li>
              <li>사용자 사용 경향 및 분석 후 그에 맞는 기능 - 랭킹페이지</li>
              <li>사용 기술: Typescript, React, NextJs, Chrome Extension</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
