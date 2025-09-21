import React from 'react';

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const SponsorsPage: React.FC = () => {
  const email = 'emartinezra2121@gmail.com';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
          Become a Sponsor
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Support the future of AI and help us continue our groundbreaking work.
        </p>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 text-center transform transition-all duration-300 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/20">
        <h3 className="text-2xl font-bold text-gray-100 mb-4">Partner with Silo AI Labs</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
            We are looking for partners who share our passion for innovation. Sponsoring Silo AI Labs provides a unique opportunity to be at the forefront of AI research and development.
        </p>
        <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400">For sponsorship inquiries, please contact us at:</p>
            <a 
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teal-500"
            >
                <EmailIcon className="w-5 h-5" />
                {email}
            </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
