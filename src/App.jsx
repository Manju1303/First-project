import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Colleges from './pages/Colleges';
import Abroad from './pages/Abroad';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:category" element={<Courses />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/abroad" element={<Abroad />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
