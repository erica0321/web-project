import styles from './App.module.css';
import Header from './components/Header';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
