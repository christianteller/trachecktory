import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import TopNav from './TopNav';

function Hello() {
  const apiConfig = [{ url: 'test', clientId: }];

  return (
    <div>
      <TopNav />
      <MainPage />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
