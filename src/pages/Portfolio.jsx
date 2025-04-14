import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Portfolio.module.css';
import commitmate from '../img/commitmate.png';
import ab from '../img/ab.png';
import ranking from '../img/ranking.png';

export default function Portfolio() {
  const portfolios = [
    {
      id: '1',
      title: '🌱 Commit Mate',
      image: commitmate,
      info: 'Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드입니다.',
      date: '24.07.03 ~ 24.07.15',
      role: 'FE',
    },
    {
      id: '2',
      title: '[위시버킷] 웹 A/B test 프로젝트',
      image: ab,
      info: '실제 주 서비스인 앱 유입을 위해서 웹에 앱 유도하는 도구를 추가했습니다.',
      date: '24.01.02 ~ 24.02.12',
      role: 'FE',
    },
    {
      id: '3',
      title: '[위시버킷] 웹 개편 프로젝트',
      image: ranking,
      info: '기존의 UI를 새로운 UI로 개편하고 랭킹 페이지 추가했습니다.',
      date: '23.12.01 ~ 23.12.30',
      role: 'FE',
    },
    {
      id: '4',
      title: '[위시버킷] Chrome Extension 개발 프로젝트',
      image:
        'https://lh3.googleusercontent.com/l0JO6WCMoEaf9nBVqKsm7Ojw7xt_XxlSd_GzxlQlqCOqHVtqPT-jBTy-6Spg2SS0AGQoFtuP6KeaqGk6WWo2NAqwtQ=s1280-w1280-h800',
      info: '[위시버킷] 기존에 Vue로 구현되어 있는 크롬 익스텐션을 React로 migration 및 개발했습니다.',
      date: '23.10.15 ~ 23.11.31',
      role: 'FE',
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.emoji}>🔗 </div>
        <div className={styles.title}>노현아 | 포트폴리오 </div>
        <Link
          to="https://erica0321.my.canva.site/"
          target="_blank"
          className={styles.portfolioLink}
        >
          포트폴리오 링크
        </Link>
      </div>
      <div className={styles.divider} />
      <h2>Projects</h2>
      <div className={styles.bottom}>
        {portfolios.map((portfolio, index) => {
          return <PortfolioOne key={index} data={portfolio} />;
        })}
      </div>
    </div>
  );
}

function PortfolioOne({ data }) {
  return (
    <Link to={`/portfolio/${data.id}`} className={styles.project}>
      <div className={styles.info}>
        <img src={data.image} alt="" className={styles.image} />
        <p className={styles.portTitle}>{data.title}</p>
        <div className={styles.projectText}>
          <div className={styles.text}>
            <div className={styles.tab}>개요</div>
            {data.info}
          </div>
          <div className={styles.text}>
            <div className={styles.tab}>기간</div>
            {data.date}
          </div>
          <div className={styles.text}>
            <div className={styles.tab}>담당</div>
            {data.role}
          </div>
        </div>
      </div>
    </Link>
  );
}
