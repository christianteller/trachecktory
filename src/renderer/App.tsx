import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './TopNav';

function Hello() {
  return (
    <div>
      <TopNav />
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
