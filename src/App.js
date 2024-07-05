import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Courses from './pages/Courses';
import Summer2024Courses from './pages/courses/Summer2024';
import Timeline from './pages/teams/Timeline';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/summer-2024" element={<Summer2024Courses />} />
        <Route path="/teams/timeline" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
