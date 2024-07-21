import styles from './App.module.css';
import Header from './components/Header';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfoiloDetail';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
