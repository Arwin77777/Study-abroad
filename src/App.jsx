import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import HeroBanner from './components/HeroBanner'
import SectionNavBar from './components/SectionNavBar'
import KeyDetailsSection from './components/KeyDetailsSection'
import TopUniversitiesSection from './components/TopUniversitiesSection'
import FeesSection from './components/FeesSection'
import RequirementsSection from './components/RequirementsSection'
import CoursesSection from './components/CoursesSection'
import VisaTravelSection from './components/VisaTravelSection'
import FAQSection from './components/FAQSection'
import ContactUsButton from './components/ContactUsButton'

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <div className="pt-16"> {/* offset for fixed navbar */}
        <Breadcrumb />
        <HeroBanner />
        <SectionNavBar />
        <section id="key-details" className="scroll-mt-32 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Key Details</h2>
            <KeyDetailsSection />
          </div>
        </section>
        <section id="top-universities" className="scroll-mt-32 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Top Universities</h2>
            <TopUniversitiesSection />
          </div>
        </section>
        <section id="fees" className="scroll-mt-32 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Fees</h2>
            <FeesSection />
          </div>
        </section>
        <section id="requirements" className="scroll-mt-32 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Requirements</h2>
            <RequirementsSection />
          </div>
        </section>
        <section id="courses" className="scroll-mt-32 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Courses</h2>
            <CoursesSection />
          </div>
        </section>
        <section id="visa-travel" className="scroll-mt-32 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Visa & travel</h2>
            <VisaTravelSection />
          </div>
        </section>
        <section id="faq" className="scroll-mt-32 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">FAQ</h2>
            <FAQSection />
          </div>
        </section>
      </div>
      <ContactUsButton />
    </div>
  )
}

export default App
