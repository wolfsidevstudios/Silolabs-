import React, { useState, useEffect } from 'react';
import { BetaMember } from '../types';

interface JoinBetaPageProps {
  onJoin: (member: BetaMember) => void;
}

// --- ICONS ---
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);
const PhotoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// --- Step Components ---

const WelcomeStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Join the Silo AI Beta Program</h2>
        <p className="text-gray-400 mb-8">Get exclusive access to the future of AI. Here's what you'll get:</p>
        <ul className="space-y-4 text-left max-w-xs mx-auto mb-10">
            <li className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Early access to new labs and tools</span>
            </li>
            <li className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">Invitations to special community events</span>
            </li>
            <li className="flex items-center gap-3">
                <CheckIcon className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">A voice in shaping our future products</span>
            </li>
        </ul>
        <button onClick={onNext} className="w-full group inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg shadow-lg hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
            Get Started
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
    </div>
);

const NameStep: React.FC<{ name: string; setName: (name: string) => void; onNext: () => void; onBack: () => void; }> = ({ name, setName, onNext, onBack }) => (
    <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-4 text-center">First, what should we call you?</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your full name"
            autoFocus
        />
        <div className="flex gap-4 mt-6">
            <button onClick={onBack} className="w-full px-6 py-3 font-semibold text-gray-300 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors">Back</button>
            <button onClick={onNext} disabled={!name.trim()} className="w-full group inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg shadow-lg hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                Next
                <ArrowRightIcon className="w-5 h-5" />
            </button>
        </div>
    </div>
);

const ImageStep: React.FC<{ image: string | null; handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void; error: string; onNext: () => void; onBack: () => void; }> = ({ image, handleImageUpload, error, onNext, onBack }) => (
    <div>
        <label className="block text-lg font-medium text-gray-300 mb-4 text-center">Finally, upload a profile image.</label>
        <label htmlFor="profile-image" className="mt-2 flex justify-center items-center w-full h-48 px-6 pt-5 pb-6 border-2 border-zinc-700 border-dashed rounded-md cursor-pointer hover:border-orange-500/70 transition-colors">
            {image ? (
                <img src={image} alt="Profile preview" className="h-full max-h-40 w-auto object-contain rounded-md" />
            ) : (
                <div className="space-y-1 text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-500" />
                    <p className="text-sm text-gray-400"><span className="font-semibold text-orange-400">Click to upload</span></p>
                    <p className="text-xs text-gray-500">PNG or JPG (Max 2MB)</p>
                </div>
            )}
            <input id="profile-image" name="profile-image" type="file" className="sr-only" accept="image/png, image/jpeg" onChange={handleImageUpload} />
        </label>
        {error && <p className="text-sm text-red-400 text-center mt-2">{error}</p>}
        <div className="flex gap-4 mt-6">
            <button onClick={onBack} className="w-full px-6 py-3 font-semibold text-gray-300 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-colors">Back</button>
            <button onClick={onNext} disabled={!image} className="w-full group inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-lg shadow-lg hover:from-green-500 hover:to-teal-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                Generate My Card
            </button>
        </div>
    </div>
);

const GeneratingStep: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center h-64">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
        <h2 className="text-2xl font-bold text-white mt-6">Generating Your Access Card...</h2>
        <p className="text-gray-400 mt-2">Personalizing your experience.</p>
    </div>
);


const JoinBetaPage: React.FC<JoinBetaPageProps> = ({ onJoin }) => {
    const [step, setStep] = useState(1); // 1: Welcome, 2: Name, 3: Image, 4: Generating
    const [name, setName] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) { // 2MB limit
                setError('Image size must be less than 2MB.');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
                setError('');
            };
            reader.onerror = () => setError('Failed to read image file.');
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!name.trim() || !image) {
            setError('Please provide your name and a profile image.');
            return;
        }
        setError('');
        setStep(4);
    };

    useEffect(() => {
        if (step === 4) {
            const timer = setTimeout(() => {
                const memberCode = `SILO-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
                onJoin({
                    name,
                    profileImage: image!,
                    memberCode,
                });
            }, 2500); // Simulate generation time
            return () => clearTimeout(timer);
        }
    }, [step, name, image, onJoin]);

    const titles: { [key: number]: string } = {
        1: 'Join the Beta Program',
        2: 'Create Your Profile',
        3: 'Create Your Profile',
        4: 'Finalizing Your Access'
    };
    
    const subtitles: { [key: number]: string } = {
        1: 'Get early access to our latest experiments, exclusive events, and become a core part of our community.',
        2: 'Let\'s get your details for your official access card.',
        3: 'Your image will be displayed on your access card.',
        4: 'Please wait a moment while we set things up for you.'
    };

    const renderStep = () => {
        switch (step) {
            case 1: return <WelcomeStep onNext={() => setStep(2)} />;
            case 2: return <NameStep name={name} setName={setName} onNext={() => setStep(3)} onBack={() => setStep(1)} />;
            case 3: return <ImageStep image={image} handleImageUpload={handleImageUpload} error={error} onNext={handleSubmit} onBack={() => setStep(2)} />;
            case 4: return <GeneratingStep />;
            default: return <WelcomeStep onNext={() => setStep(2)} />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {titles[step]}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                    {subtitles[step]}
                </p>
            </div>

            <div className="max-w-lg mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:border-orange-500/30">
                {renderStep()}
            </div>
        </div>
    );
};

export default JoinBetaPage;
