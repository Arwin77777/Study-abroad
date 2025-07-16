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
import OurServices from './pages/OurServices';
import Admissions from './components/Admissions';
import VisaAssistance from './components/VisaAssistance';
import LoanHelp from './components/LoanHelp';
import StayHelp from './components/StayHelp';
import UniversityAccommodation from './components/UniversityAccommodation';
import PrivateAccommodation from './components/PrivateAccommodation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUsSection />} />
            <Route path="/study-in-usa" element={<StudyInUSA />} />
            <Route path="/study-abroad" element={<StudyInCountry />} />
            <Route path="/university/:universityId" element={<UniversityDetail />} />
            <Route path="/destinations" element={<DestinationsGrid />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-services/admissions" element={<Admissions />} />
            <Route path="/our-services/visa-assistance" element={<VisaAssistance />} />
            <Route path="/our-services/loan-help" element={<LoanHelp />} />
            <Route path="/our-services/stay-help" element={<StayHelp />} />
            <Route path="/our-services/university-accommodation" element={<UniversityAccommodation />} />
            <Route path="/our-services/private-accommodation" element={<PrivateAccommodation />} />
          </Routes>
        </main>
        <ContactUsButton />
        <ContactFooter />
      </div>
    </Router>
  )
}

export default App
