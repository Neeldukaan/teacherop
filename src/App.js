import React, { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import FeatureHighlight from './components/FeatureHighlight';
import PricingSection from './components/PricingSection';
import PhilosophySection from './components/PhilosophySection';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      { isAuthenticated ? (
        <UserDashboard />
      ) : (
        <>
          <HeroSection />
          <ContentSection />
          <FeatureHighlight />
          <PricingSection />
          <PhilosophySection />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
