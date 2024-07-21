import React from 'react';
import styles from '../style/PortfolioDetail.module.css';

export default function ChromeExtension() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Chrome Extension 개발 프로젝트</h1>
        <p className={styles.subTitle}>
          기존에 Vue로 구현되어 있는 크롬 익스텐션을 React로 migration 및
          개발했습니다.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>프로젝트 개요</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>프로젝트 이름:</strong> Chrome Extension 개발 프로젝트
          </li>
          <li className={styles.li}>
            <strong>프로젝트 기간:</strong> 2023년 10월 15일 ~ 2023년 11월 31일
          </li>
          <li className={styles.li}>
            <strong>담당 역할:</strong> Chrome Extension 프론트엔드 개발
          </li>
          <li className={styles.li}>
            <strong>사용 스택:</strong> Typescript, GraphQL, React, Chrome
            Extension
          </li>
          <li className={styles.li}>
            <strong>팀 구성:</strong> 프론트엔드 개발자 1명, 백엔드 개발자 1명,
            기획 1명
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>주요 기여 및 성과</h2>
        <div className={styles.gridContainer}>
          <div>
            <p className={styles.subTitle}>
              <strong>주요 업무:</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                페이지 방문 시 아이콘 변화를 구현했습니다: 브라우저에 저장된
                상품의 URL을 확인하고, 사용자가 해당 URL을 방문할 때 아이콘이
                변화하도록 구현했습니다. 이를 통해 사용자는 자신이 저장한 상품
                페이지를 쉽게 확인할 수 있습니다.
              </li>
              <li className={styles.li}>
                저장 폴더 무한 스크롤 기능을 추가했습니다: 사용자가 만든 폴더를
                한정적이지 않고 모두 볼 수 있도록 무한 스크롤 기능을
                추가했습니다. 이로써 사용자는 여러 개의 폴더를 스크롤하여 쉽게
                접근할 수 있습니다.
              </li>
              <li className={styles.li}>
                Background, Content, Option 통신을 구현했습니다: 크롬 익스텐션은
                일반 브라우저와 달리 Background, Content, Option 간의 소통이
                필요합니다. 이러한 통신 로직을 이해하고 구현하여 데이터 전달과
                상태 관리를 원활히 했습니다.
              </li>
              <li className={styles.li}>
                GraphQL을 사용한 데이터 요청 및 관리를 수행했습니다: 이를 통해
                필요한 데이터만 선택적으로 불러와서 애플리케이션의 성능을
                최적화했습니다.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>성과:</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                실제 서비스되고 있으며, 1,000명 이상의 사용자를 보유하고
                있습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>잘한 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            기존 Vue 코드베이스를 React로 원활히 마이그레이션했습니다.
          </li>
          <li className={styles.li}>
            불필요한 통신 로직을 줄여 복잡도를 개선했습니다.
          </li>
          <li className={styles.li}>
            저장 폴더 무한 스크롤 기능을 통해 사용자 경험을 향상시켰습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>아쉬운 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            크롬 익스텐션을 처음 개발하기 때문에 개발 기간이 오래 걸린 점이
            아쉬웠습니다.
          </li>
          <li className={styles.li}>
            마이그레이션 과정에서 Vue와 React의 차이점으로 인해 기능을 완벽히
            구현하기에 시간이 걸린점이 아쉬웠습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>결론</h2>
        <p className={styles.subTitle}>
          Chrome Extension 개발 프로젝트는 기존 Vue 코드베이스를 React로
          마이그레이션하여 고도화된 기능을 추가하는 데 중점을 두었습니다. 처음
          접해보는 크롬 익스텐션 통신 로직이 생소하여 개발하는데 어려움이
          있었으나, 한번 익숙해지니 그 뒤로는 수월하게 개발을 했습니다. 해당
          경험을 통해 크롬 익스텐션 기능을 더욱 고도화시킬 계획입니다.
        </p>
      </section>
    </div>
  );
}
