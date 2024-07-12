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
import Achievements from './pages/teams/Achievements';
import Admin from './pages/admin/Admin';
import Createcourses from './pages/admin/CreateCourse';
import OnlineCourses from './pages/courses/Online';
import Intro from './pages/courses/full-vrc-guide/Intro';
import Fvg1 from './pages/courses/full-vrc-guide/Fvg1.js';
import Fvg2 from './pages/courses/full-vrc-guide/Fvg2.js';
import ScrollToTop from './components/ScrollToTop';
import Fvg3 from './pages/courses/full-vrc-guide/Fvg3.js';
import Fvg4 from './pages/courses/full-vrc-guide/Fvg4.js';
import Fvg5 from './pages/courses/full-vrc-guide/Fvg5.js';
import Fvg6 from './pages/courses/full-vrc-guide/Fvg6.js';
import Fvg7 from './pages/courses/full-vrc-guide/Fvg7.js';
import Fvg8 from './pages/courses/full-vrc-guide/Fvg8.js';
import Fvg9 from './pages/courses/full-vrc-guide/Fvg9.js';

function App() {
  return (
    <div className="">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/summer-2024" element={<Summer2024Courses />} />
        <Route path="/courses/online" element={<OnlineCourses />} />
        <Route path="/courses/online/full-vrc-guide" element={<Intro />} />
        <Route path='/courses/online/full-vrc-guide/1' element={<Fvg1 />} />
        <Route path='/courses/online/full-vrc-guide/2' element={<Fvg2 />} />
        <Route path='/courses/online/full-vrc-guide/3' element={<Fvg3 />} />
        <Route path='/courses/online/full-vrc-guide/4' element={<Fvg4 />} />
        <Route path='/courses/online/full-vrc-guide/5' element={<Fvg5 />} />
        <Route path='/courses/online/full-vrc-guide/6' element={<Fvg6 />} />
        <Route path='/courses/online/full-vrc-guide/7' element={<Fvg7 />} />
        <Route path='/courses/online/full-vrc-guide/8' element={<Fvg8 />} />
        <Route path='/courses/online/full-vrc-guide/9' element={<Fvg9 />} />
        <Route path="/teams/timeline" element={<Timeline />} />
        <Route path="/teams/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Shop />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/createcourse' element={<Createcourses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
