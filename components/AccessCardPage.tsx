import React, { useRef } from 'react';
import { BetaMember } from '../types';

// This tells TypeScript that the global 'htmlToImage' variable exists.
declare var htmlToImage: any;

interface AccessCardPageProps {
  member: BetaMember;
  onLeave: () => void;
}

const VerifiedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const GoogleWalletIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9.16667V6.38889C19.1667 4.96528 17.9306 3.75 16.4722 3.75H3.69444C2.25 3.75 1 4.95139 1 6.38889V9.16667H19.1667Z" fill="#EA4335"></path><path d="M19.1667 9.16667V10H1V9.16667C1 7.72917 2.23611 6.52778 3.69444 6.52778H16.4722C17.9306 6.52778 19.1667 7.72917 19.1667 9.16667Z" fill="#4285F4"></path><path d="M1 10V13.6111C1 15.0486 2.23611 16.25 3.69444 16.25H16.4722C17.9306 16.25 19.1667 15.0347 19.1667 13.6111V10H1Z" fill="#34A853"></path><path d="M1 13.6111C1 12.1736 2.23611 10.9722 3.69444 10.9722H16.4722C17.9306 10.9722 19.1667 12.1736 19.1667 13.6111C19.1667 15.0486 17.9167 16.25 16.4722 16.25H3.69444C2.23611 16.25 1 15.0486 1 13.6111Z" fill="#FBBC04"></path><path d="M12.9167 11.25C12.9167 11.9404 12.3571 12.5 11.6667 12.5C10.9763 12.5 10.4167 11.9404 10.4167 11.25C10.4167 10.5596 10.9763 10 11.6667 10C12.3571 10 12.9167 10.5596 12.9167 11.25Z" fill="#4285F4"></path></svg>
);

const AppleWalletIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.89 19.34C17.78 19.8 17.51 20.24 17.11 20.61C16.68 21.01 16.18 21.31 15.62 21.49C15.07 21.66 14.5 21.68 13.93 21.55C13.12 21.36 12.4 20.91 11.83 20.25C11.23 19.56 10.84 18.71 10.69 17.73H10.68C10.53 16.75 10.63 15.79 10.98 14.9C11.33 14 11.9 13.25 12.65 12.72C13.33 12.23 14.15 11.99 15.08 12C15.19 12 15.29 12 15.4 12.01C15.51 12.01 15.61 12.01 15.71 12.02C15.7 11.53 15.79 11.04 16.09 10.62C16.3 10.31 16.59 10.05 16.92 9.88C17.26 9.71 17.63 9.63 18 9.64C18.43 9.65 18.86 9.78 19.23 10.03L19.26 10.05C19.21 10.04 19.16 10.03 19.11 10.02C18.43 9.87 17.74 9.98 17.17 10.32C16.57 10.68 16.15 11.25 15.99 11.92L15.94 12.12C15.93 12.14 15.91 12.16 15.9 12.18L15.48 12.18C14.73 12.19 14.01 12.4 13.43 12.82C12.82 13.25 12.38 13.86 12.15 14.58C11.93 15.31 11.94 16.09 12.19 16.82C12.44 17.55 12.91 18.2 13.54 18.68C14.12 19.11 14.81 19.34 15.52 19.34C15.82 19.34 16.13 19.3 16.42 19.21C16.92 19.06 17.37 18.79 17.74 18.41C17.8 18.35 17.86 18.29 17.91 18.22L17.92 18.21C17.91 18.24 17.9 18.27 17.88 18.3C17.82 18.43 17.75 18.55 17.67 18.67C17.41 19.03 17.1 19.25 16.76 19.34C16.63 19.39 16.49 19.42 16.35 19.44C16.35 19.44 16.35 19.44 16.35 19.44C16.02 19.5 15.69 19.5 15.37 19.4C14.84 19.25 14.41 18.88 14.12 18.39C13.83 17.88 13.71 17.3 13.78 16.72C13.85 16.12 14.13 15.57 14.58 15.17C15.03 14.75 15.61 14.52 16.22 14.52C16.59 14.52 16.96 14.59 17.3 14.72C17.79 14.91 18.21 15.22 18.52 15.64C18.66 15.82 18.77 16.02 18.86 16.23L18.87 16.25H18.91C18.91 16.16 18.92 16.07 18.92 15.98C18.92 15.34 18.75 14.72 18.42 14.19C18.09 13.66 17.61 13.25 17.05 13.01C16.48 12.77 15.85 12.71 15.25 12.85C14.65 12.99 14.1 13.31 13.67 13.77C13.24 14.24 12.95 14.83 12.84 15.47C12.72 16.11 12.78 16.78 13.01 17.39C13.24 18 13.64 18.54 14.16 18.94C14.7 19.34 15.34 19.58 16.01 19.6C16.03 19.6 16.04 19.6 16.06 19.6C16.63 19.61 17.18 19.49 17.68 19.24L17.89 19.34Z" fill="white"></path><path d="M5.53 2.5C5.53 2.5 5.54 2.5 5.54 2.5C6.18 2.51 6.81 2.64 7.4 2.9C8.01 3.16 8.56 3.55 9.02 4.04C9.47 4.54 9.82 5.12 10.05 5.76C10.28 6.4 10.38 7.08 10.34 7.76C10.34 7.77 10.34 7.78 10.34 7.79C10.33 8.24 10.22 8.68 10.02 9.09C9.82 9.5 9.52 9.87 9.16 10.17C8.79 10.48 8.36 10.72 7.89 10.87C7.42 11.03 6.93 11.1 6.43 11.08C5.93 11.06 5.43 10.95 4.97 10.75C4.51 10.55 4.09 10.27 3.74 9.92C3.38 9.57 3.09 9.15 2.89 8.69C2.69 8.23 2.58 7.73 2.56 7.23C2.56 7.22 2.56 7.22 2.56 7.21C2.55 6.57 2.67 5.94 2.92 5.35C3.17 4.75 3.55 4.21 4.03 3.76C4.52 3.32 5.1 2.98 5.73 2.76C5.73 2.76 5.73 2.76 5.74 2.76C5.54 2.65 5.34 2.57 5.13 2.53C5.13 2.53 5.13 2.53 5.13 2.53L5.53 2.5Z" fill="white"></path></svg>
);

