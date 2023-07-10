import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/account/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
