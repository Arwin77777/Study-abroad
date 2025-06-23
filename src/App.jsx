import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import StudyInUSA from './pages/StudyInUSA'
import Home from './pages/Home'
import DestinationsGrid from './components/DestinationsGrid';
import StudyInCountry from './pages/StudyInCountry';
import UniversityDetail from './pages/UniversityDetail';
import AboutUsSection from './components/AboutUsSection';
import ContactFooter from './components/ContactFooter';
import ContactUsButton from './components/ContactUsButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUsSection />} />
            <Route path="/study-in-usa" element={<StudyInUSA />} />
            <Route path="/study-abroad" element={<StudyInCountry />} />
            <Route path="/university/:universityId" element={<UniversityDetail />} />
            <Route path="/destinations" element={<DestinationsGrid />} />
          </Routes>
        </main>
        <ContactUsButton />
        <ContactFooter />
      </div>
    </Router>
  )
}

export default App
