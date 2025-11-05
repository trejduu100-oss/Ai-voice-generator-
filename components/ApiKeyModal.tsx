import React, { useState } from 'react';
import { KeyIcon } from './icons';

interface ApiKeyModalProps {
  onApiKeySubmit: (apiKey: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-6 md:p-8 space-y-6 animate-fade-in">
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        `}</style>
        <div className="text-center">
            <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-indigo-500/20 mb-4">
                <KeyIcon className="w-6 h-6 text-indigo-400" />
            </div>
          <h2 className="text-2xl font-bold text-slate-100">Enter Your Gemini API Key</h2>
          <p className="text-slate-400 mt-2">
            Your key will be stored in your browser's local storage for convenience. It's not sent anywhere except to Google.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="api-key" className="sr-only">
              Gemini API Key
            </label>
            <input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste your API key here"
              className="w-full p-3 bg-slate-900/70 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={!apiKey.trim()}
            className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-200"
          >
            Continue
          </button>
        </form>
         <p className="text-center text-xs text-slate-500">
            Don't have a key? Get one from{' '}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-400 hover:underline"
            >
              Google AI Studio
            </a>.
          </p>
      </div>
    </div>
  );
};