const AccessCardPage: React.FC<AccessCardPageProps> = ({ member, onLeave }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (cardRef.current === null || typeof htmlToImage === 'undefined') {
      console.error("Card element not found or html-to-image library not loaded.");
      return;
    }

    // Enhance the image quality by capturing at a higher resolution
    htmlToImage.toPng(cardRef.current, { cacheBust: true, pixelRatio: 3 })
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.download = `silo-access-card-${member.name.replace(/\s+/g, '-').toLowerCase()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err: any) => {
        console.error('Failed to generate card image.', err);
      });
  };

  const walletUrl = "https://app.addtowallet.co/card/68d060b9ae36ceb51a595104";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Your Access Card
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Welcome to the Silo AI Labs Beta Program. This is your key to early access and special events.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div ref={cardRef} className="group max-w-md w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-700/50 rounded-2xl shadow-2xl shadow-purple-900/20 p-6 sm:p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-700/30">
          <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                  <img 
                      src={member.profileImage} 
                      alt="Profile" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700 group-hover:border-purple-500 transition-colors duration-500"
                  />
                   <span className="absolute bottom-0 right-0 block h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 ring-4 ring-black"></span>
              </div>
              
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold text-white">{member.name}</h2>
                <VerifiedIcon className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-sm text-gray-400 mt-1">Beta Program Member</p>

              <div className="w-full my-8 border-t border-dashed border-zinc-700"></div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 w-full">
                  <p className="text-xs text-gray-400 tracking-widest uppercase">Member Code</p>
                  <p className="text-lg font-mono font-bold text-purple-300 tracking-wider mt-1">{member.memberCode}</p>
              </div>
          </div>
        </div>

        <div className="max-w-md w-full flex flex-col items-center gap-4">
            <button
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500"
            >
                <DownloadIcon className="w-5 h-5" />
                Download Card
            </button>
            <a
                href={walletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-black border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
            >
                <GoogleWalletIcon className="w-6 h-6" />
                Add to Google Wallet
            </a>
            <a
                href={walletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-black border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
            >
                <AppleWalletIcon className="w-6 h-6" />
                Add to Apple Wallet
            </a>
            <button 
                onClick={onLeave}
                className="text-sm text-gray-500 hover:text-red-400 transition-colors duration-300 mt-4"
             >
                Leave Beta Program
            </button>
        </div>
      </div>
    </div>
  );
};

export default AccessCardPage;