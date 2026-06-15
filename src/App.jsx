import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Careers from "./pages/Careers";
import Training from "./pages/Training";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/training" element={<Training />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/terms-of-use" element={<LegalPage type="terms" />} />
          <Route path="/accessibility" element={<LegalPage type="accessibility" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
