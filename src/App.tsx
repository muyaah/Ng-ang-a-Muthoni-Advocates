import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/src/components/Layout';
import { ScrollToTop } from '@/src/components/ScrollToTop';
import Home from '@/src/pages/Home';
import About from '@/src/pages/About';
import Services from '@/src/pages/Services';
import Booking from '@/src/pages/Booking';
import Admin from '@/src/pages/Admin';
import PeoplePage from '@/src/pages/PeoplePage';
import BlogPage from '@/src/pages/BlogPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/people" element={<Layout><PeoplePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/booking" element={<Layout><Booking /></Layout>} />
        <Route path="/admin" element={<Admin />} />
        {/* Fallback */}
        <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
  );
}
