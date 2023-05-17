import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main"
import About from "./pages/About/About"
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Pages from './pages/Pages/Pages';
import Contact from './pages/Contact/Contact';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import AboutMe from './pages/About-me/AboutMe';
import Footer from './components/Footer/Footer';
function App() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('This will be called every 2 seconds');
  //   }, 2000);
  
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
