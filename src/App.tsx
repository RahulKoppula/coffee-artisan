import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Generator from './pages/Generator';
import Learn from './pages/Learn';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-coffee-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

