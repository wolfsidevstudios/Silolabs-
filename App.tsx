import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LabCard from './components/LabCard';
import NewsPage from './components/NewsPage';
import SponsorsPage from './components/SponsorsPage';
import HomePage from './components/HomePage';
import JoinBetaPage from './components/JoinBetaPage';
import AccessCardPage from './components/AccessCardPage';
import { LABS } from './constants';
import { Lab, Page, BetaMember } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [betaMember, setBetaMember] = useState<BetaMember | null>(null);

  useEffect(() => {
    try {
      const storedMember = localStorage.getItem('siloBetaMember');
      if (storedMember) {
        setBetaMember(JSON.parse(storedMember));
      }
    } catch (error) {
      console.error("Failed to parse beta member from localStorage", error);
      localStorage.removeItem('siloBetaMember');
    }
  }, []);

  const handleJoinBeta = (member: BetaMember) => {
    localStorage.setItem('siloBetaMember', JSON.stringify(member));
    setBetaMember(member);
    setActivePage('Access Card');
  };

  const handleLeaveBeta = () => {
    localStorage.removeItem('siloBetaMember');
    setBetaMember(null);
    setActivePage('Home');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage setActivePage={setActivePage} />;
      case 'News':
        return <NewsPage />;
      case 'Sponsors':
        return <SponsorsPage />;
      case 'Beta Program':
        return <JoinBetaPage onJoin={handleJoinBeta} />;
      case 'Access Card':
        if (betaMember) {
          return <AccessCardPage member={betaMember} onLeave={handleLeaveBeta} />;
        }
        // Fallback if they get to this page without being a member
        setActivePage('Beta Program');
        return <JoinBetaPage onJoin={handleJoinBeta} />;
      case 'Labs':
      default:
        return (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Silo AI Labs
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                Exploring the frontiers of artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LABS.map((lab: Lab) => (
                <LabCard key={lab.id} lab={lab} />
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <Header activePage={activePage} setActivePage={setActivePage} betaMember={betaMember} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;