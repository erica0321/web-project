import styles from '../style/Skills.module.css';

export default function Skills() {
  const skills = [
    {
      skill: 'Front-end',
      language: [
        {
          name: 'HTML',
          feature: ['웹 페이지 구조를 설계하고 구성할 수 있습니다.'],
        },
        {
          name: 'CSS',
          feature: [
            '다양한 레이아웃 기법을 사용하여 반응형 웹 디자인을 구현할 수 있습니다.',
            '모듈화된 스타일시트를 작성할 수 있습니다.',
          ],
        },
        {
          name: 'Javascript',
          feature: [
            '비동기 처리를 위해 Promise와 async/await을 사용할 수 있습니다.',
            '모듈화를 통해 function간 결합도를 낮출 수 있습니다.',
            '상황에 따라 적절한 이벤트 리스너를 사용할 수 있습니다.',
            '무한 스크롤 및 페이지네이션을 구현할 수 있습니다.',
          ],
        },
        {
          name: 'Typescript',
          feature: [
            '정적 타입을 사용하여 코드의 안정성을 향상시킬 수 있습니다.',
            '인터페이스와 제네릭으로 타입 검사를 할 수 있습니다.',
          ],
        },
        {
          name: 'React',
          feature: [
            'React Router를 사용하여 단일 페이지 애플리케이션에서 라우팅을 구현할 수 있습니다.',
            'React Hooks를 사용하여 함수형 컴포넌트 상태를 관리할 수 있습니다.',
            '복잡한 상태 변화롤 효과적으로 관리할 수 있습니다.',
          ],
        },
        {
          name: 'Next.js',
          feature: [
            '서버 사이드 렌더링을 통해 초기 로딩 속도를 개선할 수 있습니다.',
            '서버 컴포넌트와 클라이언트 컴포넌트를 구분할 수 있습니다.',
          ],
        },
      ],
    },
    {
      skill: 'Back-end',
      language: [
        {
          name: 'express',
          feature: [
            'CRUD 기능을 구현할 수 있습니다.',
            'Entity-Relationship Diagram을 통해 데이터베이스 구조를 효율적으로 설계할 수 있습니다.',
            'Express.js를 사용하여 웹 서버를 설정하고 REST API를 설계할 수 있습니다.',
            'Session 및 JWT를 사용하여 인증 및 권한을 관리할 수 있습니다.',
          ],
        },
        {
          name: 'Spring Boot',
          feature: [
            'CRUD 기능을 구현할 수 있습니다.',
            'JPA, QueryDSL, JPQL을 사용하여 복잡한 데이터 처리를 구현할 수 있습니다.',
            'Session 및 JWT를 사용하여 인증 및 권한을 관리할 수 있습니다.',
          ],
        },
      ],
    },
    {
      skill: '협업 도구',
      language: [
        {
          name: 'Git',
          feature: [
            '코드 버전 관리 및 협업을 할 수 있습니다.',
            '브랜치 전략을 사용할 수 있습니다.',
            'Github을 통해 코드를 리뷰 및 협업을 할 수 있습니다.',
          ],
        },
        {
          name: 'Slack',
          feature: ['팀 커뮤니케이션 및 실시간으로 협업할 수 있습니다.'],
        },
        {
          name: 'Figma',
          feature: ['UI/UX 디자인을 협업할 수 있습니다.'],
        },
      ],
    },
    {
      skill: '사용자 모니터링 도구',
      language: [
        {
          name: 'Google Analytics',
          feature: [
            'Firebase를 연동하여 사용자의 이벤트를 추적을 할 수 있습니다.',
            'Firebase에서 커스텀 이벤트를 정의하고 로깅할 수 있습니다.',
            '사용자 속성을 지정해서 속성 별 로그를 분석할 수 있습니다.',
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.main}>
      <h2>Skills</h2>
      {skills.map((skill, index) => {
        return <Skill key={index} data={skill} />;
      })}
    </div>
  );
}

function Skill({ data }) {
  return (
    <div className={styles.container}>
      <h3>{data.skill}</h3>
      {data.language.map((la, index) => {
        return (
          <div key={index} className={styles.list}>
            <div className={styles.left}>{la.name}</div>
            <div className={styles.right}>
              {la.feature.map((fe, index) => {
                return (
                  <div key={index} className={styles.text}>
                    - {fe}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
