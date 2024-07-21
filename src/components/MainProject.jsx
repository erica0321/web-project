import styles from '../style/MainProject.module.css';
import Project from './Project';
import commitmate from '../img/commitmate.png';
import ab from '../img/ab.png';
import ranking from '../img/ranking.png';

export default function MainProject() {
  const projects = [
    {
      title: 'Commit Mate',
      subTitle:
        'Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드',
      site: 'https://commitmate-kro.kr',
      siteIcon: 'https://commitmate.kro.kr/favicon.ico',
      siteTitle: 'Commit Mate 사이트 바로가기',
      length: '24.07.03 ~ 24.07.15',
      role: '웹 프론트엔드 개발',
      stack: 'Javascript, GraphQL, React',
      member: 'FE 2명, BE 3명',
      feature: [
        '권한에 따른 페이지 뷰 구분',
        '대시보드 구현 (차트 및 그래프 사용)',
        'AWS S3, Cloudfront를 이용해 dev 웹 배포',
        'Router를 사용한 SPA 개발',
      ],
      portfolio: '',
      portfolioTitle: 'Commit Mate 포트폴리오 바로가기',
      image: commitmate,
      link: 'https://drive.google.com/file/d/1mMpYqDy2kb4m4H9qtGLgUi2cIQ4TDeqS/view',
    },
    {
      title: '웹 A/B test 프로젝트 ',
      subTitle:
        '[위시버킷]  실제 주 서비스인 앱 유입을 위해서 웹에 앱 유도하는 도구 추가',
      length: '24.01.02 ~ 24.02.12',
      role: '웹 프론트엔드 개발',
      site: 'https://www.wishbucket.io',
      siteIcon: 'https://www.wishbucket.io/favicon.ico',
      siteTitle: '위시버킷 사이트 바로가기',
      stack: 'Typescript, GraphQL, NextJS',
      member: 'FE 1명, BE 1명, 기획 1명',
      feature: [
        'A/B 테스트 구현 및 진행',
        'Google Console을 통한 사용자 행동 분석',
        '6가지 기능에 대한 A/B 테스트 진행',
        '효과가 뚜렷한 신규안에 대한 UI 제작 및 구현',
      ],
      image: ab,
      portfolio: '',
      portfolioTitle: '위시버킷 전체 포트폴리오 바로가기',
      results: [
        '실제로 웹 투 앱으로 기존대비 WAU 약 400명 증가',
        '앱 전환 신규가입 WAU 24.01.01일자 356명 → 24.02.12일자 849명',
      ],
    },
    {
      title: '웹 개편 프로젝트',
      subTitle: '[위시버킷]  기존의 UI를 새로운 UI로 개편하고 랭킹 페이지 추가',
      site: 'https://www.wishbucket.io',
      siteIcon: 'https://www.wishbucket.io/favicon.ico',
      siteTitle: '위시버킷 사이트 바로가기',
      length: '23.12.01 ~ 23.12.20',
      role: '웹 프론트엔드 개발',
      stack: 'Typescript, NextJs, Google console',
      member: 'FE 1명, BE 1명, 기획 1명',
      feature: [
        '아이템 페이지 UI 변화 및 관련 추천 상품 섹션 추가',
        '브랜드/스토어 페이지 UI 변화 및 연관 브랜드/스토어 섹션 추가',
        '태크 / 랭킹 페이지 구현',
        '무한 스크롤 및 페이지네이션 구현',
        'GraphQL을 사용한 데이터 요청 및 관리',
      ],
      portfolio: '',
      portfolioTitle: '위시버킷 전체 포트폴리오 바로가기',
      image: ranking,
      results: [
        '페이지의 체류 시간 증가 및 이탈률 하락',
        '이탈률: 77.98% → 59.04% (약 19%p 감소), 체류시간: 56초 → 131초 (약 2.34배 증가)',
      ],
    },
    {
      title: 'Chrome Extension 개발 프로젝트',
      subTitle:
        '[위시버킷]  기존에 Vue로 구현되어 있는 크롬 익스텐션을 React로 migration 및 개발',
      site: 'https://chromewebstore.google.com/detail/%EC%9C%84%EC%8B%9C%EB%B2%84%ED%82%B7-wishbucket/glckfgggilcgnagngdlplfadipgkioeb',
      siteIcon: 'https://www.wishbucket.io/favicon.ico',
      siteTitle: '위시버킷 크롬익스텐션 바로가기',
      length: '23.10.15 ~ 23.11.31',
      role: 'Chrome Extension 프론트엔드 개발',
      stack: 'Typescript, GraphQL,React, Chrome Extension',
      member: 'FE 1명, BE 1명, 기획 1명',
      feature: [
        '저장한 상품 url 방문 시 아이콘 변화로 유저에게 노출',
        '저장 폴더 무한 스크롤 기능 추가',
        'Backgrond, Content, Option 통신 구현',
        'GraphQL을 사용한 데이터 요청 및 관리',
      ],
      portfolio: '',
      portfolioTitle: '위시버킷 크롬익스텐션 포트폴리오 바로가기',
      image:
        'https://lh3.googleusercontent.com/l0JO6WCMoEaf9nBVqKsm7Ojw7xt_XxlSd_GzxlQlqCOqHVtqPT-jBTy-6Spg2SS0AGQoFtuP6KeaqGk6WWo2NAqwtQ=s1280-w1280-h800',
      results: [
        '실제 서비스되고 있으며, 1,000 명 이상의 사용자를 가지고 있음 ',
      ],
    },
  ];

  return (
    <div className={styles.main}>
      <h2>주요 Projects</h2>
      {projects.map((project, index) => {
        return <Project key={index} data={project} />;
      })}
    </div>
  );
}
