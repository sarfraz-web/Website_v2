import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Documentation } from './pages/Documentation';
import { Blog } from './pages/Blog';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AnnouncementPage } from './pages/Announcement';
import { JobPage } from './pages/Jobs';
// import { TrustedBy } from './components/TrustedBy'; 


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/trusted" element={<TrustedBy />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/jobs" element={<JobPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;