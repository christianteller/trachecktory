import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainForm from './MainForm';
import TopNav from './TopNav';

function Hello() {
  return (
    <div>
      <TopNav />
      <MainForm />
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
