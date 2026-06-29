import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import BeforeAfter from "./components/BeforeAfter";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <Process />
    <BeforeAfter />
    <Gallery />
    <Testimonials />
    <FAQ />
    <Contact />
  </main>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsAndConditions />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
