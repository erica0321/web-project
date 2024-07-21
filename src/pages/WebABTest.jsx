import React from 'react';
import styles from '../style/PortfolioDetail.module.css';

export default function WebABTest() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>웹 A/B 테스트 프로젝트</h1>
        <p className={styles.subTitle}>
          실제 주 서비스인 앱 유입을 위해서 웹에 앱 유도하는 도구를
          추가했습니다.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>프로젝트 개요</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>프로젝트 이름:</strong> 웹 A/B 테스트 프로젝트
          </li>
          <li className={styles.li}>
            <strong>프로젝트 기간:</strong> 2024년 1월 2일 ~ 2024년 2월 12일
          </li>
          <li className={styles.li}>
            <strong>담당 역할:</strong> 웹 프론트엔드 개발
          </li>
          <li className={styles.li}>
            <strong>사용 스택:</strong> Typescript, GraphQL, NextJS
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
                A/B 테스트 직접 구현 및 테스트 진행했습니다.
              </li>
              <li className={styles.li}>
                Google Console을 통한 사용자 행동 분석 - 사용자 로그를 추적하여
                주로 사용하는 기능을 파악했습니다.
              </li>
              <li className={styles.li}>
                6가지 기능에 대한 A/B 테스트 진행했으며, 기존안과 신규안에 대해
                사용자 로그를 분석하여 가장 효과가 뚜렷한 신규안에 대한 UI 제작
                및 구현했습니다.
              </li>
              <li className={styles.li}>
                context를 사용하여 사용자의 테스트 번호를 전역으로 공유했으며,
                상태를 바뀌지 않게 하여 일관성을 유지했습니다.
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.subTitle}>
              <strong>성과:</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                실제로 웹 투 앱으로 기존 대비 WAU 약 400명 증가
              </li>
              <li className={styles.li}>
                앱 전환 신규가입 WAU가 2024년 1월 1일자 356명에서 2024년 2월
                12일자 849명으로 증가
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>잘한 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            A/B 테스트를 통해 사용자 경험을 최적화했습니다.
          </li>
          <li className={styles.li}>
            Google Console을 활용한 데이터 분석으로 사용자 행동을 정확히
            파악했습니다.
          </li>
          <li className={styles.li}>
            효과적인 UI 변경을 통해 웹에서 앱으로의 전환율을 크게
            향상시켰습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>아쉬운 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            많은 이벤트로 인하여 분석을 하기가 까다로웠습니다.
          </li>
          <li className={styles.li}>
            유저 프로퍼티를 설정하는데 시간이 오래 걸렸습니다.
          </li>
          <li className={styles.li}>
            특정 이벤트가 중복으로 발생하여 정확한 데이터를 얻기가 어려웠습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>결론</h2>
        <p className={styles.subTitle}>
          웹 A/B 테스트 프로젝트는 웹에서 앱으로의 전환율을 크게 향상시키기 위해
          진행되었습니다. 짧은 기간 동안 많은 성과를 달성했으며, 향후에는 해당
          경험을 통해 빠르게 사용자의 경험을 더욱 최적화할 계획입니다.
        </p>
      </section>
    </div>
  );
}
