import styles from '../style/OtherExperience.module.css';
import vit from '../img/vit.png';
import idea from '../img/idea.png';
import labview from '../img/labview.png';
import ai from '../img/ai.png';
import Experience from './Experience';

export default function OtherExperience() {
  const experiences = [
    {
      title: '한국외국어대학교 정보산업공학연구소 논문 제출',
      subTitle: 'Vision Transformer 경량화를 위한 연구',
      length: '2023.03 - 2023.08',
      role: '알고리즘 구현',
      siteTitle: '🗂️ 논문 바로가기',
      feature: [
        '한국외국어대학교 정보산업공학연구소 논문 제출',
        'Vision Transformer 경량화 기법 - 비구조적 변경 전후, 프루닝 전후, bit 치환 전후 정확도 비교 분석 ',
        'AWS S3, Cloudfront를 이용해 dev 웹 배포',
        'Router를 사용한 SPA 개발',
      ],
      image: vit,
      link: 'https://drive.google.com/file/d/18TmlVv0oAwsDkBk2MMiBEpZnD7bmcDNp/view',
    },
    {
      title: '모바일 앱 아이디어 공모전',
      subTitle:
        '기업 문화 혁신을 위한 ‘협력, 수평, 자율참여, 개인존중, 과정지향’을 촉진할 수 있는 아이디어 공모전',
      length: '2023.05 - 2023.07',
      role: '아이디어 도출 및 디자인',
      siteTitle: '🗂️ 자료 바로가기',
      feature: [
        'Figma를 통한 앱 UI 디자인',
        '디자인 한 UI 기반으로 앱 기능 구성',
        '기업 문화 혁신을 촉진하기 위한 아이디어로 펀딩 아이디어 도출',
      ],
      image: idea,
      link: 'https://drive.google.com/file/d/1pr0qHd7BHXjTahr80hgoFZoENbMm0qew/view?pli=1',
    },
    {
      title: '10th ICT-Advanced Engineering Society 논문 제출',
      subTitle:
        'Labview 프로그램을 이용한 The Signal Processing Algorithm for Object Detection 연구',
      length: '2022.12 - 2023.02',
      role: '프로그래밍 담당',
      siteTitle: '🗂️ 논문 바로가기',
      feature: [
        '2022-2학기 진행한 산학협력 프로젝트 기반 논문',
        '“The Signal Processing Algorithm for Object Detection” 논문 제출',
        'Labview 사용하여 object detection 설계',
      ],
      image: labview,
      link: 'https://drive.google.com/file/d/1rS51TZhyJitDkMXjc6EB15HEvpUUr3Y-/view',
    },
    {
      title: '인공지능 아이디어 페스티벌',
      subTitle: 'Al, 임베디드 보드 활용 가능한 로우코드 플랫폼',
      length: '2022.11',
      role: '프론트엔드 담당 및 아이디어 구체화',
      siteTitle: '🗂️ 자료 바로가기',
      feature: [
        '로우코드를 통해 AI와 임베디드 기술을 다룰 수 있는 플랫폼 아이디어',
        '웹에서 자신이 사용할 머신러닝 network를 선택하고, 사용할 보드를 선택하여 AI 실습을 할 수 있도록 하여 AI 및 보드를 로우코드를 통해 보다 쉽게 사용할 수 있도록 함',
      ],
      result: '장려상 수상',
      image: ai,
      link: 'https://drive.google.com/file/d/1Wo3LXCNiGEHRiCMwzwOF2SJG7Xa6DzbZ/view',
    },
  ];

  return (
    <div className={styles.main}>
      <h2>기타 Experiences</h2>
      {experiences.map((project, index) => {
        return <Experience key={index} data={project} />;
      })}
    </div>
  );
}
