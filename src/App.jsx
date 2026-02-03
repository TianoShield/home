import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Deliverables from './pages/Deliverables';
import Events from './pages/Events';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* All Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/deliverables" element={<Layout><Deliverables /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-8">Page not found</p>
                  <a
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;