import React from 'react';
import { Page, BetaMember } from '../types';

interface NavItemProps {
  label: Page | 'Beta Program' | 'Access Card';
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none ${
        isActive ? 'bg-white text-black shadow-md' : 'text-gray-300 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
};

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  betaMember: BetaMember | null;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, betaMember }) => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-lg z-50">
      <nav className="p-1.5 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
        <div className="flex items-center justify-center space-x-1">
          <NavItem label="Home" isActive={activePage === 'Home'} onClick={() => setActivePage('Home')} />
          <NavItem label="Labs" isActive={activePage === 'Labs'} onClick={() => setActivePage('Labs')} />
          <NavItem label="News" isActive={activePage === 'News'} onClick={() => setActivePage('News')} />
          <NavItem label="Sponsors" isActive={activePage === 'Sponsors'} onClick={() => setActivePage('Sponsors')} />
          {betaMember ? (
             <NavItem label="Access Card" isActive={activePage === 'Access Card'} onClick={() => setActivePage('Access Card')} />
          ) : (
            <NavItem label="Beta Program" isActive={activePage === 'Beta Program'} onClick={() => setActivePage('Beta Program')} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;