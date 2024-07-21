import styles from '../style/PortfolioDetail.module.css';

export default function WebRevamp() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>웹 개편 프로젝트</h1>
        <p className={styles.subTitle}>
          기존의 UI를 새로운 UI로 개편하고 랭킹 페이지를 추가했습니다.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>프로젝트 개요</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>프로젝트 이름:</strong> 웹 개편 프로젝트
          </li>
          <li className={styles.li}>
            <strong>프로젝트 기간:</strong> 2023년 12월 1일 ~ 2023년 12월 20일
          </li>
          <li className={styles.li}>
            <strong>담당 역할:</strong> 웹 프론트엔드 개발
          </li>
          <li className={styles.li}>
            <strong>사용 스택:</strong> Typescript, NextJS, Google Console
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
                아이템 페이지 UI 변화 및 관련 추천 상품 섹션 추가했습니다.
              </li>
              <li className={styles.li}>
                브랜드/스토어 페이지 UI 변화 및 연관 브랜드/스토어 섹션
                추가했습니다.
              </li>
              <li className={styles.li}>
                태그 페이지 구현:
                <ul className={styles.nestedUl}>
                  <li className={styles.nestedLi}>
                    해당 태그와 관련된 아이템 영역 추가했습니다.
                  </li>
                  <li className={styles.nestedLi}>
                    해당 태그와 연관된 태그 영역 추가했습니다.
                  </li>
                  <li className={styles.nestedLi}>
                    로그인 유무에 따라서 아이템을 보여주는 갯수를 다르게 하여
                    가입 유도를 이끌어냈습니다.
                  </li>
                  <li className={styles.nestedLi}>
                    페이지네이션을 통해 대량의 정보 전달했습니다.
                  </li>
                  <li className={styles.nestedLi}>
                    하단에 추천 영역을 추가했습니다.
                  </li>
                  <li className={styles.nestedLi}>
                    태그와 관련된 인기, 최신 아이템을 보여주는 탭 추가했습니다.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>
                랭킹 페이지 구현:
                <ul className={styles.nestedUl}>
                  <li className={styles.nestedLi}>
                    태그 별로 랭킹 아이템을 보여주는 영역을 추가했습니다.
                  </li>
                  <li className={styles.nestedLi}>
                    로그인 유무에 따라서 아이템을 보여주는 갯수를 다르게 하여
                    가입 유도를 이끌어냈습니다.
                  </li>
                </ul>
              </li>
              <li className={styles.li}>무한 스크롤 및 페이지네이션 구현</li>
              <li className={styles.li}>
                GraphQL을 사용한 데이터 요청 및 관리
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>성과:</strong>
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                페이지의 체류 시간 증가 및 이탈률 하락
              </li>
              <li className={styles.li}>
                이탈률이 77.98%에서 59.04%로 약 19%p 감소
              </li>
              <li className={styles.li}>
                체류시간이 56초에서 131초로 약 2.34배 증가
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>잘한 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            사용자 이벤트를 분석하여 사용자가 자주 방문하는 페이지를 분석하고,
            해당 페이지의 체류 시간을 늘리기 위해 아이디어를 냈습니다.
          </li>
          <li className={styles.li}>
            기존 UI에서 새로운 UI로의 전환을 원활하게 수행했습니다.
          </li>
          <li className={styles.li}>
            사용자의 체류 시간을 늘리는 방법으로 여러가지를 도입했습니다.
          </li>
          <li className={styles.li}>
            랭킹 페이지를 통해, 트렌드 파악을 위해 방문하는 사용자들의 니즈를
            만족시키고 30분마다 랭킹을 새로고침하여 정확한 정보를 전달했습니다.
          </li>
          <li className={styles.li}>
            무한 스크롤, 페이지네이션을 통해 대량의 데이터를 보여줌으로써, 유사
            상품 검색을 위해 방문하는 사용자들의 니즈를 만족시켰습니다.
          </li>
          <li className={styles.li}>
            중복적으로 발생하는 쿼리 수를 줄여, 서버에 부담을 줄였습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>아쉬운 점</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            영역이 한정적이라 많은 기능을 넣지 못한 점이 아쉬웠습니다.
          </li>
          <li className={styles.li}>
            사용자의 이탈율을 더 줄이고, 체류 시간을 더 늘리지 못한 점이
            아쉬웠습니다.
          </li>
          <li className={styles.li}>
            랭킹 페이지 내, 카테고리 칸이 새로고침할 때마다 바뀌는 이슈가 있어
            해결하는데 시간이 오래 걸렸던 점이 아쉬웠습니다.
          </li>
          <li className={styles.li}>
            비록 체류 시간을 늘리고, 이탈율을 줄였지만 사용자의 피드백을 받지
            못하여 더욱 개선하지 못했던 점이 아쉬웠습니다.
          </li>
          <li className={styles.li}>
            특정 쿼리가 반복적으로 발생하여, 사용자 수가 늘어남에 따라 서버에
            부담이 간 적이 있어 아쉬웠습니다.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>결론</h2>
        <p className={styles.subTitle}>
          웹 개편 프로젝트는 기존 UI를 새로운 UI로 전환하고 사용자 경험을
          개선하기 위해 진행되었습니다. 해당 경험을 통해 앞으로는 더 많은 사용자
          피드백을 반영하고 사용자의 니즈를 충족시키는 추가 기능을 구현하여
          웹사이트의 완성도를 더욱 높일 계획입니다.
        </p>
      </section>
    </div>
  );
}
