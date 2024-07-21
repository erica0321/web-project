import styles from '../style/PortfolioDetail.module.css';
import commit1 from '../img/commit1.png';
import commit2 from '../img/commit2.png';
import commit3 from '../img/commit3.png';
import commit4 from '../img/commit4.png';

export default function CommitMate() {
  return (
    <div className={styles.main}>
      <header>
        <h1 className={styles.title}>Commit Mate</h1>
        <p className={styles.subTitle}>
          GitHub API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는
          대시보드입니다.
        </p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.h2}>프로젝트 개요</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>프로젝트 이름:</strong> Commit Mate
          </li>
          <li className={styles.li}>
            <strong>프로젝트 기간:</strong> 2024년 7월 3일 ~ 2024년 7월 15일
          </li>
          <li className={styles.li}>
            <strong>담당 역할:</strong> 웹 프론트엔드 개발
          </li>
          <li className={styles.li}>
            <strong>사용 스택:</strong> Javascript, HTML, CSS, React
          </li>
          <li className={styles.li}>
            <strong>팀 구성:</strong> 프론트엔드 개발자 2명, 백엔드 개발자 3명
          </li>
        </ul>
        <img className={styles.image} alt="project" src={commit4} />
        <img className={styles.image} alt="project" src={commit1} />
        <img className={styles.image} alt="project" src={commit2} />
        <img className={styles.image} alt="project" src={commit3} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>프로젝트를 시작하게 된 계기</h2>
        <p className={styles.subTitle}>
          현대 소프트웨어 개발 환경에서 협업과 기여도를 명확히 파악하는 것은
          매우 중요한 과제입니다. 그러나, GitHub와 같은 소스코드 관리
          플랫폼에서는 각 팀원이 무엇을 했는지, 어떻게 협업했는지, 그리고 인당
          기여도를 명확히 파악하는 것이 어렵습니다.
        </p>
        <p className={styles.subTitle}>
          협업 내용 파악의 어려움, 개인 기여도 분석의 어려움, 이슈 관리의
          복잡성, 효율적인 회고의 어려움. 이러한 문제들을 해결하기 위해 Commit
          Mate 프로젝트를 시작하게 되었습니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>주요 기여 및 성과</h2>
        <div className={styles.gridContainer}>
          <div>
            <h3 className={styles.h3}>1. 웹 프론트엔드 개발</h3>
            <p className={styles.subTitle}>
              <strong>주요 업무:</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                전체 프로젝트의 프론트엔드 아키텍처 설계 및 구현을 담당했습니다.
              </li>
              <li className={styles.li}>
                React를 활용하여 컴포넌트 기반 개발을 진행했습니다.
              </li>
              <li className={styles.li}>
                권한에 따른 페이지 뷰 구분 로직을 구현했습니다.
              </li>
              <li className={styles.li}>
                대시보드에서 다양한 차트 및 그래프를 사용하여 데이터를
                시각화했습니다.
              </li>
              <li className={styles.li}>
                AWS S3와 Cloudfront를 이용한 개발 환경 배포를 완료했습니다.
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.h3}>성과</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                React의 컴포넌트 재사용성을 최대한 활용하여 유지보수성을
                높였습니다.
              </li>
              <li className={styles.li}>
                사용자 권한에 따라 대시보드 뷰를 동적으로 변경하여 보안성을
                강화했습니다.
              </li>
              <li className={styles.li}>
                다양한 차트 및 그래프를 사용하여 데이터 전달력을 높였습니다.
              </li>
              <li className={styles.li}>
                AWS S3와 Cloudfront를 사용한 배포로 안정적이고 빠른 웹
                애플리케이션을 제공했습니다.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.gridContainer}>
          <div>
            <h3 className={styles.h3}>2. 협업 및 커뮤니케이션</h3>
            <p className={styles.subTitle}>
              <strong>주요 업무:</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                백엔드 팀과의 원활한 API 연동 및 데이터 통신을 담당했습니다.
              </li>
              <li className={styles.li}>
                프론트엔드 팀원과의 코드 리뷰를 통해 협업을 진행했습니다.
              </li>
              <li className={styles.li}>
                실시간으로 현재 개발 진행도를 전달하여 업무 분담을 효율적으로
                진행했습니다.
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.h3}>성과: </h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                백엔드 팀과의 원활한 소통으로 API 연동 시 발생할 수 있는 문제를
                최소화했습니다.
              </li>
              <li className={styles.li}>
                코드 리뷰를 통해 코드 품질을 향상시키고 버그를 사전에
                예방했습니다.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>잘한 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            React 컴포넌트 재사용성을 극대화했습니다.
          </li>
          <li className={styles.li}>데이터 시각화의 다양성을 확보했습니다.</li>
          <li className={styles.li}>권한에 따른 페이지 뷰를 구분했습니다.</li>
          <li className={styles.li}>효율적인 배포 프로세스를 구현했습니다.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>아쉬운 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>짧은 프로젝트 기간이 아쉬웠습니다.</li>
          <li className={styles.li}>
            초기에 기획이 되지 않은 상태로 프로젝트를 시작하여, 초기 개발 속도가
            늦은 점이 아쉬웠습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>결론</h2>
        <p className={styles.subTitle}>
          Commit Mate 프로젝트는 GitHub API를 활용하여 조직의 기여도를
          시각적으로 파악할 수 있는 유용한 도구로 개발되었습니다. 짧은 기간 동안
          많은 기능을 구현했지만, 일부 아쉬운 점도 있었습니다. 앞으로의
          프로젝트에서는 초기 기획 및 설계를 마무리하여 프로젝트 개발 속도 및
          안정성에 더욱 집중하여 완성도 높은 웹 애플리케이션을 개발할
          계획입니다.
        </p>
      </section>
    </div>
  );
}
