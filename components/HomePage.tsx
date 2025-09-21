import React from 'react';
import { Page } from '../types';
import { LABS } from '../constants';

interface HomePageProps {
  setActivePage: (page: Page) => void;
}

// Icons for the pillars section
const InnovationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);
const CreativityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 4.5 3 3m0 0-3 3m3-3h-6m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);
const CommunityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.282A9.094 9.094 0 0 0 6 18.72m0 0a9 9 0 0 1 12 0m-9-8.25h.008v.008H9v-.008Zm.75 0a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H9.75Zm5.625 0h.008v.008h-.008v-.008Zm.75 0a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008Z" />
    </svg>
);

const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// Icons for Developer Articles
const CodeBracketIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);
const CpuChipIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12H21m-3.75 0h1.5m-1.5 0H21m-3.75 0h1.5m0 0H21m-3.75 4.5H21m-3.75 0h1.5m-1.5 0H21m-3.75 0h1.5m0 0H21m-16.5-4.5H3m1.5 0H3m1.5 0H3m1.5 0H3m0 0H3m1.5 4.5H3m1.5 0H3m1.5 0H3m1.5 0H3m0 0H3m1.5 0H3m12-15v1.5m0 15v-1.5" />
    </svg>
);
const PaintBrushIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118v-.007a2.25 2.25 0 0 1 2.22-2.22h.002a2.25 2.25 0 0 1 2.22 2.22v.007a2.25 2.25 0 0 1-2.47-2.118a3 3 0 0 0 5.78-1.128Zm-2.83-3.792a4.5 4.5 0 0 0 2.83-4.498m-3.418 4.498a4.5 4.5 0 0 0 3.418-4.498m0 0a4.5 4.5 0 0 0-2.83 4.498m0 0a4.5 4.5 0 0 0 2.83 4.498M16.5 21a4.5 4.5 0 0 0-9 0h9Zm0 0c0-1.077-.285-2.09-.79-3m.79 3c0-1.078-.285-2.091-.79-3.001m-4.21 3.001a4.5 4.5 0 0 0-4.21-3.001" />
    </svg>
);
const ChatBubbleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.53-.388m-13.022-3.412a3.375 3.375 0 0 1 .163-3.313l3.295-4.392a3.375 3.375 0 0 1 4.267-1.433l.49.245a3.375 3.375 0 0 1 2.986 4.664l-2.75 3.667a3.375 3.375 0 0 1-4.267 1.433Z" />
    </svg>
);

const Section: React.FC<{ children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
    <div className={`py-16 sm:py-24 ${className}`}>{children}</div>
);

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const featuredLab = LABS.find(lab => lab.id === 1); // Silo Labs Build

  const developerArticles = [
    {
      icon: <CodeBracketIcon />,
      category: 'API Integration',
      title: 'Getting Started with the Silo Search API',
      description: 'A comprehensive guide to integrating our powerful search capabilities into your applications. Explore endpoints, authentication, and best practices.',
      link: '#', 
    },
    {
      icon: <CpuChipIcon />,
      category: 'Deep Learning',
      title: 'Optimizing Model Performance for Real-Time Applications',
      description: 'Learn the techniques we use at Silo Deep Labs to achieve low-latency and high-throughput for complex neural networks.',
      link: '#', 
    },
    {
      icon: <PaintBrushIcon />,
      category: 'Generative AI',
      title: 'Advanced Techniques in Generative Art with Silo Canvas',
      description: 'Move beyond basic prompts. This tutorial covers advanced methods for controlling style, composition, and coherence in AI-generated imagery.',
      link: '#', 
    },
    {
      icon: <ChatBubbleIcon />,
      category: 'UX & Conversational AI',
      title: 'The Philosophy Behind Silo Chat\'s Natural Language',
      description: 'An inside look at how we design conversational flows that are intuitive, engaging, and genuinely helpful for users.',
      link: '#',
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center pt-16">
        <div className="relative isolate">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div 
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }} 
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#800080] to-[#0000ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
            Building the Future of
            <span className="block bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
              Artificial Intelligence
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400">
            Welcome to Silo AI Labs. We are a collective dedicated to exploring the frontiers of AI, creating innovative tools, and inspiring the next generation of technology.
          </p>
          <div className="mt-10">
            <button
              onClick={() => setActivePage('Labs')}
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500"
            >
              Explore Our Labs
              <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Pillars Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
                    <InnovationIcon />
                    <h3 className="mt-4 text-xl font-bold text-white">Innovation</h3>
                    <p className="mt-2 text-gray-400">Pushing the boundaries of what's possible with cutting-edge research and development.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
                    <CreativityIcon />
                    <h3 className="mt-4 text-xl font-bold text-white">Creativity</h3>
                    <p className="mt-2 text-gray-400">Building intuitive tools that empower creators and unlock new forms of expression.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
                    <CommunityIcon />
                    <h3 className="mt-4 text-xl font-bold text-white">Community</h3>
                    <p className="mt-2 text-gray-400">Fostering a collaborative ecosystem for learning, sharing, and growing together.</p>
                </div>
            </div>
        </div>
      </Section>

      {/* Featured Lab Section */}
      {featuredLab && (
        <Section>
          <div className="max-w-5xl mx-auto p-8 border border-blue-500/30 bg-zinc-900/50 rounded-3xl relative overflow-hidden">
             <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.15)_0%,_rgba(29,78,216,0)_50%)] -z-10"></div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <p className="text-sm font-semibold text-blue-400">FEATURED LAB</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">{featuredLab.name}</h2>
                  <p className="mt-4 text-gray-400">{featuredLab.description}</p>
                   <a 
                      href={featuredLab.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group mt-6 inline-flex items-center justify-center gap-3 px-5 py-2.5 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Launch Lab
                      <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="h-64 rounded-xl bg-black border border-zinc-800 overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1678483789001-e2837374b7a1?q=80&w=2070&auto=format&fit=crop"
                        alt="Silo Labs Build Application Preview"
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
             </div>
          </div>
        </Section>
      )}

      {/* Developer Articles Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-4">Developer Resources</h2>
            <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Dive deep into our technology with these guides, tutorials, and articles from the Silo AI team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {developerArticles.map((article, index) => (
                    <a key={index} href={article.link} className="block p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30 group hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                            <div className="bg-zinc-800 p-3 rounded-lg mt-1">
                                {article.icon}
                            </div>
                            <div className='flex-1'>
                                <span className="text-sm font-semibold text-purple-400">{article.category}</span>
                                <h3 className="text-lg font-bold text-white mt-1">{article.title}</h3>
                            </div>
                        </div>
                        <p className="text-gray-400 my-4">{article.description}</p>
                        <span className="text-purple-400 flex items-center gap-2 font-semibold group-hover:text-purple-300 transition-colors">
                            Read Article
                            <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                ))}
            </div>
        </div>
      </Section>


      {/* Final CTA */}
      <Section>
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Join the Future of AI</h2>
              <p className="mt-4 text-lg text-gray-400">
                  Become a part of our journey. Join the beta program to get early access to our tools, participate in exclusive events, and help shape the future of Silo AI Labs.
              </p>
              <button
                  onClick={() => setActivePage('Beta Program')}
                  className="group mt-8 inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-black bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-lg hover:from-white hover:to-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-200"
              >
                  Become a Beta Member
              </button>
          </div>
      </Section>

    </div>
  );
};

export default HomePage;