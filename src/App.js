import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/home/index" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
