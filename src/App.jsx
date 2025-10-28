import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Router>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;