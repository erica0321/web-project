import CommitMate from './CommitMate';
import { useLocation } from 'react-router-dom';
import WebABTest from './WebABTest';
import WebRevamp from './WebRevamp';
import ChromeExtension from './ChromeExtension';
import { useEffect } from 'react';

export default function PortfolioDetail() {
  const location = useLocation();
  const path = location.pathname.split('/');
  const number = path[path.length - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [number]);

  switch (number) {
    case '1':
      return <CommitMate />;
    case '2':
      return <WebABTest />;
    case '3':
      return <WebRevamp />;
    case '4':
      return <ChromeExtension />;
    default:
      return <div>존재하지 않은 페이지입니다.</div>;
  }
}
