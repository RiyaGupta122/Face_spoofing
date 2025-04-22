import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArchitecturePage from './pages/ArchitecturePage';
import DatasetPage from './pages/DatasetPage';
import ResultsPage from './pages/ResultsPage';
import TrainingPage from './pages/TrainingPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/dataset" element={<DatasetPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;