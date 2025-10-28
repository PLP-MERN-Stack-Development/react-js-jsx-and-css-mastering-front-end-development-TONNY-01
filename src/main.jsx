import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

// Import Tailwind CSS
import './index.css';

const Root = () => (
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
