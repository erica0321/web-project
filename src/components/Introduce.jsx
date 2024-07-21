import styles from '../style/Introduce.module.css';

export default function Introduce() {
  return (
    <div className={styles.main}>
      <h2>Introduce</h2>
      <div className={styles.subTitle}>
        유저 데이터를 분석하여 서비스 경험을 혁신적으로 향상시키는 개발자
      </div>
      <div className={styles.content}>
        <span>
          대학교 재학기간 동안 대부분의 수업을 온라인으로 듣게 되면서, 취업에
          관한 선배들의 조언이나 지식을 얻지 못했습니다. 실질적인 정보를 찾기가
          어려워, 몇 명의 학우들과 얘기해본 결과, 저와 같은 상황에 처해 있다는
          것을 알게 되었고, 신입 개발자들이 채용 정보를 얻고 적합한 회사와
          매칭될 수 있는 플랫폼을 만들면 유용할 것 같다는 생각에 프로젝트를
          시작하게 되었습니다.
        </span>
        <span>
          해당 프로젝트에서 프론트엔드를 담당하여 개발을 하면서 시시각각
          변화하는 화면과 브라우저와 소통하는 재미를 느끼며 프론트엔드 직무에
          매력을 느꼈습니다. 단순 매력에 그치지 않고 프론트엔드 기술을 더 깊이
          이해하기 위해 HTML, CSS, 바닐라 JavaScript를 사용하여 간단한 랜딩
          페이지를 제작했으며, React 라이브러리를 사용해 프로필 페이지를
          개발하면서 필요한 기술 지식을 쌓았습니다.
        </span>
        <span>
          23년 하반기에는 프론트엔드 인턴으로 웹 페이지 개편과 React 기반 크롬
          익스텐션을 개발했습니다. 웹 페이지 개편 프로젝트에서는 구글 콘솔과
          구글 애널리틱스를 활용하여 사용자의 서비스 이용방식을 분석하고, 6가지
          핵심 기능을 정해 A/B 테스트를 진행했습니다. 이를 통해 트렌드 파악 및
          탐색 기능을 웹에 적용했습니다.
        </span>
        <span>
          그 결과 사용자의{' '}
          <strong className={styles.strong}>서비스 체류 시간</strong>이 56초에서
          131초로 약 <strong className={styles.strong}>2.34배 증가</strong>하고,{' '}
          <strong className={styles.strong}>이탈률</strong>은 78%에서 59%로 약{' '}
          <strong className={styles.strong}>19%p 감소</strong>
          하는 성과를 거두었습니다.
        </span>
        <span>
          이 과정에서 사용자에게 중요한 서비스의 핵심 기능을 강조하는 방법을
          주도적으로 제안하며, 사용자 의도 파악의 중요성을 깊이 깨닫게
          되었습니다. 앞으로도 사용자 의도를 정확히 파악하여 서비스 만족감을
          높이는 개발자가 되고자 합니다. 빠르게 변화하는 개발 트렌드를 꾸준히
          학습하고, <strong>사용자에게 최적의 경험을 제공</strong>하는
          프론트엔드 개발자가 되겠습니다.
        </span>
      </div>
    </div>
  );
}
