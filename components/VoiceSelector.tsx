import React from 'react';
import { VoiceOption } from '../types';
import { WaveformIcon } from './icons';

interface VoiceSelectorProps {
  voices: VoiceOption[];
  selectedVoice: string;
  onSelectVoice: (voiceId: string) => void;
  disabled: boolean;
  isPlaying: boolean;
  speed: number;
  onSpeedChange: (speed: number) => void;
  pitch: string;
  onPitchChange: (pitch: string) => void;
}

const PITCH_OPTIONS = [
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' },
];

export const VoiceSelector: React.FC<VoiceSelectorProps> = ({ 
  voices, 
  selectedVoice, 
  onSelectVoice, 
  disabled, 
  isPlaying,
  speed,
  onSpeedChange,
  pitch,
  onPitchChange,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-slate-400 mb-3">Choose a voice</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {voices.map((voice) => {
            const isSelected = selectedVoice === voice.id;
            const isCurrentlyPlaying = isPlaying && isSelected;

            return (
              <div key={voice.id}>
                <input
                  type="radio"
                  name="voice-option"
                  id={voice.id}
                  value={voice.id}
                  className="sr-only"
                  checked={isSelected}
                  onChange={() => onSelectVoice(voice.id)}
                  disabled={disabled}
                />
                <label
                  htmlFor={voice.id}
                  className={`
                    flex flex-col items-center justify-center p-3 text-center rounded-lg border-2
                    transition-all duration-300 ease-in-out
                    ${disabled
                      ? 'bg-slate-700 border-slate-600 opacity-50 cursor-not-allowed'
                      : 'cursor-pointer hover:bg-slate-600/50 transform hover:-translate-y-1'
                    }
                    ${isSelected
                      ? 'border-indigo-500 bg-slate-700 ring-2 ring-indigo-500'
                      : 'border-slate-600 bg-slate-700/50'
                    }
                    ${isCurrentlyPlaying ? '!border-teal-400 !ring-teal-400' : ''}
                  `}
                >
                  <div className="h-8 mb-1 flex items-center justify-center">
                    {isCurrentlyPlaying ? (
                      <WaveformIcon className="w-6 h-6 text-teal-400" />
                    ) : (
                      <span className="text-2xl">{voice.avatar}</span>
                    )}
                  </div>
                  <span className="text-xs font-semibold">{voice.name}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Speed Control */}
        <div>
          <label htmlFor="speed-control" className="text-sm font-medium text-slate-400 mb-3 block">
            Speed <span className="text-xs font-mono bg-slate-700 px-1.5 py-0.5 rounded">{speed.toFixed(1)}x</span>
          </label>
          <input
            id="speed-control"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
            disabled={disabled}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all
                       [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all"
          />
        </div>

        {/* Pitch Control */}
        <div>
          <h3 className="text-sm font-medium text-slate-400 mb-3">Pitch</h3>
          <div className="flex bg-slate-700/50 rounded-lg p-1">
            {PITCH_OPTIONS.map(option => (
              <div key={option.id} className="flex-1">
                <input
                  type="radio"
                  name="pitch-option"
                  id={`pitch-${option.id}`}
                  value={option.id}
                  className="sr-only"
                  checked={pitch === option.id}
                  onChange={() => onPitchChange(option.id)}
                  disabled={disabled}
                />
                <label
                  htmlFor={`pitch-${option.id}`}
                  className={`
                    w-full text-center text-sm py-1.5 rounded-md transition-colors duration-200
                    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                    ${pitch === option.id
                      ? 'bg-indigo-600 text-white font-semibold shadow'
                      : 'text-slate-300 hover:bg-slate-600/50'
                    }
                  `}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
